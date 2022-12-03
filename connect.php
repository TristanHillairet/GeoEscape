<?php
//Ce fichier sert de lien entre les autres fichiers php et la base de donnée objet_geoescape
$link = mysqli_connect('localhost', 'root', 'root', 'BDDGEOESCAPE');
mysqli_set_charset($link, "utf8");
?>