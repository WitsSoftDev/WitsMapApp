//function settings_doAccountPopup(){
//	alert("YOU POPED THE NEW ACCOUNT");
//}

var test_var;


function search_doPopup() {


	var content = "";
	var leftSpace = document.getElementById('mainScreenLogo').offsetWidth;
	
	var maxSpan = utils_getMaxSpan();
	
	document.getElementById('searchPopupBasic').style.width=maxSpan+"px";
	//content="<ul class='filterBox' data-icon='close-icon' style='list-style:none' id='entitySearch' data-role='listview' data-inset='true' data-filter='true' data-filter-theme='none' data-icon='false' data-theme='none' data-filter-placeholder='Find Artist / Venue..'></ul>";
	
	
	
	content += "<div id='searchMenu' class='menuBar' style='display:table-cell'>";
	
	content += "<table class='menuTable'><tr><td class='menuButton'>";
	content += "<ul class='filterBox' data-icon='close-icon' style='list-style:none' id='entitySearch' data-role='listview' data-inset='true' data-filter='true' data-filter-theme='none' data-icon='false' data-theme='none' data-filter-placeholder='Find Artist / Venue..'>SEARCH HERE</ul></td>";
	
	content +=	"<td><img style='display:table-cell' class='menuIcons'	src='images/searchIcon.png'></td></tr></table>";
	
	content += "</div>";
	
	//alert(content);
	
	//document.getElementById("homeScreenMenu").innerHTML="";
	//document.getElementById("searchBox").style.display="block";
	
	//document.getElementById("homeScreenMenu").innerHTML=content;
	/*content += "<table class='menuTable'><tr>";
	content += "<td class=menuButton onClick="javascript:search_doPopup()">							
		<img class="menuIcons"	src="images/searchIcon.png">
		</td>
		<td class="menuButton " onClick="javascript:utils_changePage('settingsPage')">
		<img class="menuIcons " src="images/settingsIcon.png"></td>
	</tr>
</table>
	*/
	//document.getElementById("homeScreenMenu").innerHTML="";
	
	/*content <div id="homeScreenMenu" class="menuBar">
	<table class="menuTable">
		<tr>
			
			<td class="menuButton" onClick="javascript:search_doPopup()">							
			<img class="menuIcons"	src="images/searchIcon.png">
			</td>
			<td class="menuButton " onClick="javascript:utils_changePage('settingsPage')">
			<img class="menuIcons " src="images/settingsIcon.png"></td>
		</tr>
	</table>

	</div> */
	//searchBox("check");
	

	//utils_touchEvents('.signButton');
	//utils_menuTouchEvents('.searchButton');
	
	//Perform signup action
	
	//var stream =" ";
	
	//document.getElementById("streamDiv").innerHTML = stream;
	//utils_menuTouchEvents(".popupShare");
	
	$('#searchPopupBasic').popup("open",{x:0, y:0});
	//$('#searchPopupBasic').css({position:'absolute'});
	//alert("abo");
	//$( "#searchPopupBasic").popup( "open");
	//$("#spopupBasic").popup("open");
	//$('#searchPopupBasic').css({position:'fixed',top:'10px',left:'30px','display':'block'});
	
	
	/*, {
		x: 30,
		y: 50,
		transition: "reverse slide"
		});
	
	*/
	search_bindPrefix();
	/*$('#searchPopupBasic').on('popupafteropen', function () {
		 var center = ($(document).width() - $('.ui-popup-container').width()) / 2;
		 $('.ui-popup-container').css({
		   top: 0,
		     left: center
		 });  
		});*/
}


function search_closePopup() {
	$('#searchPopupBasic').popup("close");
}


function search_bindPrefix() {
	
	var maxWidth = document.getElementById('searchPopupBasic').offsetWidth;
	//alert(maxWidth);
	//var actualWidth=maxWidth - 20;

	$( "#entitySearch" ).on( "listviewbeforefilter", function ( e, data ) {
		var $ul = $( this ),
			$input = $( data.input ),
			value = $input.val(),
			html = "";
		$ul.html( "" );
		if ( value && value.length > 0 ) {
			$ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
			$ul.listview( "refresh" );
			
			$.ajax({
				url: constants_root+"entitySearch.php",
				dataType: "jsonp",
				crossDomain: true,
				 data: {
			         // featureClass: "P",
			        	prefix :$input.val(),
						country : utils_country
			        }
			})
			.then( function ( response ) {
				$.each( response, function ( i, val ) {
					html += "<li class='filterList' onclick='utils_changeEntityPage(\""+val.type+"Page\","+val.id+")'>" + val.name + "," + val.city +"," +val.country+"</li>";
					test_var = val;
					
				});
				$ul.html( html );
				$ul.listview( "refresh" );
				$ul.trigger( "updatelayout");
				utils_touchEvents(".filterList");
			});
		}
	});
	utils_touchEvents(".filterList");
}

/*
function search_bindPrefix() {
  alert("binding prefix");
  $( "#entityName" ).autocomplete({
    source: function( request, response ) {
      $.ajax({
        url: constants_root+"entitySearch.php",
        dataType: "jsonp",
        data: {
         // featureClass: "P",
        	prefix :$("#entityName").val(),
			country : utils_country
        },
        success: function( data ) {
          response( $.map( data.names, function( item ) {
            return {
              label: item.name +", "+ item.city +", "+ item.country + "," + item.type, 
              value: item.name +", "+ item.city +", "+ item.country,
              id:item.id
            }
          }));
        }
      });
    },
    minLength: 2,
    select: function( event, ui ) {
      $("#chosenspan").text(ui.item.label);
      $("#selectorid").val(ui.item.id);
    },
    open: function() {
      $( this ).removeClass( "ui-corner-all" ).addClass( "ui-corner-top" );
    },
    close: function() {
      $( this ).removeClass( "ui-corner-top" ).addClass( "ui-corner-all" );
    }
  });
}*/


