

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


var layerGroup_10 = new L.layerGroup();
layerGroup_10.addTo(map);

var layerGroup_14 = new L.layerGroup();
layerGroup_14.addTo(map);

var layerGroup_16 = new L.layerGroup();
layerGroup_16.addTo(map);

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
  for(let i=0;i<12;i++){
    let lat = r[i]['lat'];
    let lon = r[i]['lon'];
    let zoom_min = r[i]['zoom_min'];
    let id = r[i]['id_objet'];
    let id_icone = r[i]['id_icone'];
    let debut = r[i]['debut'];

    if (debut == 1){
      if (zoom_min == 10){
        creer_marker_10(lat,lon);
      } else if (zoom_min == 14){
        creer_marker_14(lat,lon);
      } else if (zoom_min == 16){
        creer_marker_16(lat,lon);
      }
    }
    map.on('zoom', function(){
      console.log(map.getZoom());
      console.log(layerGroup_10.getLayers())
      afficher_marker(mark,zoom_min);
    });
  }
})


function creer_marker_10(lat,lon){
  var mark = new L.Marker([lat,lon], {icon: icon_statut});
  layerGroup_10.addLayer(mark);
}

function creer_marker_14(lat,lon){
  var mark = new L.Marker([lat,lon], {icon: icon_statut});
  layerGroup_14.addLayer(mark);
}

function creer_marker_16(lat,lon){
  var mark = new L.Marker([lat,lon], {icon: icon_statut});
  layerGroup_16.addLayer(mark);
}


function afficher_marker(mark,zoom_min){
  var zoom = map.getZoom();
  if (zoom > zoom_min){
    mark.setOpacity(1);
  } else {
    mark.setOpacity(0);
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
});
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


//                                  INVENTAIRE

//Récupération d'un objet dans l'inventaire 

var circle = L.circle([0, 0]);
var click_lat = 0;
var click_lon = 0;
function onMapClick(e) {
    //On get les coordonnées du click sur la carte
    click_lat = e.latlng.lat;
    click_lon = e.latlng.lng;
    circle = L.circle([click_lat, click_lon], {radius: 10});
    console.log('lat = '+click_lat+' lon = '+click_lon);
}
map.on('click',onMapClick);

//  1.2- on vérifie que le click n'est pas à plus de 10 m d'un objet récupérable

//  1.3- Si le click est à moins de 10m d'un objet on créer un élément dans la div inventaire pour y placer l'objet

//2-Utilisation d'un objet dans l'inventaire
// 2.1-On drag & drop l'objet sur la carte
// 2.2-Si l'objet nécéssitant l'utilisation est affiché on enlève l'objet de l'inventaire
// 2.3-On dévérouille l'objet débloquable