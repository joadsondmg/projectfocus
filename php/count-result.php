<?php
include ('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$date_i = $data['date_i'];
$date_f = $data['date_f'];

$sql = "";

if($date_f && $date_i) {
    $sql = "SELECT COUNT(*) as total FROM results WHERE date BETWEEN '$date_i' AND '$date_f'";
} else {
    $sql = "SELECT COUNT(*) as total FROM results";
}

$exec = mysqli_query($connection, $sql);
    if($exec) {
        $result = array();
        while ($row = mysqli_fetch_assoc($exec)) {
            $result[] = $row;
        }
        echo json_encode(['status' => 'success',  'amount' => $result[0]['total']]);
    } else {
        echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
    }
?>