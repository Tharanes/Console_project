<?php
session_start();
echo $_SESSION['email'];
$e = $_SESSION['email'];
  $user ='root';
	$pass = '';
	$db ='console';
	$db = new mysqli('localhost',$user,$pass,$db);
	$name = $_POST['updatename'];
  $age = $_POST['updateage'];
  $city = $_POST['updatecity'];
  $phone = $_POST['updatephone'];
  $dept = $_POST['updatedept'];
  $email = $_POST['updateemail'];
  $nationality = $_POST['updatenationality'];
  $gender = $_POST['updategender'];
	$stmt = $db->prepare("INSERT INTO detail (detail_name,detail_age,detail_email,detail_phone,detail_city,detail_dept,detail_nationality,detail_gender) VALUES (?,?,?,?,?,?,?,?)");
	$stmt->bind_param('sisissss',$name,$age,$e,$phone,$city,$dept,$nationality,$gender);
  $stmt->execute();
	$stmt->close();
  header('location: ../profile.html');
 ?>
