<?php
    error_reporting(E_ERROR | E_WARNING | E_PARSE);
    require '../functions/user_functions.php';
    
    /*
     * Checks if a session $_SESSION['userID'] exists and do appropriate page redirecting.
     */
    
    if(userIsLoggedIn()){
        include './home.php';
    }else{
        include './sign_in.php';
    }
?>
