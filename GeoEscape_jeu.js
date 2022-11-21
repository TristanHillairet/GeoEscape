

let amsterdam = [52.36674, 4.92621];
let map = L.map('map').setView(amsterdam, 13);

// var mapOptions = {
//   center : [52.36674, 4.92621];
//   zoom: 7;
// }
// var map = new L.map('map', mapOptions); //Creation d'un objet map

// var layer = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
// map.addLayer(layer); // ajout du layer à la map

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var data = 'id='+1;

// on va chercher les infos des objets de la base de donnée avec le fetch

fetch('objets.php', {
  method: 'post',
  body: data,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(r => r.json())
.then(r => {
  let lat = r[0]['lat'];
  let lon = r[0]['lon'];
  let zoom_min = r[0]['zoom_min'];
  let id = r[0]['id_objet'];

  var layerGroup = new L.layerGroup();
  layerGroup.addTo(map);
  var mark = new L.Marker([lat,lon], {icon: icon_statut});
  layerGroup.addLayer(mark);

  map.on('zoom', function(){
    afficher_marker(mark,lat,lon,zoom_min,id);
  });
})



function afficher_marker(mark,lat,lon,zoom_min,id){
  var zoom = map.getZoom();
  console.log(zoom, zoom_min);
  if (zoom > zoom_min){
    mark.setOpacity(1);
  } else {
    mark.setOpacity(0);
    console.log(mark)
  }
}



 var icon_statut = L.icon({
    iconUrl: 'image_icon/statue-of-liberty.png',
    // iconShadow:
    iconSize:     [56, 56], // size of the icon
    // shadowSize:   [50, 64], // size of the shadow
    iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
    // shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
})

// let marker_ams = L.marker([52.36674, 4.92621], {icon: icon_statut})
// map.on('zoom', function(){
//     var zoom = map.getZoom();
//     console.log(zoom);
//     if (zoom > 14){
//         marker_ams.addTo(layer);
//     } else{
//         layer.clearLayers();
//     }
// })



// coord moulin d'amsterdam : 52.36674, 4.92621