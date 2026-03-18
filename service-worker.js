
const CACHE_NAME = 'cantina-vini-fix-v2';
const FILES_TO_CACHE = [
  './', './index.html', './manifest.json',
  './icons/icon-192.png','./icons/icon-512.png',
  './splash/iphone-1170x2532.png','./splash/iphone-1284x2778.png','./splash/iphone-1125x2436.png','./splash/iphone-1242x2688.png'
];
self.addEventListener('install', e=>{ e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(FILES_TO_CACHE))); self.skipWaiting(); });
self.addEventListener('activate', e=>{ e.waitUntil(caches.keys().then(keys=>Promise.all(keys.map(k=>k!==CACHE_NAME?caches.delete(k):null)))); self.clients.claim(); });
self.addEventListener('fetch', e=>{ e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))); });
