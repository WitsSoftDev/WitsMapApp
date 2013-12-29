//function settings_doAccountPopup(){
//	alert("YOU POPED THE NEW ACCOUNT");
//}


function settings_doAccountPopup() {
	//alert("random");
	//var displayTime = utils_formatTime(time);
	//alert("VN = " + venueName + " VID = " + venueId);
	//+ " AN =" + artistName + " AID =" + artistId + " TIME = " time + " PR = " + price + "Ot = " +other);

	var content = "";
	content += "<table class='menuGig' width=100% style='border-collapse:collapse'>";
	content += "<tr class='' width=100% >";
	content +=" <td class='gigInfoHeading' style='padding-left:5px; padding-right:0px'> Sign Up </td>"
	content += "</tr></table>";
	content += "<br/>";
	
	content += "<div width=100% data-role='fieldcontain'> <label for='clientEmail'> E-mail Address </label>";
	content += "<input style='width:100%' name='clietEmail' id='clientEmail' placeholder='type in your email address' value='' type='text'> </div>";
	content += "<div width=100% data-role'fieldcontain'> <label for='clientPW1'> Type Password </label>";
	content += "<input style='width:100%' name='clientPW1' id='clientPW1' placeholder='minimum of 6 characters' value='' type='password'></div>";
	content += "<div width=100% data-role='fieldcontain'> <label for='clientPW2'> Re-Type Password </label>";
	content += "<input style='width:100%' name='clientPW2' id='clientPW2' placeholder='minimum of 6 characters' value='' type='password'></div><br/>";
	content += "<input type='checkbox' name='showPassword'  onClick='javascript:settings_togglePassword()'>Show Password<br/><br/>"
	content += "<div style='color:red' id='signupError'></div>";
	content += "<table width=100%><tr width=100%><td width=30%></td><td onClick='javascript:settings_submitNewAccount()' class='signButton'>SUBMIT</td><td width=30%></td></tr></table>";
	document.getElementById("settingsPopupReplace").innerHTML = content;
	utils_touchEvents('.signButton');
	
	//Perform signup action
	
	
	
	//utils_menuTouchEvents(".popupShare");
	$("#settingsPopupBasic").popup({
		overlayTheme : "a"
	});

	$('#settingsPopupBasic').popup("open",{x:0, y:0});
}

function settings_doLoginPopup() {
	//alert("random");
	//var displayTime = utils_formatTime(time);
	//alert("VN = " + venueName + " VID = " + venueId);
	//+ " AN =" + artistName + " AID =" + artistId + " TIME = " time + " PR = " + price + "Ot = " +other);

	var content = "";
	content += "<table class='menuGig' width=100% style='border-collapse:collapse'>";
	content += "<tr class='' width=100% >";
	content +=" <td class='gigInfoHeading' style='padding-left:5px; padding-right:0px'> Sign In </td>"
	content += "</tr></table>";
	content += "<br/>";
	
	content += "<div width=100% data-role='fieldcontain'> <label for='clientEmail'> E-mail Address </label>";
	content += "<input style='width:100%' name='clietEmail' id='clientEmail' placeholder='type in your email address' value='' type='text'> </div>";
	content += "<div width=100% data-role'fieldcontain'> <label for='clientPW1'> Password </label>";
	content += "<input style='width:100%' name='clientPW1' id='clientPW1' placeholder='type in your password' value='' type='password'></div>";
	content += "<input type='checkbox' name='showPassword'  onClick='javascript:settings_togglePassword()'>Show Password<br/><br/>"
	content += "<div style='color:red' id='signInError'></div>";
	content += "<table width=100%><tr width=100%><td width=30%></td><td onClick='javascript:settings_login()' class='signButton'>SUBMIT</td><td width=30%></td></tr></table>";
	document.getElementById("settingsPopupReplace").innerHTML = content;
	utils_touchEvents('.signButton');
	
	//Perform signup action
	
	
	
	//utils_menuTouchEvents(".popupShare");
	$("#settingsPopupBasic").popup({
		overlayTheme : "a"
	});

	$('#settingsPopupBasic').popup("open",{x:0, y:0});
}


