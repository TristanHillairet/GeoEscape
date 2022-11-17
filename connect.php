
<?php
$link = mysqli_connect('localhost', 'root', 'root', 'objet_geoescape');

if (!$link) {
  die('Erreur de connexion');
} else {
  echo 'Succès... ';
}
?>

<?php mysqli_set_charset($link, "utf8"); ?>