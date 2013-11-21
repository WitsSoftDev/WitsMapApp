var serverTrackName = [];
var numberOfTracks = 0;

var artistDivs=["Schedule", "Info", "Tracks"];
var artistCurrentDiv=0;
var artistNumDivs=3;

function artist_getId() {
	var pathname = $(location).attr('href');
	var pos = pathname.indexOf("=");
	pathname = pathname.substring(pos + 1);
	var id = parseInt(pathname);
	if (id == -1) {
		id = 1;
	}
	return id;
}

function artist_getStream() {
	var dataObj = {
			selector : "artistid",
			selection : artist_getId(),
		};
		utils_doAjax("getGigBySelection", dataObj, artist_processStream);
}

function artist_doAccount() {
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

	document.getElementById("artistPopupReplace").innerHTML = content;
	utils_touchEvents('.signButton');
	
	$("#artistPopupBasic").popup({
		overlayTheme : "a"
	});

	$('#artistPopupBasic').popup("open",{x:0, y:0});
}


function artist_doPopup(venueName, venueId, artistName, artistId, time, price,
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
		content += "<tr width=100% class='popupRowsUnknown'> <td width=40%> <img class=\"popupImg\" src='"+utils_getArtistImage(artistImg)
		+"'/> </td><td style='padding-left:10px; padding-right:5px' >" +artistName +"</td></tr>";
	} else {
		content += "<tr class='popupRows' onclick='javascript:utils_changeEntityPage(\"artistPage\","+ artistId +")'> <td width=40%> <img class=\"popupImg\" src='"+utils_getArtistImage(artistImg)
		+"'/> </td> <td style='padding-left:10px; padding-right:5px'>" + artistName + "</td></tr>";
	
	}
	
	content += "</table>"
	document.getElementById("artistPopupReplace").innerHTML = content;
	utils_touchEvents('.popupRows');
	utils_menuTouchEvents(".popupShare");
	$("#artistPopupBasic").popup({
		overlayTheme : "a"
	});

	$('#artistPopupBasic').popup("open",{x:0, y:0});
}

function artist_closePopup() {
	$('#artistPopupBasic').popup("close");
}

function artist_fixContentHeight(){
	var contentMarginTop = document.getElementById('artistTable').offsetHeight;
	document.getElementById("artistContent").setAttribute("style","margin-top:"+(contentMarginTop)+"px");
}

function artist_fixFeederHeight(){
	var contentFeederHeight = document.getElementById('feederCell').offsetWidth;
	//alert(contentFeederHeight);
	document.getElementById("feederCell").setAttribute("style","height:"+(contentFeederHeight)+"px");
}

function artist_swipe(value){
	artistCurrentDiv=(artistCurrentDiv+value+artistNumDivs)%artistNumDivs;
	artist_showDiv(artistDivs[artistCurrentDiv]);
}

function artist_checkTracks(){
	if (numberOfTracks!=0){
		var icon = document.getElementById("artistTracksIcon");
		artistNumDivs=3;
		icon.onclick=function(){
			artist_showDiv("Tracks");
		}
		
	} else {
		artistNumDivs=2;
		var icon = document.getElementById("artistTracksIcon");
		icon.className="menuDisabled";
		icon.onclick=function(){
		}
		//icon.setAttribute ("onclick", "javascript:alert('Hello')");
	}
	artist_setButtons();
}

function artist_showDiv(name) {
	utils_showIcon("artistScheduleDiv", false,"artistScheduleIcon");
	utils_showIcon("artistInfoDiv", false,"artistInfoIcon");
	utils_showIcon("artistTracksDiv", false,"artistTracksIcon");
	utils_showIcon("artist" + name + "Div", true,"artist"+name+"Icon");
	artist_checkTracks();
	utils_setContent("caption", name);
	if (name=='Info'){
		setTimeout(artist_fixFeederHeight,100);
	};
}

function artist_getAllContent(id) {
	var dataObj = {
		artistId : id
	};
	utils_doAjax("getArtist", dataObj, artist_processHeader);
}

