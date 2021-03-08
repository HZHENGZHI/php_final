<?php
  include "./database.php";

  
  function checkaccount($id,$pw)
  {
    $conn=getConnection();
    $sql="select * from user where userid=".$id ." and userpw=".$pw;
    $result = $conn->query($sql);
    if($result->num_rows > 0)
    {
      return false;
    }
    else if($result->num_rows ==0)
    {
      return true;
    }
  }
  function resiginaccount($id,$pw,$truename,$birthday,$sex)
  {
    $conn=getConnection();
    $sql="insert into user (userid,userpw,truename,birthday,sex) values ('" .$id ."','".$pw."','".$truename."','".$birthday."','".$sex."')";
    echo $sql;
    $conn->query($sql);
  }

  if(checkaccount($_POST["userid"],$_POST["userpw"])===TRUE)
  {
    resiginaccount($_POST["userid"], $_POST["userpw"], $_POST["truename"], $_POST["birthday"], $_POST["sex"]);
  } else 
  {
    echo 0;
  }
?>
