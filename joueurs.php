<?php

include("connect.php");

if (isset($_POST['nom'])){

    $nom=$_POST['nom'];
    $query = "INSERT INTO joueurs(id,nom,time) VALUES (NULL,$nom,NULL)";
    mysqli_query($link, $query);

    $query2 = "SELECT id FROM joueurs ORDER BY joueurs.id DESC LIMIT 1";
    $id = mysqli_query($link, $query2);

    if (isset($id)){
        echo $id;
    }

    else if (!isset($id)) {
        echo "la requête n'est pas bonne";
    }

}

else if (isset($_POST['data'])){

    $time=$_POST['data']['time'];
    $id=$_POST['data']['id'];

    $query = "UPDATE joueurs SET time=$time WHERE joueurs.id=$id";
    mysqli_query($link, $query);

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