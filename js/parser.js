const versionSW = "30January009999";

const CACHE_NAME = "V9";
const STATIC_CACHE_URLS = [
  "/",
  "sw.js",
  "/icons/binance_svg.svg",
  "/icons/ftx_svg.svg",
  "/icons/logo.svg",
  "/icons/logo-192.png",
  "/icons/logo-512.png"
];

self.addEventListener("install", event => {
  console.log("Service Worker installing.");
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_CACHE_URLS))
    );
});

self.addEventListener("activate", event => {
  console.log("Service Worker activating.");
});

self.addEventListener("fetch", event => {
    console.log(`Request of ${event.request.url}`);
  // default behaviour: request the network
  event.respondWith(fetch(event.request));
});

Cache-First Strategy
self.addEventListener("fetch", event => {
  event.respondWith(
    caches
      .match(event.request) // check if the request has already been cached
      .then(cached => cached || fetch(event.request)) // otherwise request network
  );
});