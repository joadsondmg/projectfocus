<?php
include('connection.php');

require 'vendor/autoload.php';

use Firebase\JWT\JWT;

$secret_key = "843d1a72f8e9d8f1d51785b5ccf1c69c589430ab";  // Secret for signing token SHA-1

$data = json_decode(file_get_contents('php://input'), true);
$user = $data['user'];
$password = $data['password'];

$sql = "SELECT * FROM users WHERE user='$user'";
$result = mysqli_query($connection, $sql);
$user = mysqli_fetch_assoc($result);

if ($result->num_rows > 0 && password_verify($password, $user['password'])) {
    if($user['active'] == 1){
        $tokenPayload = [
            'iss' => 'focus',
            'sub' => $user['id'],
            'user' => $user['user'],
            'name' => $user['name'],
            'role' => $user['role'],
            'access' => $user['access']
        ];
        $token = JWT::encode($tokenPayload, $secret_key, 'HS256');
        echo json_encode(['status' => 'success', 'token' => $token]);
    } else {
        echo json_encode(['status' => 'fail', 'message' => 'Usuário suspenso']);
    }
    
} else {
    echo json_encode(['status' => 'fail', 'message' => 'Credenciais inválidas', 'erro' => mysqli_error($connection)]);
}
?>