<?php


$user ='root';
	$pass = '';
	$db ='console';
	$db = new mysqli('localhost',$user,$pass,$db);
	$email = $_POST['loginemail'];
	$stmt = $db->prepare("SELECT * FROM register WHERE console_email = ?");
	$stmt->bind_param("i", $email);
	$stmt->execute();
  $stmt->store_result();
$count=$stmt->num_rows;

	session_start();
	$_SESSION['email'] = $_POST['loginemail'];
  if($count > 0) {
         header("location: ../profile.html");
      }else {
         $error = "Your Login Name or Password is invalid";
				 header("location: ../sample.ajax");
      }
$stmt->close();
$db->close();
?>
