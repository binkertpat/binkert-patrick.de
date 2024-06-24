<?php

$message = "";

if(isset($_POST["firstname"])) {
    $message = $message."Vorname: ".$_POST["firstname"]."\r\n<br/><br/>";
}

if(isset($_POST["lastname"])) {
    $message = $message."Nachname: ".$_POST["lastname"]."\r\n<br/><br/>";
}

if(isset($_POST["email"])) {
    $message = $message."E-Mail: ".$_POST["email"]."\r\n<br/><br/>";
}

if(isset($_POST["reference"])) {
    $message = $message."Betreff: ".$_POST["reference"]."\r\n<br/><br/>";
}

if(isset($_POST["issue"])) {
    $message = $message."Anliegen:\r\n".$_POST["issue"]."\r\n<br/><br/>";
}

$empfaenger = "patrick.binkert@outlook.de";
$betreff = "TESTI TEST";
$from = "From: LinuxServer <admin@binkert-patrick.de>\r\n";
$from .= "Reply-To: admin@binkert-patrick.de.de\r\n";
$from .= "Content-Type: text/html\r\n";

mail($empfaenger, $betreff, $message, $from);

header('Location: /contact?firstname='.$_POST["firstname"].'&lastname='.$_POST["lastname"].'&email='.$_POST["email"].'&reference='.$_POST["reference"].'&i>


