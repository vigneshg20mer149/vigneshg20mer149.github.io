<?php
//require_once "vendor/autoload.php";
//ini_set('extension', 'php_mongodb.dll');

$con = mysqli_connect('localhost', 'root', '', 'userprofile');
/*$mongo = new MongoDB/Client("mongodb://localhost:27017");


$db=$mongo->userdetails;
$collection=$db->users;
if($_POST){
    $insert=array(
        'name'=>$_POST['name'],
        'email'=>$_POST['email'],
        'username'=>$_POST['username'],
        'password'=>$_POST['password']
    );
    if(collecton->insert($insert)){
        echo "data inserted";
    }
    else{
        echo "issue";
    }
}else{
    echo "No data to store";
}*/

if (!$con) {
    echo "Connection Failed";
    die();
}
print_r($_POST);
$password = $_POST['password'];
$hashed_password = password_hash($password, PASSWORD_DEFAULT);

$name = mysqli_real_escape_string($con, $_POST['name']);
$email = mysqli_real_escape_string($con, $_POST['email']);
$username = mysqli_real_escape_string($con, $_POST['username']);


if($_POST){
    $stmt = mysqli_prepare($con, "INSERT INTO user (Name, Username, Email_id, Password) VALUES (?, ?, ?, ?)");

}

if (!$stmt) {
    echo "ERROR : " . mysqli_error($con);
    die();
}



mysqli_stmt_bind_param($stmt, 'ssss', $name, $username, $email, $hashed_password);

if (!mysqli_stmt_execute($stmt)) {
    echo "ERROR : " . mysqli_stmt_error($stmt);
    die();
    exit;
}

header('location:https:localhost/login/profile.html');
exit;
?>