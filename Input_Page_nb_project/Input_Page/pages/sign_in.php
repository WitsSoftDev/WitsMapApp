<?php
    /*requier the db connect script to check if we can connect to the sever where db 
     *is located
     */
    require '../functions/db_connect.php';
    
    /*
     *Collecting sign in info from the form and checking if its valid.
     */
    $display_error_messag = null;
    
    if(isset($_POST['email-field']) && isset($_POST['password-field'])){
        $email = $_POST['email-field'];
        $password = $_POST['password-field'];
        //checking if the set fields are not empty
        if(!empty($email) && !empty($password)){
            //if fields are not empty encrypt user's password with md5 and check if the user exists in the db
            $password_hashed = md5($password);
            $query = sprintf("SELECT userID FROM users WHERE userEmailAddress='%s' AND userPassword='%s'",
                            mysql_real_escape_string($email),
                            mysql_real_escape_string($password_hashed));
            $query_results = mysqli_query($connection, $query);
            
            if($query_results && (mysqli_num_rows($query_results)==1)){
               //The user exists, starting their session and logging them in.
                $row = mysqli_fetch_array($query_results);
                $userID = $row['userID'];
                $_SESSION['userID'] = $userID;
                
                //Redirect The user to the index page where they will be redirected to the appropriate page.
                header("Location: index.php");
            }else{
                $display_error_messag = true;
            }
            
        }
    }
?>

<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!--><html lang="en"> <!--<![enfif]-->
    
    <head>
        <meta charset="utf-8">
        <title>Sign In </title>
        
            <!-- Mobile Specific Meta -->
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >
            
            <!-- Stylesheets -->
            <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" type="text/css" href="../style/sign_in_style.css"/>

            <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	    <![endif]-->
    </head>
    
    <body>
        
            <div class="navbar navbar-fixed-top navbar-inverse">
                <div class="navbar-inner">
                    <div class="container">
                        <button class="btn btn-info btn-small pull-right" disabled="true">
                            <i class="icon-user icon-white"></i>
                            <b>Your not <u>Signed in</u></b>
                        </button>
                    </div>
                </div>
            </div>
        
        <div class="container">
            <div id="content-holder">
                <div id="form-holder">
                <h3>Sign In</h3>
                
                <form action="" method="post">
                    <div class="input-prepend">
                        <span class="add-on"><i class="icon-envelope"></i></span>
                        <input name="email-field" class="input-xlarge" type="email" placeholder="Email Address"/>
                    </div>
                    <br />
                    
                    <div class="input-prepend">
                        <span class="add-on"><i class="icon-barcode"></i></span>
                        <input name="password-field" class="input-xlarge" type="password" placeholder="Password" />
                    </div>
                    <br/>
                    
                    <label class="checkbox"><input type="checkbox" /><p class="muted">Remember me</p></label>
                    <div id="submit-container">
                        <input class="btn btn-info" type="submit" value="Sign in" /> <a href="#">forgot password?</a>
                    </div>
                </form>
                
                </div>
                <div id="sign-in-error-container">
                    <div class="row">
                        <div class="span4"></div>
                            <div class="span4">
                        <?php
                        if($display_error_messag){
                           echo '<div class="alert alert-danger">
                                <a class="close" data-dismiss="alert">×</a>
                                <strong>Sign in Error!</strong> Incorrect Email and Password combination.
                            </div> ';
                           }
                         ?>
                         </div>
                    </div>
                </div>
            </div>
            
            
        </div>                 
        
        <!-- JavaScript -->
		<script type="text/javascript" src ="../bootstrap/js/jquery.min.js"></script>
		<script type="text/javascript" src="../boostrap/js/bootstrap.min.js"></script>
    </body>
</html>