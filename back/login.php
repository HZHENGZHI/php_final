<?php
  include "../token.php";
  $servername = "rm-bp113sao09r93e60yvo.mysql.rds.aliyuncs.com";
  $username = "hzz_user";
  $password = "DUIdui421";
  $dbname = "java_web";

  // 创建连接
  $conn = new mysqli($servername, $username, $password, $dbname);
  $sql = "SELECT * FROM user where userid=" . $_POST["id"] . " and userid=" . $_POST["pw"];
  $result = $conn->query($sql);
  $ar=array();

  if($result->num_rows>0)
  {
    $kk=loginjwt($_POST["id"], $_POST["pw"]);
    echo $kk;
  }
  else 
  {
    return 0;
  }
?>