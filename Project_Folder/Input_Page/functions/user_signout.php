<?php
    /*
     * This script is used ot stop a session and log the user out
     *  -After the user is logged out they are redirected to the index page.
     */
    require './user_functions.php';
    session_destroy();
    header("Location: ".$refere);
    
?>

