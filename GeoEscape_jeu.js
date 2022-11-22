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
    let id = r[i]['id_objet'];
    let lat = r[i]['lat'];    let lon = r[i]['lon'];
    zoom_m=r[i]['zoom_min'];
    console.log(zoom_m);
    let id_icone = r[i]['id_icone'];
    let debut = r[i]['debut'];
    if (open_status == true){
    if (zoom_m == 10){
      createMarker10(lat,lon,icone,popup,takable_status);/*cf création markers*/
    } else if (zoom_m == 14){        createMarker14(lat,lon,icone,popup,takable_status);/*cf création markers*/
    } else if (zoom_m == 16){
      createMarker16(lat,lon,icone,popup,takable_status);/*cf création markers*/
    }
    }
    map.on('zoom', function(){
      console.log(map.getZoom());
      console.log(layerGroup_10.getLayers())
      afficher_marker(mark,zoom_min);
    });
    //}
  })
}

//Création d'un marker de niveau de zoom minimum 10
function createMarker10(lat,lon,icone,popup,takable_status){
  var marker = new L.Marker([lat,lon], {
              icon: icon_statut,/*Transfert de l'icone de l'objet au marker*/
              isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
              opacity: 0.0/*Par défaut le marker n'est pas visible*/
             });
  marker.bindPopup(popup);
  layergroup_10.addLayer(marker);/*Ajout du marker au layer10*/
}

//Création d'un marker de niveau de zoom minimum 14
function createMarker14(lat,lon,icone,popup,takable_status){
  var marker = new L.Marker([lat,lon], {
              icon: icone,/*Transfert de l'icone de l'objet au marker*/
              isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
              opacity: 0.0/*Par défaut le marker n'est pas visible*/
            });
  marker.bindPopup(popup);
  layergroup_14.addLayer(marker);/*Ajout du marker au layer14*/
}

//Création d'un marker de niveau de zoom minimum 16
function createMarker16(lat,lon,icone,popup,takable_status){
  var marker = new L.Marker([lat,lon], {
              icon: icone,/*Transfert de l'icone de l'objet au marker*/
              isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
              opacity: 0.0/*Par défaut le marker n'est pas visible*/
            });
  marker.bindPopup(popup);
  layergroup_16.addLayer(marker);/*Ajout du marker au layer16*/
}

//Affichage des markers de niveau de zoom correspondant
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

/*UTILISATIOIN D'UN OBJET DE L'INVENTAIRE*/

/*DEBLOQUER UN OBJET*/

/*CHRONOMETRE*/

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