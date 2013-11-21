var seq_no = 0;
var index_timeout;
var winW;

function index_login() {
	var email =  window.localStorage.getItem("email");
	if (email == null) {		
		// The user is  not logged in and no Credentials are stored 
	} else {
		var psd = window.localStorage.getItem("psd");
		var dataObj = {
		email : email,
		password : psd
		};
	utils_doAjax("clientLogin", dataObj, index_processLoginRequest);
	}
}

function index_logout() {
	utils_doAjax("clientLogout");
}

function index_addItems(){
   $('#adImg').trigger( 'insertItem', ["./images/defaultArtist.png", 0, true] );
   $('#adImg').trigger( 'insertItem', ["./images/defaultVenue.png", 0, true] );
}

function index_startCarousel(){
				$('#adImg').carouFredSel({
					direction: 'left',
					items: 1,
					auto: false,
					prev    : "#leftOverlay",
					next    : "#rightOverlay",
					scroll: {
						items:1,
						onBefore: function(data) {
						$("#nameOverlay").text(data.items.visible.first().attr( 'alt' ));
					}
					},
					
				});


				//	$('#carousel').trigger('play', true);
			//		$('#carousel').trigger('next');

}

function index_processLoginRequest(data){
	//alert(utils_loginState);
	if (data.result){
		index_getStream();
		utils_loginState=true;
		
	} 

}


function index_getRandomEntity() {
	//alert(loginid);
	var dataObj = {
		location : "Johannesburg"
	};
	utils_doAjax("getRandomEntity", dataObj, index_processRandomEntity);
}



function index_fixHeight() {
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
	document.getElementById("streamDiv").style.top = (100 + winW / 2) + "px"; // may
	document.getElementById("streamDiv").style.visibility = "visible";
	document.getElementById("locationStreamDiv").style.top = (100 + winW / 2) + "px"; 
	// ---document.getElementById("followedCaption").style.top=(50+winW/2)+"px";
	// document.getElementById("scheduleStreamDiv").style.top=(90+winW/2)+"px";
	// document.getElementById("scheduleCaption").style.top=(50+winW/2)+"px";
}

function index_clearTimeout() {
	clearTimeout(index_timeout);
}

function index_processRandomEntity(data) {
	var img = document.getElementById("adImg");
	// var imgLink = document.getElementById("imgLink");
	//var overlay = document.getElementById("nameOverlay");
	var loverlay = document.getElementById("leftOverlay");
	var roverlay = document.getElementById("rightOverlay");
	// imgLink.href="show"+data.type+".html?id="+data.id;
	utils_preloadImage("web/upload/" + data.type + "/" + data.file + ".jpg");
	index_addImage(constants_root + "web/upload/" + data.type + "/"
			+ data.file + ".jpg", data.name)
	//overlay.style.visibility = "visible";
	//overlay.innerHTML = data.name;
	loverlay.style.visibility = "visible";
	roverlay.style.visibility = "visible";
	index_timeout = setTimeout(index_getRandomEntity, 8000);
	// alert("set");
}

function index_addImage(url,title) {
	var item = "<img id='"+title+"' src='"+url+"' alt='"+title+"' style='width:"+winW+"px;height:"+winW/2+"px'/>";
        $('#adImg').trigger( 'insertItem', [item, 0, true] );
	$('#adImg').trigger( 'slideTo', [0]);
$("#nameOverlay").text(title);
//	alert(winW);
	//utils_classTouchEvents('menuButton');
}

function index_getStream() {
	var dataObj = {
		seqno : 0
	};
	seq_no++;
	// alert(dataObj);
	utils_doAjax("getStream", dataObj, index_processStream);
}

function index_getLocationStream(lat,lng){
	//alert(lat +"fetching stream" +lng);
	var dataObj = {
		lat : lat,
		lon : lng,
	};
	//seq_no++;
	// alert(dataObj);
	utils_doAjax("getLocationStream", dataObj, index_processLocationStream);
}

