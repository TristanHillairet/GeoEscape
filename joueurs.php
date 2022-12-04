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
    $ID_J = mysqli_query($link, $query1); 
    $ID = [];

    if (isset($ID_J)){
        while($rowData = mysqli_fetch_array($ID_J)){
            $id_j = $rowData["id"];
        }
    }   

    $time = $_POST['time'];
    $query2 = "UPDATE joueurs SET time='$time' WHERE joueurs.id='$id_j'";
    mysqli_query($link, $query2);

    echo 'base de donnée modifiée';

}

else if (isset($_POST['endpage'])){

    $query1 = "SELECT id FROM joueurs ORDER BY joueurs.id DESC LIMIT 1";
    $ID_J = mysqli_query($link, $query1); 
    $ID = [];

    if (isset($ID_J)){
        while($rowData = mysqli_fetch_array($ID_J)){
            $id_j = $rowData["id"];
        }
    }  

    $query2 = "SELECT nom,time FROM joueurs WHERE joueurs.id='$id_j'";
    $joueur = mysqli_query($link, $query2);
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