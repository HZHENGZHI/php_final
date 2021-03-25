<?php
require 'vendor/autoload.php';
use Medoo\Medoo;
$database = new Medoo([
  // required
  'database_type' => 'mysql',
  'database_name' => 'java_web',
  'server' => 'rm-bp113sao09r93e60yvo.mysql.rds.aliyuncs.com',
  'username' => 'hzz_user',
  'password' => 'DUIdui421',
]);

function getConnection()
{
  $database = new Medoo([
    // required
    'database_type' => 'mysql',
    'database_name' => 'java_web',
    'server' => 'rm-bp113sao09r93e60yvo.mysql.rds.aliyuncs.com',
    'username' => 'hzz_user',
    'password' => 'DUIdui421',
  ]);
  return $database;
}
?> 