<?php
  include "../database.php";

  
  function checkaccount($id,$pw)
  {
    $database=getConnection();
    $datas=$database->select("user","*",[
      "userid"=>$id,
      "userpw"=>$pw
    ]);
    if(sizeof($datas)>=1)
    {
      return false;
    }
    else
    {
      return true;
    }
  }
  function resiginaccount($id,$pw,$truename,$birthday,$sex)
  {
    $database=getConnection();
    $datas=$database->insert("user",[
      "userid"=>$id,
      "userpw"=>$pw,
      "truename"=>$truename,
      "birthday"=>$birthday,
      "sex"=>$sex
    ]);
  }

  if(checkaccount($_POST["userid"],$_POST["userpw"])===TRUE)
  {
    resiginaccount($_POST["userid"], $_POST["userpw"], $_POST["truename"], $_POST["birthday"], $_POST["sex"]);
  } else 
  {
    echo $_POST["userid"].$_POST["userpw"];

  }
?>
