<?php
$servername = "rm-bp113sao09r93e60yvo.mysql.rds.aliyuncs.com";
$username = "hzz_user";
$password = "DUIdui421";
$dbname = "java_web";

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);
$sql = "SELECT * FROM user where userid=" . $_POST["userid"];
$result = $conn->query($sql);
if($result->num_rows>0)
{
  echo 1;
}
else 
{
  echo 0;
}
?>