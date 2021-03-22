<?php 
include "../token.php";
  $jwt=checkJWT($_GET["token"]);
  echo $jwt;
?>