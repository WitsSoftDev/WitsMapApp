var utils_id = -1;
var utils_r;
var utils_e;
var utils_coordinates = [-100, -100];
var utils_country = "England";
var utils_lat = "0";
var utils_lng = "0";
var utils_loginState = false;
var utils_settingsOpenState = "0";
var utils_locationEntity = null;
var utils_locationId = -1;
var utils_currentCity = "Unable to obtain your location";
var utils_addressAdmin1 = "Unable to obtain your location";
var utils_addressAdmin2 = "Unable to obtain your location";
var utils_addressAdmin3 = "Unable to obtain your location";
var utils_sessionLocationState = false;

if (window.localStorage.getItem("lat") != null){
	utils_lat = window.localStorage.getItem("lat");
	utils_lng = window.localStorage.getItem("lng");
}


if (window.localStorage.getItem("country") != null){
	utils_country = window.localStorage.getItem("country");
}	

function utils_preloadImage(filename) {
	// alert(filename);
	if (filename != "none") {
		myImage = new Image();
		myImage.src = constants_root + filename;
	}
}

function utils_setContent(name, content){
	document.getElementById(name).innerHTML=content;
}

function utils_showIcon(element, show, icon){
	utils_show(element, show);
	document.getElementById(icon).className = "";
	document.getElementById(icon).className = "menuButton";
	if (show){
		document.getElementById(icon).className = "menuSelect";
	}
}

function utils_show(element, show) {
	if (show) {
		document.getElementById(element).style.display = "block";
	} else {
		document.getElementById(element).style.display = "none";
	}
}

function utils_getImage(filename) {
	if (filename == "none") {
		return "images/defaultArtist.png";
	} else {
		return constants_root + filename;
	}
}

function utils_getArtistImage(filename) {
	if (filename == "none") {
		return "images/defaultArtist.png";
	} else {
		return constants_root + filename;
	}
}

function utils_getVenueImage(filename) {
	if (filename == "none") {
		return "images/defaultVenue.png";
	} else {
		return constants_root + filename;
	}
}

function utils_doAjax(func, parameters, processData) {
	/* change made here */
	$.ajax({
		type : 'GET',
		url : constants_root + func + ".php",
		data : parameters,
		dataType : 'jsonp',
		error : function(r, e) {
			alert('error'+r+e+func);
			utils_r=r;
			utils_e=e;
		},
		success : function(data) {
			//alert("success");
			processData(data);
		}
	});

}


function utils_formatTime(timedata){
	var inputTime = timedata;
	var yearStr = inputTime.substring(0, 4);
	//alert(yearStr);
	var monthStr = inputTime.substring(5, 7);
	//alert(monthStr);
	var dayStr = inputTime.substring(8, 10);
	//alert(dayStr);
	var hourStr =inputTime.substring(11, 13);
	//alert(hourStr);
	var minStr = inputTime.substring(14, 16);
	//alert(minStr);
	
	var month ="";
	
	switch (monthStr){
	case "01":
	{month = "Jan";
	break;
	}
	case "02":
	{month = "Feb";
	break;
	}
	case "03":
	{month = "Mar";
	break;
	}
	case "04":
	{month = "Apr";
	break;
	}
	case "05":
	{month = "May";
	break;
	}
	case "06":
	{month = "June";
	break;
	}
	case "07":
	{month = "July";
	break;
	}
	case "08":
	{month = "Aug";
	break;
	}
	case "09":
	{month = "Sep";
	break;
	}
	case "10":
	{month = "Oct";
	break;
	}
	case "11":
	{month = "Nov";
	break;
	}
	case "12":
	{month = "Dec";
	break;
	}
	};
	
	var actualHour = parseInt(hourStr);
	
	if (actualHour >= 12 && actualHour < 24){
		var stamp ="PM";
		actualHour= actualHour -12;
	} else {
		var stamp ="AM";
		if (actualHour == 24){
			actualHour= actualHour -12;
		};
	}
			
	formattedTime = dayStr + ' ' + month + ' ' + yearStr +' , ' +actualHour + ':' + minStr + ' ' +  stamp;
	return formattedTime;
}


