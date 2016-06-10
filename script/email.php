<?php
require_once('/var/www/cred/email_config.php');
require('../phpmailer/PHPMailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
// Enable verbose debug output
$mail->SMTPDebug = 0;
// Set mailer to use SMTP
$mail->isSMTP();
// Specify main and backup SMTP servers
$mail->Host = 'smtp.gmail.com';
// Enable SMTP authentication
$mail->SMTPAuth = true;
// SMTP username
$mail->Username = EMAIL_USER;
// SMTP password
$mail->Password = EMAIL_PASS;
// Enable TLS encryption, `ssl` also accepted
$mail->SMTPSecure = 'tls';
// TCP port to connect to
$mail->Port = 587;

$options = array(
    'ssl' => array(
        'verify_peer' => false,
        'verify_peer_name' => false,
        'allow_self_signed' => true
    )
);

$mail->smtpConnect($options);

if (!empty($_POST)) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    //your email sending account
    $mail->From = 'jar4677@gmail.com';
    //your email sending account name
    $mail->FromName = $name;
    // Add a recipient
    $mail->addAddress('jonathan.a.rasmussen@gmail.com');
    $mail->addReplyTo($email);
    // Set email format to HTML
    $mail->isHTML(true);

    $mail->Subject = "Portfolio Message from $name";
    $mail->Body = $message;
    $mail->AltBody = 'This message is in HTML';

    if (!$mail->send()) {
        $response = [
            'success' => false,
            'msg' => 'Message has not been sent'
        ];
    } else {
        $response = [
            'success' => true,
            'msg' => 'Message has been sent'
        ];
    }
} else {
    $response = [
        'success' => false,
        'msg' => 'POST error'
    ];
}

print(json_encode($response));

?>
