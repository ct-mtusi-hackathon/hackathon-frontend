let cacheData = "appV1"
let cacheImages = "appImg"
this.addEventListener("install", event=>{
    event.waitUntil(
        caches.open(cacheData).then(cache=>cache.addAll([
            '/static/js/bundle.js',
            '/index.html',
            '/favicon.svg',
            '/manifest.json',
            '/',
            '/static/media/Myriad%20Pro.f64ddedbbe574ab5fd58.ttf',
            '/static/media/aqum-2.4e6cc3eca3a8bb1e2aaa.otf',
        ]))
    )
    event.waitUntil(
        caches.open(cacheImages).then(cache=>cache.addAll([
            '/static/media/background_mobile.30acaf94d30069a440ac.svg',
            '/static/media/icon.d8303df70a406510daab28888470376d.svg',
            '/static/media/eye.3dafa82b4ce0b20d795fca4298fef049.svg',
            '/static/media/account.92a346aa4bd2674654e26466b26678b7.svg',
            '/static/media/password.7c8f7fd2d15fe9ebc68f85dccf3fb28e.svg',
            '/logo192.png',
        ]))
    )
})

this.addEventListener("fetch", event=>{
    if(!navigator.onLine){
    event.respondWith(
        caches.match(event.request).then(resp=>{
            if(resp)
            {
                console.log(resp)
                return resp
            }
        })
    );
}
})