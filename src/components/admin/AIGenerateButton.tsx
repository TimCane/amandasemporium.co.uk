/**
 * AI Content Generation button — calls claude CLI to generate tagline + narrative.
 * Sits within AdminForm and populates tagline and body fields on success.
 * Supports "generate" (fresh) and "update" (rewrite with new details) modes.
 */
import { useState } from 'preact/hooks';

interface Props {
  collection: string;
  getFormData: () => Record<string, any>;
  getExistingContent: () => { tagline: string; body: string };
  hasExistingContent: boolean;
  onGenerated: (tagline: string, narrative: string) => void;
}

export default function AIGenerateButton({ collection, getFormData, getExistingContent, hasExistingContent, onGenerated }: Props) {
  const [context, setContext] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (mode: 'generate' | 'update') => {
    setLoading(true);
    setError('');

    try {
      const formData = getFormData();
      const payload: Record<string, any> = { collection, formData, context, mode };

      if (mode === 'update') {
        payload.existingContent = getExistingContent();
      }

      const res = await fetch('/api/admin/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || 'Generation failed');
        return;
      }

      onGenerated(data.tagline, data.narrative);
    } catch (e: any) {
      setError(e.message || 'Unexpected error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div class="admin-card" style={{ marginBottom: '1rem', background: '#f8f9ff', borderColor: '#d0d8f0' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
        <span style={{ fontSize: '1.1rem' }}>&#x2728;</span>
        <strong style={{ fontSize: '0.9rem' }}>AI Content Generation</strong>
      </div>
      <div class="admin-form__group" style={{ marginBottom: '0.75rem' }}>
        <label class="admin-form__label">Context (optional)</label>
        <div class="admin-form__hint">
          {hasExistingContent
            ? 'E.g. "now rehomed to a lovely family", "update to mention the new event"'
            : 'E.g. "found at a car boot sale, was wearing a tiny hat"'}
        </div>
        <input
          type="text"
          class="admin-form__input"
          placeholder={hasExistingContent ? 'What changed? Any new details to include...' : 'Add any extra context for the AI...'}
          value={context}
          onInput={(e) => setContext((e.target as HTMLInputElement).value)}
          disabled={loading}
        />
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
        <button
          type="button"
          class="admin-btn admin-btn--primary"
          onClick={() => handleGenerate('generate')}
          disabled={loading}
          style={loading ? { opacity: 0.7, cursor: 'wait' } : {}}
        >
          {loading ? 'Generating...' : hasExistingContent ? 'Regenerate from scratch' : 'Generate tagline & narrative'}
        </button>
        {hasExistingContent && (
          <button
            type="button"
            class="admin-btn admin-btn--ghost"
            onClick={() => handleGenerate('update')}
            disabled={loading}
            style={loading ? { opacity: 0.7, cursor: 'wait' } : {}}
          >
            {loading ? 'Updating...' : 'Update existing content'}
          </button>
        )}
        {loading && (
          <span style={{ fontSize: '0.8rem', color: '#666' }}>
            This may take a few seconds...
          </span>
        )}
      </div>
      {error && (
        <div class="admin-flash admin-flash--error" style={{ marginTop: '0.75rem' }}>
          {error}
        </div>
      )}
    </div>
  );
}
