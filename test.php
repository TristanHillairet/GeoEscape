<?php

include('connect.php');
$query1 = "SELECT id FROM joueurs ORDER BY joueurs.id DESC LIMIT 1";
$ID_J = mysqli_query($link, $query1); 
$ID = [];

if (isset($ID_J)){
    while($rowData = mysqli_fetch_array($ID_J)){
        $id_j = $rowData["id"];
    }
}

$time='06:00:00';
$query2 = "UPDATE joueurs SET time='$time' WHERE joueurs.id='$id_j'";
mysqli_query($link, $query2);

?>