<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id_user = $data['id_user'];
$date = $data['date'];
$result = $data['result'];

$sql = "INSERT INTO results (id_user, date, result) VALUES (
    '$id_user',
    '$date',
    '$result'
)";

$exec = mysqli_query($connection, $sql);
if($exec) {
    echo json_encode(['status' => 'success']);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
    
}
?>