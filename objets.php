
<?php

$link = mysqli_connect('localhost', 'root', 'root', 'objet_geoescape');
mysqli_set_charset($link, "utf8");

if (!$link) {
    die('Erreur de connexion');
  } 

$data=$_POST['id'];  
$result = mysqli_query($link, "SELECT * FROM objet");
$resultat = [];



if(isset($result)){
  while($rows = mysqli_fetch_assoc($result)){
    $resultat[]=$rows;
  }
  echo json_encode($resultat,JSON_NUMERIC_CHECK);
}elseif(!isset($result)){
  echo "La requete n'est pas bonne";
}  

?>
