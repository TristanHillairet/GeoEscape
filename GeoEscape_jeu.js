

let amsterdam = [52.36674, 4.92621];
let map = L.map('map').setView(amsterdam, 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let mark = new L.LayerGroup();
map.addLayer(mark);

let marker = L.marker([48.85, 2.35]);

var data = 'id='+1;

fetch('objets.php', {
  method: 'post',
  body: data,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(r =>  r.json())
.then(r => {
  console.log(r)
})



var icon_statut = L.icon({
    iconUrl: 'image_icon/statue-of-liberty.png',
    // iconShadow:
    iconSize:     [56, 56], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
})

let marker_ams = L.marker([52.36674, 4.92621], {icon: icon_statut})
map.on('zoom', function(){
    var zoom = map.getZoom();
    if (zoom > 14){
        marker_ams.addTo(mark);
    } else{
        mark.clearLayers();
    }
})



// coord moulin d'amsterdam : 52.36674, 4.92621