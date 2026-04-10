import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { seededRandom } from './seeded-random';

// Fix Leaflet default icon paths (broken by bundlers)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

// ── Theme-aware tile layers ──────────────────────────────────────
const tileLayers: Record<string, { url: string; attribution: string }> = {
  boutique: {
    url: 'https://tiles.stadiamaps.com/tiles/stamen_toner_lite/{z}/{x}/{y}{r}.png',
    attribution: '&copy; <a href="https://stamen.com">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
  whimsical: {
    url: 'https://tiles.stadiamaps.com/tiles/stamen_watercolor/{z}/{x}/{y}.jpg',
    attribution: '&copy; <a href="https://stamen.com">Stamen Design</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  },
};

// ── Helpers ──────────────────────────────────────────────────────
function getThemeId(): string {
  return document.documentElement.getAttribute('data-theme') || 'boutique';
}

function getCSSVar(name: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(name).trim();
}

/** Create a coloured circle marker icon */
function makeIcon(colour: string, size: number = 12): L.DivIcon {
  return L.divIcon({
    className: 'bear-map__marker',
    html: `<span style="background:${colour};width:${size}px;height:${size}px;display:block;border-radius:50%;border:2px solid #fff;box-shadow:0 1px 3px rgba(0,0,0,0.3);"></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -(size / 2)],
  });
}

/** Generate wandering waypoints between two coordinates */
function wanderingPath(
  start: [number, number],
  end: [number, number],
  seed: string,
  numPoints: number = 5,
): [number, number][] {
  const rng = seededRandom(seed);
  const points: [number, number][] = [start];

  for (let i = 1; i <= numPoints; i++) {
    const t = i / (numPoints + 1);
    const lat = start[0] + (end[0] - start[0]) * t;
    const lng = start[1] + (end[1] - start[1]) * t;

    const dist = Math.sqrt(
      Math.pow(end[0] - start[0], 2) + Math.pow(end[1] - start[1], 2),
    );
    const maxOffset = dist * 0.15;
    const latOffset = (rng() - 0.5) * 2 * maxOffset;
    const lngOffset = (rng() - 0.5) * 2 * maxOffset;

    points.push([lat + latOffset, lng + lngOffset]);
  }

  points.push(end);
  return points;
}

/** Build the popup HTML for a bear marker */
function bearPopup(bear: any, locationType: string, locName: string): string {
  const statusClass =
    bear.status === 'rehomed'
      ? 'bear-map__popup-badge--rehomed'
      : 'bear-map__popup-badge--rescued';
  return `
    <div class="bear-map__popup">
      <strong class="bear-map__popup-name">${bear.name}</strong>
      <span class="bear-map__popup-badge ${statusClass}">${bear.status}</span>
      <span class="bear-map__popup-location">${locationType}: ${locName}</span>
      <a class="bear-map__popup-link" href="/bears/${bear.slug}/" aria-label="View ${bear.name}'s profile">View profile <span aria-hidden="true">&rarr;</span></a>
    </div>
  `;
}

// ── Initialise ───────────────────────────────────────────────────
function initMap() {
  const container = document.getElementById('bear-map-container');
  if (!container) return;

  // Prevent double-init (view transitions)
  if ((container as any).__leaflet_map) {
    (container as any).__leaflet_map.remove();
  }

  const bears = JSON.parse(container.dataset.bears || '[]');
  const variant = container.dataset.variant || 'full';
  const themeId = getThemeId();
  const tile = tileLayers[themeId] || tileLayers.boutique;

  // Colour tokens from active theme
  const colRescued = getCSSVar('--color-primary-dark') || '#8c564b';
  const colEvent = getCSSVar('--color-accent') || '#c9a84c';
  const colRehomed = getCSSVar('--color-secondary') || '#8fae8b';

  const map = L.map(container, {
    scrollWheelZoom: variant === 'full',
    zoomControl: true,
  }).setView([51.5, -1.5], variant === 'full' ? 6 : 8);

  (container as any).__leaflet_map = map;

  L.tileLayer(tile.url, { attribution: tile.attribution, maxZoom: 18 }).addTo(map);

  const allLatLngs: L.LatLng[] = [];

  if (variant === 'full') {
    // ── Full map with clustering ──
    const clusterGroup = (L as any).markerClusterGroup({
      maxClusterRadius: 40,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
    });

    for (const bear of bears) {
      if (bear.rescued) {
        const ll = L.latLng(bear.rescued.lat, bear.rescued.lng);
        allLatLngs.push(ll);
        const marker = L.marker(ll, { icon: makeIcon(colRescued) })
          .bindPopup(bearPopup(bear, 'Rescued', bear.rescued.name));
        clusterGroup.addLayer(marker);
      }

      if (bear.event) {
        const ll = L.latLng(bear.event.lat, bear.event.lng);
        allLatLngs.push(ll);
        const marker = L.marker(ll, { icon: makeIcon(colEvent) })
          .bindPopup(bearPopup(bear, 'Event', bear.event.name));
        clusterGroup.addLayer(marker);
      }

      if (bear.rehomed) {
        const ll = L.latLng(bear.rehomed.lat, bear.rehomed.lng);
        allLatLngs.push(ll);
        const marker = L.marker(ll, { icon: makeIcon(colRehomed) })
          .bindPopup(bearPopup(bear, 'Rehomed', bear.rehomed.name));
        clusterGroup.addLayer(marker);
      }

      const pathColour = getCSSVar('--color-primary-light') || '#d4a59a';
      if (bear.rescued && bear.rehomed) {
        const start: [number, number] = [bear.rescued.lat, bear.rescued.lng];
        const end: [number, number] = bear.event
          ? [bear.event.lat, bear.event.lng]
          : [bear.rehomed.lat, bear.rehomed.lng];
        const pts = wanderingPath(start, end, bear.slug + '-seg1');
        L.polyline(pts, { color: pathColour, weight: 1.5, opacity: 0.35, dashArray: '4 4' }).addTo(map);

        if (bear.event) {
          const seg2Start: [number, number] = [bear.event.lat, bear.event.lng];
          const seg2End: [number, number] = [bear.rehomed.lat, bear.rehomed.lng];
          const pts2 = wanderingPath(seg2Start, seg2End, bear.slug + '-seg2');
          L.polyline(pts2, { color: pathColour, weight: 1.5, opacity: 0.35, dashArray: '4 4' }).addTo(map);
        }
      }
    }

    map.addLayer(clusterGroup);

    if (allLatLngs.length > 0) {
      map.fitBounds(L.latLngBounds(allLatLngs), { padding: [30, 30] });
    }
  } else {
    // ── Profile map — single bear ──
    const bear = bears[0];
    if (!bear) return;

    const pathColour = getCSSVar('--color-primary-light') || '#d4a59a';

    if (bear.rescued) {
      const ll = L.latLng(bear.rescued.lat, bear.rescued.lng);
      allLatLngs.push(ll);
      L.marker(ll, { icon: makeIcon(colRescued, 14) })
        .bindPopup(bearPopup(bear, 'Rescued', bear.rescued.name))
        .addTo(map);
    }

    if (bear.event) {
      const ll = L.latLng(bear.event.lat, bear.event.lng);
      allLatLngs.push(ll);
      L.marker(ll, { icon: makeIcon(colEvent, 14) })
        .bindPopup(bearPopup(bear, 'Event', bear.event.name))
        .addTo(map);
    }

    if (bear.rehomed) {
      const ll = L.latLng(bear.rehomed.lat, bear.rehomed.lng);
      allLatLngs.push(ll);
      L.marker(ll, { icon: makeIcon(colRehomed, 14) })
        .bindPopup(bearPopup(bear, 'Rehomed', bear.rehomed.name))
        .addTo(map);
    }

    if (bear.rescued) {
      const start: [number, number] = [bear.rescued.lat, bear.rescued.lng];
      if (bear.event) {
        const mid: [number, number] = [bear.event.lat, bear.event.lng];
        L.polyline(wanderingPath(start, mid, bear.slug + '-seg1'), {
          color: pathColour, weight: 2.5, opacity: 0.6, dashArray: '6 4',
        }).addTo(map);
        if (bear.rehomed) {
          const end: [number, number] = [bear.rehomed.lat, bear.rehomed.lng];
          L.polyline(wanderingPath(mid, end, bear.slug + '-seg2'), {
            color: pathColour, weight: 2.5, opacity: 0.6, dashArray: '6 4',
          }).addTo(map);
        }
      } else if (bear.rehomed) {
        const end: [number, number] = [bear.rehomed.lat, bear.rehomed.lng];
        L.polyline(wanderingPath(start, end, bear.slug + '-seg1'), {
          color: pathColour, weight: 2.5, opacity: 0.6, dashArray: '6 4',
        }).addTo(map);
      }
    }

    if (allLatLngs.length > 1) {
      map.fitBounds(L.latLngBounds(allLatLngs), { padding: [40, 40], maxZoom: 12 });
    } else if (allLatLngs.length === 1) {
      map.setView(allLatLngs[0], 10);
    }
  }
}

// Initialise on first load
initMap();

// Re-initialise after Astro view transitions
document.addEventListener('astro:after-swap', initMap);
