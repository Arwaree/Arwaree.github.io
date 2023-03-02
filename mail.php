<?php 

if(isset($_POST)){
    $nombre= $_POST["name"];
    $email= $_POST["mail"];
    $subject= $_POST["subject"];
    $message= $_POST["message"];
    $header = "From: noreply@example.com" + "\r\n";
    $header .= "Reply-To: noreply@example.com" + "\r\n";
    $header .= "X-Mailer: PHP/".phpversion();
    $mail = mail($email,$subject,$message,$header);
    if ($mail){
        echo "sas papa";
    }
}







?>