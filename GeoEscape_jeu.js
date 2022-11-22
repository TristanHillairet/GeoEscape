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

var data = 'id='+1;
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
    var id = r[i]['id_objet'];/*Récupère l'id de l'objet*/
    var lat = r[i]['lat'];/*Récupère la latitde de l'objet*/
    var lon = r[i]['lon']/*Récupère la longitude de l'objet*/
    var zoom_m = r[i]['zoom_min'];/*Récupère le niveau de zoom à partir duquel l'objet s'affiche*/
    var takable_status = r[i]['takable_status'];/*Récupère l'information si l'objet est récupérable*/
    var id_icone = r[i]['id_icone'];/*Récupère l'id de l'icone de l'objet*/
    var popup = r[i]['popup'];/*Récupère le Popup de l'objet*/
    /*POTENTIELLEMENT REFAIRE UN FETCH POUR ALLER CHERCHER L'ICONE*/
    var open_status = r[i]['open_status'];/*Récupère l'information si l'objet est affichable ou non*/

    if (open_status == true){
      if (zoom_m == 10){
        createMarker10(lat,lon,icone,popup,takable_status);/*cf création markers*/
      } else if (zoom_m == 14){
        createMarker14(lat,lon,icone,popup,takable_status);/*cf création markers*/
      } else if (zoom_m == 16){
        createMarker16(lat,lon,icone,popup,takable_status);/*cf création markers*/
      }
    }
    map.on('zoom', function(){
      printMarker(marker,zoom_m);
    });
  }
})

/*CREATION DES MARKERS DE LEAFLET*/

var layergroup_10 = new L.layerGroup();/*Création du Layer au niveau de zoom minimum 10*/
var layergroup_14 = new L.layerGroup();/*Création du Layer au niveau de zoom minimum 14*/
var layergroup_16 = new L.layerGroup();/*Création du Layer au niveau de zoom minimum 16*/

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
marker.on('mouseover',function(e){
  marker.openPopup();/*Ouverture du Popup du marker*/
});

//Evenement de clic sur un marqueur
marker.on('click',function(e){
  if (marker.isTakable == true){
      /*RECUPERATION DE L'OBJET DANS L'INVENTAIRE*/
  }
  else {
      alert("Objet non récupérable");
  }
});

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