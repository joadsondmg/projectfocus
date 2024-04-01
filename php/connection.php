<?php 
    // Local Connection
    // $dbHost = 'localhost';
    // $dbUsername = 'root';
    // $dbPassword = '';
    // $dbName = 'focus';

    // Hostinger Connection
    $dbHost = 'localhost';
    $dbUsername = 'u177475397_rootfocus';
    $dbPassword = 'Root_control1!@#$%fcs';
    $dbName = 'u177475397_focus';


    $connection = mysqli_connect($dbHost,$dbUsername,$dbPassword,$dbName);
    mysqli_set_charset($connection, "utf8");
    
    if ($connection -> connect_error) {
        echo "ERRO DE CONEXÃO";
    }
?>