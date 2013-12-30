function changeContent(selector, text){
  $(selector).html(text);
}

function getItem(myId){
		var dataObj = {
		id : myId,
		city : "Johannesburg"
		};
	utils_doAjax("query", dataObj, processQuery);
	}


function processQuery(data){
	$("#stuff").html("Name is "+data.name);	
	}

function utils_doAjax(func, parameters, processData) {
	/* change made here */
	$.ajax({
		type : 'GET',
		url : "http://127.0.0.1/" + func + ".php",
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