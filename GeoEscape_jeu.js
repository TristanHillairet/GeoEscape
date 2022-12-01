//                                      GEOESCAPE_JEU.JS
// L.WECKER et T.HILLAIRET
// 11/2022
// Définition et utilité du fichier


/*AFFICHAGE DE LA CARTE*/

let paris = [48.856614, 2.3522219];/*Point de départ*/
let map = L.map('map').setView(paris, 13);/*Initialisation de la carte au point de départ*/

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);/*Chargement du fond openstreetmap*/

/*RECHERCHE DANS LA BDD*/

fetch('objets.php', {
  method: 'post',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
.then(r => r.json())
.then(r => { 
  console.log(r);
  for (i=0;i<13;i++){
    let id = r[i]['id_objet'];
    let lat = r[i]['lat'];    
    let lon = r[i]['lon'];
    let zoom_m=r[i]['zoom_min'];
    let icone = r[i]['url'];
    let popup = r[i]['popup'];
    let debut = r[i]['debut'];
    let type = r[i]['type'];                          //si 1 : récupérable ; si 2 : bloqué par code ; 3 :bloqué par objet ; 4: aucun des 3 
    let id_objet_bloque = r[i]['id_objet_bloque'];
    let id_necessaire_pour_debloque = r[i]['id_necessaire_pour_debloque'];
    let code = r[i]['code'];
    let size_icone_x = r[i]['taille_x'];
    let size_icone_y = r[i]['taille_y'];
    if (debut == 1){
      initialisation(lat,lon,zoom_m,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y);
    }
  } 
})


// initialisation des layers

let layergroup_10 = L.layerGroup();
let layergroup_14 = L.layerGroup();
let layergroup_16 = L.layerGroup(); 

// fonction d'initialisation

function initialisation(lat,lon,zoom_m,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y){
  if (zoom_m == 10){
    createMarker10(lat,lon,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y);/*cf création markers*/
  } else if (zoom_m == 14){        
    createMarker14(lat,lon,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y);/*cf création markers*/
  } else if (zoom_m == 16){
    createMarker16(lat,lon,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y);/*cf création markers*/
  }
}

//Création d'un marker de niveau de zoom minimum 10
function createMarker10(lat,lon,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [size_icone_x, size_icone_y],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              type_objet:type,/*Transfert du status de prenabilité au marker*/
              id_objet:id,
              id_objet_bloque:id_objet_bloque,
              id_necessaire_pour_debloque:id_necessaire_pour_debloque,
              code: code
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
function createMarker14(lat,lon,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [size_icone_x, size_icone_y],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              type_objet: type,/*Transfert du status de prenabilité au marker*/
              id_objet:id,
              id_objet_bloque:id_objet_bloque,
              id_necessaire_pour_debloque:id_necessaire_pour_debloque,
              code:code
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
function createMarker16(lat,lon,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y){
  var img = L.icon({
    iconUrl: icone,
    iconSize: [size_icone_x, size_icone_y],
    iconAnchor: [25,25],
    popupAnchor: [-3, -20]
  });
  var marker = new L.Marker([lat,lon], {
              icon: img,/*Transfert de l'icone de l'objet au marker*/
              type_objet: type,/*Transfert du status de prenabilité au marker*/
              id_objet: id,
              id_objet_bloque:id_objet_bloque,
              id_necessaire_pour_debloque:id_necessaire_pour_debloque,
              code:code
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
  } 
}

//     /*RECUPERATION DE L'OBJET SUR LA CARTE POUR L'INVENTAIRE*/

let inventaire = [];

function recup(e){
  inventaire.push(e);
  e.target.remove();
  console.log(inventaire);
  affiche_inventaire_apres_recup(inventaire);
};

function affiche_inventaire_apres_recup(inventaire){
  for (i=0;i<inventaire.length;i++){
    var url_icone = inventaire[i].target.options.icon.options.iconUrl;
    var div_img = document.getElementById(i+1);
    div_img.style.widht='200px';
    div_img.style.height='200px';
    div_img.src=url_icone;
  }
}

function affiche_inventaire_apres_debloque(inventaire){
  var j=1;
  for (i=0;i<inventaire.length;i++){
    var url_icone = inventaire[i].target.options.icon.options.iconUrl;
    var div_img = document.getElementById(i+1);
    div_img.style.widht='200px';
    div_img.style.height='200px';
    div_img.src=url_icone;
    j+=1;
  }
  var url_icone = "";
  var div_img = document.getElementById(j);
  div_img.style.widht='200px';
  div_img.style.height='200px';
  div_img.src=url_icone;
}


/*CONNEXION A LA BASE DE DONNEE POUR RECUPERER DES OBJETS BLOQUE*/

function connexion_bdd_objet(body){
  fetch('objets.php',{
    method: 'post',
    body: body,
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
    let type = r[0]['type'];             //si 1 : récupérable ; si 2 : bloqué par code ; 3 :bloqué par objet ; 4: aucun des 3 
    let id_objet_bloque = r[0]['id_objet_bloque'];
    let id_necessaire_pour_debloque = r[0]['id_necessaire_pour_debloque'];
    let code = r[0]['code'];
    let size_icone_x = r[0]['taille_x'];
    let size_icone_y = r[0]['taille_y'];
    initialisation(lat,lon,zoom_m,icone,popup,type,id,id_objet_bloque,id_necessaire_pour_debloque,code,size_icone_x,size_icone_y);
  })
}

/*DEBLOQUER UN OBJET*/

function debloque_objet(e){
  var id_obj_pour_debloque = e.target.options.id_necessaire_pour_debloque
  for (i=0;i<=inventaire.length;i++){                 // pas necessaire pour nous, mais si on veut rajouter des objets si
    if (inventaire[i].target.options.id_objet == id_obj_pour_debloque){
      var id_obj_debloque = 'id_obj_debloque='+ e.target.options.id_objet_bloque;
      connexion_bdd_objet(id_obj_debloque);
      e.target.remove();
      inventaire.splice(i,1);
    }
    console.log(inventaire);
    affiche_inventaire_apres_debloque(inventaire);
  }
}

/*DEBLOQUER UN OBJET BLOQUE PAR CODE*/

function debloque_code(e){
  var code = prompt("entrez le code pour décrypter la lettre");
  alert(code);
  var verif_code = e.target.options.code;
  if (code.toUpperCase()==verif_code){
    var id_code_debloque = 'id_code_debloque='+e.target.options.id_objet_bloque;
    connexion_bdd_objet(id_code_debloque);
    e.target.remove();
  } else {
    alert("code mauvais")
  }
}

/*CHRONOMETRE*/





