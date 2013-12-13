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
                <!-- Custome stylesheet -->
                <link rel="stylesheet" type="text/css" href="../style/home_style.css">
                <link rel="stylesheet" type="text/css" href="../style/general_style.css"/>


		<!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
	    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
	    <!--[if lt IE 9]>
	      <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
	      <script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>
	    <![endif]-->

	</head>
        <body>
       <!-- Navigation bar -->
            <div class="navbar navbar-fixed-top navbar-inverse">
                <div class="navbar-inner">
                    <div class="container"> 
                        <?php
                            include '../functions/db_connect.php';
                            $connection_link = $connection;
                            echo '<div class="btn-group pull-right">
                                    <a class="btn btn-info btn-small">
                                        <i class="icon-user icon-white"></i>
                                        <b>'.getLoggedInUserName($connection_link).'</b>
                                    </a>
                                     <a class="btn dropdown-toggle btn-small btn-info" data-toggle="dropdown" href="#">
                                        <span class="caret"></span>
                                     </a>

                                        <ul class="dropdown-menu">
                                        <!-- dropdown menu links -->
                                            <li>
                                                <a href="../functions/user_signout.php">
                                                    <i class="icon-minus-sign"></i>
                                                        Sign Out
                                                </a>
                                            </li>
                                        </ul>
                                   </div>';
                         ?>
                    </div>
                </div>
            </div>
       
       <!-- Body content container -->
       <div class="container">
           <div id="page-title" class="row">
               <div class="span4">
                   
               </div>
               <div class="span5 pull-right">
                   <div class="input-prepend">
                       <span class="add-on reduce-height btn" disabled="true"> 
                                <i class="icon-map-marker"></i>
                                Locations
                       </span>
                       <input class="input-mini reduce-width uneditable-input" type="text" placeholder="0" />
                   </div>
                   
                   <div class="input-prepend padding-left-separator">
                       <span class="add-on reduce-height btn" disabled="true"> 
                                <i class="icon-screenshot"></i>
                                Maps
                       </span>
                       <input class="input-mini reduce-width uneditable-input" type="text" placeholder="0" />
                   </div>
               </div>
           </div>
           
           <hr />
           
           <!-- left navigation tabs -->
           <div class="row">
               <div class="span12">
                    <div class="tabbable tabs-right">
                        <ul class="nav nav-tabs nav-style-right">
                            <li class="active">
                                <a class="link-shaded" href="#1" data-toggle="tab">
                                    <i class="icon-map-marker"></i> 
                                    Add Location</a>
                            </li>                           
                            <li>
                                <a class="link-shaded" href="#2" data-toggle="tab">
                                    <i class="icon-screenshot"></i> 
                                    Add Map</a>
                            </li>                           
                            
                            <li>
                                <a class="link-shaded" href="#4" data-toggle="tab">
                                    <i class="icon-list"></i>
                                    View Tables
                                </a>
                            </li>
                            <li>
                                <a class="link-shaded" href="#5" data-toggle="tab">
                                    <i class="icon-move"></i>
                                    View Maps
                                </a>
                            </li>
                        </ul>
                        
                        <div class="tab-content">
                            <div class="tab-pane active" id="1">                               
                                <div class="form-holder rounder-border">
                                    <div class="form-title">
                                        <h4 class="form-title-header">
                                            <i class="icon-map-marker icon-add-margin"></i>
                                                Add a new location 
                                        </h4>
                                    </div>
                                    
                                    <form class="form-style" action="" method="POST">
                                        <div class="row">
                                            <div class="span8">
                                                <label class="label-style" for="location-name" >Name of the location :</label>
                                                <input id="location-name" class="input-xxlarge" name="location-name" type="text" placeholder="location name"/>

                                                <label class="label-style" for="location-prefix" >Prefix of the location name :</label>
                                                <input id="location-prefix" class="input-xxlarge" name="location-prefix" type="text" placeholder="location prefix"/>

                                                <label class="label-style" for="about-location" >About the location :</label>
                                                <textarea id="about-location" class="input-xxlarge" name="about-location" placeholder="Write something about the location" rows="5">
                                                </textarea>

                                                <label class="label-style" for="type-or-point">Select the type of point :</label>
                                                <select id="type-of-point" class="input-xxlarge">
                                                    <option value="Destination">
                                                        Destination
                                                    </option>

                                                    <option value="Exit/Entrance">
                                                        Exit/Entrance
                                                    </option>

                                                    <option value="Nodal path pont">
                                                        Nodal path point
                                                    </option>
                                                </select>

                                                <label class="label-style" for="image-x-coordinate">X-coordinate of the location on the map :</label>
                                                <input id="image-x-coordinate" class="input-xxlarge" name="X-coordinate" type="text" placeholder="X-coordinate of location on image"/>

                                                <label class="label-style" for="image-Y-coordinate">Y-coordinate of the location on the map :</label>
                                                <input id="image-Y-coordinate" class="input-xxlarge" name="Y-coordinate" type="text" placeholder="Y-coordinate of location on image"/>

                                                <label class="label-style" for="gps-latitude">GPS latitude:</label>
                                                <input id="gps-latitude" class="input-xxlarge" name="gps-latitude" type="text" placeholder="GPS latitude coordinate of location"/>

                                                <label class="label-style" for="gps-latitude">GPS longitude:</label>
                                                <input id="gps-longitude" class="input-xxlarge" name="gps-longitude" type="text" placeholder="GPS longitude coordinate of location"/>
                                                
                                                <label class="label-style" for="location-image">Image of the location :</label>
                                                <input name="location-image" type="file" />
                                                
                                                <br />
                                                <input class="btn btn-info pull-right pull-down" type="submit" value="Add Location"/>
                                                
                                            </div> 
                                        </div>
                                    </form>
                                    <div id="submit-error-container">
                                        <div class="row">
                                            <div class="span4 offset4">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="tab-pane" id="2">
                                <div class="form-holder rounder-border">
                                    <div class="form-title">
                                        <h4 class="form-title-header">
                                            <i class="icon-screenshot icon-add-margin"></i>
                                                Add a new Map
                                        </h4>
                                    </div>
                                    
                                    <form class="form-style" action="" method="POST">
                                        <div class="row">
                                            <div class="span8">
                                                <label class="label-style" for="corner-1-gps-latitude">Corner 1 GPS-latitude coordinate :</label>
                                                <input id="corner-1-gps-latitude" class="input-xxlarge" name="corner-1-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-1-gps-longitude">Corner 1 GPS-longitude coordinate :</label>
                                                <input id="corner-1-gps-longitude" class="input-xxlarge" name="corner-1-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-2-gps-latitude">Corner 2 GPS-latitude coordinate :</label>
                                                <input id="corner-2-gps-latitude" class="input-xxlarge" name="corner-2-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-2-gps-longitude">Corner 2 GPS-longitude coordinate :</label>
                                                <input id="corner-2-gps-longitude" class="input-xxlarge" name="corner-2-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-3-gps-latitude">Corner 3 GPS-latitude coordinate :</label>
                                                <input id="corner-3-gps-latitude" class="input-xxlarge" name="corner-3-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-3-gps-longitude">Corner 3 GPS-longitude coordinate :</label>
                                                <input id="corner-3-gps-longitude" class="input-xxlarge" name="corner-3-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-4-gps-latitude">Corner 4 GPS-latitude coordinate :</label>
                                                <input id="corner-4-gps-latitude" class="input-xxlarge" name="corner-4-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="corner-4-gps-longitude">Corner 4 GPS-longitude coordinate :</label>
                                                <input id="corner-4-gps-longitude" class="input-xxlarge" name="corner-4-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map"/>
                                                
                                                <label class="label-style" for="map-image-location">Add map image :</label>
                                                <input class="input-xxlarge" type="file" name="image-location-url"/>
                                                
                                                <br />
                                                <input class="btn btn-info pull-right pull-down" type="submit" value="Add Map"/>
                                                
                                            </div>
                                        </div>
                                    </form>
                                    
                                    <div id="submit-error-container">
                                        <div class="row">
                                            <div class="span4 offset4">
                                                
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                            
                            <div class="tab-pane" id="4">
                                <div class="row">
                                    <div class="span10">
                                        <div class="tabbable tabs-left">
                                            <ul class="nav nav-tabs nav-style-left">
                                                <li class="active">
                                                    <a href="#4_1" data-toggle="tab">
                                                        <i class="icon-map-marker"></i> 
                                                    </a>
                                                </li>                           
                                                <li>
                                                    <a href="#4_2" data-toggle="tab">
                                                        <i class="icon-screenshot"></i> 
                                                        </a>
                                                </li>                           
                                                <li>
                                                    <a href="#4_3" data-toggle="tab">
                                                        <i class="icon-random"></i>  
                                                    </a> 
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            <div class="tab-pane" id="5">
                                
                            </div>
                        </div>
                     </div>
               </div>               
           </div>
       </div>


        <!-- JavaScript -->
        <script type="text/javascript" src ="../bootstrap/js/jquery.min.js"></script>
        <script type="text/javascript" src="../bootstrap/js/bootstrap.min.js"></script>
	</body>
</html>
