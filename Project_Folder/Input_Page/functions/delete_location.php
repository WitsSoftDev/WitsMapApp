<?php

/* 
 * This script is used to delete a locaton in the locations table
 */

require './db_connect.php';

if(isset($_POST['LocationID']) && isset($_POST['LocationName'])){
    $locationID = $_POST['LocationID'];
    $locationName = $_POST['LocationName'];
    
    if(!empty($locationID) && !empty($locationName)){
        $delete_query = "DELETE FROM locationdata WHERE LocationID=".$locationID;
        $delete_query_results = mysqli_query($connection, $delete_query);
        
        if($delete_query_results){
            echo '<div id="message-box-error" class="message-box">
                        <a class="close fade-out">×</a>
                        <p class="text-center">
                            The location <strong>'.$locationName.'</strong> has been deleted.
                        </p>
                     </div>';
        }else{
            echo '<div id="message-box-error" class="message-box">
                        <a class="close fade-out">×</a>
                        <p class="text-center">
                            <strong>Error:</strong> The location <strong>'.$locationName.'</strong> could not be deleted.
                        </p>
                     </div>';
        }
    }
}

