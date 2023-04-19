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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="shortcut icon" href="../favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
<!-- <form method="post" action="add_handler.php" enctype="multipart/form-data">
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

    <table class="koszyk-tabela">
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
    
     -->

    <div class="container">
        <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 col-sm-12">
                <form method="post" action="add_handler.php" enctype="multipart/form-data">
                    <h3 class="text-center">Dodaj produkt</h3>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="nazwa" id="nazwa" placeholder="nazwa" autofocus required>
                        <label for="nazwa">Nazwa</label>
                    </div>
                    <div class="form-floating mb-3">
                        <input type="text" class="form-control" name="kod" id="kod" placeholder="kod" required>
                        <label for="kod">Kod</label>
                    </div>
                    <label for="kategoria">Kategoria</label>
                    <select class="form-select" name="kategoria" id="kategoria">
                        <?php
                        $kategorie = mysqli_query($conn, "SELECT * FROM kategoria");
                        while($row = mysqli_fetch_array($kategorie)) {
                            ?>
                                <option value="<?php echo $row['id_kategoria'];?>"><?php echo $row['nazwa'];?></option>
                            <?php
                        }
                        ?>
                    </select><br>
                    <div class="form-floating mb-3">
                        <input type="number" min="0" class="form-control" name="cena" id="cena" placeholder="cena" required>
                        <label for="cena">Cena</label>
                    </div>
                    <label for="zdjecie">Zdjęcie</label>
                    <input class="form-control" type="file" name="zdjecie" id="zdjecie"><br>
                    <input class="form-control btn btn-success" type="submit" value="Dodaj">
                </form>

                <img style="display: block; margin: auto; width: 400px; height: auto;" src="../zdjecia/win.png">
                
                <div class="footer">
                    <table>
                        <tr>
                            <td><a class="btn btn-primary" href="../">Powrót</a></td>
                            <td><a class="btn btn-secondary" href="../logout">Wyloguj</a></td>
                        </tr>
                    </table>
                </div>
            </div>

            <div class="info koszyk col-lg-6 col-md-6 col-sm-12">
                <h3 class="text-center">Produkty w bazie</h3>
                    <table class="koszyk-tabela">
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
            </div>
        </div>
    </div>
</body>
</html>