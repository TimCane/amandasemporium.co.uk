/**
 * Reusable admin form for create/edit of any collection entry.
 * Handles field rendering, image uploads, markdown preview, and submission.
 * Supports AI content generation and geocoding search.
 */
import { useState, useRef, useEffect } from 'preact/hooks';
import AIGenerateButton from './AIGenerateButton';
import GeocodingSearch from './GeocodingSearch';

export interface FieldDef {
  key: string;
  label: string;
  type: 'text' | 'textarea' | 'date' | 'number' | 'select' | 'checkbox' | 'file' | 'multifile' | 'tags' | 'url' | 'markdown' | 'location-ref' | 'event-ref';
  required?: boolean;
  hint?: string;
  options?: { value: string; label: string }[];
  nestedIn?: string;  // e.g., 'rescued' for rescued.location
  half?: boolean;     // display in half-width row
  contentField?: boolean; // if true, rendered in the content section at bottom
}

interface Props {
  collection: string;
  fields: FieldDef[];
  initialData?: Record<string, any>;
  initialBody?: string;
  initialSlug?: string;
  isEdit?: boolean;
  enableAI?: boolean;       // show AI generation button
  enableGeocoding?: boolean; // show geocoding search for location fields
}

export default function AdminForm({ collection, fields, initialData, initialBody = '', initialSlug = '', isEdit = false, enableAI = false, enableGeocoding = false }: Props) {
  const imagePreviewUrl = (relativePath: string) => {
    const filename = relativePath.replace(/^\.\//, '');
    return `/api/admin/image?collection=${encodeURIComponent(collection)}&slug=${encodeURIComponent(initialSlug)}&file=${encodeURIComponent(filename)}`;
  };

  const [formData, setFormData] = useState<Record<string, any>>(initialData || {});
  const [body, setBody] = useState(initialBody);
  const [bodyPreview, setBodyPreview] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);
  const [flash, setFlash] = useState<{ type: string; message: string } | null>(null);
  const [contentMode, setContentMode] = useState<'ai' | 'manual'>('manual');
  const [tags, setTags] = useState<string[]>((initialData?.tags || []).filter((t: string) => t));
  const [tagInput, setTagInput] = useState('');
  const [tagsLoading, setTagsLoading] = useState(false);
  const [tagsError, setTagsError] = useState('');
  const fileRefs = useRef<Record<string, File | File[] | null>>({});

  // Location reference dropdown state
  const [locations, setLocations] = useState<{ slug: string; name: string }[]>([]);
  const [showAddLocation, setShowAddLocation] = useState<{ fieldKey: string; nestedIn?: string } | null>(null);
  const [newLocName, setNewLocName] = useState('');
  const [newLocLat, setNewLocLat] = useState('');
  const [newLocLng, setNewLocLng] = useState('');
  const [addLocSaving, setAddLocSaving] = useState(false);
  const [addLocError, setAddLocError] = useState('');

  // Event reference dropdown state
  const [events, setEvents] = useState<{ slug: string; name: string; date: string }[]>([]);

  const hasLocationFields = fields.some((f) => f.type === 'location-ref');
  const hasEventFields = fields.some((f) => f.type === 'event-ref');

  useEffect(() => {
    if (hasLocationFields) {
      fetch('/api/admin/locations')
        .then((r) => r.json())
        .then((data: any[]) => {
          setLocations(
            data
              .map((e) => ({ slug: e.slug, name: e.frontmatter?.name || e.slug }))
              .sort((a, b) => a.name.localeCompare(b.name))
          );
        })
        .catch(() => {});
    }
    if (hasEventFields) {
      fetch('/api/admin/events')
        .then((r) => r.json())
        .then((data: any[]) => {
          setEvents(
            data
              .map((e) => ({
                slug: e.slug,
                name: e.frontmatter?.name || e.slug,
                date: e.frontmatter?.date ? String(e.frontmatter.date).slice(0, 10) : '',
              }))
              .sort((a, b) => b.date.localeCompare(a.date) || a.name.localeCompare(b.name))
          );
        })
        .catch(() => {});
    }
  }, [hasLocationFields, hasEventFields]);

  const handleAddLocation = async () => {
    if (!showAddLocation || !newLocName) return;
    setAddLocSaving(true);
    setAddLocError('');
    const slug = slugify(newLocName);
    try {
      const res = await fetch('/api/admin/locations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          frontmatter: {
            name: newLocName,
            latitude: parseFloat(newLocLat) || 0,
            longitude: parseFloat(newLocLng) || 0,
          },
          body: '',
          slug,
        }),
      });
      const result = await res.json();
      if (result.success) {
        setLocations((prev) => [...prev, { slug: result.slug, name: newLocName }].sort((a, b) => a.name.localeCompare(b.name)));
        // Set the field value to the new location
        const field = showAddLocation;
        if (field.nestedIn) {
          setFormData((prev) => ({
            ...prev,
            [field.nestedIn!]: { ...(prev[field.nestedIn!] || {}), [field.fieldKey]: result.slug },
          }));
        } else {
          setFormData((prev) => ({ ...prev, [field.fieldKey]: result.slug }));
        }
        setShowAddLocation(null);
        setNewLocName('');
        setNewLocLat('');
        setNewLocLng('');
      } else {
        setAddLocError(result.error || 'Failed to create location');
      }
    } catch (e: any) {
      setAddLocError(e.message);
    }
    setAddLocSaving(false);
  };

  const getFieldValue = (field: FieldDef): any => {
    if (field.nestedIn) {
      return formData[field.nestedIn]?.[field.key] ?? '';
    }
    return formData[field.key] ?? '';
  };

  const setFieldValue = (field: FieldDef, value: any) => {
    if (field.nestedIn) {
      setFormData((prev) => ({
        ...prev,
        [field.nestedIn!]: {
          ...(prev[field.nestedIn!] || {}),
          [field.key]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [field.key]: value }));
    }
  };

  const handleAddTag = () => {
    const newTags = tagInput.split(',').map((t) => t.trim()).filter((t) => t && !tags.includes(t));
    if (newTags.length) {
      setTags([...tags, ...newTags]);
      setTagInput('');
    }
  };

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleGenerateTags = async () => {
    // Get the image file — either from the file input or the existing saved image
    const imageFile = fileRefs.current['picture'] as File | null;
    if (!imageFile && !formData.picture) {
      setTagsError('Upload a photo first');
      return;
    }

    setTagsLoading(true);
    setTagsError('');

    try {
      let file = imageFile;

      // If no new file selected, fetch the existing image from the server
      if (!file && formData.picture && initialSlug) {
        const filename = (formData.picture as string).replace(/^\.\//, '');
        const imgRes = await fetch(`/api/admin/image?collection=${encodeURIComponent(collection)}&slug=${encodeURIComponent(initialSlug)}&file=${encodeURIComponent(filename)}`);
        if (!imgRes.ok) {
          setTagsError('Could not load existing image');
          setTagsLoading(false);
          return;
        }
        const blob = await imgRes.blob();
        file = new File([blob], filename, { type: blob.type });
      }

      if (!file) {
        setTagsError('No image available');
        setTagsLoading(false);
        return;
      }

      const fd = new FormData();
      fd.append('image', file);

      const res = await fetch('/api/admin/generate-tags', { method: 'POST', body: fd });
      const data = await res.json();

      if (!res.ok || !data.success) {
        setTagsError(data.error || 'Tag generation failed');
        return;
      }

      setTags(data.tags);
      setFlash({ type: 'success', message: `Generated ${data.tags.length} tags from photo` });
    } catch (e: any) {
      setTagsError(e.message || 'Unexpected error');
    } finally {
      setTagsLoading(false);
    }
  };

  const handleFileChange = (fieldKey: string, files: FileList | null, multi: boolean) => {
    if (multi) {
      fileRefs.current[fieldKey] = files ? Array.from(files) : null;
    } else {
      fileRefs.current[fieldKey] = files?.[0] ?? null;
    }
  };

  const uploadImage = async (slug: string, file: File, suffix?: string): Promise<string> => {
    const fd = new FormData();
    fd.append('slug', slug);
    fd.append('image', file);
    if (suffix) fd.append('suffix', suffix);

    const res = await fetch(`/api/admin/${collection}/upload`, { method: 'POST', body: fd });
    const data = await res.json();
    return data.path;
  };

  const [saveDropdownOpen, setSaveDropdownOpen] = useState(false);
  const saveDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (saveDropdownRef.current && !saveDropdownRef.current.contains(e.target as Node)) {
        setSaveDropdownOpen(false);
      }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  const doSave = async (andClose: boolean) => {
    setSaving(true);
    setSaveDropdownOpen(false);
    setErrors({});
    setFlash(null);

    try {
      // Validate required fields (covers the dropdown save path,
      // which bypasses the form's native HTML5 validation)
      const missing: Record<string, string> = {};
      for (const field of fields) {
        if (!field.required) continue;
        if (field.type === 'file' || field.type === 'multifile') continue; // uploads checked separately
        const val = getFieldValue(field);
        const isEmpty = val === undefined || val === null || val === '' || (Array.isArray(val) && val.length === 0);
        if (isEmpty) {
          const fullKey = field.nestedIn ? `${field.nestedIn}.${field.key}` : field.key;
          missing[fullKey] = `${field.label} is required`;
        }
      }
      if (Object.keys(missing).length > 0) {
        setErrors(missing);
        setFlash({ type: 'error', message: 'Please fill in all required fields.' });
        setSaving(false);
        return;
      }

      // Build frontmatter
      const fm: Record<string, any> = { ...formData };

      // Handle tags
      if (fields.some((f) => f.key === 'tags')) {
        fm.tags = tags;
      }

      // Derive slug
      const nameVal = fm.name || fm.caption || '';
      const slug = initialSlug || slugify(nameVal);

      if (!slug) {
        setErrors({ name: 'Name is required to generate slug' });
        setSaving(false);
        return;
      }

      // Upload images first
      for (const field of fields) {
        if (field.type === 'file' && fileRefs.current[field.key]) {
          const file = fileRefs.current[field.key] as File;
          const path = await uploadImage(slug, file);
          if (field.nestedIn) {
            fm[field.nestedIn] = { ...(fm[field.nestedIn] || {}), [field.key]: path };
          } else {
            fm[field.key] = path;
          }
        }

        if (field.type === 'multifile' && fileRefs.current[field.key]) {
          const files = fileRefs.current[field.key] as File[];
          const paths: string[] = fm[field.key] || [];
          for (let i = 0; i < files.length; i++) {
            const p = await uploadImage(slug, files[i], String(i + 1));
            paths.push(p);
          }
          fm[field.key] = paths;
        }
      }

      // Set uploadedOn for new bears
      if (collection === 'bears' && !isEdit && !fm.uploadedOn) {
        fm.uploadedOn = new Date().toISOString().split('T')[0];
      }

      const url = isEdit
        ? `/api/admin/${collection}/${initialSlug}`
        : `/api/admin/${collection}`;

      const res = await fetch(url, {
        method: isEdit ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ frontmatter: fm, body, slug }),
      });

      const result = await res.json();

      if (result.success) {
        if (andClose) {
          window.location.href = `/admin/${collection}`;
        } else if (!isEdit) {
          window.location.href = `/admin/${collection}/${result.slug}/edit`;
        } else {
          setFlash({ type: 'success', message: 'Saved successfully!' });
        }
      } else {
        setFlash({ type: 'error', message: result.error || 'Save failed' });
      }
    } catch (e: any) {
      setFlash({ type: 'error', message: e.message || 'Unexpected error' });
    }

    setSaving(false);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    doSave(true);
  };

  const renderField = (field: FieldDef) => {
    const fullKey = field.nestedIn ? `${field.nestedIn}.${field.key}` : field.key;
    const value = getFieldValue(field);
    const error = errors[fullKey];

    switch (field.type) {
      case 'text':
      case 'url':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            <input
              type={field.type === 'url' ? 'url' : 'text'}
              class="admin-form__input"
              value={value}
              required={field.required}
              onInput={(e) => setFieldValue(field, (e.target as HTMLInputElement).value)}
            />
            {error && <div class="admin-form__error">{error}</div>}
          </div>
        );

      case 'number':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            <input
              type="number"
              step="any"
              class="admin-form__input"
              value={value}
              required={field.required}
              onInput={(e) => setFieldValue(field, parseFloat((e.target as HTMLInputElement).value))}
            />
            {error && <div class="admin-form__error">{error}</div>}
          </div>
        );

      case 'date':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            <input
              type="date"
              class="admin-form__input"
              value={typeof value === 'string' ? value.slice(0, 10) : value}
              required={field.required}
              onInput={(e) => setFieldValue(field, (e.target as HTMLInputElement).value)}
            />
            {error && <div class="admin-form__error">{error}</div>}
          </div>
        );

      case 'select':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            <select
              class="admin-form__select"
              value={value}
              required={field.required}
              onChange={(e) => setFieldValue(field, (e.target as HTMLSelectElement).value)}
            >
              <option value="">-- Select --</option>
              {field.options?.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
            {error && <div class="admin-form__error">{error}</div>}
          </div>
        );

      case 'checkbox':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__checkbox">
              <input
                type="checkbox"
                checked={!!value}
                onChange={(e) => setFieldValue(field, (e.target as HTMLInputElement).checked)}
              />
              {field.label}
            </label>
          </div>
        );

      case 'event-ref':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            <select
              class="admin-form__select"
              value={value}
              required={field.required}
              onChange={(e) => setFieldValue(field, (e.target as HTMLSelectElement).value)}
            >
              <option value="">-- Select event --</option>
              {events.map((ev) => (
                <option key={ev.slug} value={ev.slug}>
                  {ev.date ? `${ev.date} — ${ev.name}` : ev.name}
                </option>
              ))}
            </select>
            {error && <div class="admin-form__error">{error}</div>}
          </div>
        );

      case 'file':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            {value && typeof value === 'string' && (
              <div style="margin-bottom:0.5rem;">
                <img
                  src={imagePreviewUrl(value)}
                  alt="Current"
                  style="max-width:200px;max-height:200px;border-radius:6px;border:1px solid #e5e7eb;object-fit:cover;"
                />
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              onChange={(e) => handleFileChange(field.key, (e.target as HTMLInputElement).files, false)}
            />
          </div>
        );

      case 'multifile':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            {Array.isArray(value) && value.length > 0 && (
              <div style="display:flex;gap:0.5rem;flex-wrap:wrap;margin-bottom:0.5rem;">
                {value.map((img: string, i: number) => (
                  <img
                    key={i}
                    src={imagePreviewUrl(img)}
                    alt={`Photo ${i + 1}`}
                    style="width:100px;height:100px;border-radius:6px;border:1px solid #e5e7eb;object-fit:cover;"
                  />
                ))}
              </div>
            )}
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={(e) => handleFileChange(field.key, (e.target as HTMLInputElement).files, true)}
            />
          </div>
        );

      case 'tags':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            <div class="admin-tags" style="margin-bottom:0.4rem;">
              {tags.map((tag) => (
                <span class="admin-tag" key={tag}>
                  {tag}
                  <button type="button" class="admin-tag__remove" onClick={() => handleRemoveTag(tag)}>&times;</button>
                </span>
              ))}
            </div>
            <div style="display:flex;gap:0.5rem;">
              <input
                type="text"
                class="admin-form__input"
                placeholder="Add tags (comma separated)"
                value={tagInput}
                onInput={(e) => setTagInput((e.target as HTMLInputElement).value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') { e.preventDefault(); handleAddTag(); }
                }}
              />
              <button type="button" class="admin-btn admin-btn--ghost" onClick={handleAddTag}>Add</button>
            </div>
            {collection === 'bears' && (
              <div style="margin-top:0.5rem;">
                <button
                  type="button"
                  class="admin-btn admin-btn--ghost"
                  onClick={handleGenerateTags}
                  disabled={tagsLoading}
                  style={tagsLoading ? { opacity: 0.7, cursor: 'wait' } : {}}
                >
                  {tagsLoading ? 'Generating tags...' : 'Generate tags from photo'}
                </button>
                {tagsLoading && (
                  <span style={{ fontSize: '0.8rem', color: '#666', marginLeft: '0.5rem' }}>
                    This may take a few seconds...
                  </span>
                )}
                {tagsError && (
                  <div class="admin-form__error" style="margin-top:0.25rem;">{tagsError}</div>
                )}
              </div>
            )}
          </div>
        );

      case 'location-ref':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}{field.required && ' *'}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            <div style="display:flex;gap:0.5rem;align-items:start;">
              <select
                class="admin-form__select"
                style="flex:1;"
                value={value}
                required={field.required}
                onChange={(e) => setFieldValue(field, (e.target as HTMLSelectElement).value)}
              >
                <option value="">-- Select location --</option>
                {locations.map((loc) => (
                  <option key={loc.slug} value={loc.slug}>{loc.name}</option>
                ))}
              </select>
              <button
                type="button"
                class="admin-btn admin-btn--ghost"
                style="white-space:nowrap;"
                onClick={() => setShowAddLocation({ fieldKey: field.key, nestedIn: field.nestedIn })}
              >
                + New
              </button>
            </div>
            {error && <div class="admin-form__error">{error}</div>}
          </div>
        );

      case 'textarea':
      case 'markdown':
        return (
          <div class="admin-form__group" key={fullKey}>
            <label class="admin-form__label">{field.label}</label>
            {field.hint && <div class="admin-form__hint">{field.hint}</div>}
            <textarea
              class="admin-form__textarea"
              value={getFieldValue(field)}
              onInput={(e) => setFieldValue(field, (e.target as HTMLTextAreaElement).value)}
            />
          </div>
        );

      default:
        return null;
    }
  };

  // Group fields into rows for half-width display
  const renderFieldGroup = (fieldList: FieldDef[]) => {
    const result: preact.ComponentChildren[] = [];
    let i = 0;
    while (i < fieldList.length) {
      const field = fieldList[i];
      if (field.half && i + 1 < fieldList.length && fieldList[i + 1].half) {
        result.push(
          <div class="admin-form__row" key={`row-${i}`}>
            {renderField(field)}
            {renderField(fieldList[i + 1])}
          </div>
        );
        i += 2;
      } else {
        result.push(renderField(field));
        i++;
      }
    }
    return result;
  };

  const structuredFields = fields.filter((f) => !f.contentField);
  const contentFields = fields.filter((f) => f.contentField);
  const hasContentSection = contentFields.length > 0 || enableAI;

  const handleAIGenerated = (tagline: string, narrative: string) => {
    setFormData((prev) => ({
      ...prev,
      tagline,
    }));
    setBody(narrative);
    setFlash({ type: 'success', message: 'AI content generated! Review and edit as needed.' });
  };

  const handleGeoSelect = (result: { name: string; latitude: number; longitude: number; country: string; county: string; postcode: string }) => {
    setFormData((prev) => ({
      ...prev,
      name: prev.name || result.name,
      latitude: result.latitude,
      longitude: result.longitude,
      country: result.country,
      county: result.county,
      postcode: result.postcode,
    }));
  };

  return (
    <div>
      {flash && (
        <div class={`admin-flash admin-flash--${flash.type}`}>
          {flash.message}
          <button onClick={() => setFlash(null)} style="float:right;background:none;border:none;cursor:pointer;font-size:1.1rem;">&times;</button>
        </div>
      )}

      {enableGeocoding && (
        <GeocodingSearch onSelect={handleGeoSelect} />
      )}

      <form onSubmit={handleSubmit} class="admin-card">
        {renderFieldGroup(structuredFields)}

        {/* Content section — tagline, fun fact, body */}
        {hasContentSection && (
          <div style="margin-top:1.5rem;border-top:2px solid var(--admin-border, #e5e7eb);padding-top:1.5rem;">
            <h3 style="margin:0 0 0.75rem;font-size:1.1rem;font-weight:600;">Content</h3>

            {enableAI && (
              <div style="display:flex;gap:0.5rem;margin-bottom:1rem;">
                <button
                  type="button"
                  class={`admin-btn ${contentMode === 'ai' ? 'admin-btn--primary' : 'admin-btn--ghost'}`}
                  onClick={() => setContentMode('ai')}
                >
                  Generate with AI
                </button>
                <button
                  type="button"
                  class={`admin-btn ${contentMode === 'manual' ? 'admin-btn--primary' : 'admin-btn--ghost'}`}
                  onClick={() => setContentMode('manual')}
                >
                  Write manually
                </button>
              </div>
            )}

            {enableAI && contentMode === 'ai' && (
              <AIGenerateButton
                collection={collection}
                getFormData={() => ({ ...formData, tags })}
                getExistingContent={() => ({
                  tagline: formData.tagline || '',
                  body,
                })}
                hasExistingContent={!!(formData.tagline || body.trim())}
                onGenerated={handleAIGenerated}
              />
            )}

            {renderFieldGroup(contentFields)}

            {/* Body / markdown field */}
            <div class="admin-form__group">
              <div style="display:flex;align-items:center;justify-content:space-between;">
                <label class="admin-form__label">Body (Markdown)</label>
                <button
                  type="button"
                  class="admin-btn admin-btn--ghost admin-btn--small"
                  onClick={() => setBodyPreview(!bodyPreview)}
                >
                  {bodyPreview ? 'Edit' : 'Preview'}
                </button>
              </div>
              {bodyPreview ? (
                <div class="admin-preview" dangerouslySetInnerHTML={{ __html: simpleMarkdown(body) }} />
              ) : (
                <textarea
                  class="admin-form__textarea"
                  style="min-height:200px;"
                  value={body}
                  onInput={(e) => setBody((e.target as HTMLTextAreaElement).value)}
                />
              )}
            </div>
          </div>
        )}

        {!hasContentSection && (
          <div class="admin-form__group">
            <div style="display:flex;align-items:center;justify-content:space-between;">
              <label class="admin-form__label">Body (Markdown)</label>
              <button
                type="button"
                class="admin-btn admin-btn--ghost admin-btn--small"
                onClick={() => setBodyPreview(!bodyPreview)}
              >
                {bodyPreview ? 'Edit' : 'Preview'}
              </button>
            </div>
            {bodyPreview ? (
              <div class="admin-preview" dangerouslySetInnerHTML={{ __html: simpleMarkdown(body) }} />
            ) : (
              <textarea
                class="admin-form__textarea"
                style="min-height:200px;"
                value={body}
                onInput={(e) => setBody((e.target as HTMLTextAreaElement).value)}
              />
            )}
          </div>
        )}

        <div class="admin-form__actions">
          <div class="admin-split-btn" ref={saveDropdownRef}>
            <button type="submit" class="admin-btn admin-btn--primary admin-split-btn__main" disabled={saving}>
              {saving ? 'Saving...' : isEdit ? 'Save & Close' : 'Create & Close'}
            </button>
            <button
              type="button"
              class="admin-btn admin-btn--primary admin-split-btn__toggle"
              disabled={saving}
              onClick={(e) => { e.stopPropagation(); setSaveDropdownOpen(!saveDropdownOpen); }}
              aria-label="More save options"
            >
              &#9662;
            </button>
            {saveDropdownOpen && (
              <div class="admin-split-btn__menu">
                <button type="button" class="admin-split-btn__option" onClick={() => doSave(true)}>
                  {isEdit ? 'Save & Close' : 'Create & Close'}
                </button>
                <button type="button" class="admin-split-btn__option" onClick={() => doSave(false)}>
                  {isEdit ? 'Save' : 'Create'}
                </button>
              </div>
            )}
          </div>
          <a href={`/admin/${collection}`} class="admin-btn admin-btn--ghost">Cancel</a>
        </div>
      </form>

      {showAddLocation && (
        <div class="admin-overlay" onClick={() => setShowAddLocation(null)}>
          <div class="admin-modal" onClick={(e: Event) => e.stopPropagation()}>
            <h3>Add New Location</h3>
            <div class="admin-form__group">
              <label class="admin-form__label">Name *</label>
              <input
                type="text"
                class="admin-form__input"
                value={newLocName}
                onInput={(e) => setNewLocName((e.target as HTMLInputElement).value)}
                placeholder="e.g. Guildford, UK"
              />
            </div>
            <div class="admin-form__row">
              <div class="admin-form__group">
                <label class="admin-form__label">Latitude *</label>
                <input
                  type="number"
                  step="any"
                  class="admin-form__input"
                  value={newLocLat}
                  onInput={(e) => setNewLocLat((e.target as HTMLInputElement).value)}
                />
              </div>
              <div class="admin-form__group">
                <label class="admin-form__label">Longitude *</label>
                <input
                  type="number"
                  step="any"
                  class="admin-form__input"
                  value={newLocLng}
                  onInput={(e) => setNewLocLng((e.target as HTMLInputElement).value)}
                />
              </div>
            </div>
            {addLocError && <div class="admin-form__error">{addLocError}</div>}
            <div class="admin-modal__actions">
              <button class="admin-btn admin-btn--ghost" onClick={() => setShowAddLocation(null)}>Cancel</button>
              <button
                class="admin-btn admin-btn--primary"
                disabled={addLocSaving || !newLocName}
                onClick={handleAddLocation}
              >
                {addLocSaving ? 'Saving...' : 'Create & Select'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/** Minimal markdown to HTML (headings, paragraphs, bold, italic) */
function simpleMarkdown(text: string): string {
  return text
    .split('\n\n')
    .map((block) => {
      block = block.trim();
      if (block.startsWith('### ')) return `<h3>${block.slice(4)}</h3>`;
      if (block.startsWith('## ')) return `<h2>${block.slice(3)}</h2>`;
      if (block.startsWith('# ')) return `<h1>${block.slice(2)}</h1>`;
      return `<p>${block.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\*(.*?)\*/g, '<em>$1</em>')}</p>`;
    })
    .join('\n');
}

function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
