<?php
    require '../functions/db_connect.php';
    include '../functions/query_functions.php';
   
    
    
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
                <div class="container-fluid"> 
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
    <div class="container-fluid">
       <div id="page-title" class="row-fluid">
           <div class="span4">

           </div>
           <div class="span3 pull-right">
               <div id="num-of-locations" class="input-prepend" rel="tooltip" data-placement="bottom" title="Current number of locations">
                   <span class="add-on reduce-height btn" disabled="true"> 
                            <i class="icon-map-marker"></i>
                            Locations
                   </span>
                   <input class="input-mini reduce-width uneditable-input" type="text" placeholder="<?php echo getNumberOfLocations($connection_link); ?>" />
               </div>

               <div id="num-of-maps" class="input-prepend padding-left-separator" rel="tooltip" data-placement="bottom" title="Current number of maps">
                   <span class="add-on reduce-height btn" disabled="true"> 
                            <i class="icon-screenshot"></i>
                            Maps
                   </span>
                   <input class="input-mini reduce-width uneditable-input" type="text" placeholder="<?php echo getNumberOfMaps($connection_link);?>" />
               </div>
           </div>
       </div>

       <hr />

       <!-- left navigation tabs -->
       <div class="row-fluid">
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

                   <!-- content of each nav tab-->
                    <div class="tab-content">
                        <!-- add location tab content-->
                        <div class="tab-pane active" id="1">
                            <div class="gray-bg">
                            <div class="form-holder rounder-border">
                                <div class="form-title">
                                    <h4 class="form-title-header">
                                            Add a new location 
                                    </h4>
                                </div>

                                <form id="add-location-form" class="form-style" name="add-location-form" enctype="multipart/form-data">
                                    <div class="row-fluid">
                                        <div class="span8 offset2">
                                            <label class="label-style" for="location-name" >Name of the location :</label>
                                            <input id="location-name" class="input-xxlarge" name="location-name" type="text" placeholder="location name" required="true"/>
                                            <label class="error" id="location-name-error" for="location-name">
                                                <span class="text-error">*</span>
                                                <strong>This field must be field in</strong>
                                            </label>

                                            <label class="label-style" for="location-prefix" >Prefix of the location name :</label>
                                            <input id="location-prefix" class="input-xxlarge" name="location-prefix" type="text" placeholder="location prefix"/>

                                            <label class="label-style" for="about-location" >About the location :</label>
                                            <textarea id="about-location" class="input-xxlarge" name="about-location" placeholder="Write something about the location" rows="5">
                                            </textarea>

                                            <label class="label-style" for="type-of-point">Select the type of point :</label>
                                            <select id="type-of-point" class="input-xxlarge" name="type-of-point">
                                                <option value="destination">
                                                    Destination
                                                </option>

                                                <option value="exit/entrance">
                                                    Exit/Entrance
                                                </option>

                                                <option value="nodal path pont">
                                                    Nodal path point
                                                </option>
                                            </select>

                                            <label class="label-style" for="image-x-coordinate">X-coordinate of the location on the map :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <span class="text-error">*</span>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="image-x-coordinate" class="input-xxlarge" name="X-coordinate" type="text" placeholder="X-coordinate of location on image" required="true"/>
                                            <label class="error" id="image-x-coordinate-error" for="image-x-coordinate">
                                                <span class="text-error">*</span>
                                                <strong>This field must be field in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="image-Y-coordinate">Y-coordinate of the location on the map :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <span class="text-error">*</span>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="image-Y-coordinate" class="input-xxlarge" name="Y-coordinate" type="text" placeholder="Y-coordinate of location on image" required="true"/>
                                            <label class="error" id="image-Y-coordinate-error" for="image-Y-coordinate">
                                                <span class="text-error">*</span>
                                                <strong>This field must be field in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="gps-latitude">GPS latitude:</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <span class="text-error">*</span>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="gps-latitude" class="input-xxlarge" name="gps-latitude" type="text" placeholder="GPS latitude coordinate of location" required="true"/>
                                            <label class="error" id="gps-latitude-error" for="gps-latitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be field in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="gps-longitude">GPS longitude:</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <span class="text-error">*</span>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="gps-longitude" class="input-xxlarge" name="gps-longitude" type="text" placeholder="GPS longitude coordinate of location" required="true"/>
                                            <label class="error" id="gps-longitude-error" for="gps-longitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be field in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="location-image">Image of the location :</label>
                                            <input id="location-image" name="location-image" type="file" />

                                            <br />
                                            <input id="add-location-btn" class="btn btn-info pull-right pull-down" type="button" value="Add Location"/>

                                        </div>
                                    </div>
                                </form>
                                <div id="submit-msg-container">
                                    <div class="row-fluid">
                                        <div id="add-location-msg-content" class="span4 offset3">
                                        </div>
                                    </div>
                                </div>

                            </div>
                            </div>
                        </div>

                        <!-- Add map tab content -->
                        <div class="tab-pane" id="2">
                            <div class="gray-bg">
                            <div class="form-holder rounder-border">
                                <div class="form-title">
                                    <h4 class="form-title-header">
                                            Add a new Map
                                    </h4>
                                </div>
                                <!--add map form -->
                                <form class="form-style" enctype="multipart/form-data">
                                    <div class="row-fluid">
                                        <div class="span8 offset2">
                                            <label class="label-style" for="corner-1-gps-latitude">Corner 1 GPS-latitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-1-gps-latitude" class="input-xxlarge" name="corner-1-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-1-gps-latitude-error" for="corner-1-gps-latitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-1-gps-longitude">Corner 1 GPS-longitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-1-gps-longitude" class="input-xxlarge" name="corner-1-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-1-gps-longitude-error" for="corner-1-gps-longitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-2-gps-latitude">Corner 2 GPS-latitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-2-gps-latitude" class="input-xxlarge" name="corner-2-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-2-gps-latitude-error" for="corner-2-gps-latitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-2-gps-longitude">Corner 2 GPS-longitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-2-gps-longitude" class="input-xxlarge" name="corner-2-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-2-gps-longitude-error" for="corner-2-gps-longitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-3-gps-latitude">Corner 3 GPS-latitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-3-gps-latitude" class="input-xxlarge" name="corner-3-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-3-gps-latitude-error" for="corner-3-gps-latitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-3-gps-longitude">Corner 3 GPS-longitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-3-gps-longitude" class="input-xxlarge" name="corner-3-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-3-gps-longitude-error" for="corner-3-gps-longitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-4-gps-latitude">Corner 4 GPS-latitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-4-gps-latitude" class="input-xxlarge" name="corner-4-gps-latitude" type="text" placeholder="A Corner point latitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-4-gps-latitude-error" for="corner-4-gps-latitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="corner-4-gps-longitude">Corner 4 GPS-longitude coordinate :</label>
                                            <p class="muted text-small">
                                                <em>
                                                    <b class="text-error">*</b>The value entered in this field must be a number
                                                </em>
                                            </p>
                                            <input id="corner-4-gps-longitude" class="input-xxlarge" name="corner-4-gps-longitude" type="text" placeholder="A Corner point longitude coordinate for the map" required="true"/>
                                            <label class="error" id="corner-4-gps-longitude-error" for="corner-4-gps-longitude">
                                                <span class="text-error">*</span>
                                                <strong>This field must be filled in</strong>
                                            </label>
                                            
                                            <label class="label-style" for="image-location-url">Add map image :</label>
                                            <input id="image-location-url" class="input-xxlarge" type="file" name="image-location-url" required="true"/>
                                            <label class="error" id="image-location-url-error" for="image-location-url">
                                                <span class="text-error">*</span>
                                                <strong>Image must be selected</strong>
                                            </label>

                                            <br />
                                            <input id="add-map-btn" class="btn btn-info pull-right pull-down" type="button" value="Add Map"/>

                                        </div>
                                    </div>
                                </form>

                                <div id="submit-msg-container">
                                    <div class="row-fluid" >
                                        <div id="add-map-msg-content" class="span4 offset3" >

                                        </div>
                                    </div>
                                </div>                                  
                            </div>
                            </div>

                        </div>

                        <!-- view tables tab content -->
                        <div class="tab-pane" id="4">
                            <div class="row-fluid">
                                <div class="span12">
                                    <!-- right nav tabs to view the different tables in the db -->
                                    <div class="tabbable tabs-left">
                                        <ul class="nav nav-tabs nav-style-left">
                                            <li class="active">
                                                <a id="locations-table" href="#4_1" data-toggle="tab" rel="tooltip" data-placement="right" title="View Locations table">
                                                    <i class="icon-map-marker"></i> 
                                                </a>
                                            </li>                           
                                            <li>
                                                <a id="maps-table" href="#4_2" data-toggle="tab" rel="tooltip" data-placement="right" title="View Maps table">
                                                    <i class="icon-screenshot"></i> 
                                                    </a>
                                            </li>                           
                                            <li>
                                                <a id="paths-table" href="#4_3" data-toggle="tab" rel="tooltip" data-placement="right" title="View Paths table">
                                                    <i class="icon-random"></i>  
                                                </a> 
                                            </li>
                                        </ul>
                                        <!-- tab content for the right view tables nav -->
                                        <div class="tab-content">
                                            <!-- view location table tab -->
                                            <div class="tab-pane active" id="4_1">

                                                <?php
                                                /*
                                                 * Script used to fetch data from the locations table and display it in the appropriate place
                                                 */
                                                    $list_of_fields = array('LocationID' , 'LocationName', 'LocationPrefix', 'LocationInfo', 'ImageOfLocation', 'TypeOfPoint',
                                                                            'ImageCoordinatex', 'ImageCoordinateY', 'GPSLatitude', 'GPSLongitude', 'Action');

                                                    $location_query = "SELECT LocationID, LocationName, LocationPrefix, LocationInfo, ImageOfLocation, TypeOfPoint, "
                                                                        . "ImageCoordinatex, ImageCoordinateY, GPSLatitude, GPSLongitude FROM locationdata";

                                                    $query_run = mysqli_query($connection, $location_query);
                                                     
                                                    //echo the table structure only if there's something in the database
                                                     if(mysqli_num_rows($query_run)>0){
                                                        echo '<table class="table table-condensed table-striped table-bordered">
                                                                <thead>
                                                                    <tr>
                                                                        <th id="th-location-id" rel="tooltip" title="Location ID">#</th> 
                                                                        <th id="th-location-name" rel="tooltip" title="Name of location">Name</th>
                                                                        <th id="th-location-prefix" rel="tooltip" title="Location name in short">Prefix</th>
                                                                        <th id="th-location-about" rel="tooltip" title="About the location">About</th>
                                                                        <th id="th-location-url" rel="tooltip" title="Image location url">Image url</th>
                                                                        <th id="th-location-top" rel="tooltip" title="Type of point">Type of point</th>
                                                                        <th id="th-location-xcoord" rel="tooltip" title="Location xcoordinate on map">X-coordinate</th>
                                                                        <th id="th-location-ycoord" rel="tooltip" title="Location ycoordinate on map">Y-coordinate</th>
                                                                        <th id="th-location-GPSlat" rel="tooltip" title="Latitude coordinate of location">GPS latitude</th>
                                                                        <th id="th-location-GPSlon" rel="tooltip" title="Latitude coordinate of location">GPS longitude</th>
                                                                        <th id="" rel="tooltip" title="">Action</th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>';

                                                        //placing sata in the table
                                                        while ($location_row = mysqli_fetch_array($query_run)){
                                                            echo '<tr>';
                                                            foreach ($list_of_fields as $field){
                                                                if($field === "Action"){
                                                                       echo '<td> <button id="" class="btn btn-mini btn-danger" data-toggle="modal" href="#my-modal-'.$location_row['LocationID'].'"><i class="icon-trash icon-white"></i> Delete</button></td>';
                                                                }else{
                                                                    echo '<td>'.$location_row[$field].'</td>';
                                                                }
                                                            }
                                                            echo '</tr>';
                                                        }
                                                        echo '</tbody>
                                                              </table>';
                                                    }else{
                                                        echo '  <div class="well">
                                                                    <p class="text-info text-center"><b>Table is empty</b></p>
                                                                </div>';
                                                    }
                                                    //resetg the internal pointer back to the first row
                                                    mysqli_data_seek($query_run, 0);
                                                    
                                                    //modal windows for each delete button
                                                    while($location_row = mysqli_fetch_array($query_run)){
                                                        echo '<div id="my-modal-'.$location_row['LocationID'].'" class="modal hide fade">
                                                                    <div class="modal-header">
                                                                            <a class="close" data-dismiss="modal">&times;</a>
                                                                            <h3 style="font-size: 22px;">Delete Location</h3>
                                                                    </div>
                                                                    <div class="modal-body">
                                                                        <p>Are you sure you want to delete the location <b>'.$location_row['LocationName'].'</b> from the database?
                                                                            <br>
                                                                            <small class="muted"> -This action cannot be undone</small>
                                                                        </p>
                                                                        
                                                                    </div>
                                                                    <div class="modal-footer">
                                                                            <button class="btn btn-small" data-dismiss="modal"><i class="icon-arrow-left"></i> Cancel</button>
                                                                            <button id="'.$location_row['LocationID'].'" class="btn btn-danger btn-small" onclick="delete_location('.$location_row['LocationID'].');"><i class="icon-trash icon-white"></i> Delete</button>

                                                                    </div>
                                                            </div>';
                                                    }
                                                ?>

                                                

                                            </div>
                                            <div class="tab-pane" id="4_2">
                                                <?php
                                                    if(getNumberOfMaps($connection) > 0){
                                                        //maps table to go here
                                                    }else{
                                                        echo '  <div class="well">
                                                                    <p class="text-info text-center"><b>Table is empty</b></p>
                                                                </div>';
                                                    }
                                                ?>
                                            </div>
                                            <div class="tab-pane" id="4_3">
                                                <?php
                                                    if(getNumberOfPaths($connection) > 0){
                                                        //paths table to go here
                                                    }else{
                                                        echo '  <div class="well">
                                                                    <p class="text-info text-center"><b>Table is empty</b></p>
                                                                </div>';
                                                    }
                                                ?>
                                            </div>
                                        </div>
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
    <script type="text/javascript" src="../scripts/plugins/tooltip.js"></script>
    
    <script type="text/javascript" src="../scripts/add_location.js"></script>
    <script type="text/javascript" src="../scripts/add_map.js"></script>
    <script type="text/javascript" src="../scripts/delete_location.js"></script>

    <script type="text/javascript">
        $("#th-location-id").tooltip();
        $("#th-location-name").tooltip();
        $("#th-location-prefix").tooltip();
        $("#th-location-about").tooltip();
        $("#th-location-url").tooltip();
        $("#th-location-top").tooltip();
        $("#th-location-xcoord").tooltip();
        $("#th-location-ycoord").tooltip();
        $("#th-location-GPSlat").tooltip();
        $("#th-location-GPSlon").tooltip();
        $("#num-of-locations").tooltip();
        $("#num-of-maps").tooltip();
        $("#locations-table").tooltip();
        $("#maps-table").tooltip();
        $("#paths-table").tooltip();
        
        $(".fade-out").click(function (){
            $("div.message-box").fadeOut("slow");
        });
    </script>
</body>
</html>
