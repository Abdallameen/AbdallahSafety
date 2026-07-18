/*
 * sw.js — عامل خدمة بسيط يخزن كل ملفات الموقع مؤقتاً ليعمل بدون إنترنت
 * بعد أول زيارة. عند إضافة أداة جديدة، أضف مسارها إلى PRECACHE_URLS وارفع رقم CACHE_VERSION.
 */
const CACHE_VERSION = "v1";
const CACHE_NAME = "fst-cache-" + CACHE_VERSION;

const PRECACHE_URLS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/style.css",
  "./assets/app.js",
  "./assets/i18n.js",
  "./tools/sanitizer.html",
  "./tools/temperature.html",
  "./icons/icon-192.png",
  "./icons/icon-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    ).then(() => self.clients.claim())
  );
});

// استراتيجية: الكاش أولاً لملفات الموقع، مع تحديث الكاش في الخلفية عند توفر الشبكة (stale-while-revalidate)
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (response && response.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return response;
        })
        .catch(() => cached);
      return cached || networkFetch;
    })
  );
});
