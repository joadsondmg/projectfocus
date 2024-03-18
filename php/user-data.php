<?php
require 'vendor/autoload.php';

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

$secret_key = "843d1a72f8e9d8f1d51785b5ccf1c69c589430ab";

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