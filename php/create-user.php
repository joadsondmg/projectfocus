<?php 
include('connection.php');

$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'];
$user = $data['user'];
$password = $data['password'];
$role = $data['role'];

$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$sqlSearch = "SELECT * FROM users WHERE user = '$user'";
$sqlCreate = "INSERT INTO users (name, user, password, role) VALUES ('$name', '$user', '$hashed_password', '$role')";

$execSearch = mysqli_query($connection, $sqlSearch);
// 

if($execSearch->num_rows == 0) {
    $execCreate = mysqli_query($connection, $sqlCreate);
    if($execCreate) {
        echo json_encode(['status' => 'success', 'message' => 'User created']);
    } else {
        echo json_encode(['status' => 'fail', 'erro' => mysqli_error($connection)]);
    }
} else {
    echo json_encode(['status' => 'denied', 'message' => 'User already exists']);
}
?>