<?php
$db_user = "root";
$db_pass = "abc123";
$db_host = "localhost";
$db_name = "phonegaptest";
$db_handle;

//connection to the database
function db_connect() {
    global $db_user, $db_pass, $db_host, $db_name, $db_handle;
    $db_handle = mysql_connect($db_host, $db_user, $db_pass) or die("Unable to $
echo "Connected to MySQL<br>";
//select a database to work with
    $selected = mysql_select_db($db_name, $db_handle) or die("Could not open da$
}

function getName($id){
  $query = "select name from names where id='$id'";
  echo $query;
  $output = mysql_query($query); 
  $result = mysql_fetch_assoc($output);
  return $result;
}

?>
