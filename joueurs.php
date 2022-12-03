<?php

include("connect.php");

if (isset($_POST['nom'])){

    $nom_j = $_POST['nom'];
    $query = "INSERT INTO joueurs(id,nom,time) VALUES (NULL,'$nom_j','06:00:00')";
    mysqli_query($link, $query);

    echo 'base de donnée modifiée';

}

else if (isset($_POST['time'])){

    $query1 = "SELECT id FROM joueurs ORDER BY joueurs.id DESC LIMIT 1";
    $id_j = mysqli_query($link, $query1); 

    $time=$_POST['time'];

    $query2 = "UPDATE joueurs SET time=$time WHERE joueurs.id=$id_j";
    mysqli_query($link, $query2);

}

else {

    $query = "SELECT nom,time FROM joueurs ORDER BY joueurs.time ASC LIMIT 10";

    $joueur = mysqli_query($link, $query);
    $joueurs = [];
    
    if (isset($joueur)){
        while($rows1 = mysqli_fetch_assoc($joueur)){
            $joueurs[]=$rows1;
        }
        echo json_encode($joueurs, JSON_NUMERIC_CHECK);
    }

    else if (!isset($joueur)){
        echo "la requête n'est pas bonne";
    }

}

?>