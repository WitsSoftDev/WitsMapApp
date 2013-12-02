<?php

    /**
     *      This script is used to establish a connection o the database
     */

$host_name = "localhost";
$user_name = "root";
$password = "";
$db_nama = "wits_map_app_db";

//creating a connection
$connection = mysqli_connect($host_name, $user_name, $password, $db_nama);

//checking the connection status
if(!$connection){
    /*
     *if the connection was unsuccessful display an error and kill the script
     */
    die("<h4>Unable to connect to the db</h4>");
}else{
    echo "<h4>Connected</h4>";
}

?>