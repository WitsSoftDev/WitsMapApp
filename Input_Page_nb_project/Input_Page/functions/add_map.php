<?php
    /*
     * This function is used to insert data into the map databse
     */

    require './db_connect.php';
    
if(isset($_FILES['image-location-url']) && isset($_FILES['image-location-url'])){
    $map_image_name = $_FILES['image-location-url']['name'];
    $map_image_temp_dir = $_FILES['image-location-url']['name'];
}
    $map_location_url = "../upoads/maps/";
    
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
       
       if(isset($map_image_name)){
            $map_image_location_url = $map_location_url.$map_image_name;
            move_uploaded_file($map_image_temp_dir, $map_image_name);
       }
       
        if(!empty($Notempty)){

        $add_map_query = sprintf("INSERT INTO map (ImgLocation, Corner1GPSLatitude, Corner1GPSlongitude , Corner2GPSLatitude, Corner2GPSlongitude, Corner3GPSLatitude, Corner3GPSlongitude, Corner4GPSLatitude, Corner4GPSlongitude) "
                . "VALUES ('%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s', '%s')",
                 mysql_real_escape_string("url"),
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
            echo '<div class="alert alert-success">
                     <a class="close" data-dismiss="alert">×</a>
                     <strong>Successful!</strong> The map was successfully added.
                  </div>';
        }else {
            echo '<div class="alert alert-danger">
                     <a class="close" data-dismiss="alert">×</a>
                     <strong>Insertion Error!</strong> The insertion was not sucessful.
                  </div>';
        }
     }else{
         echo '<div class="alert alert-danger">
                 <a class="close" data-dismiss="alert">×</a>
                 <strong>Insertion Error!</strong> All fields must be filled in.
              </div>';
     }
    
    }