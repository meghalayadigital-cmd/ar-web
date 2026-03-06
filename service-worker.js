const CACHE_NAME = "meghalaya-ar-v1";

const urlsToCache = [

"./",
"./index.html",
"./targets.mind",

"./videos/001.mp4",
"./videos/002.mp4",
"./videos/003.mp4"

];

self.addEventListener("install",event=>{

event.waitUntil(

caches.open(CACHE_NAME)
.then(cache=>{

return cache.addAll(urlsToCache);

})

);

});



self.addEventListener("fetch",event=>{

event.respondWith(

caches.match(event.request)
.then(response=>{

return response || fetch(event.request);

})

);

});
