<?php
session_start();
include("../config.php");
$conn = mysqli_connect($hostname, $username, $password, $database);

if(!isset($_SESSION["login"])) {
    header("Location: ../login");
}
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
    <p class="error-message"><?php
        if(isset($_SESSION["error"])){
            echo $_SESSION["error"];
            $_SESSION["error"] = "";
        }
    ?></p>

    <form method="post" action="add_handler.php" enctype="multipart/form-data">
        <label for="nazwa">Nazwa</label>
        <input type="text" name="nazwa" id="nazwa" required><br>
        <label for="kod">Kod</label>
        <input type="text" name="kod" id="kod" required><br>
        <label for="kategoria">Kategoria</label>
        <select name="kategoria" id="kategoria">
            <?php
            $kategorie = mysqli_query($conn, "SELECT * FROM kategoria");
            while($row = mysqli_fetch_array($kategorie)) {
                ?>
                    <option value="<?php echo $row['id_kategoria'];?>"><?php echo $row['nazwa'];?></option>
                <?php
            }
            ?>
        </select><br>
        <label for="cena">Cena</label>
        <input type="number" name="cena" id="cena" required><br>
        <label for="zdjecie">Zdjęcie</label>
        <input type="file" name="zdjecie" id="zdjecie"><br>

        <input type="submit" value="Dodaj">
    </form><br>

    <table id="koszyk-tabela">
        <tr>
            <td>Podgląd</td>
            <td>ID</td>
            <td>Produkt</td>
            <td>Kod</td>
            <td>Kategoria</td>
            <td>Cena</td>
            <td>Data dodania</td>
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
                "<td>".$row["data_dodania"]."</td>".
                "<td><a href='remove_handler.php?produkt=".$row["id_produkt"]."'>Usuń</a></td>".
            "</tr>";
        }
        ?>
    </table>
    
    <a href="../">Powrót</a>
</body>
</html>