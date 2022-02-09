<?php

$x = $_GET["x"];
$y = $_GET["y"];
$z= 2 * $x + $y%2;

$array = ["solution" => $z];
echo json_encode($array);

?>