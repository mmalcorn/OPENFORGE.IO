importScripts('workbox-v3.2.0/workbox-sw.js');

self.workbox.setConfig({ debug: true });
workbox.core.setLogLevel(workbox.core.LOG_LEVELS.debug);

self.workbox.skipWaiting();
self.workbox.clientsClaim();

self.workbox.routing.registerRoute(
  /\.html$/,
  self.workbox.strategies.networkFirst()
);

self.workbox.precaching.precacheAndRoute([]);
