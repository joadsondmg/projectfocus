<?php
include('connection.php');

require 'vendor/autoload.php';

use Firebase\JWT\JWT;

$secret_key = "teste";

$data = json_decode(file_get_contents('php://input'), true);
$user = $data['user'];
$pass = $data['password'];

$sql = "SELECT * FROM users WHERE user='$user' AND password='$pass'";

$result = mysqli_query($connection, $sql);
$user = mysqli_fetch_assoc($result);
if(isset($user)) {
    $tokenPayload = [
        'iss' => 'focus',
        'sub' => $user['id'],
        'user' => $user['user'],
        'name' => $user['name'],
        'role' => $user['role']
    ];
    $token = JWT::encode($tokenPayload, $secret_key, 'HS256');
    echo json_encode(['status' => 'success','token' => $token]);
} else {
    echo json_encode(['status' => 'fail', 'message' => 'Credenciais inválidas', 'erro' => mysqli_error($connection)]);
}
?>