var venueDivs=["Schedule", "Info"];
var venueCurrentDiv=0;
var venueNumDivs=2;

function venue_getId() {
	var pathname = $(location).attr('href');
	var pos = pathname.indexOf("=");
	pathname = pathname.substring(pos + 1);
	var id = parseInt(pathname);
	if (id == -1) {
		id = 1;
	}
	return id;
}

function venue_fixContentHeight(){
	var contentMarginTop = document.getElementById('venueTable').offsetHeight;
	//var t = document.getElementById("caption").getBoundingClientRect();
	//alert(contentMarginTop);
	document.getElementById("venueContent").setAttribute("style","margin-top:"+(contentMarginTop)+"px");
}

function venue_fixFeederHeight(){
	var contentFeederHeight = document.getElementById('venueFeederCell').offsetWidth;
	//alert(contentFeederHeight);
	document.getElementById("venueFeederCell").setAttribute("style","height:"+(contentFeederHeight)+"px");
}

function venue_getAllContent(id) {
	var dataObj = {
		venueId : id
	};
	utils_doAjax("getVenue", dataObj, venue_processHeader);
}

function venue_processInfo(data) {
	//alert(data.name);
	var content="";
	content += "<div class='descriptionTag'>Venue Details</div>";
	content += "<div id='venueDescription' style='text-align: justify; color:white; text-shadow:none'>";
	content += data.synopsis;
		+"</div> <br>";
	content += "<div class='descriptionTag'>Location</div>";
	content += "<div id='venueLocation' style='text-align: justify; color:white; text-shadow:none'>";
	content += data.suburb +" <br>";
	content += data.city;
			+"</div> <br>";
	content += "<div class='descriptionTag' style='margin-bottom:0px'>Contact us</div>";
	content += "<div id='venuePhone' style='text-align: justify; color:white; text-shadow:none'>";
	
	var deviceWidth = utils_getDeviceWidth();
	// padding of container is 10px on either side
	var availableWidth=deviceWidth-20;
	// Max number of td's to be 6
	var cellWidth = availableWidth/6;
	//alert(cellWidth);
	//alert(deviceWidth+" px");
		
	
	content += "<table><tr>";
	if (data.phone != ""){
	content += "<td id='venueFeederCell' width="+cellWidth +" class='feederTableCell' onClick='javascript:utils_phoneCall(\""+data.phone+"\")'><img class='feederImage' src='images/phoneIcon.png'></td>";
	};
	if (data.email != ""){
	content += "<td id='venueFeederCell' width="+cellWidth +" class='feederTableCell' onClick='javascript:utils_email(\""+data.email+"\")'><img class='feederImage' src='images/emailIcon.png'></td>";
	};
	if (data.latitude != ""){
	content += "<td id='venueFeederCell' width="+cellWidth +"width=20% class='feederTableCell' onClick='javascript:utils_navigate(\""+data.latitude+","+data.longitude+"\")'><img class='feederImage' src='images/navigateIcon.png'></td>";
	};
	if (data.twitter != ""){
	content += "<td id='venueFeederCell' width="+cellWidth +"width=20% class='feederTableCell' onClick='javascript:utils_twitter(\""+data.twitter+"\")'><img class='feederImage' src='images/twitterIcon.png'></td>";
	};
	if (data.facebook != ""){
	content += "<td id='venueFeederCell' width="+cellWidth +"width=20% class='feederTableCell' onClick='javascript:utils_facebook(\""+data.facebook+"\")'><img class='feederImage' src='images/facebookIcon.png'></td>";
	};
	content += "</tr></table>";
			+"</div>";
	content += "<div class='descriptionTag'  style='margin-top:0px'>Venue Map</div>";
	
	content += "<div id='venueMap' style='text-align: justify; color:white; text-shadow:none'>";
	
	
	var mapInfo ="";
	mapInfo += '<img src="https://maps.googleapis.com/maps/api/staticmap?center='
		+ data.latitude
		+ ','
		+ data.longitude
		+ '&amp;zoom=15&amp;size=288x200&amp;markers='
		+ data.latitude
		+ ','
		+ data.longitude
		+ '&amp;sensor=false" width=100%>';
	
	if (data.latitude !=""){
	content += mapInfo;
	};
			+"</div>";
	document.getElementById("venueInfoDiv").innerHTML = content;
	utils_touchEvents('.feederTableCell');
	venue_setButtons();
	}

