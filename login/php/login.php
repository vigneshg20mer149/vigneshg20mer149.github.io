<?php

    $con = new mysqli('localhost', 'root', '', 'userprofile');

    if (!$con) {
    echo "Connection Failed";
    die();
    }
    $username = $_POST['username'];
    $password = $_POST['pass'];
    $stmt = $con->prepare("SELECT Password FROM user WHERE Username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();


    $stmt->bind_result($dbpassword);

    $user = $stmt->fetch();
    
    if ($user &&  password_verify($password, $dbpassword)) {
    
    header('location:http://localhost/login/profile.html');
    exit;
} else {
    
    die('Incorrect Credentials');
    header('location:http://localhost/login/login.html');
    exit;
    
}


$con->close();
?>