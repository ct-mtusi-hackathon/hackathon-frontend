let cacheData = "appV1";
let cacheImages = "appImg";
let urls = [];
this.addEventListener("install", (event) => {
  event.waitUntil(caches.open(cacheData).then((cache) => cache.addAll(["/"])));
});

this.addEventListener("fetch", (event) => {
  const url = event.request.url.replace("https://katerina4cat.ru:3000", "");
  if (url.match(/\.(png|css|js|jpg|ico|svg|otf|ttf)$/))
    event.waitUntil(caches.open(cacheData).then((cache) => cache.add(url)));
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
