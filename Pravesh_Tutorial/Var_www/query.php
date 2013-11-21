<?php

error_reporting(E_ALL);
require("db.php");
db_connect();

$input = $_GET["id"];
$result = getName($input);

echo $_GET["callback"]."(";
echo json_encode($result);
echo ")";
?>