function settings_searchRangePop() {
	//alert("random");
	//var displayTime = utils_formatTime(time);
	//alert("VN = " + venueName + " VID = " + venueId);
	//+ " AN =" + artistName + " AID =" + artistId + " TIME = " time + " PR = " + price + "Ot = " +other);

	var content = "";
	content += "<table class='menuGig' width=100% style='border-collapse:collapse'>";
	content += "<tr class='' width=100% >";
	content +=" <td class='gigInfoHeading' style='padding-left:5px; padding-right:0px'> Edit Search Range </td>"
	content += "</tr></table>";
	content += "<br/>";
	
	content += "<div style='display:inline-block; vertical-align:middle' width=100% data-role='fieldcontain'> <label style='width:70%' for='searchRange'>Enter Range (km) </label>";
	content += "<input style='width:30%; float:right' name='searchRange' id='searchRange' placeholder='type in your email address' value='' type='number'> </div>";
	content += "<div style='color:red' id='signupError'></div>";
	content += "<table width=100%><tr width=100%><td width=30%></td><td onClick='javascript:settings_submitSearchRange()' class='signButton'>SAVE</td><td width=30%></td></tr></table>";
	document.getElementById("settingsPopupReplace").innerHTML = content;
	utils_touchEvents('.signButton');
	
	//Perform signup action
	
	
	
	//utils_menuTouchEvents(".popupShare");
	$("#settingsPopupBasic").popup({
		overlayTheme : "a"
	});

	$('#settingsPopupBasic').popup("open",{x:0, y:0});
}


function settings_homeCityPop() {
	//alert("random");
	//var displayTime = utils_formatTime(time);
	//alert("VN = " + venueName + " VID = " + venueId);
	//+ " AN =" + artistName + " AID =" + artistId + " TIME = " time + " PR = " + price + "Ot = " +other);

	var content = "";
	content += "<table class='menuGig' width=100% style='border-collapse:collapse'>";
	content += "<tr class='' width=100% >";
	content +=" <td class='gigInfoHeading' style='padding-left:5px; padding-right:0px'> Edit Search Range </td>"
	content += "</tr></table>";
	content += "<br/>";
	
	content += "<div style='display:inline-block; background-color:green' width=100% data-role='fieldcontain'> <label style='width:70%' for='searchRange'>Enter Range (km) </label>";
	content += "<input style='width:30%; float:right' name='searchRange' id='searchRange' placeholder='type in your email address' value='' type='number'> </div>";
	content += "<div style='color:red' id='signupError'></div>";
	content += "<table width=100%><tr width=100%><td width=30%></td><td onClick='javascript:settings_submitSearchRange()' class='signButton'>SAVE</td><td width=30%></td></tr></table>";
	document.getElementById("settingsPopupReplace").innerHTML = content;
	utils_touchEvents('.signButton');
	
	//Perform signup action
	
	
	
	//utils_menuTouchEvents(".popupShare");
	$("#settingsPopupBasic").popup({
		overlayTheme : "a"
	});

	$('#settingsPopupBasic').popup("open",{x:0, y:0});
}




function settings_closePopup() {
	$('#settingsPopupBasic').popup("close");
}



function settings_fixContentHeight(){
	var contentMarginTop = document.getElementById('loginControls').offsetHeight;
	document.getElementById("userSettings").setAttribute("style","margin-top:"+(contentMarginTop)+"px");
}


function settings_submitNewAccount(){

	document.getElementById("signupError").style.visibility ="hidden";
	var e_mail = document.getElementById("clientEmail").value;
	var pass = document.getElementById("clientPW1").value;
	var repass = document.getElementById("clientPW2").value;
	
	
	var emailResult = utils_checkVaildMail(e_mail);
	if (!emailResult.state){
		document.getElementById("signupError").innerHTML = emailResult.message;
		document.getElementById("signupError").style.visibility ="visible";
	} else if (pass == ""){
		document.getElementById("signupError").innerHTML = "Please enter a password";
		document.getElementById("signupError").style.visibility ="visible";
	} else if (pass.length<6){
		document.getElementById("signupError").innerHTML = "Password must be a minimum of 6 characters";
		document.getElementById("signupError").style.visibility ="visible";
	} else if (repass == ""){
		document.getElementById("signupError").innerHTML = "Please re-type your password";
		document.getElementById("signupError").style.visibility ="visible";
	} else if (pass != repass){
		document.getElementById("signupError").innerHTML = "Hmmm, those passwords dont seem to match. Please try again";
		document.getElementById("signupError").style.visibility ="visible";
	} else {
		var dataObj = {
				email : e_mail,
				password : pass,
			};
		utils_doAjax("createUser", dataObj, settings_processNewAccount);
		
	
	};

	
	//document.getElementById("signupError").innerHTML = "jksdfjsgdf sjhgd hsysdhgsjhdfgs sjdfgjshdgf sjdhg sdjhgsd ysd jshdgfjhsd";
	//document.getElementById("signupError").style.visibility ="visible";
}