function utils_formatTime_lessYear(timedata){
	var inputTime = timedata;
	var yearStr = inputTime.substring(0, 4);
	//alert(yearStr);
	var monthStr = inputTime.substring(5, 7);
	//alert(monthStr);
	var dayStr = inputTime.substring(8, 10);
	//alert(dayStr);
	var hourStr =inputTime.substring(11, 13);
	//alert(hourStr);
	var minStr = inputTime.substring(14, 16);
	//alert(minStr);
	
	var month ="";
	
	switch (monthStr){
	case "01":
	{month = "Jan";
	break;
	}
	case "02":
	{month = "Feb";
	break;
	}
	case "03":
	{month = "Mar";
	break;
	}
	case "04":
	{month = "Apr";
	break;
	}
	case "05":
	{month = "May";
	break;
	}
	case "06":
	{month = "June";
	break;
	}
	case "07":
	{month = "July";
	break;
	}
	case "08":
	{month = "Aug";
	break;
	}
	case "09":
	{month = "Sep";
	break;
	}
	case "10":
	{month = "Oct";
	break;
	}
	case "11":
	{month = "Nov";
	break;
	}
	case "12":
	{month = "Dec";
	break;
	}
	};
	
	var actualHour = parseInt(hourStr);
	
	if (actualHour >= 12 && actualHour < 24){
		var stamp ="PM";
		actualHour= actualHour -12;
	} else {
		var stamp ="AM";
		if (actualHour == 24){
			actualHour= actualHour -12;
		};
	}
			
	formattedTime = dayStr + ' ' + month + ' , ' +actualHour + ':' + minStr + ' ' +  stamp;
	return formattedTime;
}


function utils_getLocation() {
   
    var options = {timeout: 20000, enableHighAccuracy:true};
    navigator.geolocation.getCurrentPosition(utils_onGeoSuccess, utils_onGeoError, options);
 }

// onSuccess Geolocation
//
function utils_onGeoSuccess(position) {
	//alert("S");
    var element =  'Latitude: '           + position.coords.latitude              + '<br />' +
                        'Longitude: '          + position.coords.longitude             + '<br />' +
                        'Altitude: '           + position.coords.altitude              + '<br />' +
                        'Accuracy: '           + position.coords.accuracy              + '<br />' +
                        'Altitude Accuracy: '  + position.coords.altitudeAccuracy      + '<br />' +
                        'Heading: '            + position.coords.heading               + '<br />' +
                        'Speed: '              + position.coords.speed                 + '<br />' +
                        'Timestamp: '          +                                   position.timestamp          + '<br />';
   // alert(element);
    var lat = parseFloat(position.coords.latitude);
    var lng = parseFloat(position.coords.longitude);
    utils_coordinates =[lat,lng];
    
    utils_lat= lat;
	utils_lng= lng;
	  
	window.localStorage.removeItem("lat");
	window.localStorage.setItem("lat", utils_lat);
	window.localStorage.removeItem("lng");
	window.localStorage.setItem("lng", utils_lng);
    //alert(lat+ "   " +lng);
    index_getLocationStream(lat,lng);
    //alert(utils_coordinates[0]);
    //alert(utils_coordinates[1]);
    //var latlng = new google.maps.LatLng(40.730608,-73.858552); //New York - Queens
    //var latlng = new google.maps.LatLng(16.826781,28.136658); //China
    var latlng = new google.maps.LatLng(utils_coordinates[0],utils_coordinates[1]);
    
    var locationData=utils_getAddress(latlng);
    //alert(locationData);
   

}

// onError Callback receives a PositionError object
//
function utils_onGeoError(error) {
	//alert("E");
    alert('code: '    + error.code    + '\n' +
            'message: ' + error.message + '\n');
    
    
}


