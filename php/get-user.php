<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];

$sql = "SELECT * FROM users WHERE id = '$id'";

$exec = mysqli_query($connection, $sql);

if($exec) {
    $result = array();
    while ($row = mysqli_fetch_assoc($exec)) {
        $result[] = $row;
    }
    echo json_encode(['status' => 'success',  'result' => $result[0]]);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>