function index_retrieveState(){
	var state =window.localStorage.getItem("viewState");
	//alert ("STATE IS" + state);
	if (state != null){
		if (state == "Follow"){
			index_show("streamDiv");
		} else {
			index_show("locationStreamDiv");
		}
	} else {
		index_show("locationStreamDiv");
	}
}

function index_show(name) {
	if (name == "streamDiv"){
	utils_show("locationStreamDiv", false);
	document.getElementById("toggleStreamFollow").style.color="#ffffff";
	document.getElementById("toggleStreamGps").style.color="#7f7f7f";
	$('#toggleStreamGps').removeClass('streamTab');
	$('#toggleStreamFollow').addClass('streamTab');
	$('#followImg').attr('src',"images/followSelect.png");
	$('#gpsImg').attr('src',"images/gpsDeselect.png");
	window.localStorage.removeItem("viewState");
	window.localStorage.setItem("viewState", "Follow");
	} else {
		utils_show("streamDiv", false);
		document.getElementById("toggleStreamFollow").style.color="#7f7f7f";
		document.getElementById("toggleStreamGps").style.color="#ffffff";
		$('#toggleStreamFollow').removeClass('streamTab');
		$('#toggleStreamGps').addClass('streamTab');
		$('#followImg').attr('src',"images/followDeselect.png");
		$('#gpsImg').attr('src',"images/gpsSelect.png");
		window.localStorage.removeItem("viewState");
		window.localStorage.setItem("viewState", "GPS");
	};
	utils_show(name,true);
	document.getElementById(name).style.visibility = "visible";
}


function doPopup(city, venueName, venueId, artistName, artistId, time, price,
		other, artistImg, venueImg) {
	// alert("random");
	var displayTime = utils_formatTime(time);
	//var streamDivInfo = document.getElementById('streamDiv');
	//streamDivInfo.style.visibility='hidden';
	var content = "";
	//content += "<div class='gigInfo'>GIG INFO</div><br/>";
	//content += "<table style='border-collapse:collapse'><tr class='popupRowsUnknown' width=100%><td class='popupHeaderTable' width=100%> GIG INFO </td></tr></table>";
	content += "<table class='menuGig' width=100% style='border-collapse:collapse'>";
	content += "<tr class='' width=100% ><td> <img class=\"gigInfoIcon\" src='images/gigGuideIcon.png'></td>"
	content +=" <td class='gigInfoHeading' style='padding-left:5px; padding-right:0px'> Gig Info </td>"
	content += " <td class='popupShare'> <img class=\"gigInfoIcon\" src='images/shareIcon.png'> </td></tr></table>";
	content += "<br/>";
	content += "<div id='popupDetails'><div class='popupHeadings'> Date/Time </div> "
			+ displayTime + "<br/>";
	content += "<div class='popupHeadings'> Cover </div>" + price + "<br/>";
	content += "<div class='popupHeadings'> Details </div> " + other
			+ "</div><br/>";
	content += "<table style='border-collapse:collapse'>";
	//alert("Vid" + venueId+ " Aid " + artistId);	
	if (venueId==-1){
		content += "<tr class='popupRowsUnknown' width=100% > <td width=40%> <img class=\"popupImg\" src='images/unknownVenue.png"
		+"'/> </td> <td style='padding-left:10px; padding-right:5px'>" + venueName + "</td></tr>";
	} else {
		content += "<tr class='popupRows' onclick='javascript:utils_changeEntityPage(\"venuePage\","+ venueId +")'> <td width=40%> <img class=\"popupImg\" src='"+utils_getVenueImage(venueImg)
		+ "'/> </td> <td style='padding-left:10px; padding-right:5px'>" + venueName + "</td></tr>";
	}
	
	/* 	if (venueId==-1){
			content += "<td>"+ venueName + "</td></tr>";
		} else {
			content += "<td> <a href=\"venuePage.html?id=" + venueId + "\">"
			+ venueName + "</a></td></tr>";
	}
	content += "<tr> <td width=50%> <img border=1 width=100%  src='"+utils_getImage(artistImg)+"'/> </td>";
	*/
	if (artistId==-1){
		content += "<tr width=100% class='popupRowsUnknown'> <td width=40%> <img class=\"popupImg\" src='images/unknownArtist.png"
		+"'/> </td><td style='padding-left:10px; padding-right:5px' >" +artistName +"</td></tr>";
	} else {
		//content += "<tr class='popupRows' onclick='document.location.href=\"artistPage.html?id=" + artistId + "\"'> <td width=40%> <img class=\"popupImg\" src='"+utils_getImage(artistImg)
		//+"'/> </td> <td style='padding-left:10px; padding-right:5px'>" + artistName + "</td></tr>";
		content += "<tr class='popupRows' onclick='javascript:utils_changeEntityPage(\"artistPage\","+ artistId +")'> <td width=40%> <img class=\"popupImg\" src='"+utils_getArtistImage(artistImg)
		+"'/> </td> <td style='padding-left:10px; padding-right:5px'>" + artistName + "</td></tr>";
	
	}
	
	
	
	/* if (artistId==-1){
		content += "<td>"+ artistName + "</td></tr></table><br/>";	
	} else {
		content += "<td> <a href=\"artistPage.html?id=" + artistId + "\">"
		+ artistName + "</a></td></tr></table><br/>";
	}
	*/
	content += "</table>"
	document.getElementById("popupReplace").innerHTML = content;
	utils_touchEvents('.popupRows');
	utils_menuTouchEvents(".popupShare");
	$("#popupBasic").popup({
		overlayTheme : "none"
	});

	
	$('#popupBasic').popup("open",{x:0, y:0});
	//document.getElementById("homePage").style.overflow='hidden';
	
	$("#popupBasic").bind("popupafterclose", function(event){
		//document.getElementById("homePage").style.overflow="visible";
	});
	
	
	

}

