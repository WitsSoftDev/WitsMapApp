<?php

/* 
 * This script is used to delete a locaton in the locations table
 */

require './db_connect.php';

if(isset($_POST['LocationID'])){
    $locationID = $_POST['LocationID'];
    
    if(!empty($locationID)){
        $delete_query = "DELETE FROM locationdata WHERE LocationID=".$locationID;
        $delete_query_results = mysqli_query($connection, $delete_query);
        
        if($delete_query_results){
            echo 'The location <b>'.$locationName.'</b> has been deleted from the databse';
        }else{
            echo 'Error: The location <b>'.$locationName.'</b> could not be deleted from the database';
        }
    }
}

