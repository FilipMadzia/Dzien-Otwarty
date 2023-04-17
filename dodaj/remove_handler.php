<?php
session_start();
include("../config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);

$id_produkt = $_GET["produkt"];

$result = mysqli_query($conn, "DELETE FROM produkt WHERE id_produkt = '$id_produkt'");

header("Location: ../dodaj");