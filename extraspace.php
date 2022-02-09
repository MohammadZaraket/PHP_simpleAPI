<?php

$input_string = $_GET['input'];

$output_string = trim(preg_replace('/[\t\n\r\s]+/', ' ', $input_string));  // replace extra spaces or tabs with one space

$return = ["return" => $output_string];
echo json_encode($return);

?>