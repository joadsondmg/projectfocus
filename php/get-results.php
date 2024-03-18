<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$date = $data['date'];

$sql = "SELECT * FROM results WHERE date = '$date'";

$exec = mysqli_query($connection, $sql);
if($exec) {
    $result = array();
    while ($row = mysqli_fetch_assoc($exec)) {
        $result[] = $row;
    }
    echo json_encode(['status' => 'success',  'results' => $result]);
} else {
    echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
}
?>