function utils_getAddress (latlng) {
		var  geocoder = new google.maps.Geocoder();
		var addressData ="";
	
		//alert(latlng);
		 geocoder.geocode({'latLng': latlng}, function(results, status) {
		        if (status == google.maps.GeocoderStatus.OK) {
		          if (results[0]) {
		        	 // alert('geo sucsess');
		            var arrAddress = results[0].address_components;
		            // iterate through address_component array
		            $.each(arrAddress, function (i, address_component) {
		            	  addressData +=address_component.types[0]+ " : " +  address_component.long_name +" , \n";
		            	  if (address_component.types[0] == "country"){
		            		  
		            		  utils_country= address_component.long_name;
		            		  //alert(addressData);
		            		  window.localStorage.removeItem("country");
		            		  window.localStorage.setItem("country", utils_country);       		  
		            		  //toast(addressData);
		            	  }
		            	  if (address_component.types[0] == "administrative_area_level_3"){
		            		  utils_addressAdmin3 = address_component.long_name;
		            	  } 
		            	  if (address_component.types[0] == "administrative_area_level_2"){
		            		  utils_addressAdmin2 = address_component.long_name;
		            	  } 
		            	  if (address_component.types[0] == "administrative_area_level_1"){
		            		  utils_addressAdmin1 = address_component.long_name;
		            		  //alert(address_component.long_name);
		            	  } 
		               		 // alert(address_component.types[0] + ' : ' +address_component.long_name );
		            	  //}
		            	  
		            	 // if (address_component.types[0] == "postal_code") {
		            	// alert(addressData);
		            	//console.log(address_component.long_name); // city
		                //alert(address_component.types[0]+" , "+address_component.long_name);
		             //   return false; // break
		           // }
		            }
		           // alert(addressData);
		            );
		          } else {
		            //alert("No results found");
		            alert("Gig Guide was unable to detect your current Location, and will utilise the last stored location");
		          }
		        } else {
		          //alert("Geocoder failed due to: - Please check that you have access to a wifi or data network!" + status);
		          alert("Gig Guide was unable to detect your current Location, and will utilise the last stored location");
		        }
		      });
			return addressData;
}
	
	
function utils_checkConnection(){
    var networkState = navigator.connection.type;

    var states = {};
    states[Connection.UNKNOWN]  = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI]     = 'WiFi connection';
    states[Connection.CELL_2G]  = 'Cell 2G connection';
    states[Connection.CELL_3G]  = 'Cell 3G connection';
    states[Connection.CELL_4G]  = 'Cell 4G connection';
    states[Connection.CELL]     = 'Cell generic connection';
    states[Connection.NONE]     = 'No network connection';

    //alert('Connection type: ' + states[networkState]);
	/* TESTING IMAGE TRANSITION */
    
    if (states[networkState] == "No network connection") {
    	alert ("Gig Guide requires a network connection to work, please check your setting and try launching again! See you in a minute!");
    	navigator.app.exitApp();
    };
    
}


function utils_changePage(page){
	var currentPage=($.mobile.activePage.attr("id"));
	if(currentPage == "artistPage"){
		//alert("Stopping Audio");
		stopAudio();
	};
	
	
	$.mobile.changePage(page+".html", {
	    transition: "none",
	    reverse: false,
	    changeHash: true
	});
}

function utils_changePagePopup(page, pop){
	//alert(pop);
	var currentPage=($.mobile.activePage.attr("id"));
	if(currentPage == "artistPage"){
		//alert("Stopping Audio");
		stopAudio();
	};
	
	
	$.mobile.changePage(page+".html", {
	    transition: "none",
	    reverse: false,
	    changeHash: true
	});
	
	
		if (pop == "login"){
		utils_settingsOpenState ="1";
		} else {
			utils_settingsOpenState ="2";
		}
	
/// POPUP NOT TRIGGERED!!!! SKULLS HELP
	
}


function utils_changeEntityPage(page, entityId){
	//alert(entityId);
	//var Eid = parseInt(entityId);
	//alert(Eid);
	var currentPage=($.mobile.activePage.attr("id"));
	if(currentPage == "artistPage"){
		//alert("Stopping Audio");
		stopAudio();
	};
	
	var destination = page +".html?id=" + entityId;
	//alert (destination);
	$.mobile.changePage(destination, {
	    transition: "none",
	    reverse: false,
	    changeHash: true
	});
	
}

function utils_onBackKeyDown() {
	
	    var currentPage=($.mobile.activePage.attr("id"));
	    //alert(currentPage);
	
		if(currentPage == "homePage"){
			if ($(".ui-page-active .ui-popup-active").length > 0){
				$('#searchPopupBasic').popup("close");
				$('#popupBasic').popup("close");
				
			} else {
			navigator.app.exitApp();
			}
		};
		if(currentPage== "artistPage"){
			if ($(".ui-page-active .ui-popup-active").length > 0){
				$('#artistPopupBasic').popup("close");
			} else {
				stopAudio();
				utils_changePage("index");
			}
		};
		if(currentPage== "venuePage"){
			if ($(".ui-page-active .ui-popup-active").length > 0){
				$('#venuePopupBasic').popup("close");
			} else {
				utils_changePage("index");
			}
		};
		if(currentPage== "settingsPage"){
			if ($(".ui-page-active .ui-popup-active").length > 0){
				$('#settingsPopupBasic').popup("close");
			} else {
				utils_changePage("index");
			}
		};
		if(currentPage== "searchPage"){
			if ($(".ui-page-active .ui-popup-active").length > 0){
				$('#searchPopupBasic').popup("close");
			} else {
				utils_changePage("index");
			}
		};
			
}

function utils_phoneCall(number){
	//alert("call?");
	document.location = "tel:" + number;
}


function utils_email(email){
	//alert("call?");
	document.location = "mailto:" + email;
}