function artist_processHeader(data) {
	var pathname = $(location).attr('href');
	var pos = pathname.indexOf("=");
	pathname = pathname.substring(pos + 1);

	var id = parseInt(pathname);

	document.getElementById("entityName").innerHTML = data.name;
	var membersHTML = "";
	for ( var i = 0; i < data.members.length; i++) {

		membersHTML += data.members[i].name + "<br/>";
	}
	
	utils_preloadImage(data.artistImg);
	document.getElementById("entityImage").src = utils_getArtistImage(data.artistImg);
	document.getElementById("entityDetails").innerHTML = membersHTML;
	var followed = data.isFollowed;
	
	//alert("status =" +followed);
	if (followed){
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:artist_toggleFollowed("+id+","+false+")'><img id='favImage' src='images/followedIcon.png'></td>";
		fcontent += "<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table>";
	} else {
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:artist_toggleFollowed("+id+","+true+")'><img id='favImage' src='images/followIcon.png'></td>";
		fcontent+="<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table> ";	
	}
	document.getElementById("favDiv").innerHTML = fcontent;
	
	serverTrackName=[];
	for ( var i = 0; i < data.tracks.length; i++) {
		serverTrackName[i] = data.tracks[i].title;
	};
	numberOfTracks = serverTrackName.length;
	//document.getElementById('artistScheduleDiv').style.top = "0px";
	
	
	//document.getElementById('artistScheduleDiv').style.visibility = "visible";
	if (numberOfTracks > 0)
		artist_buildAudioPage(id);
	artist_showDiv("Schedule");
	artist_processInfo(data);
	//artist_fixContentHeight();
	setTimeout(artist_fixContentHeight,100);
	
}

