/* 
 * 
 */

function addMapData(){
    var xmlhttp;
    
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest;
    }else{
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200){
            document.getElementById("add-map-msg-content").innerHTML = xmlhttp.responseText;
        }
    };
    
    //form data
    var corner_1_gps_latitude = "corner-1-gps-latitude="+document.getElementById("corner-1-gps-latitude").value;
    var corner_1_gps_longitude = "corner-1-gps-longitude="+document.getElementById("corner-1-gps-longitude").value;
    var corner_2_gps_latitude = "corner-2-gps-latitude="+document.getElementById("corner-2-gps-latitude").value;
    var corner_2_gps_longitude = "corner-2-gps-longitude="+document.getElementById("corner-2-gps-longitude").value;
    var corner_3_gps_latitude = "corner-3-gps-latitude="+document.getElementById("corner-3-gps-latitude").value;
    var corner_3_gps_longitude = "corner-3-gps-longitude="+document.getElementById("corner-3-gps-longitude").value;
    var corner_4_gps_latitude = "corner-4-gps-latitude="+document.getElementById("corner-4-gps-latitude").value;
    var corner_4_gps_longitude = "corner-4-gps-longitude="+document.getElementById("corner-4-gps-longitude").value;
    var image_location_url = "image-location-url="+document.getElementById("image-location-url").value;
    
    var mapdata = corner_1_gps_latitude+"&"+corner_1_gps_longitude+"&"+corner_2_gps_latitude+"&"+corner_2_gps_longitude+"&"+corner_3_gps_latitude+"&"+corner_3_gps_longitude+"&"+corner_4_gps_latitude+"&"+corner_4_gps_longitude;
    
    xmlhttp.open("POST","../functions/add_map.php",true);
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.send(mapdata);
}


