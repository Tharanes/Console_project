<?php
session_start();
echo $_SESSION['email'];
$user ='root';
$pass = '';
$db ='console';
$db = new mysqli('localhost',$user,$pass,$db);
$sql = "SELECT * FROM detail";
$res = mysqli_query($db,$sql);
$arr = array();
while($data =mysqli_fetch_assoc($res)){
  $arr[] = $data;
}
$filename = fopen('log.json','w');
fwrite($filename,json_encode($arr));
 ?>
