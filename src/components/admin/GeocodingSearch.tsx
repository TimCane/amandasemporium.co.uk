/**
 * Geocoding search component — searches Nominatim for location names
 * and auto-fills latitude/longitude fields.
 */
import { useState, useRef, useCallback, useEffect } from 'preact/hooks';

interface NominatimResult {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
  address?: {
    country?: string;
    county?: string;
    state_district?: string;
    state?: string;
    postcode?: string;
  };
}

interface Props {
  onSelect: (result: { name: string; latitude: number; longitude: number; country: string; county: string; postcode: string }) => void;
  placeholder?: string;
}

export default function GeocodingSearch({ onSelect, placeholder = 'Search for a location...' }: Props) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NominatimResult[]>([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState('');
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const search = useCallback(async (q: string) => {
    if (q.length < 2) {
      setResults([]);
      setShowDropdown(false);
      return;
    }

    setLoading(true);
    setError('');
    try {
      const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(q)}&format=json&addressdetails=1&countrycodes=gb&limit=8`;
      const res = await fetch(url, {
        headers: { 'User-Agent': 'AmandasEmporium-AdminPanel/1.0' },
      });
      if (!res.ok) throw new Error(`Nominatim returned ${res.status}`);
      const data: NominatimResult[] = await res.json();
      setResults(data);
      setShowDropdown(data.length > 0);
    } catch (e: any) {
      setError('Search failed. Try again.');
      setResults([]);
      setShowDropdown(false);
    }
    setLoading(false);
  }, []);

  const handleInput = (value: string) => {
    setQuery(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => search(value), 300);
  };

  const handleSelect = (result: NominatimResult) => {
    const shortName = result.display_name.split(',').slice(0, 2).join(',').trim();
    setQuery(shortName);
    setShowDropdown(false);
    const addr = result.address || {};
    const postcode = (addr.postcode || '').split(/\s+/)[0]; // district only
    onSelect({
      name: shortName,
      latitude: parseFloat(result.lat),
      longitude: parseFloat(result.lon),
      country: addr.country || '',
      county: addr.county || addr.state_district || addr.state || '',
      postcode,
    });
  };

  // Close dropdown on outside click
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <div ref={wrapperRef} style={{ position: 'relative', marginBottom: '1rem' }}>
      <label class="admin-form__label">Search Location</label>
      <div class="admin-form__hint">Type a place name to search OpenStreetMap</div>
      <div style={{ position: 'relative' }}>
        <input
          type="text"
          class="admin-form__input"
          placeholder={placeholder}
          value={query}
          onInput={(e) => handleInput((e.target as HTMLInputElement).value)}
          onFocus={() => results.length > 0 && setShowDropdown(true)}
        />
        {loading && (
          <span style={{
            position: 'absolute', right: '10px', top: '50%',
            transform: 'translateY(-50%)', fontSize: '0.8rem', color: '#999',
          }}>
            Searching...
          </span>
        )}
      </div>
      {error && <div class="admin-form__error">{error}</div>}
      {showDropdown && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0, zIndex: 100,
          background: '#fff', border: '1px solid var(--admin-border)',
          borderRadius: 'var(--admin-radius)', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          maxHeight: '250px', overflowY: 'auto',
        }}>
          {results.map((r) => (
            <button
              key={r.place_id}
              type="button"
              onClick={() => handleSelect(r)}
              style={{
                display: 'block', width: '100%', textAlign: 'left',
                padding: '0.5rem 0.75rem', border: 'none', background: 'none',
                cursor: 'pointer', fontSize: '0.85rem', borderBottom: '1px solid #f0f0f0',
              }}
              onMouseEnter={(e) => { (e.target as HTMLElement).style.background = '#f5f5f5'; }}
              onMouseLeave={(e) => { (e.target as HTMLElement).style.background = 'none'; }}
            >
              <div style={{ fontWeight: 500 }}>{r.display_name.split(',').slice(0, 2).join(',')}</div>
              <div style={{ fontSize: '0.75rem', color: '#999', marginTop: '2px' }}>
                {r.display_name}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