function index_closePopup() {
	//document.getElementById("streamDiv").style.visibility="visible";
	//document.getElementById("streamDiv").style.overflow="visible";
	//$('#popupBasic').popup("close");
	//utils_onPopUps;
	
}


function index_processStream(data) {
	var table = document.getElementById("streamTable");
	table.innerHTML="";
	
	if (utils_loginState==true){
	if (data.length == 0){
		table.innerHTML="<div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:center; margin-top:20px'> " +
				"Your Artists and Venues currently have no listed Gigs!</div>";
	} else {
	for ( var i = 0; i < data.length; i++) {
		var item = data[i];
		//alert(item.venueid);
		if (item.artistid == -1) {
			item.artistName = item.unsignedartistname;
		}
		if (item.venueid == -1) {
			//alert("USV");
			// DOES NOT WORK!!!!
			item.venueName = item.unsignedartistname;
		}
		var table = document.getElementById("streamTable");
		var row = table.insertRow(table.rows.length);
		utils_preloadImage(item.artistImg);
		utils_preloadImage(item.venueImg);
		//alert(item.artistImg);
		row.item = item;
		row.onclick = function() {
			doPopup(this.item.city, this.item.venueName, this.item.venueid,
					this.item.artistName, this.item.artistid, this.item.time,
					this.item.price, this.item.other, this.item.artistImg, this.item.venueImg)
		};
		
		row.className = ("streamTableRow");
		utils_touchEvents(".streamTableRow");
		// SERIOUSLY CONSIDER HAVING STORED CORRECT DATE FORMAT ON SERVER AS THIS SLOWS PERFORMANCE WHEN DONE IN APP!!!
		var displayTime = utils_formatTime_lessYear(item.time);
		// *************************************
		
		var cell1 = row.insertCell(0);
		cell1.className = ("streamImgCell");
		var cell2 = row.insertCell(1);
		if (item.artistid ==-1){
			cell1.innerHTML = "<img class='streamImg' src='images/unknownArtist.png'/>";
		} else {
			cell1.innerHTML = "<img class=\"streamImg\" src=\""+utils_getArtistImage(item.artistImg)+"\"/>";
		}
		cell2.innerHTML = "<div class=\"streamHeading\">" + item.artistName
				+ "</div> <br><div class=\"streamDetails\" >" + item.venueName
				+ " , " + displayTime + "</div>";
	}
	} 
		
	} else {
		
		var content = "";
		content += "<tr height=20px></tr><tr><td colspan='3'><div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:justify; margin-top:5px'> " +
		"Login to start following Artists and Venues!</div></td></tr>" +
		"<tr width=100%><td width=15%></td><td class='signButton' onClick='javascript:utils_jumpToLogin(\"login\")' style='border-collapse:collapse; border-radius:0px'><img style='display:tabel-cell; vertical-align: middle' width=25px src='images/loginIcon.png'>Login</td><td width=15%></td></tr>" +
		"<tr height=20px></tr><tr width=100%>" +
		"<td width=15%></td><td class='signButton' onClick='javascript:utils_jumpToLogin(\"signup\")' style='border-collapse:collapse; border-radius:0px'><img style='display:tabel-cell; vertical-align: middle' width=20px src='images/addIcon.png'>Sign Up</td><td width=15%></td></tr>";
	table.innerHTML=content;
	utils_touchEvents('.signButton');
	}
}