function venue_processHeader(data) {
	var pathname = $(location).attr('href');
	var pos = pathname.indexOf("=");
	pathname = pathname.substring(pos + 1);
	//alert(pathname);
	var id = parseInt(pathname);
	//alert(data.name);
	document.getElementById("entityName").innerHTML = data.name;
	//var membersHTML = "";
	//for ( var i = 0; i < data.members.length; i++) {
		// alert(data.members[i].name);
		//membersHTML += data.members[i].name + "<br/>";
	//}
	utils_preloadImage(data.venueImg);
	document.getElementById("entityImage").src = utils_getVenueImage(data.venueImg);
	

	var content = ""
	content += data.number +"<br>";
	content += data.street +"<br>";
	content += data.suburb +"<br>";
	content += data.city +"<br>";
	document.getElementById("entityDetails").innerHTML = content;
	//document.getElementById("favDiv").innerHTML = "<table width=100%><tr width=100%><td width=50% class='headerCell'><img id='favImage' src='images/followIcon.png'></td><td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table> ";
	
	var followed = data.isFollowed;
	
	//alert(followed);
	if (followed){
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:venue_toggleFollowed("+id+","+false+")'><img id='favImage' src='images/followedIcon.png'></td>";
			fcontent += "<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table>";
		} else {
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:venue_toggleFollowed("+id+","+true+")'><img id='favImage' src='images/followIcon.png'></td>";
			fcontent+="<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table> ";	
		}
	document.getElementById("favDiv").innerHTML = fcontent;
	
	
	
	venue_processInfo(data);
	//var contentMarginTop = document.getElementById('venueTable').offsetHeight;
	//alert(contentMarginTop + "px")
	//document.getElementById('venueScheduleDiv').style.top="0px";
	//alert('Hi');
	//document.getElementById('venueScheduleDiv').style.visibility="visible";
	setTimeout(venue_fixContentHeight,100);
	venue_setButtons();
}

function venue_swipe(value){
	venueCurrentDiv=(venueCurrentDiv+value+venueNumDivs)%venueNumDivs;
	venue_showDiv(venueDivs[venueCurrentDiv]);
}

function venue_showDiv(name) {
	utils_showIcon("venueScheduleDiv", false,"venueScheduleIcon");
	utils_showIcon("venueInfoDiv", false,"venueInfoIcon");
	utils_showIcon("venue" + name + "Div", true,"venue"+name+"Icon");
	utils_setContent("venueCaption", name);
	if (name == 'Info'){
		setTimeout(venue_fixFeederHeight, 100);
	};
	venue_setButtons();
}

function venue_getStream() {
	var dataObj = {
			selector : "venueid",
			selection : venue_getId(),
		};
		utils_doAjax("getGigBySelection", dataObj, venue_processStream);
}

function venue_processStream(data) {
	
	var table = document.getElementById("venueStreamTable");
	
	if (data.length == 0) {
		table.innerHTML="<div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:center; margin-top:20px'> " +
		"Venue currently has no listed gigs</div>";
	} else {
	
	 for ( var i = 0; i < data.length; i++) {
			var item = data[i];
			
			if (item.artistid == -1) {
				item.artistName = item.unsignedartistname;
			}
		
			
			
			var row = table.insertRow(table.rows.length);
			utils_preloadImage(item.artistImg);
			utils_preloadImage(item.venueImg);
			
		
			
			//var artistImageUrl = "/web/upload/artist/"+item.artistid+".jpg");
			//var venueImageUrl = "/web/upload/venue/"+item.venueid+".jpg");
			
			row.item = item;
			
			
			row.onclick = function() {
				venue_doPopup(this.item.venueName, this.item.venueid,
						this.item.artistName, this.item.artistid, this.item.time,
						this.item.price, this.item.other, this.item.artistImg, this.item.venueImg)
			};
			
			//alert(item.venueName+" "+item.artistName+ " " + item.venueid+" ");
			//+item.venueid+ " "+item.time + " " item.other);
			
			row.className = ("streamTableRow");
			
			// SERIOUSLY CONSIDER HAVING STORED CORRECT DATE FORMAT ON SERVER AS THIS SLOWS PERFORMANCE WHEN DONE IN APP!!!
			var displayTime = utils_formatTime_lessYear(item.time);
			// *************************************
			
			var cell1 = row.insertCell(0);
			cell1.className = ("streamImgCell");
			var cell2 = row.insertCell(1);
			if (item.artistid ==-1){
				cell1.innerHTML ="<img class='streamImg' src='images/unknownArtist.png'/>";
			} else {
			cell1.innerHTML = "<img class=\"streamImg\" src=\""+utils_getArtistImage(item.artistImg)+"\"/>";
			};
			cell2.innerHTML = "<div class=\"streamHeading\">" + item.artistName
					+ "</div> <br><div class=\"streamDetails\" >" + displayTime
					+ "</div>"; 
		}
	 utils_touchEvents(".streamTableRow"); 
	}
}

