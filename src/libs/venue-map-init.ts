import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet default icon paths (broken by bundlers)
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/marker-icon-2x.png',
  iconUrl: '/leaflet/marker-icon.png',
  shadowUrl: '/leaflet/marker-shadow.png',
});

// Theme-aware tile layers (same as bear-map)
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

function getThemeId(): string {
  return document.documentElement.getAttribute('data-theme') || 'boutique';
}

function initVenueMap(): void {
  const container = document.getElementById('venue-map-container');
  if (!container) return;

  const venueData = container.dataset.venue;
  if (!venueData) return;

  const { lat, lng, name } = JSON.parse(venueData);

  // Clean up any existing map instance
  if ((container as any).__leaflet_map) {
    (container as any).__leaflet_map.remove();
  }

  const themeId = getThemeId();
  const tileConfig = tileLayers[themeId] || tileLayers.boutique;

  const map = L.map(container, {
    center: [lat, lng],
    zoom: 14,
    scrollWheelZoom: false,
  });

  (container as any).__leaflet_map = map;

  L.tileLayer(tileConfig.url, {
    attribution: tileConfig.attribution,
    maxZoom: 18,
  }).addTo(map);

  L.marker([lat, lng])
    .addTo(map)
    .bindPopup(`<strong>${name}</strong>`)
    .openPopup();
}

// Initialise on page load and after Astro view transitions
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initVenueMap);
} else {
  initVenueMap();
}

document.addEventListener('astro:after-swap', initVenueMap);
