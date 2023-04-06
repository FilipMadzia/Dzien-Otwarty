<?php
include("config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dzień Otwarty 2023</title>
    <link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
    <script src="script.js"></script>
</head>
<body>
    <?php
    $produkty = mysqli_query($conn, "SELECT * FROM produkt");

    while($row = mysqli_fetch_array($produkty)) {
        $produkt = json_encode($row);
        echo "<script>addProduct(".$produkt.")</script>";
    }
    ?>

    <form></form>
</body>
</html>