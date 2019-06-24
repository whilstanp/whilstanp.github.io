const precacheVersion = 1;
const precacheName = 'precache-v' + precacheVersion;
const precacheFiles = ["/offline.html"];

self.addEventListener('install', (e) => {
  console.log('[ServiceWorker] Installed');
  self.skipWaiting();
  e.waitUntil(
    caches.open(precacheName).then((cache) => {
      console.log('[ServiceWorker] Precaching files');
      return cache.addAll(precacheFiles);
    })
  );
});
self.addEventListener('activate', (e) => {
  console.log('[ServiceWorker] Activated');
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(cacheNames.map((thisCacheName) => {
        if (thisCacheName.includes("precache") && thisCacheName !== precacheName) {
          console.log('[ServiceWorker] Removing cached files from old cache - ', thisCacheName);
          return caches.delete(thisCacheName);
        }
      }));
    })
  );
});
self.addEventListener('fetch', (e) => {
  console.log('[ServiceWorker] Fetch event for ', e.request.url);
  e.respondWith(
    caches.match(e.request).then((cachedResponse)=>{
        if(cachedResponse){
            console.log("Found in cache!");
            return cachedResponse;
        }
        return fetch(e.request).then((fetchResponse)=>fetchResponse)
        .catch((ezz)=>{
            const isHTMLPage = e.request.method == "GET" && e.request.headers.get("accept").includes("text/html");
            if(isHTMLPage) return caches.match("/offline.html");
        });
      })
    );
});

/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js');
  });
}
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('first-app')
      .then(function(cache) {
        cache.addAll([
        '/',
        '/src/js/app.js',
        '/index.html',
        '/script.js',
        '/manifest.json',
        '/offline.html',
        '/sw.js'
      ])
    })
  );
  return self.clients.claim();
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      return caches.match(event.request);
    })
  );
});*/

/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(res) {
        return res;
      })
  );
});*/
/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        } else {
          return fetch(event.request)
            .then(function(res) {
              return caches.open(CACHE_DYNAMIC_NAME)
                .then(function(cache) {
                  cache.put(event.request.url, res.clone());
                  return res;
                })
            })
            .catch(function(err) {
              return caches.open(CACHE_STATIC_NAME)
                .then(function(cache) {
                  return cache.match('/offline.html');
                });
            });
        }
      })
  );
});*/
