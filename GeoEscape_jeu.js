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
    let id = r[0]['id_objet'];
    let lat = r[0]['lat'];    
    let lon = r[0]['lon'];
    let zoom_m=r[0]['zoom_min'];
    let icone = r[0]['url'];
    let popup = r[0]['popup'];
    let takable =r[0]['takable'];
    let debut = r[0]['debut'];
    if (debut == 1){
      initialisation(lat,lon,zoom_m,icone,popup,takable)
    }
  })
}


// initialisation des layers

let layergroup_10 = L.layerGroup();
let layergroup_14 = L.layerGroup();
let layergroup_16 = L.layerGroup(); 

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
              isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
             })
  marker.bindPopup(popup);
  layergroup_10.addLayer(marker);/*Ajout du marker au layer10*/
  marker.on('click',recup);
  marker.bindPopup(popup);
  marker.on('mouseover', function (e) {
    this.openPopup();
  });
  marker.on('mouseout', function (e) {
    this.closePopup();
  });
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
              isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
            });
  marker.bindPopup(popup);
  layergroup_14.addLayer(marker);/*Ajout du marker au layer14*/
  marker.on('click',recup);
  marker.bindPopup(popup);
  marker.on('mouseover', function (e) {
    this.openPopup();
  });
  marker.on('mouseout', function (e) {
    this.closePopup();
  });
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
              isTakable: takable_status,/*Transfert du status de prenabilité au marker*/
            })
  marker.bindPopup(popup);
  layergroup_16.addLayer(marker);/*Ajout du marker au layer16*/
  marker.on('click',recup)
  marker.bindPopup(popup);
  marker.on('mouseover', function (e) {
    this.openPopup();
  });
  marker.on('mouseout', function (e) {
    this.closePopup();
  });
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
    map.removeLayer(layergroup_10);
  }
})

//     /*RECUPERATION DE L'OBJET SUR LA CARTE POUR L'INVENTAIRE*/

let inventaire = [];
function recup(e){
  console.log(e);
  if (e.target.options.isTakable== 1){
    inventaire.push(e);
    e.target.remove();
    var url_icone = e.target.options.icon.options.iconUrl;
    var div_img = document.getElementById("image");
    div_img.style.widht='200px';
    div_img.style.height='200px';
    div_img.src=url_icone;
  } else {
    alert("Objet non récupérable");
  }
  console.log(inventaire);
};


/*UTILISATIOIN D'UN OBJET DE L'INVENTAIRE*/



/*DEBLOQUER UN OBJET*/
//test
/*DEBLOQUER UN OBJET BLOQUE PAR CODE*/

/*CHRONOMETRE*/





