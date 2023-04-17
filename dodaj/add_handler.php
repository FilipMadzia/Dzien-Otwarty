<?php
session_start();
include("../config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);

if(!isset($_SESSION["login"])) {
    header("Location: ../login");
}
$zdjecie_dir = basename($_FILES["zdjecie"]["name"]);
$zdjecie = "../zdjecia/".$zdjecie_dir;
move_uploaded_file($_FILES["zdjecie"]["tmp_name"], $zdjecie);

$result = mysqli_query($conn, "INSERT INTO produkt(nazwa, kod, id_kategoria, cena, data_dodania, zdjecie) VALUES('$_POST[nazwa]', '$_POST[kod]', '$_POST[kategoria]', '$_POST[cena]', NOW(), '$zdjecie_dir')");

header("Location: ../dodaj");