function settings_processNewAccount(data){
	if (data.result){
		settings_logout();
		settings_login();
	} else {
		document.getElementById("signupError").innerHTML = "This email is already registered. Please enter another email address";
		document.getElementById("signupError").style.visibility ="visible";
	}
	
}

function settings_login(){
	var e_mail = document.getElementById("clientEmail").value;
	var pass = document.getElementById("clientPW1").value;
	var dataObj = {
			email : e_mail,
			password : pass,
		};
	utils_doAjax("clientLogin", dataObj, settings_processLoginState);
}

function settings_processLoginState(data){
	//alert(data.result);
	if (data.result){
		//settings_enableSettingsTable();
		//document.getElementById("signinHeading").innerHTML="User: " + document.getElementById("clientEmail").value;
		// REMOVE OLD PASSWORD AND SAVE NEW PASSWORD
		if (window.localStorage.getItem("psd")!=null & window.localStorage.getItem("email" !=null)){
		window.localStorage.removeItem("email");
		window.localStorage.removeItem("psd");
		}
		var email = document.getElementById("clientEmail").value;
		var pass = document.getElementById("clientPW1").value;
		window.localStorage.setItem("email", email);
		window.localStorage.setItem("psd", pass);
		utils_loginState=true; 
		settings_getSettingsStatus();	
		
	} else {
		document.getElementById("signInError").innerHTML="Please recheck your credentials. Login failed";
		document.getElementById("signInError").style.visibility="visible";
	}
	var tempLocation = utils_locationEntity;
	var tempId =utils_locationId;
	
	utils_locationEntity = null;
	utils_locationId =-1;
	
	if (tempLocation == "artist"){
		index_getStream();
		utils_changeEntityPage("artistPage", tempId);
	} else if (tempLocation == "venue"){
		index_getStream();
		utils_changeEntityPage("venuePage", tempId);
	} else if (tempLocation == "home"){
		index_getStream();
		utils_changePage("index");
	}
	
}

function settings_logout(){	
	var dataObj = "";
	utils_doAjax("clientLogout", dataObj, settings_processLogout);
}

function settings_processLogout(data){
	//alert("return call");
	if (data.result){
		var statusButton = document.getElementById("statusOption");
		statusButton.innerHTML="<img style='display:tabel-cell; vertical-align: middle' width=25px src='images/loginIcon.png'> Login";
		//statusButton.onclick="";
		//settings_closePopup();
		index_getStream();
		utils_loginState=false;
		statusButton.onclick=function () {settings_doLoginPopup()};
		//DISABLE ALL OTHER SETTINGS FUNCTIONALITY
		settings_disableSettingsTable();
		index_getLocationStream(utils_lat,utils_lng);
		//utils_getHTMLLocation();
	} else {
		alert("logout failed");
	}
}

function settings_togglePassword(){
	var pass1= document.getElementById("clientPW1");
	var pass2= document.getElementById("clientPW2");
	//alert(pass1);
	if (pass1.type == "password"){
			document.getElementById("clientPW1").type="text";
			document.getElementById("clientPW2").type="text";
	} else {
			document.getElementById("clientPW1").type="password";
			document.getElementById("clientPW2").type="password";
	}
}

function settings_manageTouchEvents() {
	utils_touchEvents('.mainIconSubMenu');
	utils_touchEvents('.settingsButton');
	utils_touchEvents('.settingsHeadButton');
}

function settings_activateLoggedOutTouchEvents() {
	utils_touchEvents('.mainIconSubMenu');
	utils_touchEvents('.settingsHeadButton');
}

