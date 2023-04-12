<?php
session_start();
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
    <?php
    if(isset($_POST["login"])) {
        // sprawdzanie czy prawidlowe dane
        $result = mysqli_query($conn, "SELECT * FROM uzytkownik WHERE login = '$_POST[login]'");
        $row = mysqli_fetch_array($result);
        if($row["haslo"] == $_POST["haslo"]) {
            $_SESSION["login"] = $_POST["login"];
            header("location: ../dodaj");
        }
        else {
            header("location: ../login");
        }
    }
    ?>

    <form method="post">
        <label for="login">Login</label>
        <input type="text" name="login" id="login" required autofocus><br>
        <label for="haslo">Hasło</label>
        <input type="password" name="haslo" id="haslo" required><br>

        <input type="submit" value="Zaloguj się">
    </form>

    <a href="../">Powrót</a>
</body>
</html>