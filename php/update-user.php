<?php 
include('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];
$password = $data['password'];
$access = 1;

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sql = "UPDATE users SET password='$hashed_password', access='$access' WHERE id='$id'";
$exec = mysqli_query($connection, $sql);

if($exec) {
    echo json_encode(['status' => 'success', 'message' => 'Senha atualizada com sucesso!']);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>