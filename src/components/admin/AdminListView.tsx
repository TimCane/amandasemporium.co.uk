/** Reusable list view for any collection — search, filter, table, delete */
import { useState, useEffect, useCallback } from 'preact/hooks';

interface Column {
  key: string;
  label: string;
  /** Format hint since render functions can't be serialized across island boundary.
   *  Supported: 'date', 'boolean', 'boolean:yes', 'rehomed-status', 'event-status', 'content-status', 'picture' */
  format?: string;
  /** Whether this column is sortable (default true for non-picture columns) */
  sortable?: boolean;
}

/** Frontmatter keys to check per collection for content completeness (plus body) */
const CONTENT_KEYS: Record<string, string[]> = {
  bears: ['tagline'],
  events: [],
  products: ['tagline'],
};

/** Frontmatter keys to exclude from search per collection */
const SEARCH_EXCLUDE: Record<string, string[]> = {
  bears: ['tagline', 'picture', 'photos', 'uploadedOn', 'featured'],
  events: ['recapPhotos', 'website'],
  products: ['tagline', 'photos', 'hidden'],
  gallery: ['image'],
  locations: [],
};

interface Props {
  collection: string;
  columns: Column[];
  nameField?: string;
  /** Show a Clone button in the actions column */
  enableClone?: boolean;
}

type SortDir = 'asc' | 'desc';

