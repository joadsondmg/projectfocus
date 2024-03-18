<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id_user = $data['id_user'];
$date = $data['date'];

$sql = "SELECT * FROM results WHERE id_user = '$id_user' AND date = '$date'";

$exec = mysqli_query($connection, $sql);
if($exec->num_rows == 0) {
    echo json_encode(['status' => 'success', 'message' => 'Usuário apto para realizar  o teste']);
} else {
    echo json_encode(['status' => 'denied',  'message' => 'Teste já feito pelo usuário', 'erro' => mysqli_error($connection)]);
}
?>