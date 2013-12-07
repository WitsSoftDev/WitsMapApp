<?php
    
?>
<!DOCTYPE html>
<!--[if IE 8]> <html lang="en" class="ie8"> <![endif]-->
<!--[if !IE]><!--><html lang="en"> <!--<![enfif]-->

	<head>
		<meta charset="utf-8">
		<title>Data Input Page</title>

		<!-- Mobile Specific Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" >

		<!-- Stylesheets -->
                <link rel="stylesheet" type="text/css" href="../bootstrap/css/bootstrap.min.css">

		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	    <![endif]-->

	</head>
	<body>
		
                    <div class="navbar navbar-fixed-top navbar-inverse">
                        <div class="navbar-inner">
                            <div class="container"> 
                                <?php
                                    include '../functions/db_connect.php';
                                    $connection_link = $connection;
                                    echo '<div class="btn-group pull-right">
                                            <a class="btn dropdown-toggle btn-info btn-small" data-toggle="dropdown">
                                                <i class="icon-user icon-white"></i>
                                                <b>'.getLoggedInUserName($connection_link).'</b>
                                                <span class="caret"></span>
                                            </a>
                                                
                                                <ul class="dropdown-menu">
                                                <!-- dropdown menu links -->
                                                    <li>
                                                        <a href="../functions/user_signout.php">
                                                            <i class="icon-minus-sign"></i>
                                                                <b>Sign Out</b>
                                                        </a>
                                                    </li>
                                                </ul>
                                           </div>';
                                 ?>
                            </div>
                        </div>
                    </div>
		

		<!-- JavaScript -->
                <script type="text/javascript" src ="../bootstrap/js/jquery.min.js"></script>
                <script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>
