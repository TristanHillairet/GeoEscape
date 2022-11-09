
let paris = [48.85, 2.35];
let map = L.map('map').setView(paris, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let mark = new L.LayerGroup();
map.addLayer(mark);

let marker = L.marker([48.85, 2.35]);

map.on('zoom', function(){
    var zoom = map.getZoom();
    if (zoom > 14){
        marker.addTo(mark);
    } else{
        mark.clearLayers();
    }
})

