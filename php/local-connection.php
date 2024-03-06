<?php 
    $dbHost = 'localhost';
    $dbUsername = 'root';
    $dbPassword = '';
    $dbName = 'focus';
    $conexao = mysqli_connect($dbHost,$dbUsername,$dbPassword,$dbName);
    mysqli_set_charset($conexao, "utf8");
    
    if ($conexao -> connect_error) {
        echo "ERRO DE CONEXÃO";
    }
?>