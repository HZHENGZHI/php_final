<?php
include "../token.php";
  $kk=loginjwt("123","123");
  echo $kk;
  checkJWT($kk);
  
  ?>