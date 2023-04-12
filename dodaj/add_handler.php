<?php
session_start();
include("../config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);

if(!isset($_SESSION["login"])) {
    header("Location: ../login");
}

$result = mysqli_query($conn, "INSERT INTO produkt(nazwa, kod, id_kategoria, cena, data_dodania) VALUES('$_POST[nazwa]', '$_POST[kod]', '$_POST[kategoria]', '$_POST[cena]', NOW())");

header("Location: ../dodaj");