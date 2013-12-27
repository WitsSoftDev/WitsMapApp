<?php
    /*
     * This script contains all the user functions 
     *  -it starts every user's session
     *  -it will included in everypage that needs to start a session
     */

    //starting a session.
    ob_start();
    session_start();
    
    $refere = $_SERVER['HTTP_REFERER'];
    
    function getCurrentFileName(){
        return $_SERVER['SCRIPT_NAME'];
    }
    
    function userIsLoggedIn(){
        if(isset($_SESSION['userID']) && !empty($_SESSION['userID'])){
            return true;
        }
        return false;
    }
    
    function getLoggedInUserName($connection_link){
        $query = sprintf("Select userName FROM users WHERE userID='%s'",
                        mysql_real_escape_string($_SESSION['userID']));
        $query_result = mysqli_query($connection_link,$query);
        
        if($query_result && mysqli_num_rows($query_result)==1){
            $row = mysqli_fetch_array($query_result);
            return($row['userName']);
        }
        
    }
?>