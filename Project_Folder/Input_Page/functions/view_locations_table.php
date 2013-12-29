<?php
/* 
 * 
 */

$location_query = "SELECT LocationID, LocationName, LocationPrefix, LocationInfo, ImageOfLocation, TypeOfPoint, "
                    . "ImageCoordinatex, ImageCoordinateY, GPSLatitude, GPSLongitude FROM locationdata";

$query_run = mysqli_query($connection, $location_query);
if($query_run){

}  

