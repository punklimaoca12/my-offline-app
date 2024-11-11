const CACHE_NAME = "semangat-cache-v1";
const urlsToCache = [
    "/",
    "/index.html",
    "/style.css",
    "/script.js",
    "/audio/gemuruh-riuh.mp3",  // Menambahkan lagu Gemuruh Riuh di cache
    "/audio/button-sound.mp3"
];

// Instal service worker dan cache file
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

// Fetch request untuk menggunakan cache jika offline
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});

// Aktifkan service worker baru dan hapus cache lama
self.addEventListener("activate", (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
// Pengelolaan Request Fetch (Memastikan aplikasi dapat diakses offline)
self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Cek apakah request ada di cache, jika ada berikan file dari cache
            return response || fetch(event.request);  // Jika tidak ada di cache, ambil dari jaringan
        })
    );
});

// Aktivasi Service Worker (Hapus cache lama)
self.addEventListener("activate", (event) => {
    const cacheWhitelist = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (!cacheWhitelist.includes(cacheName)) {
                        // Hapus cache yang sudah tidak digunakan
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
