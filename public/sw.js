importScripts('precache-manifest.1f1f40d0ae7e94984620ab2f1c0dc223.js', 'https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log('Yay! Workbox is loaded 🎉');
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
} else {
  console.log('Boo! Workbox didn\'t load 😬');
}
