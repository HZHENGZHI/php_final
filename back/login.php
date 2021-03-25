<?php
  include "../token.php";
  include "../database.php";

  $userid=$_POST['id'];
  $userpw=$_POST['pw'];
  $database=getConnection();
  $datas=$database->select("user",
    "*",
  [
    "userid"=>$userid,
    "userpw"=>$userpw
  ]);

  if(sizeof($datas)==1)
  {
    echo loginjwt($_POST['id'], $_POST['pw']);
  }
  else
  {
    echo 0;
  }
?>