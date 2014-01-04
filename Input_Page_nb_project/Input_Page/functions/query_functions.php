<?php
/* 
 * Conatins functions used to query the database for info.
 *  -no insertion function is in here.
 */

function getNumberOfLocations($connection){
    $query = mysqli_query($connection, "SELECT LocationID FROM locationdata");
    
    if($query){
        return mysqli_num_rows($query);
    }
}

function getNumberOfMaps($connection){
    $query = mysqli_query($connection, "SELECT MapID FROM map");
    
    if($query){
        return mysqli_num_rows($query);
    }
}

function getNumberOfPaths($connection){
    $query = mysqli_query($connection, "SELECT PathID FROM path");
    
    if($query){
        return mysqli_num_rows($query);
    }
}
