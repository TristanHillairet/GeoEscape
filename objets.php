

<?php

include("connect.php");

if (isset($_POST['id'])){
  /* RECUPERATION DES OBJETS */

  $id=$_POST['id'];  

  $query = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone WHERE id_objet=$id";

  //$object_query = "SELECT * FROM objet WHERE id_objet=$id";

  $icone_query = "SELECT * FROM icone WHERE id_icone=(SELECT id_icone FROM objet WHERE id_objet=$id)";

  $objet = mysqli_query($link, $query );
  $objets = [];

  $icone = mysqli_query($link, $icone_query);
  $icones = [];


  /* TRANSFROMATION EN JSON */

  if(isset($objet) && isset($icone)){
    while($rows1 = mysqli_fetch_assoc($objet)){
      $objets[]=$rows1;
    }
    echo json_encode($objets,JSON_NUMERIC_CHECK);
    
  }elseif(!isset($objet) || !isset($icone)){
    echo "La requete n'est pas bonne";
  }  
}

else if (isset($_POST['id_obj'])){
  /* Recuperation infos objets bloqués */

  $id_obj = $_POST['id_obj'];
  $query_code = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone WHERE id_objet=$id_obj";
  $retour=mysqli_query($link, $query_code);
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
}
?>
