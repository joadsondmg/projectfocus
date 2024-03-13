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


    $conexao = mysqli_connect($dbHost,$dbUsername,$dbPassword,$dbName);
    mysqli_set_charset($conexao, "utf8");
    
    if ($conexao -> connect_error) {
        echo "ERRO DE CONEXÃO";
    }
?>