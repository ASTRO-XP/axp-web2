<?php
if(!empty($_POST['website'])) die();
// Define some constants
define( "RECIPIENT_NAME", "Astro XP Inquiries" );
define( "RECIPIENT_EMAIL", "inquiries@astroxp.io" );

// Read the form values
$success = false;
$fromName = isset( $_POST['username'] ) ? preg_replace( "/[^\s\S\.\-\_\@a-zA-Z0-9]/", "", $_POST['username'] ) : "";
$fromEmail = isset( $_POST['email'] ) ? preg_replace( "/[^\.\-\_\@a-zA-Z0-9]/", "", $_POST['email'] ) : "";
$message = isset( $_POST['message'] ) ? preg_replace( "/(From:|To:|BCC:|CC:|Subject:|Content-Type:)/", "", $_POST['message'] ) : "";

// If all values exist, send the email
if ( $fromName && $fromEmail && $message) {
  $sender = RECIPIENT_NAME . " <" . RECIPIENT_EMAIL . ">";
  $from = filter_var($fromName, FILTER_SANITIZE_STRING).' <'.filter_var($fromEmail, FILTER_SANITIZE_EMAIL).'>';
  $subject = "Astro XP Inquiries - Astronian: " . $fromName . ""; 

    $headers .= "From: ". $from . "\r\n";
    $headers .= "Cc: Astro XP Official <astroxp.official@astroxp.io>\r\n"; 
    $headers .= "X-Sender: " . $sender . "\r\n";
    $headers .= 'X-Mailer: PHP/' . phpversion();
    $headers .= "X-Priority: 3\r\n";
    $headers .= "Return-Path: astroxp.official@astroxp.io\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=iso-8859-1";
  
  $msgBody = nl2br($message);
  $success = mail( $sender, $subject, $msgBody, $headers );

  //Set Location After Successsfull Submission
  header('Location: https://' . $_SERVER['HTTP_HOST'] . '?message=Successfull');
}

else{
	//Set Location After Unsuccesssfull Submission
  	header('Location: https://' . $_SERVER['HTTP_HOST'] . $_SERVER['REQUEST_URI'] . '?message=Failed');	
}

?>