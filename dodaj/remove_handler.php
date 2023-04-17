<?php
session_start();
include("../config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);

$id_produkt = $_GET["produkt"];

$max_min_id = mysqli_query($conn, "SELECT MAX(id_produkt) FROM produkt");
$max_min_id = mysqli_fetch_array($max_min_id);

if($id_produkt <= $max_min_id[0] && $id_produkt > 0){
    $result = mysqli_query($conn, "DELETE FROM produkt WHERE id_produkt = '$id_produkt'");
}
else {
    $_SESSION["error"] = "Nie oszukuj! 😡";
}

header("Location: ../dodaj");