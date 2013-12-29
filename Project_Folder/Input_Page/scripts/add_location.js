/* 
 * This script uses ajax to send location data to the server database
 */

function addLocationData(){
    var xmlhttp;
    
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest;
    }else{
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xmlhttp.onreadystatechange = function (){
       if(xmlhttp.readyState === 4 && xmlhttp.status === 200 ){
           document.getElementById("add-location-msg-content").innerHTML = xmlhttp.responseText;
       } 
    };
    
    
    //form fields and their data
    var location_image = "location-image="+document.getElementById("location-image").value;
    var location_name = "location-name="+document.getElementById("location-name").value;
    var location_prefix = "location-prefix="+document.getElementById("location-prefix").value;
    var about_location = "about-location="+document.getElementById("about-location").value;
    var type_of_point = "type-of-point="+document.getElementById("type-of-point").value;
    var X_coordinate = "X-coordinate="+document.getElementById("image-x-coordinate").value;
    var Y_coordinate = "Y-coordinate="+document.getElementById("image-Y-coordinate").value;
    var gps_latitude = "gps-latitude="+document.getElementById("gps-latitude").value;
    var gps_longitude = "gps-longitude="+document.getElementById("gps-longitude").value;
    
    
    var loacationData = location_image+"&"+location_name+"&"+location_prefix+"&"+about_location+"&"+type_of_point+"&"+X_coordinate+"&"+Y_coordinate+"&"+gps_latitude+"&"+gps_longitude;
    xmlhttp.open("POST","../functions/add_location.php",true);
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.send(loacationData);
    
}


