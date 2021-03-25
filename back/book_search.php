<?php
  include "../database.php";
  include "../token.php";
  
  function select()
  {
    $database=getConnection();
    $data=$database->select("book","*");
    echo json_encode($data);
  }



function isGet()
{
  return $_SERVER['REQUEST_METHOD'] == 'GET' ? true : false;
}
function isPost()
{
  return $_SERVER['REQUEST_METHOD']=='POST'? true : false;
}
  if(isGet()==true)
  {
    select();
  }


  function insertbook($jwt)
  {
    $getdata = json_decode($_POST['kk']);
    // print_r($getdata->book_name);
    $token = checkJWT($jwt);
    // echo $token["id"];
    $database = getConnection();
    $bookdata = $database->select(
      "shopping_car",
      "*",
      [
        "userid" => $token["id"],
        "book_name" => $getdata->book_name
      ]
    );
    $old_nums = $bookdata[0]["book_nums"];
    if (sizeof($bookdata) == 0) {
      //插入操作
      $database->insert("shopping_car", [
        "userid" => $token["id"],
        "book_name" => $getdata->book_name,
        "book_nums" => "1",
        "book_price" => $getdata->book_price
      ]);
    } else if (sizeof($bookdata) != 0) {
      //更新操作
      $database->update("shopping_car", [
        "book_nums" => $old_nums + 1
      ], [
        "userid" => $token["id"],
        "book_name" => $getdata->book_name,
      ]);
    }
  }
  

  if(isPost()==true)
  {
    $jwt=$_POST['token'];
    if($_POST['method']=='shopping_car')
    {
     insertbook($jwt);
    }
    else if($_POST['method']=='add_collection')
    {
      $data=$_POST["kk"];
      echo $data;
    }
    else if($_POST['method']=="total_car")
    {
      insertbook($jwt);
    }
  }

?>