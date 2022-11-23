//                                      GEOESCAPE_JEU.JS
// L.WECKER et T.HILLAIRET
// 11/2022
// Définition et utilité du fichier


/*AFFICHAGE DE LA CARTE*/

let paris = [48.857527, 2.351466];/*Point de départ*/
let map = L.map('map').setView(paris, 13);/*Initialisation de la carte au point de départ*/

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);/*Chargement du fond openstreetmap*/

/*RECHERCHE DANS LA BDD*/


for (i=1;i<=12;i++){

  var id = 'id='+i;
  fetch('objets.php', {
    method: 'post',
    body: id,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(r => r.json())
  .then(r => {
    console.log(r);
    //for(let i=0;i<12;i++){
    let id = r[0]['id_objet'];
    let lat = r[0]['lat'];    
    let lon = r[0]['lon'];
    let zoom_m=r[0]['zoom_min'];
    let icone = r[0]['url'];
    let popup = r[0]['popup'];
    let takable =r[0]['open_status'];
    console.log(takable);
    //if (open_status == true){
    initialisation(lat,lon,zoom_m,icone,popup,takable)
    //}
    // map.on('zoom', function(){
    //   console.log(map.getZoom());
    //   console.log(layerGroup_10.getLayers())
    //   afficher_marker(mark,zoom_min);
    // });
    //}
  })
}


// initialisation des layers

let layergroup_10 = L.layerGroup();
//layergroup_10.addTo(map);  

let layergroup_14 = L.layerGroup();
//layergroup_14.addTo(map); 

let layergroup_16 = L.layerGroup();
//layergroup_16.addTo(map); 

// fonction d'initialisation

function initialisation(lat,lon,zoom_m,icone,popup,takable_status){
  if (zoom_m == 10){
    createMarker10(lat,lon,icone,popup,takable_status);/*cf création markers*/
  } else if (zoom_m == 14){        
    createMarker14(lat,lon,icone,popup,takable_status);/*cf création markers*/
  } else if (zoom_m == 16){
    createMarker16(lat,lon,icone,popup,takable_status);/*cf création markers*/
  }
}

//Création d'un marker de niveau de zoom minimum 10
function createMarker10(lat,lon,icone,popup,takable_status){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [56, 56],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              //isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
             })
  marker.bindPopup(popup);
  layergroup_10.addLayer(marker);/*Ajout du marker au layer10*/
}

//Création d'un marker de niveau de zoom minimum 14
function createMarker14(lat,lon,icone,popup,takable_status){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [56, 56],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              //isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
            });
  marker.bindPopup(popup);
  layergroup_14.addLayer(marker);/*Ajout du marker au layer14*/
}

//Création d'un marker de niveau de zoom minimum 16
function createMarker16(lat,lon,icone,popup,takable_status){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [56, 56],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              //isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
            })
  marker.bindPopup(popup);
  layergroup_16.addLayer(marker);/*Ajout du marker au layer16*/
}

//Affichage des markers de niveau de zoom correspondant

map.on('zoom',function(){
  var zoom = map.getZoom();
  console.log(zoom);
  if (zoom >= 16){
    map.addLayer(layergroup_16);
  } else {
    map.removeLayer(layergroup_16);
  }

  if (zoom >= 14){
    map.addLayer(layergroup_14);
  } else {
    map.removeLayer(layergroup_14);
  }

  if (zoom >=10){
    map.addLayer(layergroup_10);
  } else {
    map.removeLayer(layergroup_10)
  }
})

function printMarker(marker,zoom){
  var zmap = map.getZoom();/*Récupère le zoom actuel de la carte*/
  if (zmap > zoom){
    marker.setOpacity(1.0);/*Si le zoom de la map est supérieur au zoom minimum de l'objet il s'affiche*/
  }
}

//Evenement quand la souris passe dessus un marqueur

// marker.on('mouseover',function(e){
//   marker.openPopup();/*Ouverture du Popup du marker*/
// });

//Evenement de clic sur un marqueur

// marker.on('click',function(e){
//   if (marker.isTakable == true){
//       /*RECUPERATION DE L'OBJET DANS L'INVENTAIRE*/
//   }
//   else {
//       alert("Objet non récupérable");
//   }
// });
/*
var icon_statut = L.icon({
  iconUrl: 'image_icon/statue-of-liberty.png',
  // iconShadow:
  iconSize:     [56, 56], // size of the icon
  // shadowSize:   [50, 64], // size of the shadow
  iconAnchor:   [25, 25], // point of the icon which will correspond to marker's location
  // shadowAnchor: [4, 62],  // the same for the shadow
  popupAnchor:  [-3, -20] // point from which the popup should open relative to the iconAnchor
});
*/

/*UTILISATIOIN D'UN OBJET DE L'INVENTAIRE*/

/*DEBLOQUER UN OBJET*/

/*CHRONOMETRE*/





