<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id_user = $data['id_user'];
$date = $data['date'];
$time = $data['time'];
$result = $data['result'];
$o_error = $data['o_error'];
$a_error = $data['a_error'];

$sql = "INSERT INTO results (id_user, date, time, result, o_error, a_error) VALUES (
    '$id_user',
    '$date',
    '$time',
    '$result',
    '$o_error',
    '$a_error'
)";

$exec = mysqli_query($connection, $sql);
if($exec) {
    echo json_encode(['status' => 'success', 'message' => 'Resultado  registrado correctamente']);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>