function utils_navigate(lat,lng){
	//alert("call?");
	document.location = "geo:" + lat,lng;
	//<a href="geo:38.897096,-77.036545">open map</a>
}


function utils_website(path){
	navigator.app.loadUrl('http://gigbox.net', { openExternal:true });
	 return false;
}


function utils_twitter(path){
	navigator.app.loadUrl('https://twitter.com/'+path, { openExternal:true });
	 return false;
}


function utils_facebook(path){
	//alert(path);
	 navigator.app.loadUrl('https://www.facebook.com/' +path, { openExternal:true });
	 return false;
}


function utils_soundcloud(path){
	navigator.app.loadUrl('https://soundcloud.com/'+path, { openExternal:true });
	 return false;
}

function utils_getDeviceWidth() {
	if (document.body && document.body.offsetWidth) {
		winW = document.body.offsetWidth;
		winH = document.body.offsetHeight;
	}
	if (document.compatMode == 'CSS1Compat' && document.documentEleme$
			&& document.documentElement.offsetWidth) {
		winW = document.documentElement.offsetWidth;
		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;
		winH = window.innerHeight;
	}
	return winW;
}

function utils_getMaxSpan() {
	if (document.body && document.body.offsetWidth) {
		winW = document.body.offsetWidth;
		winH = document.body.offsetHeight;
	}
	if (document.compatMode == 'CSS1Compat' && document.documentEleme$
			&& document.documentElement.offsetWidth) {
		winW = document.documentElement.offsetWidth;
		winH = document.documentElement.offsetHeight;
	}
	if (window.innerWidth && window.innerHeight) {
		winW = window.innerWidth;
		winH = window.innerHeight;
	}
	
	var maxSpan = winW*0.96;
	return maxSpan;
	
}

function utils_touchEvents(btn){
	$(btn).on('touchstart', function(e){
		$(this).addClass('tapped');
	});
	
	$(btn).on('touchend', function(e){
		$(this).removeClass('tapped');
	});

	$(btn).on('touchmove', function(e){
	    $(this).removeClass('tapped');
	});
	
}



function utils_menuTouchEvents(btn){
	$(btn).on('touchstart', function(e){
		$(this).addClass('tappedMenu');
	});
	
	$(btn).on('touchend', function(e){
	    $(this).removeClass('tappedMenu');
	});

	$(btn).on('touchmove', function(e){
	    $(this).removeClass('tapped');
	});
}

