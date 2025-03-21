const CACHE_NAME = 'markulator-cache-v4'; // Версионируйте явно
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/logo.png',
  '/vite.svg',
  '/manifest.json',
  '/assets/index-*.js',
  '/assets/index-*.css',
  '/assets/logos/favicon.ico',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== CACHE_NAME) return caches.delete(cache);
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  // Network-first с fallback к кэшу
  event.respondWith(
    fetch(event.request)
      .catch(() => caches.match(event.request))
  );

  // Обновление кэша для GET-запросов
  if (event.request.method === 'GET') {
    event.waitUntil(
      fetch(event.request).then(response => {
        if (response.status === 200) {
          return caches.open(CACHE_NAME)
            .then(cache => cache.put(event.request, response));
        }
      })
    );
  }
});