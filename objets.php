

<?php

include("connect.php");

// if (isset($_POST['data'])){
//   /* RECUPERATION DES OBJETS */ 

//   $query = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone";

//   //$object_query = "SELECT * FROM objet WHERE id_objet=$id";

//   //$icone_query = "SELECT * FROM icone WHERE id_icone=(SELECT id_icone FROM objet WHERE id_objet=$id)";

//   $objet = mysqli_query($link, $query );
//   $objets = [];

//   $icone = mysqli_query($link, $icone_query);
//   $icones = [];


//   /* TRANSFROMATION EN JSON */

//   if(isset($objet) && isset($icone)){
//     while($rows1 = mysqli_fetch_assoc($objet)){
//       $objets[]=$rows1;
//     }
//     echo json_encode($objets,JSON_NUMERIC_CHECK);
    
//   }elseif(!isset($objet) || !isset($icone)){
//     echo "La requete n'est pas bonne";
//   }  
// }

if (isset($_POST['id_code_debloque'])){
  /* Recuperation infos objets bloqués */

  $id_code_debloque = $_POST['id_code_debloque'];
  $query_code = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone WHERE id_objet=$id_code_debloque";
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

else if (isset($_POST['id_obj_debloque'])){
  /* Recuperation infos objets bloqués */

  $id_obj_debloque = $_POST['id_obj_debloque'];
  $query_obj = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone WHERE id_objet=$id_obj_debloque";
  $retour=mysqli_query($link, $query_obj);
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
} else {
  
   /* RECUPERATION DES OBJETS */ 

   $query = "SELECT * FROM objet AS o JOIN icone AS i ON o.id_icone=i.id_icone";

   $objet = mysqli_query($link, $query );
   $objets = [];
 
   /* TRANSFROMATION EN JSON */
 
   if(isset($objet)){
     while($rows1 = mysqli_fetch_assoc($objet)){
       $objets[]=$rows1;
     }
     echo json_encode($objets,JSON_NUMERIC_CHECK);
     
   }elseif(!isset($objet)){
     echo "La requete n'est pas bonne";
   }  
}
?>
