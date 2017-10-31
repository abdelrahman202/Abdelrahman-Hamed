<?php 
$to = "body.hamed@outlook.com";
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST["email"];
$area = $_POST["area"];



        $message = "==========================================================\n";
        $message.= "Name       : $name                                        \n"; 
		$message.= "phone      : $phone                                        \n";
		$message.= "Email      : $email                                       \n";
        $message.= "area       : $area                                         \n";
        $message.= "==============WELCOME TO BE - Abdelrahman Hamed============\n";






$headers = " From: " . $email;
mail($to, 'Abdelrahman Website', $headers, $message); 
echo "Successfully Sent To Abdelrahman Hamed"; 
?>