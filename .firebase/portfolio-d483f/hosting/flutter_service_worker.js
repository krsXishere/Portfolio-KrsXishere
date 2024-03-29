'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "f9d65d334647652d561f1db7f2e2b7e4",
"assets/AssetManifest.json": "0fa453bdf424a0196d8aad7a85a5b1ae",
"assets/assets/png/celerry-mockup.png": "924dbb57a1623e0328bae788d8d97676",
"assets/assets/png/data-scientist-1.png": "21dcdc0a987b68d761cf77763db97593",
"assets/assets/png/deprofile-mockup.png": "eb46abbd8c625c6f5b5191c00b4c2d17",
"assets/assets/png/deqr-mockup.png": "81fcbd7c82a61c695b6ac98d14b69b08",
"assets/assets/png/devfest-1.png": "b159777ab0835f50719ad1a5675cd485",
"assets/assets/png/devin-mockup.png": "bb5c549b2b7ca1ab6aa4a4d9aaf27086",
"assets/assets/png/fcd-mockup.png": "8d8083a7016ca9ddacb18bc8f505c84d",
"assets/assets/png/gadai-express-mockup.png": "77dd7971552a74e59230e94d660c5b39",
"assets/assets/png/ikis.png": "291139aa1b1626f7c97bd2d99e469c4b",
"assets/assets/png/lks-kab.png": "67dbde39142372080c0022e075410f12",
"assets/assets/png/lks-prov.png": "dffcb09d53ecbfda49635b0751227a56",
"assets/assets/png/makerindo-mockup.png": "590a7736cb3a2e906859ef2ccfb77edf",
"assets/assets/png/makerindo.png": "ae12b6330fa014eaa1fd065e14f73d87",
"assets/assets/png/matchapp-mockup.png": "46f55204675ca8f4cf30e548858aced3",
"assets/assets/png/mpr-ri-4-pilar-1.png": "1bd55b790691462a4f946b8c4ba710bc",
"assets/assets/png/scf-ai.png": "6eb1d1cc74f0e52de25c975c7fd8bb13",
"assets/assets/png/toko-saya-mockup.png": "77c6b5a76ace8335b8a44b7d323d4fd9",
"assets/assets/svg/codeigniter.svg": "510c5b6ee440ec6c9010d20d00772333",
"assets/assets/svg/dartlang-icon.svg": "384ad99903293e87f01f49214db88050",
"assets/assets/svg/dotnet-icon.svg": "d969f7b3867a266393b5c5a3c2048db5",
"assets/assets/svg/dotnet-logo.svg": "afe88915b28caa9b114736d3ef5603fe",
"assets/assets/svg/firebase-icon.svg": "10b0719343408095f5a9b369e0787115",
"assets/assets/svg/flutterio-icon.svg": "59a662c262bb9fae1751abe4d13abb84",
"assets/assets/svg/github-icon-1.svg": "ce89173e3842fb91835a9cc8605a5ecc",
"assets/assets/svg/github-mark-white.svg": "a0b00583d93c2f7084ad151ee0849934",
"assets/assets/svg/hexagon.svg": "ef4ea5330839d18bf3e4ccc5b89b0e8a",
"assets/assets/svg/icons8-instagram.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/svg/icons8-linkedin.svg": "c20e472dbbe47e5809cf79a0b4e283e4",
"assets/assets/svg/java-icon.svg": "249fe040428adedb1d5b3bb6811ef492",
"assets/assets/svg/laravel-2.svg": "2fa5a6b6d7ce810d2b67ebf6df87fcc8",
"assets/assets/svg/office-2.svg": "99b0baeb8c5c6d249b986ffd8766275b",
"assets/assets/svg/python-5.svg": "146716bdf1a351db5705ec1e6a25ed08",
"assets/assets/svg/skewed.svg": "cb2e1d92ad5366e5be43bf66279b1fd2",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "f4a525b4f5a6adf1aaaf23184b744be1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "43668525020fbb11703ec70b429c85a0",
"/": "43668525020fbb11703ec70b429c85a0",
"main.dart.js": "4b78dbd775e715ad2ed7debef10659a0",
"manifest.json": "85cc1421f0d4fa358f2377e230ab5531",
"version.json": "9317d8d2b9d4ca8245713703e33014de"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