function utils_removeTouchEvents(btn){
	$(btn).on('touchstart', function(e){
		$(this).removeClass('tapped');
	});
	
	$(btn).on('touchend', function(e){
		$(this).removeClass('tapped');
	});

	$(btn).on('touchmove', function(e){
	    $(this).removeClass('tapped');
	});
	
}
function utils_checkVaildMail(email){
		
	//alert("Checking"); 

	var message;
	var state;
	    if (stringEmpty(email)) {
	        return {
	    	message : "There is no input email entered.",
	        state : false}
	    } else if (noAtSign(email)) {
	    	return {
	        message : "The address \"" + email + "\" does not contain an '@' character.",
	        state : false}
	    } else if (nothingBeforeAt(email)) {
	    	return {
	        message : "The address \"" + email + "\" must contain at least one character before the '@' character",
	    	state : false}
	    }  else if (noLeftBracket(email)) {
	    	return {
	        message : "The address \"" + email + "\" contains a right square bracket ']',\nbut no corresponding left square bracket '['.",
	        state : false}
	    } else if (noRightBracket(email)) {
	    	return {
	    	message : "The address \"" + email + "\" contains a left square bracket '[',\nbut no corresponding right square bracket ']'.",
	    	state : false}
	    } else if (noValidPeriod(email)) {
	    	return {
	        message : "The address \"" + email + "\" must contain a period ('.') character.",
	        state : false}
	    } else if (noValidSuffix(email)) {
	    	return {
	    	message : "The address \"" + email + "\" must contain a two, three or four character suffix.",
	    	state : false}
	    } else {
	    	return {
	        message : "Success! The email address \"" + email + "\" validates OK.",
	        state : true}
	    } 

}

	    function checkValid (formField) {
	    if ( checkValidation ( formField ) == true ) {
	        alert ( 'E-Mail Address Validates OK' );
	    }

	    return ( false );
	    }

	function stringEmpty (formField) {
	    // CHECK THAT THE STRING IS NOT EMPTY
	    if ( formField.length < 1 ) {
	        return ( true );
	    } else {
	        return ( false );
	    }
	}

	function noAtSign (formField) {
	    // CHECK THAT THERE IS AN '@' CHARACTER IN THE STRING
	    if (formField.indexOf ('@', 0) == -1) {
	        return ( true )
	    } else {
	        return ( false );
	    }
	}

	function nothingBeforeAt (formField) {
	    // CHECK THERE IS AT LEAST ONE CHARACTER BEFORE THE '@' CHARACTER
	    if ( formField.indexOf ( '@', 0 ) < 1 ) {
	        return ( true )
	    } else {
	        return ( false );
	    }
	}

	function noLeftBracket (formField) {
	    // IF EMAIL ADDRESS IN FORM 'user@[255,255,255,0]', THEN CHECK FOR LEFT BRACKET
	    if ( formField.indexOf ( '[', 0 ) == -1 && formField.charAt (formField.length - 1) == ']') {
	        return ( true )
	    } else {
	        return ( false );
	    }
	}

	function noRightBracket (formField) {
	    // IF EMAIL ADDRESS IN FORM 'user@[255,255,255,0]', THEN CHECK FOR RIGHT BRACKET
	    if (formField.indexOf ( '[', 0 ) > -1 && formField.charAt (formField.length - 1) != ']') {
	        return ( true );
	    } else {
	        return ( false );
	    }
	}

	function noValidPeriod (formField) {
	    // IF EMAIL ADDRESS IN FORM 'user@[255,255,255,0]', THEN WE ARE NOT INTERESTED
	    if (formField.indexOf ( '@', 0 ) > 1 && formField.charAt (formField.length - 1 ) == ']')
	        return ( false );

	    // CHECK THAT THERE IS AT LEAST ONE PERIOD IN THE STRING
	    if (formField.indexOf ( '.', 0 ) == -1)
	        return ( true );

	    return ( false );
	}

	function noValidSuffix(formField) {
	    // IF EMAIL ADDRESS IN FORM 'user@[255,255,255,0]', THEN WE ARE NOT INTERESTED
	    if (formField.indexOf('@', 0) > 1 && formField.charAt(formField.length - 1) == ']') {
	        return ( false );
	    }

	    // CHECK THAT THERE IS A TWO OR THREE CHARACTER SUFFIX AFTER THE LAST PERIOD
	    var len = formField.length;
	    var pos = formField.lastIndexOf ( '.', len - 1 ) + 1;
	    if ( ( len - pos ) < 2 || ( len - pos ) > 4 ) {
	        return ( true );
	    } else {
	        return ( false );
	    }
	}
	
	
	
	function utils_getHTMLLocation()
	  {
		if (navigator.geolocation)
	    {			
		 navigator.geolocation.getCurrentPosition(showPosition);
		 //alert("SSSSS"); - SKULL SHOW ERROR on geolookup???
	     }
	  else{
		  alert("Unable to obtain your current loaction");// var content ="Geolocation is not supported by this browser.";
	  	  utils_sessionLocationState = false;
		  utils_lat	= window.localStorage.getItem("lat");
	  	  utils_lng	= window.localStorage.getItem("lng");
	  	  index_getLocationStream(utils_lat,utils_lng);
	  	  //alert(utils_lat+ "   ,   " + utils_lng);
	  //index_getLocationStream(utils_lat,utils_lng);
	  //	  alert(utils_lat+ "   ,   " + utils_lng);
	  }
	  }
	
	function showPosition(position)
	  {
		//alert("tttt");
		var lat = parseFloat(position.coords.latitude);
		 var lng = parseFloat(position.coords.longitude);
		 utils_coordinates =[lat,lng];
		 
  		  utils_lat= lat;
  		  utils_lng= lng;
  		  utils_sessionLocationState = true;
  		  window.localStorage.removeItem("lat");
		  window.localStorage.setItem("lat", utils_lat);
		  window.localStorage.removeItem("lng");
		  window.localStorage.setItem("lng", utils_lng);
		  index_getLocationStream(utils_lat,utils_lng);
		  //alert(utils_lat+ "   ,   " + utils_lng);
		 var latlng = new google.maps.LatLng(utils_coordinates[0],utils_coordinates[1]);
	    
	    var locationData=utils_getAddress(latlng); //reverse geocode
	  //var content = "Latitude: " + position.coords.latitude + "Longitude: " + position.coords.longitude;	
	  //alert(content);
	  }
	
	
function utils_jumpToLogin(pop){
	utils_changePagePopup("settingsPage",pop);
	if (utils_locationEntity == null) {
	utils_locationEntity = "home";
	utils_locationId=-1;
	}
}

