<?php
include "../token.php";
include "./database.php";
$conn = getConnection();
$sql = "SELECT * FROM book";
$result = $conn->query($sql);
$array = array();
if ($result->num_rows > 0) {
  while ($row = $result->fetch_assoc()) {
    array_push($array, $row);
  }
}


$kk= json_encode($array, JSON_UNESCAPED_UNICODE);
$token=carjwt($kk);
echo $token;


?>