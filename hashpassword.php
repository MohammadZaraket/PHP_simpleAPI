<?php

$password = $_GET['password'];

if(strlen($password)>=8 And preg_match("/[0-9]/i", $password) And preg_match("/[a-zA-Z]/i", $password)){
    $hash = hash('sha256', $password);
    $status = ["status" => "Accepted As Password",
                "Hashed" => $hash  ];
}
else {
    $status = ["status" => "Rejected As Password"];
}

echo json_encode($status);

?>
