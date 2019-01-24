<?php 
session_start();
$_SESSION['pp'] = true;
header("Location: /");
?>