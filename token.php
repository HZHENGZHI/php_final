<?php
require __DIR__ . '/vendor/autoload.php';
use \Firebase\JWT\JWT;
	function loginjwt($id,$pw)
	{
		$key = "accesslogin";
		$ar=array("id"=>$id,"pw"=>$pw,'exp' => time() + 3600*24*7);
		$jwt=JWT::encode($ar,$key);
		return $jwt;
	}


	function carjwt($car)
	{
		$key="car";
		$ar=array("car"=>$car,'exp'=>time()+3600*24*7);
		$jwt=JWT::encode($ar,$key);
		return $jwt;
	}

	function checkout($car)
	{
			$key="car";
			try {
				JWT::$leeway = 60; //当前时间减去60，把时间留点余地
				$decoded = JWT::decode($car, $key, ['HS256']); //HS256方式，这里要和签发的时候对应
				$arr = (array)$decoded;
				print_r($arr);
			} catch (\Firebase\JWT\SignatureInvalidException $e) {  //签名不正确
				return 0;
			} catch (\Firebase\JWT\BeforeValidException $e) {  // 签名在某个时间点之后才能用
				return 0;
			} catch (\Firebase\JWT\ExpiredException $e) {  // token过期
				return 0;
			} catch (Exception $e) {  //其他错误
				return 0;
			}
	}
	function checkJWT($jwt)
	{
		$key = "accesslogin";
		try {
					JWT::$leeway = 60;//当前时间减去60，把时间留点余地
					$decoded = JWT::decode($jwt, $key, ['HS256']); //HS256方式，这里要和签发的时候对应
					$arr = (array)$decoded;
					return $arr;
	    	} catch(\Firebase\JWT\SignatureInvalidException $e) {  //签名不正确
	    		return 0;
	    	}catch(\Firebase\JWT\BeforeValidException $e) {  // 签名在某个时间点之后才能用
	    		return 0;
	    	}catch(\Firebase\JWT\ExpiredException $e) {  // token过期
	    		return 0;
	   	}catch(Exception $e) {  //其他错误
	    		return 0;
	    	}
	}
?>