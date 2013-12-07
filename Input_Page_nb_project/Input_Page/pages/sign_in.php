<?php
    require '../functions/db_connect.php';
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
                        <p id="sign-in-status" class="navbar-text pull-right"><i class="icon-user icon-white"></i> Your not <u><b>signed in</b></u></p>
                        

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
                        <input id="" class="input-xlarge" type="email" placeholder="Email Address"/>
                    </div><br />
                    <div class="input-prepend">
                        <span class="add-on"><i class="icon-barcode"></i></span>
                        <input id="" class="input-xlarge" type="password" placeholder="Password" />
                    </div><br/>
                    <label class="checkbox"><input type="checkbox" /><p class="muted">Remember me</p></label>
                    <input class="btn btn-info" type="submit" value="Sign in" /> <a href="#">forgot password?</a>
                </form>
                
                </div>
                <div id="sign-in-error-container">
                         
                </div>
            </div>
            
            
        </div>                 
        
        <!-- JavaScript -->
		<script type="text/javascript" src ="../bootstrap/js/jquery.min.js"></script>
		<script type="text/javascript" src="../boostrap/js/bootstrap.min.js"></script>
    </body>
</html>