'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "97e38d2fb0d864a36f4b0d6cbccf792f",
"index.html": "537c48596cb22ab6d7c49f070b9734a6",
"/": "537c48596cb22ab6d7c49f070b9734a6",
"main.dart.js": "9ad0adf16e11a0f3acffa9e57da64962",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "9fdd46dee11631f6ed4a2779f20c7a8c",
".git/ORIG_HEAD": "886cae0f43f6d4343ed6a7d36d9326f7",
".git/config": "3911b011abef476af147ab064f786a48",
".git/objects/95/4626388fb63cd324dfd3b60ddb7091b5a0f66a": "e3dcb66b4b8bd3a07f851f03053b9c8c",
".git/objects/66/8f16c9d1a9c4d2df37ced34970471781de693c": "9f5add249ac5d29e41a41f9a96d21f14",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/35/eb1ddfbbc029bcab630581847471d7f238ec53": "b69277a8e391674b63a06b70141a9094",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/67/a9fbb64552f6b7c729fedf49d54006924356e1": "cd87a34250bc341af457569c2057d4b3",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0e/6c79c1351fcb1d475c391f44f547129d907921": "06d2a888cf7fa28ecdbd567451c1050e",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/be/c7bbe13a1edea91ebcffe1cb66c186f57d6b76": "0fc99656ebbc10f93db602b5d90fdccf",
".git/objects/d1/2bde595d35ed1925473ee00eb185e6be989ef7": "1a41f69c0203ce15974c3029daa506a0",
".git/objects/d1/cf4d1afeb806568e32f647f459622dcef2dd9b": "c48497d70cd54e9c0f851da42733cb86",
".git/objects/d6/b49219ddfd3973476ed52a7777b169cb23d244": "4d0a4bd6de791e0e2563658a70174996",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/ebd4805981b8400db3e3291c74a743fef9a824": "6c33f0e88a71d9ba8563eab3ee932f04",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/d8/0ef10654d942b2b6476611ce9db1cd4f4dc069": "ddd661dd0ab85006a3c976799c63110e",
".git/objects/f4/951e415c52162bdfa5f7a93b76b56be77ad11b": "d5986eb6b10a4f8daf6c91295a09186d",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c0/baf636f27aabd612d03b41dd9ad0fe70af5b4d": "202143bb3a25c7a6e4d695863d7dc8a8",
".git/objects/ee/e07914b4ab8c6db75e6ee03c7dfd3c93f4d564": "4f259bcfa83b29bce5eadd1bd2a5d1ce",
".git/objects/f5/89ca37d210990980a9d9b1a5cb4a29d2db6c70": "8b8d21aac8e6cdbec1fc106163311c31",
".git/objects/fe/a2e3f0cc5f20bfca7758cc2b61d7fc2b5e4d27": "4d422d93fe438b1b794bd4a70c48c466",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/16/274b5aa567757bcd27f07a720787105b3f6783": "91fed425359f3ff1e1ab8b9241ebf33b",
".git/objects/73/9f6eb8430cd7ebc31e49ef398a67627142884d": "f1cefc32101ce38096b1580ba635599f",
".git/objects/87/691764833bdc728854f6ec982b309843333b57": "159f4681494f27478fe5ed031079e2f1",
".git/objects/74/9e076f6369afb796ce1cb645f6baa3a1dd338b": "bd1f6fb15967d617c297a77bf325f132",
".git/objects/7b/0765911c4c1f152000c4776d1ffbf2e5becc92": "ae75f8b6759bac51d8e7c6496d78e63e",
".git/objects/8a/108a40f2b50c38890aa8d3511fb8e5802bd920": "79a67650c983f2aac532817b62138378",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/6817c3c68a9336564d35a440ec24e543a4fbc6": "49d4b11883f9531cb0c8253f7e4f0ba1",
".git/objects/26/d33521af10bcc7fd8cea344038eaaeb78d0ef5": "39554bb11371007e021a7fb3361ecd47",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/81/adc246ab72a0774a8f982c1d347cfd229a3459": "377598a89ab438b7c9626f49b05650a6",
".git/objects/2f/92d972635f44ac296a7cee97c43e70ad2df9ec": "1dad8ddafb8c8e651e72460501b07f1f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/38/98cbca7ee5cd771fbca931a59d4fe442468f00": "e2ef18daeaff24227d32aa5f6da974d8",
".git/objects/09/a92c9b8832798b39a5e780b2bf54752c8cc153": "4b773cab85f76e8d2c17490d2d6913ab",
".git/objects/91/670a7f1c33a7b6f4487be3fd09c4a339cbceb5": "d0927846504b722494e42a52c0c083b5",
".git/objects/62/8500efc5de0b36af31baf6db59079cb8ed9f2f": "a79f841704e15dcc4661fa3e2af95c66",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/3f/02b3b361c2ba779905caa722e525787f34e523": "e51b254d545da6c13be1cd7ae0c0bf58",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/06/32d3aacb9e3227926044a5af4c7b327cb5ad3e": "0090f2734351caa4f8b97586d5707993",
".git/objects/6c/fd6dd054ecfed5ebdc264dcf45babc49bf9b0a": "2335b0145e38c222f2cdc0bb1c7547c8",
".git/objects/63/9900d13c6182e452e33a3bd638e70a0146c785": "488924a8ec51457535ebf377a60e23c8",
".git/objects/64/20a2b27635839bf23e5b3b398aa43367e45391": "86422555f743b04a42a1afd666c74fbd",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/ba/01cd62b269bc51cd712e6a6d0fc0ed568a556b": "838908540d4ce0225720dedf32f265f6",
".git/objects/a7/7c5a0f950a41ec1f10c0ce445d2f96d05a3ff3": "e45d24f8d7308426b6e80c695e6a1521",
".git/objects/b1/2c2d0aecfc514dfdaf9bae1d96166da40bd775": "ac83d5c7ef76a8642d72f9c6be445c4a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/e1/6ccb45089f381aedd61c8bbb92a2e4ef905b66": "257b0add3ec836b6d1f1c12cb8c120c3",
".git/objects/c5/6385a87d4a86bbcb493dc96982c8c8157665d4": "f7c7650f0b4e23ea777183ef37bd10cd",
".git/objects/f1/d48dc073caac4efe31585b39b023aab6283d23": "1d48241c192e36f6fb29693b9336d1ba",
".git/objects/e7/8579f13b88a9e66bbc2e20438842e78b9e9fcd": "8049afdab51789019f4acd5931a8a254",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/f8/705a0b2541c2fd53ab1db8da85f8e6c55017cd": "09460b63e06d7dd31b7a2edd79c40bc7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/f3c99cb7d573b6d912966002d15b8482a0a3c7": "1577dfd8a62530f9206766cab9643e7f",
".git/objects/2d/31c05e1f92f7aa3c56c5f7d0230217d17f83bc": "ee3252d3c00a928ffde8ced8c2f206fc",
".git/objects/2d/5b6d75d1c54b4f49119fa74e4ebb638ba28a8d": "1221e0807a9d4340fe73cf524f0962dd",
".git/objects/77/994057bc051b0eec4794baffb364f7f05bf4f8": "483155db50bcd8ad2d40a4cf33721969",
".git/objects/48/b947d9ea0b65ba2a31ace289a5567238c1f029": "492446bfbd143549277e7cd7da1ff23a",
".git/objects/48/bae00343346cc1a6ec6f40d0ae68c80ced28f0": "23b703df5faa0ab7152ae6f9e663ac21",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1d/b2b6d03ab6866e271c80a2ae292111cb4f33f1": "c60c7b383e4db39887b04bd3f76c205a",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/2e/e7c408b84bac02cdf9f8eeb76493cc49c171c8": "2ea6e0cd725115acf5033310cb92b50b",
".git/objects/78/0939b20c1c9345898c05bb1ab20c14bfe5704b": "95565ec0d7d2c6be893ec958e604ee57",
".git/objects/8b/4e1d3de55550996d687dd0f2d501308adc743c": "fd467fb329d4514b51b9b0b3792a40ef",
".git/objects/7f/29a7bb99f850e7529915c1a89427a125ca216a": "3d7f14cfed29f5cbd49e95dbaeb75609",
".git/objects/7f/29c624722cffdeee12619b42074d64513a1d2e": "4edb828201bbdeb9574bdf49f4ecf6d2",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "006f7f6bdb6bf52f3654b154141c9b85",
".git/logs/refs/heads/master": "8d271e147574a5bb92fcd63de86d2337",
".git/logs/refs/remotes/origin/master": "3e5ead8c0f4e3427797378ade863f33e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "cdf5afa2e416b8b1e1c1720b8a2e18ff",
".git/refs/remotes/origin/master": "cdf5afa2e416b8b1e1c1720b8a2e18ff",
".git/index": "eb0d3b89e802f9dd0d1c1a14b2c7ec6b",
".git/COMMIT_EDITMSG": "abee1ec884ae3c6b42062d7bc19fc6f7",
".git/FETCH_HEAD": "fb5eddfee5ddfe4850fa2216ad7534d0",
".git/sourcetreeconfig": "78c5502249292cdcc8de86506b527383",
"assets/AssetManifest.json": "7cb8a5ac3eb55ed5b885bbb7adb7f53e",
"assets/NOTICES": "dd88153123f49300c1bc51592e2bf3f0",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "c33e3e62b6b6fd6d8bd9dc61f85f215e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/assets/background/landscape.jpg": "202ac480122b60936bf7423fe540136b",
"assets/assets/background/main.png": "20eca4a50f33c11f210ecd4305b52d9e",
"assets/assets/background/portrait.jpg": "ebf2cadaaf18d51b7d2ad030475e7e11",
"assets/assets/logo/logo.png": "710af568800bf03984ae373d7ec1512b",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
".idea/vcs.xml": "8c9c0403ab0f6457841c605f08a3340c",
".idea/workspace.xml": "e681e54278803e1407a7bb56ce5caf85",
".idea/modules.xml": "1eb3b065c55895e347308e50cd717dee",
".idea/web.iml": "52db5efd0fe9f576a1302b8c4b5eac6c",
".idea/misc.xml": "e6b023077aa4876dbe12734108325458"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
