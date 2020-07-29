<?php
require "database.php";
$name=$_POST['name'];
$username=$_POST['username'];
$email=$_POST['email'];
$password=$_POST['password'];
$status='1';
$sql ="INSERT INTO `users`(`id`, `name`, `username`, `email`, `password`, `status`) VALUES (NULL,'$name','$username','$email','$password','$status')";
// echo $sql;
$conn->query($sql);
