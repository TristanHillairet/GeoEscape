/*                      OBJETS.PHP                      */
/* L.WECKER et T.HILLAIRET                              */
/* 11/2022                                              */
/* Définition du fichier                                */


<?php

/* CONNEXION AU LIEN */

$link = mysqli_connect('localhost', 'root', 'root', 'objet_geoescape');
mysqli_set_charset($link, "utf8");

/* CATCH ERREUR DE CONNEXION */

if (!$link) {
  die('Erreur de connexion');/*Renvoie une erreur de connexion*/
} 

/* RECUPERATION DES OBJETS */

$data=$_POST['data'];  
$result = mysqli_query($link, "SELECT * FROM objet");
$resultat = [];

/* TRANSFROMATION EN JSON */

if(isset($result)){
  while($rows = mysqli_fetch_assoc($result)){
    $resultat[]=$rows;
  }
  echo json_encode($resultat,JSON_NUMERIC_CHECK);
}elseif(!isset($result)){
  echo "La requete n'est pas bonne";
}  

?>
