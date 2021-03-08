 <?php
      // 创建连接
      function getConnection() {
        $servername = "rm-bp113sao09r93e60yvo.mysql.rds.aliyuncs.com";
        $username = "hzz_user";
        $password = "DUIdui421";
        $dbname = "java_web";
        return new mysqli($servername, $username, $password, $dbname);
      }
      
      // // // 检测连接
      // $conn=getConnection();
      // if ($conn->connect_error) {
      //   die("连接失败: " . $conn->connect_error);
      // }
      // $sql = "SELECT * FROM user ";
      // $result = $conn->query($sql);
      // $ar = array();
      // $i = 0;
      // if ($result->num_rows > 0) {
      //   // 输出数据
      //   while ($row = $result->fetch_assoc()) {
      //     array_push($ar, $row);
      //   }
      // } else {
      //   echo "0 结果";
      // }

      // $arrlength = count($ar);

      // // for ($x = 0; $x < $arrlength; $x++) {
      // //   echo $ar[$x];
      // //   echo "<br>";
      // // }
      // echo json_encode($ar, JSON_UNESCAPED_UNICODE);
      // $conn->close();
      ?> 