<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

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

$mail = new PHPMailer();                             
try {
    $mail->SMTPDebug = 0;                               
    $mail->isSMTP();                                      
    $mail->Host = 'mail.smtp2go.com'; 
    $mail->SMTPAuth = true;                             
    $mail->Username = 'admin@binkert-patrick.de';                 
    $mail->Password = '6Es6y2VRmITNfFu9jhgjlhGI!Hih23hi1u24';
    $mail->SMTPSecure = 'tls';                        
    $mail->Port = 2525; 

    $mail->setFrom('admin@binkert-patrick.de', 'Linux-Server <admin@binkert-patrick.de>');
    $mail->addAddress('patrick.binkert@outlook.de', 'Patrick Binkert <patrick.binkert@outlook.de>');  
    $mail->addReplyTo('admin@binkert-patrick.de', 'Linux-Server <admin@binkert-patrick.de>');

    $mail->Subject = $_POST["reference"];
    $mail->Body    =  $message;

    $mail->send();
    echo(true);
} catch (Exception $e) {
    echo(false);
}