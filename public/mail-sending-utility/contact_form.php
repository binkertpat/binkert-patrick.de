<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
require 'vendor/autoload.php';

$message = "";

if(isset($_POST["firstname"])) {
    $message = $message."Vorname: ".$_POST["firstname"]."\r\n\n";
}

if(isset($_POST["lastname"])) {
    $message = $message."Nachname: ".$_POST["lastname"]."\r\n\n";
}

if(isset($_POST["email"])) {
    $message = $message."E-Mail: ".$_POST["email"]."\r\n\n";
}

if(isset($_POST["reference"])) {
    $message = $message."Betreff: ".$_POST["reference"]."\r\n\n";
}

if(isset($_POST["issue"])) {
    $message = $message."Anliegen:\r\n".$_POST["issue"]."\r\n\n";
}

$mail = new PHPMailer();                             
try {
    $mail->SMTPDebug = 0;                               
    $mail->isSMTP();                                      
    $mail->Host = 'mail.smtp2go.com'; 
    $mail->SMTPAuth = true;                             
    $mail->Username = 'admin@binkert-patrick.de';                 
    $mail->Password = $_ENV['SMTP_CREDENTIALS'];
    $mail->SMTPSecure = 'tls';                        
    $mail->Port = 2525; 

    $mail->setFrom('admin@binkert-patrick.de', 'Linux-Server');
    $mail->addAddress('patrick.binkert@outlook.de', 'Patrick Binkert <patrick.binkert@outlook.de>');  
    $mail->addReplyTo('admin@binkert-patrick.de', 'Linux-Server <admin@binkert-patrick.de>');

    $mail->Subject = $_POST["reference"];
    $mail->Body    =  $message;

    $mail->send();
    echo(true);
    header('Location: https://binkert-patrick.de/contact?success=true');
    exit;
} catch (Exception $e) {
    header('Location: https://binkert-patrick.de/contact?success=false');
    exit;
}