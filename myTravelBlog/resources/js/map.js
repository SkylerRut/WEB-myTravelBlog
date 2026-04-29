var map = L.map("map").setView([0, 0], 1);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

map.on("click", function (e) {
    const lat = e.latlng.lat;
    const lng = e.latlng.lng;
    
    L.marker([lat, lng]).addTo(map);
});