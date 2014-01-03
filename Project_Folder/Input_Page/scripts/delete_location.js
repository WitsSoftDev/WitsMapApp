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
                    $("#my-modal-"+LocationID).modal('hide');
                    $("div#location-delete-msg-content").html(data).hide()
                       .fadeIn("slow")
                       .delay(3000)
                       .fadeOut("slow");
                }

        });
    }

    

