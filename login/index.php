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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="../style.css">
</head>
<body>
    <?php
    if(isset($_POST["login"])) {
        // sprawdzanie czy prawidlowe dane
        $result = mysqli_query($conn, "SELECT * FROM uzytkownik WHERE login = '$_POST[login]'");
        $row = mysqli_fetch_array($result);

        if(is_null($row["login"])) {
            $_SESSION["error-message"] = "Złe hasło czy coś 😴";
            header("location: ../login");
            return;
        }
        else if($row["haslo"] == $_POST["haslo"]) {
            $_SESSION["login"] = $_POST["login"];
            header("location: ../dodaj");
        }
    }
    ?>

    <div class="container">
		<div class="row justify-content-center">
			<form class="col-lg-3 col-md-6 col-sm-12 mt-3" method="post">
				<h3 class="text-center">Zaloguj się</h3>
                <p class="text-center" style="color: red;"><?php
                    if(isset($_SESSION["error-message"])) {
                        echo $_SESSION["error-message"];
                        $_SESSION["error-message"] = "";
                    }
                ?></p>
				<div class="form-floating mb-3">
					<input type="text" class="form-control" name="login" id="login" placeholder="login" autofocus required>
					<label for="login">Login</label>
				</div>
				<div class="form-floating mb-3">
					<input type="password" class="form-control" name="haslo" id="haslo" placeholder="haslo" required>
					<label for="haslo">Hasło</label>
				</div>
				<input class="form-control btn btn-success" type="submit" value="Dalej">
            </form>

            <h3 class="text-center mt-4">Kliknij mnie, aby wrócić</h3>
            <a class="text-center" href="../">
                <img style="width: 400px; height: auto" src="../zdjecia/rizz.png">
            </a>
		</div>
	</div>

</body>
</html>