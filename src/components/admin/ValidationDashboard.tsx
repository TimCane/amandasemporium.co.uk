/**
 * Content Validation Dashboard — shows completeness metrics with traffic lights.
 * Fetches data from /api/admin/validation and renders interactive results.
 */
import { useState, useEffect } from 'preact/hooks';

interface ValidationItem {
  slug: string;
  name: string;
}

interface ValidationCheck {
  label: string;
  collection: string;
  total: number;
  missing: number;
  items: ValidationItem[];
}

interface CollectionSummary {
  collection: string;
  label: string;
  total: number;
  checks: ValidationCheck[];
  completeness: number;
}

interface ValidationData {
  summaries: CollectionSummary[];
  overallCompleteness: number;
}

export default function ValidationDashboard() {
  const [data, setData] = useState<ValidationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [expandedCheck, setExpandedCheck] = useState<string | null>(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    setLoading(true);
    setError('');
    try {
      const res = await fetch('/api/admin/validation');
      if (!res.ok) throw new Error('Failed to load validation data');
      const json = await res.json();
      setData(json);
    } catch (e: any) {
      setError(e.message);
    }
    setLoading(false);
  };

  if (loading) return <p>Loading validation data...</p>;
  if (error) return <div class="admin-flash admin-flash--error">{error}</div>;
  if (!data) return null;

  const getTrafficLight = (completeness: number): { color: string; bg: string; label: string } => {
    if (completeness > 80) return { color: '#155724', bg: '#d4edda', label: 'Good' };
    if (completeness >= 50) return { color: '#856404', bg: '#fff3cd', label: 'Needs work' };
    return { color: '#721c24', bg: '#f8d7da', label: 'Incomplete' };
  };

  const toggleCheck = (key: string) => {
    setExpandedCheck(expandedCheck === key ? null : key);
  };

  const overallLight = getTrafficLight(data.overallCompleteness);

  return (
    <div>
      {/* Overall completeness */}
      <div class="admin-card" style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <div style={{ fontSize: '0.85rem', color: '#777', marginBottom: '0.5rem' }}>
          Overall Content Completeness
        </div>
        <div style={{
          fontSize: '2.5rem', fontWeight: 700,
          color: overallLight.color,
        }}>
          {data.overallCompleteness}%
        </div>
        <div style={{
          display: 'inline-block', padding: '0.2rem 0.75rem',
          borderRadius: '12px', fontSize: '0.8rem', fontWeight: 600,
          background: overallLight.bg, color: overallLight.color,
          marginTop: '0.5rem',
        }}>
          {overallLight.label}
        </div>
      </div>

      {/* Per-collection summaries */}
      {data.summaries.map((summary) => {
        const light = getTrafficLight(summary.completeness);
        return (
          <div class="admin-card" key={summary.collection} style={{ marginBottom: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{summary.label}</h3>
                <span style={{ fontSize: '0.85rem', color: '#999' }}>{summary.total} items</span>
              </div>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                padding: '0.25rem 0.75rem', borderRadius: '12px',
                background: light.bg, color: light.color,
                fontSize: '0.8rem', fontWeight: 600,
              }}>
                <span style={{
                  width: '10px', height: '10px', borderRadius: '50%',
                  background: light.color, display: 'inline-block',
                }} />
                {summary.completeness}%
              </div>
            </div>

            {summary.checks.map((check, idx) => {
              const checkKey = `${summary.collection}-${idx}`;
              const isExpanded = expandedCheck === checkKey;
              const pct = check.total > 0 ? Math.round(((check.total - check.missing) / check.total) * 100) : 100;
              const checkLight = getTrafficLight(pct);

              return (
                <div key={checkKey} style={{ marginBottom: '0.5rem' }}>
                  <button
                    type="button"
                    onClick={() => check.missing > 0 && toggleCheck(checkKey)}
                    style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      width: '100%', padding: '0.5rem 0.75rem',
                      background: check.missing > 0 ? '#fafafa' : '#f0faf0',
                      border: '1px solid #eee', borderRadius: '4px',
                      cursor: check.missing > 0 ? 'pointer' : 'default',
                      textAlign: 'left', fontSize: '0.85rem',
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <span style={{
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: checkLight.color, display: 'inline-block', flexShrink: 0,
                      }} />
                      {check.label}
                    </span>
                    <span style={{ fontWeight: 600, color: check.missing > 0 ? checkLight.color : '#155724' }}>
                      {check.missing > 0 ? `${check.missing} of ${check.total}` : 'All complete'}
                      {check.missing > 0 && (isExpanded ? ' \u25B2' : ' \u25BC')}
                    </span>
                  </button>

                  {isExpanded && check.items.length > 0 && (
                    <div style={{
                      padding: '0.5rem 0.75rem', background: '#fff',
                      border: '1px solid #eee', borderTop: 'none',
                      borderRadius: '0 0 4px 4px', maxHeight: '200px', overflowY: 'auto',
                    }}>
                      {check.items.map((item) => (
                        <a
                          key={item.slug}
                          href={`/admin/${check.collection}/${item.slug}/edit`}
                          style={{
                            display: 'block', padding: '0.3rem 0',
                            fontSize: '0.8rem', color: 'var(--admin-primary)',
                            textDecoration: 'none',
                          }}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        );
      })}

      <button
        type="button"
        class="admin-btn admin-btn--ghost"
        onClick={loadData}
        style={{ marginTop: '0.5rem' }}
      >
        Refresh
      </button>
    </div>
  );
}
