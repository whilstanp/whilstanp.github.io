importScripts('/script.js');
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
        '/',
        '/src/js/app.js',
        '/index.html',
        '/manifest.json',
        '/material.min,js',
        '/script.js',
        '/sw.js'
      ]);
    })
  );
});
