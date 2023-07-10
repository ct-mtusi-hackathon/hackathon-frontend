let cacheData = "appV1";
let cacheImages = "appImg";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(cacheData)
      .then((cache) =>
        cache.addAll([
          "/static/js/bundle.js",
          "/index.html",
          "/favicon.svg",
          "/manifest.json",
          "/",
          "/static/media/Myriad%20Pro.f64ddedbbe574ab5fd58.ttf",
          "/static/media/aqum-2.4e6cc3eca3a8bb1e2aaa.otf",
        ])
      )
  );
  event.waitUntil();
  event.waitUntil(
    caches
      .open(cacheImages)
      .then((cache) => cache.addAll([/\/static\/media\/.+(\.svg|\.png|\.jpg)/]))
  );
});

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          console.log(resp);
          return resp;
        }
      })
    );
  }
});