function index_processLocationStream(data) {
	var table = document.getElementById("locationStreamTable");
	table.innerHTML="";
	//table.innerHTML="<tr><td> NONE </td></tr>";
	//alert(data.length);
	//alert(data);
	if  (utils_sessionLocationState == true){
	
	if (data.length == 0){
		table.innerHTML="<div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:center; margin-top:20px'> " +
				"No Gigs within your seach radius!</div>";
	}  else {
		//table.innerHTML="<div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:justify; margin-top:20px'> " +
		//"us!</div>";
		for ( var i = 0; i < data.length; i++) {
		var item = data[i];
		//alert(item.venueid);
		if (item.artistid == -1) {
			item.artistName = item.unsignedartistname;
		}
		if (item.venueid == -1) {
			//alert("USV");
			// DOES NOT WORK!!!!
			item.venueName = item.unsignedartistname;
		}
		var table = document.getElementById("locationStreamTable");
		var row = table.insertRow(table.rows.length);
		utils_preloadImage(item.artistImg);
		utils_preloadImage(item.venueImg);
		//alert(item.artistImg);
		row.item = item;
		row.onclick = function() {
			doPopup(this.item.city, this.item.venueName, this.item.venueid,
					this.item.artistName, this.item.artistid, this.item.time,
					this.item.price, this.item.other, this.item.artistImg, this.item.venueImg)
		};
		
		row.className = ("streamTableRow");
		utils_touchEvents(".streamTableRow");
		// SERIOUSLY CONSIDER HAVING STORED CORRECT DATE FORMAT ON SERVER AS THIS SLOWS PERFORMANCE WHEN DONE IN APP!!!
		var displayTime = utils_formatTime_lessYear(item.time);
		var displayDistance = Math.floor(item.distance * 10) / 10
		// *************************************
		
		var cell1 = row.insertCell(0);
		cell1.className = ("streamImgCell");
		var cell2 = row.insertCell(1);
		var cell3 = row.insertCell(2);
		if (item.artistid ==-1){
			cell1.innerHTML = "<img class='streamImg' src='images/unknownArtist.png'/>";
		} else {
			cell1.innerHTML = "<img class=\"streamImg\" src=\""+utils_getArtistImage(item.artistImg)+"\"/>";
		}
		cell2.innerHTML = "<div class=\"streamHeading\">" + item.artistName
				+ "</div> <br><div class=\"streamDetails\" >" + item.venueName
				+ " , " + displayTime + "</div>";
		cell3.innerHTML ="<div style='white-space: nowrap; font-size:14px; padding-right:5px'>" +displayDistance + " km</div>";
	}
	
	} 
	} else {
		var content = "";
		content += "<tr height=20px></tr><tr><td colspan='3'><div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:center; margin-top:5px'> " +
		"Unable to get your location</div></td></tr>" +
		"<tr width=100%><td width=15%></td><td class='signButton' onClick='javascript:utils_getHTMLLocation()' style='border-collapse:collapse; border-radius:0px'><img style='display:tabel-cell; vertical-align: middle' width=25px src='images/loginIcon.png'>Try Again</td><td width=15%></td></tr>";
		table.innerHTML=content;
	}
	//alert("done");
}

