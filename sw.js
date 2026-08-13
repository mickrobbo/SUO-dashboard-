// Minimal service worker — exists so Chrome treats SUO Dashboard as an installable app.
// It doesn't cache anything; every load still goes to the network / Firebase.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));
self.addEventListener("fetch", () => {}); // passthrough — required for installability
