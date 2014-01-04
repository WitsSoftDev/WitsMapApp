<?php
    /*
     * This function is used to insert data into the map databse
     */

    require './db_connect.php';
    
if(isset($_FILES['image-location-url']) && !empty($_FILES['image-location-url'])){
    $map_image_name = $_FILES['image-location-url']['name'];
    $map_image_size = $_FILES['image-location-url']['size'];
    $map_image_type = $_FILES['image-location-url']['type'];
    $map_image_temp_dir = $_FILES['image-location-url']['tmp_name'];
    
    //image validation
        $image_file_info = basename($map_image_name);
        
        //image size must be less than 5mb
        if($map_image_size > 5242880){
            $map_query_response_array_1 = array("status" => "image_large",
                                          "message" => '<div id="message-box-error" class="message-box">
                                                            <a class="close fade-out">×</a>
                                                            <p class="text-center">
                                                                <strong>Image Error!</strong> The image file is too larege.
                                                            </p>
                                                         </div>');
            
            die(json_encode($map_query_response_array_1));
        }else{
            //checking if the image file is a jpg or jpeg or png
            $ext = strtolower(substr($image_file_info, strrpos($image_file_info,'.')+1));
            
            if(!(($ext == "jpg" || $ext == "jpeg" || $ext == "png") && ($map_image_type == "image/jpeg" || $map_image_type == "image/png"))){
                $map_query_response_array_2 = array( "status" => "invalid_file_type",
                                           "message" => '<div id="message-box-error" class="message-box">
                                                            <a class="close fade-out">×</a>
                                                            <p class="text-center">
                                                                <strong>Image Error!</strong> invalid file type.
                                                            </p>
                                                         </div>');
                
                die(json_encode($map_query_response_array_2));
            }
        }
}
    $map_location_url = "../uploads/maps/";
    
    $isset =    isset($_POST['corner-1-gps-latitude']) && isset($_POST['corner-1-gps-longitude']) &&
                isset($_POST['corner-2-gps-latitude']) && isset($_POST['corner-2-gps-longitude']) &&
                isset($_POST['corner-3-gps-latitude']) && isset($_POST['corner-3-gps-longitude']) &&
                isset($_POST['corner-4-gps-latitude']) && isset($_POST['corner-4-gps-longitude']);
    
    $Notempty = !empty($_POST['corner-1-gps-latitude']) && !empty($_POST['corner-1-gps-longitude']) &&
                !empty($_POST['corner-2-gps-latitude']) && !empty($_POST['corner-2-gps-longitude']) &&
                !empty($_POST['corner-3-gps-latitude']) && !empty($_POST['corner-3-gps-longitude']) &&
                !empty($_POST['corner-4-gps-latitude']) && !empty($_POST['corner-4-gps-longitude']);

    if($isset){
              
       $corner_1_gps_latitude = $_POST['corner-1-gps-latitude'];
       $corner_1_gps_longitude = $_POST['corner-1-gps-longitude'];
       $corner_2_gps_latitude = $_POST['corner-2-gps-latitude'];
       $corner_2_gps_longitude = $_POST['corner-2-gps-longitude'];
       $corner_3_gps_latitude = $_POST['corner-3-gps-latitude'];
       $corner_3_gps_longitude = $_POST['corner-3-gps-longitude'];
       $corner_4_gps_latitude = $_POST['corner-4-gps-latitude'];
       $corner_4_gps_longitude = $_POST['corner-4-gps-longitude'];
       $map_image_location_url = NULL;
       
       if(isset($map_image_name)){
            $map_image_location_url = $map_location_url.$map_image_name;
            move_uploaded_file($map_image_temp_dir, $map_image_location_url);
       }
       
        if(!empty($Notempty)){

        $add_map_query = sprintf("INSERT INTO map (ImgLocation, Corner1GPSLatitude, Corner1GPSlongitude , Corner2GPSLatitude, Corner2GPSlongitude, Corner3GPSLatitude, Corner3GPSlongitude, Corner4GPSLatitude, Corner4GPSlongitude) "
                . "VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
                 mysql_real_escape_string($map_image_location_url),
                 mysql_real_escape_string($corner_1_gps_latitude),
                 mysql_real_escape_string($corner_1_gps_longitude),
                 mysql_real_escape_string($corner_2_gps_latitude),
                 mysql_real_escape_string($corner_2_gps_longitude), 
                 mysql_real_escape_string($corner_3_gps_latitude),
                 mysql_real_escape_string($corner_3_gps_longitude),
                 mysql_real_escape_string($corner_4_gps_latitude),
                 mysql_real_escape_string($corner_4_gps_longitude));

        $add_map_query_results = mysqli_query($connection, $add_map_query);

        if($add_map_query_results){
            $map_query_response_array_3 = array("status" => "success",
                                                 "message" => '<div class="message-box">
                                                                    <a class="close fade-out">×</a>
                                                                    <p class="text-center">
                                                                       <strong>Successful!</strong> The map was successfully added.
                                                                    </p>
                                                                 </div>');
            
            echo json_encode($map_query_response_array_3);
        }else {
            $map_query_response_array_4 = array("status" => "inser_error",
                                                "message" => '<div class="message-box">
                                                                    <a class="close fade-out">×</a>
                                                                    <p class="text-center">
                                                                       <strong>Insertion Error!</strong> The insertion was not sucessful.
                                                                    </p>
                                                                 </div>');
            
            echo json_encode($map_query_response_array_4);
        }
     }else{
         $map_query_response_array_5 = array("status" => "empty_values",
                                             "message" => '<div class="message-box">
                                                                <a class="close fade-out">×</a>
                                                                <p class="text-center">
                                                                   <strong>Insertion Error!</strong> some required fileds are not set.
                                                                </p>
                                                             </div>');
         echo json_encode($map_query_response_array_5);
     }
    }