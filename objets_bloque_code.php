<?php 

include("connect.php");

/* Recuperation infos objets bloqués */

$id = $_POST['id_obj'];
echo $id;
$query_code = "SELECT o.popup, i.url FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone WHERE id_objet=$id_code";
$retour=mysqli_query($link, $query);
$retours=[];


/* TRANSFORMATION EN JSON */

if(isset($retour)){
    while($rows1 = mysqli_fetch_assoc($retour)){
        $retours[]=$rows1;
        }
    echo json_encode($retours,JSON_NUMERIC_CHECK);
} else if(!isset($retour)){
    echo "La requete n'est pas bonne";
}
?>

