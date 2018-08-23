<?php
$file = "register.json";
$json_string = json_encode($_POST, JSON_PRETTY_PRINT);
file_put_contents($file, $json_string, FILE_APPEND);
$user ='root';
	$pass = '';
	$db ='console';

	$db = new mysqli('localhost',$user,$pass,$db);
	$stmt = $db->prepare("INSERT INTO register (console_email) VALUES (?)");
	$stmt->bind_param('s',$email);
	// $sql = "INSERT INTO register (console_email) VALUES ('$email')";
	// mysqli_query($db,$sql);
	$email = $_POST['registeremail'];
	$stmt->execute();
	$stmt->close();
  $db->close();
	header('Location: ../sample.ajax');
?>
