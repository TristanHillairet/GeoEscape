

<?php


$link = mysqli_connect('localhost', 'root', 'root', 'objet_geoescape');
mysqli_set_charset($link, "utf8");
/* RECUPERATION DES OBJETS */

$id=$_POST['id'];  

$query = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone WHERE id_objet=$id";

$object_query = "SELECT * FROM objet WHERE id_objet=$id";

$icone_query = "SELECT * FROM icone WHERE id_icone=(SELECT id_icone FROM objet WHERE id_objet=$id)";

$objet = mysqli_query($link, $query );
$objets = [];

$icone = mysqli_query($link, $icone_query);
$icones = [];


/* RECUPERATION DES ICONES */



// $id_icone=$_POST['id_icone'];
// $icone = mysqli_query($link, "SELECT * FROM icone WHERE id_icone = $id_icone")

/* TRANSFROMATION EN JSON */

if(isset($objet) && isset($icone)){
  while($rows1 = mysqli_fetch_assoc($objet)){
    $objets[]=$rows1;
  }
  echo json_encode($objets,JSON_NUMERIC_CHECK);
  
}elseif(!isset($objet) || !isset($icone)){
  echo "La requete n'est pas bonne";
}  

?>
