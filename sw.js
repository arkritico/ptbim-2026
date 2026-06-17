/* ptBIM 2026 — service worker. App shell + unpkg (React/Babel) cache para uso offline.
   HTML = network-first (atualiza já quando online); restantes = cache-first c/ atualização. */
const CACHE = 'ptbim2026-v6';
const PRECACHE = [
  './', 'index.html', 'manifest.webmanifest', 'qr.png',
  'assets/campus_feup.png', 'assets/planta.png',
  'icons/icon-192.png', 'icons/icon-512.png', 'icons/icon-512-maskable.png',
  'icons/apple-touch-icon.png', 'icons/favicon.svg', 'icons/favicon-48.png'
];

self.addEventListener('install', (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => Promise.allSettled(PRECACHE.map((u) => c.add(u)))));
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  let url;
  try { url = new URL(req.url); } catch (_) { return; }
  const sameOrigin = url.origin === self.location.origin;
  const isCdn = url.hostname === 'unpkg.com';
  if (!sameOrigin && !isCdn) return; // deixa passar (ex.: tiles de mapa)

  const isHTML = req.mode === 'navigate' || (req.headers.get('accept') || '').includes('text/html');

  if (isHTML) {
    // network-first: garante a versão mais recente quando online; cai para cache offline
    e.respondWith(
      fetch(req)
        .then((res) => { if (res && res.status === 200) caches.open(CACHE).then((c) => c.put(req, res.clone())); return res; })
        .catch(() => caches.open(CACHE).then((c) => c.match(req).then((hit) => hit || c.match('./') || c.match('index.html'))))
    );
    return;
  }

  // restantes (JS/CSS/img/fontes/unpkg): cache-first com atualização em fundo
  e.respondWith(
    caches.open(CACHE).then((cache) =>
      cache.match(req).then((hit) => {
        const net = fetch(req)
          .then((res) => { if (res && res.status === 200) cache.put(req, res.clone()); return res; })
          .catch(() => hit);
        return hit || net;
      })
    )
  );
});
