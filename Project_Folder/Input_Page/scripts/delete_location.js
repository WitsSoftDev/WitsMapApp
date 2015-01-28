/* 
 * 
 */
    function delete_location(LocationID,LocationName){
        var location_id = "LocationID="+LocationID;
        var location_name = "LocationName="+LocationName;
        
        var data = location_id+"&"+location_name;

        $.ajax({
          url: '../functions/delete_location.php',
          type: 'POST',
          data: data,

                success: function(data, textStatus, jqXHR) {
                    
                    var response = JSON.parse(data);
                    var status = response["status"];
                    var message = response["message"];
                    
                    $("#my-modal-"+LocationID).modal('hide');
                    $("div#location-delete-msg-content").html(message).hide()
                       .fadeIn("slow")
                       .delay(3000)
                       .fadeOut("slow");
               
                    if(status === "success"){
                        var current__num_of_locations = $("input#locations-count").val();
                        //decrease current number by 1
                        $("input#locations-count").val(current__num_of_locations-1);
                    }
                    
                    
                       
                       
                }

        });
    }

    

