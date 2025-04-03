
self.addEventListener("install", event => {
  event.waitUntil(caches.open("qr-tool-cache").then(cache => {
    return cache.addAll(["QR_KombiTool_Ultimate.html"]);
  }));
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
