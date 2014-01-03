<?php
   /*
    * This function is used to insert data information into the location database
    */
   require './db_connect.php';
    
    //image data variables
    if(isset($_FILES['location-image']) && !empty($_FILES['location-image'])){
        $image_name = $_FILES['location-image']['name'];
        $image_size = $_FILES['location-image']['size'];
        $image_type = $_FILES['location-image']['type'];
        $temp_location = $_FILES['location-image']['tmp_name'];
        
        //image validation
        $image_file_info = basename($image_name);
        
        //image size must be less than 5mb
        if($image_size > 5242880){
            die('<div id="message-box-error" class="message-box">
                        <a class="close fade-out">×</a>
                        <p class="text-center"
                            <strong>Image Error!</strong> The image file is too larege.
                        </p>
                     </div>');
        }else{
            //checking if the image file is a jpg or jpeg or png
            $ext = strtolower(substr($image_file_info, strrpos($image_file_info,'.')+1));
            
            if(!(($ext == "jpg" || $ext == "jpeg" || $ext == "png") && ($image_type == "image/jpeg" || $image_type == "image/png"))){
                die('<div id="message-box-error" class="message-box">
                        <a class="close fade-out">×</a>
                        <p class="text-center"
                            <strong>Image Error!</strong> invalid file type.
                        </p>
                     </div>');
            }
        }
    }
    
    $image_location = "../uploads/locations/";

    if(isset($_POST['location-name']) && isset($_POST['X-coordinate']) && isset($_POST['Y-coordinate']) &&
       isset($_POST['gps-latitude']) && isset($_POST['gps-longitude'])){
        
        $locationName = $_POST['location-name'];
        $locationPrefix = $_POST['location-prefix'];
        $locationInfo = $_POST['about-location'];
        $imageOfLocation = null;
        $typeOfPoint = $_POST['type-of-point'];
        $imageCoordinateX = $_POST['X-coordinate'];
        $imageCoordinateY = $_POST['Y-coordinate'];
        $gpsLatitude = $_POST['gps-latitude'];
        $gpsLongitude = $_POST['gps-longitude'];
        
        //check if image of location has been selected and upload it
        if(isset($image_name) && !empty($image_name)){
            $imageOfLocation = $image_location.$image_name;
            move_uploaded_file($temp_location, $imageOfLocation);
        }
        
        if(!(empty($_POST['location-name']) && empty($_POST['X-coordinate']) && empty($_POST['Y-coordinate']) &&
             empty($_POST['gps-latitude']) && empty($_POST['gps-longitude']))){
            
            $insert_query = sprintf("INSERT INTO locationdata (LocationName, LocationPrefix, LocationInfo, ImageOfLocation, TypeOfPoint, "
                    . "ImageCoordinatex, ImageCoordinateY, GPSLatitude, GPSLongitude ) VALUES('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
                                    mysql_real_escape_string($locationName),
                                    mysql_real_escape_string($locationPrefix),
                                    mysql_real_escape_string($locationInfo),
                                    mysql_real_escape_string($imageOfLocation),
                                    mysql_real_escape_string($typeOfPoint),
                                    mysql_real_escape_string($imageCoordinateX),
                                    mysql_real_escape_string($imageCoordinateY),
                                    mysql_real_escape_string($gpsLatitude),
                                    mysql_real_escape_string($gpsLongitude));
            
            $insert_query_results = mysqli_query($connection, $insert_query);
            
            if($insert_query_results){
               echo '<div id="message-box-success" class="message-box">
                        <a class="close fade-out">×</a>
                        <p class="text-center">
                            <strong>Successful!</strong> The location <b>'.$locationName.'</b> was successfully added.
                        </p>
                     </div>';
            }else{
               echo '<div id="message-box-error" class="message-box">
                        <a class="close fade-out">×</a>
                        <p class="text-center"
                            <strong>Insertion Error!</strong> The Location<b> '.$locationName.'</b> already exists.
                        </p>
                     </div>';
            }
            
        }else{
           echo '<div id="message-box-empty-values" class="message-box">
                    <a class="close fade-out">×</a>
                    <p class="text-center">
                        <strong>Insertion Error!</strong> Some required fields are not set.
                    </p>
                 </div>';
        }
    }