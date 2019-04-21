/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "64ce91b601598e65ec1bac9f20c7d10d"
  },
  {
    "url": "assets/css/0.styles.0d19fd84.css",
    "revision": "9bb6b9f88c684f84f2eb3ace755e382e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.9809e03a.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.27cff948.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.60373ce6.js",
    "revision": "c8ce8da3c63206228289a95a81157960"
  },
  {
    "url": "assets/js/5.c6a809d3.js",
    "revision": "2ce808a80d5a10511fcc0b0ff44aa110"
  },
  {
    "url": "assets/js/6.e18fd4a6.js",
    "revision": "310110c7e706bef38bf4a84aca1593bb"
  },
  {
    "url": "assets/js/7.1165f0d9.js",
    "revision": "88bdf9974790814db583e9304a50f330"
  },
  {
    "url": "assets/js/app.3596b122.js",
    "revision": "66ac761986fe4cac3f7cfe6fea2cf835"
  },
  {
    "url": "index.html",
    "revision": "c5f488d435fb5b91efbbc77450779463"
  },
  {
    "url": "life/index.html",
    "revision": "7a92a546662d8aee7c46caf12b9d7234"
  },
  {
    "url": "like/index.html",
    "revision": "8f12f2aaa2af15954dcadcb69b3d8de3"
  },
  {
    "url": "me.jpg",
    "revision": "a1f0d609f59394b51c6152f44f50c5ad"
  },
  {
    "url": "web/index.html",
    "revision": "18961d739037563ed5358445b9d59350"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
