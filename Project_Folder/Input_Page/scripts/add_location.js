/* 
 * This script uses ajax and JQuery to send location data to the server database
 */

    $(document).ready(function (){
        //hide the error labes after page loads.
        $('label.error').hide();
        //onclick lister for the add location button
        $('#add-location-btn').click(function (){
            //form validation
            $('label.error').hide();
            var location_name = $('#location-name').val();
            if(location_name === ""){
                $('input#location-name').focus();
                $('label#location-name-error').fadeIn(1000);
                
                return false; //stops the form from being submitted
            }
            
            var location_prefix = $('input#location-prefix').val();
            var about_location = $('textarea#about-location').val();
            var type_of_point = $('input#type-of-point').val();
            
            var image_x_coordinate = $('input#image-x-coordinate').val();
            if(image_x_coordinate === ""){
                $('input#image-x-coordinate').focus();
                $('label#image-x-coordinate-error').fadeIn(1000);
                
                return false;
            }
            
            var image_y_coordinate = $('input#image-Y-coordinate').val();
            if(image_y_coordinate === ""){
                $('input#image-Y-coordinate').focus();
                $('label#image-Y-coordinate-error').fadeIn(1000);
                
                return false;
            }
            
            var gps_latitude = $('input#gps-latitude').val();
            if(gps_latitude === ""){
                $('input#gps-latitude').focus();
                $('label#gps-latitude-error').fadeIn(1000);
                
                return false;
            }
            
            var gps_longitude = $('input#gps-longitude').val();
            if(gps_longitude === ""){
                $('input#gps-longitude').focus();
                $('label#gps-longitude-error').fadeIn(1000);
                
                return false;
            }
            
            //image validation if the image is selected
            var location_image = $("input#location-image").files[0];
            alert(location_image.name);
            
            var dataForm = "location-name="+location_name+"&location-prefix="+location_prefix+"&about-location="+about_location+"&type-of-point="+type_of_point
                            +"&X-coordinate="+image_x_coordinate+"&Y-coordinate="+image_y_coordinate+"&gps-latitude="+gps_latitude+"&gps-longitude="+gps_longitude;
            
            //submit form
            $.ajax({
                type: 'POST',
                url: "../functions/add_location.php",
                data: dataForm,
                success: function(data, textStatus, jqXHR) {
                $("div#add-location-msg-content").html(data)
                        .hide()
                        .fadeIn('slow')
                        .delay(3000)
                        .fadeOut("slow");
            }
            });
        });
    });


