<?php
include('connection.php');

require 'vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secret_key = "teste";

$data = json_decode(file_get_contents('php://input'), true);
$token = $data['token'];

$alg = new stdClass();
$alg->algorithm = 'HS256';

try {
    $user_data = JWT::decode($token, new Key($secret_key, 'HS256'));
    echo json_encode(['status' => 'success', 'data' => $user_data]);
} catch (Exception $e) {
    echo json_encode(['status' => 'fail', 'message' => 'Erro na Desencriptação', 'error' => $e->getMessage(), 'token'=> $token]);
}
?>