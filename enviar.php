<?php 

    require 'PHPMailer-master/src/PHPMailer.php';
    require 'PHPMailer-master/src/Exception.php';
    require 'PHPMailer-master/src/SMTP.php';

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    $metodo = $_SERVER['REQUEST_METHOD'];


    if( $metodo != "POST") {
        header('Location: index.html');
    }else {
        //VALIDACIÓN
        //VARIABLES
        $miCorreo = 'lucasdeveloper98@gmail.com';
        $nombre = $_POST['name'];
        $email = $_POST['email'];
        $asunto = $_POST['asunto'];
        $mensaje = $_POST['mensaje'];

        
        $rta = mail($miCorreo, $asunto, "De: $nombre $mensaje");

        if ($rta) {
            header('Location: index.html');
        }
    }
    

    die();