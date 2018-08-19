importScripts("precache-manifest.26fa48accfe65a63aeaa80a4f4d6ed44.js", "https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js');

if (workbox) {
  console.log(`Yay! Workbox is loaded 🎉`);
  workbox.precaching.precacheAndRoute(self.__precacheManifest || []);
} else {
  console.log(`Boo! Workbox didn't load 😬`);
}
