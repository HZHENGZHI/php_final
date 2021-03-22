<?php
  include "./database.php";
  $conn=getConnection();
  $sql="SELECT * FROM book";
  $result=$conn->query($sql);
  $array=array();
  if($result->num_rows>0)
  {
    while ($row = $result->fetch_assoc())
    {
      array_push($array,$row);
    }
  }
  echo json_encode($array,JSON_UNESCAPED_UNICODE);
  
?>