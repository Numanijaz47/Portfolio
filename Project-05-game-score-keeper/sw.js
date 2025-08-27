self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('score-cache').then(cache => {
      return cache.addAll([
        '/Project-05-game-score-keeper/',
        '/Project-05-game-score-keeper/index.html',
        '/Project-05-game-score-keeper/style.css',
        '/Project-05-game-score-keeper/script.js',
        '/Project-05-game-score-keeper/icon-192.png',
        '/Project-05-game-score-keeper/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
