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
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <?php
    $produkty = mysqli_query($conn, "SELECT * FROM produkt");
    $kategorie = mysqli_query($conn, "SELECT * FROM kategoria");

    while($row = mysqli_fetch_array($produkty)) {
        $produkt = json_encode($row);
        ?><script>dodajProdukt(<?php echo $produkt;?>)</script><?php
    }
    while($row = mysqli_fetch_array($kategorie)) {
        $kategoria = json_encode($row);
        ?><script>dodajKategorie(<?php echo $kategoria;?>)</script><?php
    }
    ?>

    <form id="skaner">
        <label for="kod">Zeskanuj produkt lub wpisz ręcznie kod produktu</label>
        <input onblur="focus()" type="text" name="kod" id="kod" autofocus>
        <!-- Przycisk dodania -->
        <a href="dodaj">Dodaj produkt</a>
    </form>

    <table id="koszyk-tabela">
        <tr>
            <td>Podgląd</td>
            <td>ID</td>
            <td>Produkt</td>
            <td>Kod</td>
            <td>Kategoria</td>
            <td>Cena</td>
        </tr>
    </table>

    <p>Suma: <span id="cena">0</span>zł</p>
</body>
</html>