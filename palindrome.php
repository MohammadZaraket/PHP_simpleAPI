<?php

    $string = $_GET["input"];

    $string = str_replace(' ', '', $string);
    $string = strtolower($string);
    $string = preg_replace('/[^A-Za-z0-9\-]/', '', $string);


    $reverse_string = strrev($string);

    if ($string == $reverse_string) {
        $status = ["status" => "YES Palindrome"];
    } 
    else {
        $status = ["status" => "NO NOT Palindrome!"];
    }

echo json_encode($array);

?>