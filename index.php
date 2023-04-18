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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>
    <?php
    $produkty = mysqli_query($conn, "SELECT * FROM produkt");

    while($row = mysqli_fetch_array($produkty)) {
        $produkt = json_encode($row);
        ?><script>dodajProdukt(<?php echo $produkt;?>)</script><?php
    }
    ?>

    <div class="container">
        <div class="row justify-content-center">
            <div class="koszyk col-lg-4 col-md-8 col-sm-12">
                <table id="koszyk-tabela">
                    <tr>
                        <td>Podgląd</td>
                        <td>Produkt</td>
                        <td>Cena</td>
                    </tr>
                </table>
            </div>

            <div class="info col-lg-4 col-md-8 col-sm-12">
                <h1><img class="approve" src="zdjecia/approve.png"> Symulator Kasy <img class="approve" src="zdjecia/approve.png"></h1>
                
                <form id="skaner">
                    <p>Chcesz wpisać kod ręcznie? Kliknij <span onclick="toggleScanner()" class="btn btn-secondary">tutaj</span></p>
                    <input onblur="focus()" type="text" name="kod" id="kod" autofocus placeholder="Wpisz kod">
                </form>

                <a href="dodaj">Dodaj produkt</a>
                
                <div class="footer">
                    <table>
                        <tr>
                            <td><h4>Suma: <span id="cena">0</span>zł</h4></td>
                            <td><button class="btn btn-success" id="zaplac">Zapłać</button></td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    </div>
</body>
</html>