function venue_doPopup(venueName, venueId, artistName, artistId, time, price,
		other, artistImg, venueImg) {
	// alert("random");
	var displayTime = utils_formatTime(time);
	//alert("VN = " + venueName + " VID = " + venueId);
	//+ " AN =" + artistName + " AID =" + artistId + " TIME = " time + " PR = " + price + "Ot = " +other);
	var content = "";
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
	if (venueId==-1){
		content += "<tr class='popupRowsUnknown' width=100% > <td width=40%> <img class=\"popupImg\" src='images/unknownVenue.png"
		+"'/> </td> <td style='padding-left:10px; padding-right:5px'>" + venueName + "</td></tr>";
	} else {
		content += "<tr class='popupRows' onclick='javascript:utils_changeEntityPage(\"venuePage\","+ venueId +")'> <td width=40%> <img class=\"popupImg\" src='"+utils_getVenueImage(venueImg)
		+ "'/> </td> <td style='padding-left:10px; padding-right:5px'>" + venueName + "</td></tr>";
	}
	
	if (artistId==-1){
		content += "<tr width=100% class='popupRowsUnknown'> <td width=40%> <img class=\"popupImg\" src='images/unknownArtist.png"
		+"'/> </td><td style='padding-left:10px; padding-right:5px' >" +artistName +"</td></tr>";
	} else {
		content += "<tr class='popupRows' onclick='javascript:utils_changeEntityPage(\"artistPage\","+ artistId +")'> <td width=40%> <img class=\"popupImg\" src='"+utils_getArtistImage(artistImg)
		+"'/> </td> <td style='padding-left:10px; padding-right:5px'>" + artistName + "</td></tr>";
	
	}
	
	content += "</table>"
	document.getElementById("venuePopupReplace").innerHTML = content;
	utils_touchEvents('.popupRows');
	utils_menuTouchEvents(".popupShare");
	$("#venuePopupBasic").popup({
		overlayTheme : "a"
	});

	$('#venuePopupBasic').popup("open",{x:0, y:0});
}


function venue_doAccount() {
	var content = "";
	
	content += "<table class='menuGig' width=100% style='border-collapse:collapse'>";
	content += "<tr class='' width=100% ><td> <img class=\"gigInfoIcon\" src='images/gigGuideIcon.png'></td>"
	content +=" <td class='gigInfoHeading' style='padding-left:5px; padding-right:0px'> Login/Signup </td>"
	content += "</tr></table>";
	content += "<table><tr height=20px></tr><tr><td colspan='3'><div style='padding:0px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:justify; margin-top:0px'> " +
	"Login to start following Artists and Venues!</div></td></tr>" +
	"<tr width=100%><td width=15%></td><td class='signButton' onClick='javascript:utils_jumpToLogin(\"login\")' style='border-collapse:collapse; border-radius:0px'><img style='display:tabel-cell; vertical-align: middle' width=25px src='images/loginIcon.png'>Login</td><td width=15%></td></tr>" +
	"<tr height=20px></tr><tr width=100%>" +
	"<td width=15%></td><td class='signButton' onClick='javascript:utils_jumpToLogin(\"signup\")' style='border-collapse:collapse; border-radius:0px'><img style='display:tabel-cell; vertical-align: middle' width=20px src='images/addIcon.png'>Sign Up</td><td width=15%></td></tr></table>";

	document.getElementById("venuePopupReplace").innerHTML = content;
	utils_touchEvents('.signButton');
	
	$("#venuePopupBasic").popup({
		overlayTheme : "a"
	});

	$('#venuePopupBasic').popup("open",{x:0, y:0});
}



function venue_closePopup() {
	$('#venuePopupBasic').popup("close");
}


function venue_setButtons() {
	utils_touchEvents('.menuButton');
	utils_touchEvents('.headerCell');
	utils_touchEvents('.mainIconSubMenu');
	//utils_touchEvents('.menuButton');
}

function venue_toggleFollowed(id, state){
	//alert("hi" + id + " " +state);
	if (utils_loginState == false){
		alert(utils_locationEntity);
		utils_locationEntity = "venue";
		utils_locationId=id;
		
		//toast("You must be logged in to enable follow, please login")
		venue_doAccount();
	} else {
	
	if (state){
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:venue_toggleFollowed("+id+","+false+")'><img id='favImage' src='images/followedIcon.png'></td>";
		fcontent += "<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table>";
		toast("Venue Followed");
	} else {
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:venue_toggleFollowed("+id+","+true+")'><img id='favImage' src='images/followIcon.png'></td>";
		fcontent+="<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table> ";	
		toast("Venue Not Followed");
	}
	index_getStream();
	document.getElementById("favDiv").innerHTML = fcontent;
	utils_touchEvents('.headerCell');
	
	var dataObj = {
			type : "venue",
			id : id,
			state : state,
		};
		utils_doAjax("toggleFollowed", dataObj, venue_processFollowedToggle);
	}
}

function venue_processFollowedToggle(data){
	//alert(data.result);
	if (data.result){
		index_getStream();
	}
}