function settings_disableSettingsTable(){
	//alert("Disable");
	var table = document.getElementById("activeSettings");
	table.style.visibility="hidden";
	table.style.display="none";
	// disable all the items onclick
	utils_removeTouchEvents('.settingsButton');
	var statusButton = document.getElementById("statusOption");
	statusButton.innerHTML="<img style='display:tabel-cell; vertical-align: middle' width=25px src='images/loginIcon.png'> Login";
	statusButton.onclick=function () {settings_doLoginPopup()};
	document.getElementById("signinHeading").innerHTML="Options";
	index_getStream();
	index_getLocationStream(utils_lat,utils_lng);
}

function settings_enableSettingsTable(){
	var table = document.getElementById("activeSettings");
	
	if (utils_addressAdmin3 != "Unable to obtain your location"){
		var localCity = utils_addressAdmin3;
	} else if  (utils_addressAdmin2 != "Unable to obtain your location"){
		var localCity = utils_addressAdmin2;
		} else if  (utils_addressAdmin1 != "Unable to obtain your location"){
			var localCity = utils_addressAdmin1;
		}
	var localCity
	document.getElementById("currentCity").innerHTML=localCity;
	table.style.display="block";
	table.style.visibility="visible";
	utils_touchEvents('.settingsButton');
	var statusButton = document.getElementById("statusOption");
	statusButton.innerHTML="<img style='display:tabel-cell; vertical-align: middle' width=25px src='images/logoutIcon.png'> Logout";
	statusButton.onclick=function () {settings_logout()};
	settings_closePopup();
	setTimeout(settings_fixContentHeight,100);
	index_getStream();
	index_getLocationStream(utils_lat,utils_lng);
	// reinstate all onclicks 
}


function settings_getSettingsStatus(){
	var dataObj = "";
	utils_doAjax("getStatus", dataObj, settings_processSettingsStatus);
}


function settings_processSettingsStatus(data){
	//alert("process");
	if (data.loggedin==false){
		settings_disableSettingsTable();
		utils_loginState=false;
	} else {
		settings_enableSettingsTable();
		utils_loginState=true;
		if (window.localStorage.getItem("searchRange")!=null & 
				window.localStorage.getItem("notifications") !=null & 
					window.localStorage.getItem("homeCity")){
			window.localStorage.removeItem("searchRange");
			window.localStorage.removeItem("notifications");
			window.localStorage.removeItem("homeCity");
			}
			var SR = data.searchrange;
			var Ntf = data.notifications;
			var HC = data.homecity;
			window.localStorage.setItem("searchRange", SR);
			window.localStorage.setItem("notifications", Ntf);
			window.localStorage.setItem("homeCity", HC);
		document.getElementById("clientSearchRange").innerHTML=data.searchrange +" km";
		document.getElementById("clientHomeCity").innerHTML=data.homecity;
		document.getElementById("signinHeading").innerHTML="Account: " + "<div style='display:inline; font-weight:normal'>" + data.email + "</div>";
	};
	
}


function settings_submitSearchRange(){

	document.getElementById("signupError").style.visibility ="hidden";
	var newRange = document.getElementById("searchRange").value;
	if (isNaN(newRange)){
		document.getElementById("signupError").innerHTML ="Invalid input, please enter a distance in km";
		document.getElementById("signupError").style.visibility ="visible";
	} else if (newRange ==""){
		document.getElementById("signupError").innerHTML ="Please input a search range";
		document.getElementById("signupError").style.visibility ="visible";
	} else	{
	window.localStorage.removeItem("searchRange");
	window.localStorage.setItem("searchRange", newRange);
	
	var dataObj = {
			searchRange : newRange,
			notifications : window.localStorage.getItem("notifications"),
			homeCity : window.localStorage.getItem("homeCity")
		};
	utils_doAjax("changeSettings", dataObj, settings_processSearchRange);
	}
}

function settings_processSearchRange(data){
	if (data.result){
		settings_getSettingsStatus();
		index_getLocationStream(utils_lat,utils_lng);
		//utils_getHTMLLocation();
		settings_closePopup();
	} else {
		document.getElementById("signupError").innerHTML ="Error unable to change search criteria!";
		document.getElementById("signupError").style.visibility ="visible";
	}
	//alert ("done");
}