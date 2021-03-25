<?php
include "../token.php";
include "../database.php";
use Medoo\Medoo;
$database = new Medoo([
  // required
  'database_type' => 'mysql',
  'database_name' => 'java_web',
  'server' => 'rm-bp113sao09r93e60yvo.mysql.rds.aliyuncs.com',
  'username' => 'hzz_user',
  'password' => 'DUIdui421',
]);
$datas = $database->select("book", [
    "book_name",
]);

foreach ($datas as $data) {
  echo "user_name:" . $data["book_name"];
}

?>