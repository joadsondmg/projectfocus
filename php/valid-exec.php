<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id_user = $data['id_user'];
$date = $data['today_date'];

$sql = "SELECT * FROM results WHERE id_user = '$id_user' AND date = '$date'";

$exec = mysqli_query($conexao, $sql);
$result = mysqli_fetch_assoc($exec);
if($result) {
    echo json_encode(['status' => 'denied']);
} else {
    echo json_encode(['status' => 'success', 'erro' => mysqli_error($conexao)]);
}
?>