export default function AdminListView({ collection, columns, nameField = 'name', enableClone = false }: Props) {
  const [entries, setEntries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [deleteTarget, setDeleteTarget] = useState<{ slug: string; name: string; refs: string[] } | null>(null);
  const [flash, setFlash] = useState<{ type: string; message: string } | null>(null);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [sortDir, setSortDir] = useState<SortDir>('asc');
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const loadEntries = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/${collection}`);
      const data = await res.json();
      setEntries(data);
    } catch (e) {
      setFlash({ type: 'error', message: 'Failed to load entries' });
    }
    setLoading(false);
  }, [collection]);

  useEffect(() => { loadEntries(); }, [loadEntries]);

  const handleSort = (col: Column) => {
    if (col.format === 'picture' || col.format === 'content-status' || col.sortable === false) return;
    setPage(1);
    if (sortKey === col.key) {
      setSortDir(sortDir === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(col.key);
      setSortDir('asc');
    }
  };

  const excludeKeys = SEARCH_EXCLUDE[collection] || [];

  const filtered = entries.filter((entry) => {
    if (!search) return true;
    const terms = search.toLowerCase().split(/\s+/).filter(Boolean);
    // Every term must match somewhere (slug or frontmatter)
    return terms.every((q) =>
      entry.slug.toLowerCase().includes(q) ||
      matchesSearch(entry.frontmatter, q, excludeKeys)
    );
  });

  const sorted = sortKey
    ? [...filtered].sort((a, b) => {
        let aVal = getNestedValue(a.frontmatter, sortKey);
        let bVal = getNestedValue(b.frontmatter, sortKey);

        // Normalise for comparison
        if (aVal === undefined || aVal === null) aVal = '';
        if (bVal === undefined || bVal === null) bVal = '';

        // Booleans: true > false
        if (typeof aVal === 'boolean') aVal = aVal ? 1 : 0;
        if (typeof bVal === 'boolean') bVal = bVal ? 1 : 0;

        // Numbers
        if (typeof aVal === 'number' && typeof bVal === 'number') {
          return sortDir === 'asc' ? aVal - bVal : bVal - aVal;
        }

        // String comparison (handles dates too since YYYY-MM-DD sorts lexically)
        const cmp = String(aVal).localeCompare(String(bVal), undefined, { numeric: true, sensitivity: 'base' });
        return sortDir === 'asc' ? cmp : -cmp;
      })
    : filtered;

  const handleDelete = async (slug: string, name: string) => {
    const res = await fetch(`/api/admin/${collection}/${slug}`, { method: 'DELETE' });
    const data = await res.json();

    if (res.status === 409 && data.warning) {
      setDeleteTarget({ slug, name, refs: data.references });
      return;
    }

    if (data.success) {
      setFlash({ type: 'success', message: `Deleted "${name}"` });
      loadEntries();
    }
  };

  const confirmForceDelete = async () => {
    if (!deleteTarget) return;
    const res = await fetch(`/api/admin/${collection}/${deleteTarget.slug}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ force: true }),
    });
    const data = await res.json();
    if (data.success) {
      setFlash({ type: 'success', message: `Deleted "${deleteTarget.name}"` });
      setDeleteTarget(null);
      loadEntries();
    }
  };

  const isSortable = (col: Column) =>
    col.sortable !== false && col.format !== 'picture' && col.format !== 'content-status' && col.format !== 'tags';

  return (
    <div>
      <style>{`
        .admin-thumb-wrap {
          position: relative;
          display: inline-block;
        }
        .admin-thumb-wrap img {
          width: 40px;
          height: 40px;
          object-fit: cover;
          border-radius: 4px;
          vertical-align: middle;
          transition: opacity 0.15s;
        }
        .admin-thumb-wrap .admin-thumb-enlarged {
          display: none;
          position: fixed;
          width: 600px;
          height: 600px;
          object-fit: cover;
          border-radius: 8px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.25);
          z-index: 9999;
          pointer-events: none;
        }
        .admin-table th.sortable {
          cursor: pointer;
          user-select: none;
        }
        .admin-table th.sortable:hover {
          background: rgba(0,0,0,0.04);
        }
        .admin-sort-arrow {
          margin-left: 4px;
          font-size: 0.75rem;
          opacity: 0.6;
        }
        .admin-tag {
          display: inline-block;
          padding: 0.1rem 0.45rem;
          margin: 0.1rem;
          font-size: 0.75rem;
          background: #e8e8e8;
          color: #444;
          border-radius: 3px;
          white-space: nowrap;
        }
      `}</style>

      {flash && (
        <div class={`admin-flash admin-flash--${flash.type}`}>
          {flash.message}
          <button onClick={() => setFlash(null)} style="float:right;background:none;border:none;cursor:pointer;font-size:1.1rem;">&times;</button>
        </div>
      )}

      <div class="admin-toolbar">
        <input
          type="text"
          class="admin-form__input admin-toolbar__search"
          placeholder="Search..."
          value={search}
          onInput={(e) => { setSearch((e.target as HTMLInputElement).value); setPage(1); }}
        />
        <a href={`/admin/${collection}/new`} class="admin-btn admin-btn--primary">+ Add New</a>
      </div>

      <div class="admin-count">
        Showing {Math.min((page - 1) * pageSize + 1, sorted.length)}–{Math.min(page * pageSize, sorted.length)} of {sorted.length}{sorted.length !== entries.length ? ` (${entries.length} total)` : ''} entries
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <div class="admin-card" style="padding:0;overflow:auto;">
          <table class="admin-table">
            <thead>
              <tr>
                {columns.map((col, i) => (
                  <th
                    key={i}
                    class={isSortable(col) ? 'sortable' : ''}
                    onClick={() => isSortable(col) && handleSort(col)}
                  >
                    {col.label}
                    {sortKey === col.key && (
                      <span class="admin-sort-arrow">{sortDir === 'asc' ? '\u25B2' : '\u25BC'}</span>
                    )}
                  </th>
                ))}
                <th style="width:120px;">Actions</th>
              </tr>
            </thead>
            <tbody>
              {sorted.slice((page - 1) * pageSize, page * pageSize).map((entry) => (
                <tr key={entry.slug}>
                  {columns.map((col, i) => (
                    <td key={i}>
                      {col.format === 'picture'
                        ? formatPicture(getNestedValue(entry.frontmatter, col.key), collection, entry.slug)
                        : col.format === 'tags'
                        ? formatTags(getNestedValue(entry.frontmatter, col.key))
                        : col.format === 'content-status'
                        ? formatContentStatus(entry, collection)
                        : formatCell(getNestedValue(entry.frontmatter, col.key), col.format)}
                    </td>
                  ))}
                  <td>
                    <div style="display:flex;gap:0.3rem;">
                      <a href={`/admin/${collection}/${entry.slug}/edit`} class="admin-btn admin-btn--ghost admin-btn--small">Edit</a>
                      {enableClone && (
                        <a href={`/admin/${collection}/new?clone=${encodeURIComponent(entry.slug)}`} class="admin-btn admin-btn--ghost admin-btn--small">Clone</a>
                      )}
                      <button
                        class="admin-btn admin-btn--danger admin-btn--small"
                        onClick={() => handleDelete(entry.slug, entry.frontmatter[nameField] || entry.slug)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {sorted.length === 0 && (
                <tr><td colSpan={columns.length + 1} style="text-align:center;padding:2rem;color:#999;">No entries found</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {sorted.length > pageSize && (
        <div style="display:flex;justify-content:center;align-items:center;gap:0.5rem;margin-top:1rem;">
          <button
            class="admin-btn admin-btn--ghost admin-btn--small"
            disabled={page <= 1}
            onClick={() => setPage(1)}
          >
            &laquo;
          </button>
          <button
            class="admin-btn admin-btn--ghost admin-btn--small"
            disabled={page <= 1}
            onClick={() => setPage(page - 1)}
          >
            &lsaquo; Prev
          </button>
          <span style="font-size:0.85rem;color:#666;">
            Page {page} of {Math.ceil(sorted.length / pageSize)}
          </span>
          <button
            class="admin-btn admin-btn--ghost admin-btn--small"
            disabled={page >= Math.ceil(sorted.length / pageSize)}
            onClick={() => setPage(page + 1)}
          >
            Next &rsaquo;
          </button>
          <button
            class="admin-btn admin-btn--ghost admin-btn--small"
            disabled={page >= Math.ceil(sorted.length / pageSize)}
            onClick={() => setPage(Math.ceil(sorted.length / pageSize))}
          >
            &raquo;
          </button>
        </div>
      )}

      {deleteTarget && (
        <div class="admin-overlay" onClick={() => setDeleteTarget(null)}>
          <div class="admin-modal" onClick={(e) => e.stopPropagation()}>
            <h3>Warning: Referenced Entry</h3>
            <p>"{deleteTarget.name}" is referenced by:</p>
            <ul style="margin:0.5rem 0 0 1.25rem;font-size:0.9rem;">
              {deleteTarget.refs.map((r, i) => <li key={i}>{r}</li>)}
            </ul>
            <p style="margin-top:0.75rem;font-size:0.9rem;">Are you sure you want to delete it?</p>
            <div class="admin-modal__actions">
              <button class="admin-btn admin-btn--ghost" onClick={() => setDeleteTarget(null)}>Cancel</button>
              <button class="admin-btn admin-btn--danger" onClick={confirmForceDelete}>Delete Anyway</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function formatPicture(value: any, collection: string, slug: string): any {
  if (!value) return <span style="color:#999;">&mdash;</span>;
  const file = String(value).replace(/^\.\//, '');
  const src = `/api/admin/image?collection=${encodeURIComponent(collection)}&slug=${encodeURIComponent(slug)}&file=${encodeURIComponent(file)}`;

  const showEnlarged = (e: MouseEvent) => {
    const thumb = e.currentTarget as HTMLElement;
    const enlarged = thumb.parentElement?.querySelector('.admin-thumb-enlarged') as HTMLElement;
    if (!enlarged) return;
    const rect = thumb.getBoundingClientRect();
    enlarged.style.left = `${rect.right + 10}px`;
    // Clamp vertically so image stays in viewport
    const top = Math.min(Math.max(rect.top + rect.height / 2 - 300, 8), window.innerHeight - 608);
    enlarged.style.top = `${top}px`;
    enlarged.style.display = 'block';
  };

  const hideEnlarged = (e: MouseEvent) => {
    const thumb = e.currentTarget as HTMLElement;
    const enlarged = thumb.parentElement?.querySelector('.admin-thumb-enlarged') as HTMLElement;
    if (enlarged) enlarged.style.display = 'none';
  };

  return (
    <span class="admin-thumb-wrap">
      <img src={src} alt="" loading="lazy" onMouseEnter={showEnlarged} onMouseLeave={hideEnlarged} />
      <img class="admin-thumb-enlarged" src={src} alt="" />
    </span>
  );
}

function formatTags(value: any): any {
  if (!value || !Array.isArray(value) || value.length === 0) return '';
  return (
    <span>{value.map((tag: string, i: number) => (
      <span key={i} class="admin-tag">{tag}</span>
    ))}</span>
  );
}

function formatContentStatus(entry: any, collection: string): any {
  const keys = CONTENT_KEYS[collection] || [];
  const hasBody = entry.body && entry.body.trim().length > 0;
  const filledKeys = keys.filter((k) => {
    const v = entry.frontmatter[k];
    return v && String(v).trim().length > 0;
  });
  const total = keys.length + (keys.length > 0 ? 1 : 0); // +1 for body if collection has content fields
  const filled = filledKeys.length + (hasBody ? 1 : 0);

  if (total === 0) return '';
  if (filled === total) return <span style="color:#16a34a;">Complete</span>;
  if (filled === 0) return <span style="color:#dc2626;">Empty</span>;
  return <span style="color:#d97706;">{filled}/{total}</span>;
}

function formatCell(value: any, format?: string): string {
  if (!format) {
    if (value === undefined || value === null) return '';
    if (typeof value === 'object') return JSON.stringify(value);
    return String(value);
  }
  switch (format) {
    case 'date':
      return value ? String(value).slice(0, 10) : '';
    case 'boolean':
      return value ? 'Yes' : 'No';
    case 'boolean:yes':
      return value ? 'Yes' : '';
    case 'rehomed-status':
      return value ? 'Rehomed' : 'Available';
    case 'event-status': {
      if (!value) return '';
      const today = new Date().toISOString().slice(0, 10);
      return String(value).slice(0, 10) >= today ? 'Upcoming' : 'Past';
    }
    default:
      return value != null ? String(value) : '';
  }
}

function getNestedValue(obj: any, key: string): any {
  return key.split('.').reduce((acc, part) => acc?.[part], obj);
}

/** Recursively search all values in an object, skipping excluded keys */
function matchesSearch(obj: any, query: string, excludeKeys: string[], parentKey = ''): boolean {
  if (obj === null || obj === undefined) return false;
  if (Array.isArray(obj)) {
    return obj.some((item) => matchesSearch(item, query, excludeKeys, parentKey));
  }
  if (typeof obj === 'object') {
    return Object.entries(obj).some(([key, val]) => {
      if (excludeKeys.includes(key)) return false;
      return matchesSearch(val, query, excludeKeys, key);
    });
  }
  return String(obj).toLowerCase().includes(query);
}
