<?php
include("../config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);
?>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dzień Otwarty 2023</title>
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <div>
        <table id="koszyk-tabela">
            <tr>
                <td>Podgląd</td>
                <td>ID</td>
                <td>Produkt</td>
                <td>Kod</td>
                <td>Kategoria</td>
                <td>Cena</td>
            </tr>
            <?php
            $produkty = mysqli_query($conn, "SELECT * FROM produkt");

            while($row = mysqli_fetch_array($produkty)) {
                $kategoria = mysqli_query($conn, "SELECT nazwa FROM kategoria WHERE id_kategoria = '$row[id_kategoria]'");
                $kategoria = mysqli_fetch_array($kategoria);
                
                echo 
                "<tr>".
                    "<td><img src='../zdjecia/".$row["zdjecie"]."'></td>".
                    "<td>".$row["id_produkt"]."</td>".
                    "<td>".$row["nazwa"]."</td>".
                    "<td>".$row["kod"]."</td>".
                    "<td>".$kategoria["nazwa"]."</td>".
                    "<td>".$row["cena"]."</td>".
                "</tr>";
            }
            ?>
        </table>
    </div>
</body>
</html>