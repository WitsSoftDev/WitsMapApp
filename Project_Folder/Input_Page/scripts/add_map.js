/* 
 * This script uses ajax and JQuery to send location data to the server database
 */

    $(document).ready(function (){
        $("#add-map-btn").click(function (){
            //hide any error that might have been displayed previously
            $("label.error").hide();
            
            //form fieds validation
            var corner_1_gps_latitude = $("input#corner-1-gps-latitude").val();
            if(corner_1_gps_latitude === ""){
                $("input#corner-1-gps-latitude").focus();
                $("#corner-1-gps-latitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_1_gps_longitude = $("input#corner-1-gps-longitude").val();
            if(corner_1_gps_longitude === ""){
                $("input#corner-1-gps-longitude").focus();
                $("#corner-1-gps-longitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_2_gps_latitude = $("input#corner-2-gps-latitude").val();
            if(corner_2_gps_latitude === ""){
                $("input#corner-2-gps-latitude").focus();
                $("#corner-2-gps-latitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_2_gps_longitude = $("input#corner-2-gps-longitude").val();
            if(corner_2_gps_longitude === ""){
                $("input#corner-2-gps-longitude").focus();
                $("#corner-2-gps-longitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_3_gps_latitude = $("input#corner-3-gps-latitude").val();
            if(corner_3_gps_latitude === ""){
                $("input#corner-3-gps-latitude").focus();
                $("#corner-3-gps-latitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_3_gps_longitude = $("input#corner-3-gps-longitude").val();
            if(corner_3_gps_longitude === ""){
                $("input#corner-3-gps-longitude").focus();
                $("#corner-3-gps-longitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_4_gps_latitude = $("input#corner-4-gps-latitude").val();
            if(corner_4_gps_latitude === ""){
                $("input#corner-4-gps-latitude").focus();
                $("#corner-4-gps-latitude-error").fadeIn("slow");
                return false;
            }
            
            var corner_4_gps_longitude = $("input#corner-4-gps-longitude").val();
            if(corner_4_gps_longitude === ""){
                $("input#corner-4-gps-longitude").focus();
                $("#corner-4-gps-longitude-error").fadeIn("slow");
                return false;
            }
            
            
            if($("input#image-location-url").val() === ""){
                $("input#image-location-url").focus();
                $("#image-location-url-error").fadeIn("slow");
                return false;
            }
            
            //image data
            var map_image = $("input#image-location-url").prop("files")[0];
            
            var add_map_form_data = new FormData();
            //append all variables that must be send to the server via Post method to formdata
            add_map_form_data.append("image-location-url",map_image);
            add_map_form_data.append("corner-1-gps-latitude",corner_1_gps_latitude);
            add_map_form_data.append("corner-1-gps-longitude",corner_1_gps_longitude);
            add_map_form_data.append("corner-2-gps-latitude",corner_2_gps_latitude);
            add_map_form_data.append("corner-2-gps-longitude",corner_2_gps_longitude);
            add_map_form_data.append("corner-3-gps-latitude",corner_3_gps_latitude);
            add_map_form_data.append("corner-3-gps-longitude",corner_3_gps_longitude);
            add_map_form_data.append("corner-4-gps-latitude",corner_4_gps_latitude);
            add_map_form_data.append("corner-4-gps-longitude",corner_4_gps_longitude);
            
            
            //ajax form submit
            $.ajax({
                cache: false,
                contentType: false,
                processData: false,
                type: 'POST',
                url: "../functions/add_map.php",
                data: add_map_form_data,
                success: function(data, textStatus, jqXHR) {
                $("div#add-map-msg-content").html(data)
                        .hide()
                        .fadeIn('slow')
                        .delay(3000)
                        .fadeOut("slow");
                }
            });
        });
    });