function artist_processStream(data) {
 
	var table = document.getElementById("artistStreamTable");
	if (data.length == 0){
		table.innerHTML="<div style='padding:15px; color:yellow; border-collapse: collapse; text-shadow:none; text-align:center; margin-top:20px'> " +
		"Artist currently has no listed gigs</div>";
	} else {
	
	
 for ( var i = 0; i < data.length; i++) {
		var item = data[i];
		//alert(item.venueid);
		//if (item.artistid == -1) {
		//item.artistName = item.unsignedartistname;
		//}
		//alert(item.id);
		if (item.venueid == -1) {
			item.venueName = item.unsignedartistname;
			// CODE DOES NOT RETURN UNSIGNED VENUE!!!!!
		}
		
	
		var row = table.insertRow(table.rows.length);
		utils_preloadImage(item.artistImg);
		utils_preloadImage(item.venueImg);
		
		//var artistImageUrl = "/web/upload/artist/"+item.artistid+".jpg");
		//var venueImageUrl = "/web/upload/venue/"+item.venueid+".jpg");
		
		row.item = item;
		
		
		row.onclick = function() {
			artist_doPopup(this.item.venueName, this.item.venueid,
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
		if (item.venueid ==-1){
			cell1.innerHTML ="<img class='streamImg' src='images/unknownVenue.png'/>";
		} else {
		cell1.innerHTML = "<img class=\"streamImg\" src=\""+utils_getVenueImage(item.venueImg)+"\"/>";
		};
		cell2.innerHTML = "<div class=\"streamHeading\">" + item.venueName
				+ "</div> <br><div class=\"streamDetails\" >" + displayTime
				+ "</div>"; 
	} 
 utils_touchEvents(".streamTableRow");
}
}

function artist_processInfo(data) {
	var content="";
	content += "<div class='descriptionTag'>Artist Details</div>";
	content += "<div id='artistDescription' style='text-align: justify; color:white; text-shadow:none'>";
	content += data.synopsis;
		+"</div><br><br>";
	content += "<div class='descriptionTag'>Location</div>";
	content += "<div id='artistCity' style='text-align: justify; color:white; text-shadow:none'>";
	content += data.suburb;
			+"</div><br><br>";
	content += "<div class='descriptionTag'>Genre</div>";
	content += "<div id='artistGenre' style='text-align: justify; color:white; text-shadow:none'>";
	content +=  data.genre;
		+"</div><br><br>";
	content += "<div class='descriptionTag' style='margin-bottom:0px;'>Follow us on</div>";
	content += "<div id='artistContact' style='text-align: justify; color:white; text-shadow:none'>";	
	
	var deviceWidth = utils_getDeviceWidth();
	// padding of container is 10px on either side
	var availableWidth=deviceWidth-20;
	// Max number of td's to be 6
	var cellWidth = availableWidth/6;
	//alert(cellWidth);
	//alert(deviceWidth+" px");
	

	content += "<table><tr>";
	if (data.email != ""){
	content += "<td id='feederCell' width="+cellWidth+"px class='feederTableCell' onClick='javascript:utils_email(\""+data.email+"\")'><img class='feederImage' src='images/emailIcon.png'></td>";
	};
	if (data.website != ""){
	content += "<td id='feederCell' width="+cellWidth+"px  class='feederTableCell' onClick='javascript:utils_website(\""+data.website+"\")'><img class='feederImage' src='images/webIcon.png'></td>";
	};
	if (data.twitter != ""){
	content += "<td id='feederCell' width="+cellWidth+"px  class='feederTableCell' onClick='javascript:utils_twitter(\""+data.twitter+"\")'><img class='feederImage' src='images/twitterIcon.png'></td>";
	};
	if (data.facebook != ""){
	content += "<td id='feederCell' width="+cellWidth+"px class='feederTableCell' onClick='javascript:utils_facebook(\""+data.facebook+"\")'><img class='feederImage' src='images/facebookIcon.png'></td>";
	};
	if (data.soundcloud != ""){
	content += "<td id='feederCell' width="+cellWidth+"px  class='feederTableCell' onClick='javascript:utils_soundcloud(\""+data.soundcloud+"\")'><img class='feederImage' src='images/soundCloudIcon.png'></td>";
	};
	content += "</tr></table>";
	
	
	//var feederHeight = document.getElementById('feederCell').offsetWidth;
	//alert(feederHeight);
	//document.getElementById('feederCell').style.height=feederHeight;
	content += "</div>";
	document.getElementById("artistInfoDiv").innerHTML = content;	
	utils_touchEvents('.feederTableCell');
	

	}


var trackIndex = 1;
var aId = null;

function artist_buildAudioPage(artistId) {
	aId = artistId;
	var content = "";

	content += "<table align='center' class='mediaControlsTable1'> ";

	for ( var i = 0; i < numberOfTracks; i++) {
		content += "<tr><td id='track"
				+ (i + 1)
				+ "' class='trackSelectorContents' colspan='3' style='padding:12px''><a id='track"
				+ (i + 1) + "Ref' href='javascript:toggleTo(" + i + ")'>"
				+ (i + 1) + ". " + serverTrackName[i] + "</a></td></tr>";
	}

	content += "<tr id='controlsTable'>";
	content += "<td align='center' id='toggleBack_btn' width='30%'><a href='javascript:togglePrevious()'><img class='mediaButtonToggle' src='images/mediaPrevious.png'></a></td>";

	content += "<td  align='center' id='play_btn'><a id='playButtonRef' href='#'><img class='mediaButton' src='images/mediaPlay.png'></a></td>";

	content += "<td  align='center' style='display:none' id='pause_btn'><a href='javascript:pauseAudio()'><img class='mediaButton' src='images/mediaPause.png'></a></td>";

	content += "<td  align='center' style='display:none' id='buffer_btn' width=100%><img class='mediaBuffer' src='images/bufferIcon.gif'></td>";

	content += "<td  align='center' id='toggleNext_btn' width='30%'><a href='javascript:toggleNext()'><img class='mediaButtonToggle' src='images/mediaNext.png'></a></td>";

	content += "</tr>";
	content += "</table>"

	
	document.getElementById("artistTracksDiv").innerHTML = content;

	document.getElementById("track1").className = "activeTrack";

	var mediaPath = constants_root + "web/upload/track/" + artistId + "-track"
			+ trackIndex + ".mp3";

	var playBtnRef = document.getElementById("playButtonRef");

	playBtnRef.href = "javascript:playAudio('" + mediaPath + "','"
			+ serverTrackName[trackIndex - 1] + "')";
	// track1Ref.href="javascript:toggleTo(0)";
	// track2Ref.href="javascript:toggleTo(1)";
	// track3Ref.href="javascript:toggleTo(2)";
	utils_touchEvents('.mediaButton');
	utils_touchEvents('.mediaButtonToggle');
}

function toggleNext() {
	stopAudio();
	if (trackIndex == (numberOfTracks)) {
		trackIndex = 1;
	} else {
		trackIndex++;
	}

	for ( var i = 0; i < numberOfTracks; i++) {
		var name = "track" + (i + 1);
		// alert(name);
		if (i == (trackIndex - 1)) {
			document.getElementById(name).className = "";
			document.getElementById(name).className = "activeTrack";
		} else {
			document.getElementById(name).className = "";
			document.getElementById(name).className = "inActiveTrack";
		}
	}
	;

	var mediaPath = constants_root + "web/upload/track/" + aId + "-track"
			+ trackIndex + ".mp3";

	playAudio(mediaPath, serverTrackName[trackIndex - 1]);
}

function togglePrevious() {
	stopAudio();
	if (trackIndex == 1) {
		trackIndex = numberOfTracks;
	} else {
		trackIndex--;
	}

	for ( var i = 0; i < numberOfTracks; i++) {
		var name = "track" + (i + 1);

		if (i == (trackIndex - 1)) {
			document.getElementById(name).className = "";
			document.getElementById(name).className = "activeTrack";
		} else {
			document.getElementById(name).className = "";
			document.getElementById(name).className = "inActiveTrack";
		}
	}
	;

	var mediaPath = constants_root + "web/upload/track/" + aId + "-track"
			+ trackIndex + ".mp3";

	playAudio(mediaPath, serverTrackName[trackIndex - 1]);
}

function toggleTo(index) {
	stopAudio();

	trackIndex = index + 1;

	for ( var i = 0; i <= constants_maxTracks; i++) {
		var name = "track" + (i + 1);

		if (i == (trackIndex - 1)) {
			document.getElementById(name).className = "";
			document.getElementById(name).className = "activeTrack";
		} else {
			document.getElementById(name).className = "";
			document.getElementById(name).className = "inActiveTrack";
		}
	}
	;

	var mediaPath = constants_root + "web/upload/track/" + aId + "-track"
			+ trackIndex + ".mp3";

	playAudio(mediaPath, serverTrackName[trackIndex - 1]);
}

function artist_setButtons() {
	utils_touchEvents('.menuButton');
	utils_touchEvents('.headerCell');
	utils_touchEvents('.mainIconSubMenu');
	//utils_touchEvents('.menuButton');
}


function artist_toggleFollowed(id, state){
	//alert("hi" + id + " " +state);
	
	if (utils_loginState == false){
		alert(utils_locationEntity);
		utils_locationEntity = "artist";
		utils_locationId=id;
		artist_doAccount();
		//toast("You must be logged in to enable follow, please login")
	} else {
	
	if (state){
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:artist_toggleFollowed("+id+","+false+")'><img id='favImage' src='images/followedIcon.png'></td>";
		fcontent += "<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table>";
		toast("Artist Followed");
	
	} else {
		var fcontent = "<table width=80%><tr width=100%><td width=50% class='headerCell' onclick='javascript:artist_toggleFollowed("+id+","+true+")'><img id='favImage' src='images/followIcon.png'></td>";
		fcontent+="<td width=50% class='headerCell'><img id='favImage' src='images/shareIcon.png'></td></tr></table> ";	
		toast("Artist Not Followed");
	}
	index_getStream();
	document.getElementById("favDiv").innerHTML = fcontent;
	utils_touchEvents('.headerCell');
	
	var dataObj = {
			type : "artist",
			id : id,
			state : state,
		};
		utils_doAjax("toggleFollowed", dataObj, artist_processFollowedToggle);
	}
}

function artist_processFollowedToggle(data){
	
	if (data.result){
		index_getStream();
	} else {
		toast("Failed to change followed state");
	}
}



