<?php

$link = mysqli_connect('localhost', 'root', 'root', 'objet_geoescape');
mysqli_set_charset($link, "utf8");

if (!$link) {
    die('Erreur de connexion');
  } else {
    echo 'Succès... ';
  }

$results = mysqli_query($link, "SELECT zoom_min FROM objet where id=1");

$resultat = []

foreach ($results as $result) {
    $resultat[] = $result;
}

echo json_encode($resultat);

?>
