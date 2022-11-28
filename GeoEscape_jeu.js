//                                      GEOESCAPE_JEU.JS
// L.WECKER et T.HILLAIRET
// 11/2022
// Définition et utilité du fichier


/*AFFICHAGE DE LA CARTE*/

let paris = [52.36674, 4.92621];/*Point de départ*/
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
    let debut = r[0]['debut'];
    let type = r[0]['type'];  //si 1 : récupérable ; si 2 : bloqué par code ; 3 :bloqué par objet ; 4: aucun des 3 
    if (debut == 1){
      initialisation(lat,lon,zoom_m,icone,popup,type,id);
    } else {
      bloque(lat,lon,zoom_m,icone,popup,type,id);
    }
  })
}


// initialisation des layers

let layergroup_10 = L.layerGroup();
let layergroup_14 = L.layerGroup();
let layergroup_16 = L.layerGroup(); 

// fonction d'initialisation

function initialisation(lat,lon,zoom_m,icone,popup,type,id){
  if (zoom_m == 10){
    createMarker10(lat,lon,icone,popup,type,id);/*cf création markers*/
  } else if (zoom_m == 14){        
    createMarker14(lat,lon,icone,popup,type,id);/*cf création markers*/
  } else if (zoom_m == 16){
    createMarker16(lat,lon,icone,popup,type,id);/*cf création markers*/
  }
}

//Création d'un marker de niveau de zoom minimum 10
function createMarker10(lat,lon,icone,popup,type,id){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [56, 56],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              type_objet:type,/*Transfert du status de prenabilité au marker*/
              id_objet:id
             })
  marker.bindPopup(popup);
  layergroup_10.addLayer(marker);/*Ajout du marker au layer10*/
  marker.on('click',recherche_type);
  marker.bindPopup(popup);
  marker.on('mouseover', function (e) {
    this.openPopup();
  });
  marker.on('mouseout', function (e) {
    this.closePopup();
  });
}

//Création d'un marker de niveau de zoom minimum 14
function createMarker14(lat,lon,icone,popup,type,id){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [56, 56],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              type_objet: type,/*Transfert du status de prenabilité au marker*/
              id_objet:id
            });
  marker.bindPopup(popup);
  layergroup_14.addLayer(marker);/*Ajout du marker au layer14*/
  marker.on('click',recherche_type);
  marker.bindPopup(popup);
  marker.on('mouseover', function (e) {
    this.openPopup();
  });
  marker.on('mouseout', function (e) {
    this.closePopup();
  });
}

//Création d'un marker de niveau de zoom minimum 16
function createMarker16(lat,lon,icone,popup,type,id){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [56, 56],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              type_objet: type,/*Transfert du status de prenabilité au marker*/
              id_objet: id
            })
  marker.bindPopup(popup);
  layergroup_16.addLayer(marker);/*Ajout du marker au layer16*/
  marker.on('click',recherche_type)
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


function recherche_type(e){
  var typ = e.target.options.type_objet;
  if (typ == 1){
    recup(e);
  } else if (typ == 2){
    debloque_code(e);
  } else if (typ == 3){
    debloque_objet(e);
  } else {
    alert("objet non récupérable");
  }
}


//     /*RECUPERATION DE L'OBJET SUR LA CARTE POUR L'INVENTAIRE*/

let inventaire = [];
function recup(e){
  inventaire.push(e);
  e.target.remove();
  var url_icone = e.target.options.icon.options.iconUrl;
  var div_img = document.getElementById("image_1");
  div_img.style.widht='200px';
  div_img.style.height='200px';
  div_img.src=url_icone;
};


/*UTILISATIOIN D'UN OBJET DE L'INVENTAIRE*/



/*DEBLOQUER UN OBJET*/

/*DEBLOQUER UN OBJET BLOQUE PAR CODE*/

function debloque_code(e){
  var id_obj = 'id_obj=' + e.target.options.id_objet;
  console.log(id_obj);
  fetch('objets.php', {
    method: 'post',
    body: id_obj,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })
  .then(r => r.json())
  .then(r => {
    let id_obj_debloque = r[0]['id_objet_debloque'];
    let zoom_min = r[0]['zoom_min'];
    let lat = r[0]['lat'];
    let lon = r[0]['lon'];
    let icone = r[0]['url'];
    let type = r[0]['type'];
    let popup = r[0]['popup'];
    if (zoom_min == 10){
      createMarker10(lat,lon,icone,popup,type,id_obj_debloque);
    } else if (zoom_min == 14){
      createMarker14(lat,lon,icone,popup,type,id_obj_debloque);
    } else if (zoom_min == 16){
      createMarker16(lat,lon,icone,popup,type,id_obj_debloque);
    }
  })
  e.target.remove();
}

/*CHRONOMETRE*/





