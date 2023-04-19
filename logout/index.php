<?php
session_start();
session_destroy();

if(isset($_SERVER["HTTP_REFERER"])) {
    header("Location: ".$_SERVER["HTTP_REFERER"]);
    return;
}
else {
    echo "<h1 style='text-align: center'>Cheater</h1>".
        "<img style='display: block; margin: auto; height: 90vh;' src='../zdjecia/angry.png'>";
}