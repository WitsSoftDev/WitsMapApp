function get_geoPosition() {
        navigator.geolocation.getCurrentPosition(onGSuccess, onGError);
      }

    // onSuccess Geolocation
    //
    function onGSuccess(position) {
    	alert("S");
        var element =  'Latitude: '           + position.coords.latitude              + '<br />' +
                            'Longitude: '          + position.coords.longitude             + '<br />' +
                            'Altitude: '           + position.coords.altitude              + '<br />' +
                            'Accuracy: '           + position.coords.accuracy              + '<br />' +
                            'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                            'Heading: '            + position.coords.heading               + '<br />' +
                            'Speed: '              + position.coords.speed                 + '<br />' +
                            'Timestamp: '          +                                   position.timestamp          + '<br />';
        alert(element);
    }

    // onError Callback receives a PositionError object
    //
    function onGError(error) {
    	alert("E");
        alert('code: '    + error.code    + '\n' +
                'message: ' + error.message + '\n');
    }
