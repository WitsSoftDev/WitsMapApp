/* 
 * 
 */

function delete_location(LocationID){
    
    var xmlhttp;
    if(window.XMLHttpRequest){
        xmlhttp = new XMLHttpRequest;
    }else{
        xmlhttp = new ActiveXObject('Microsoft.XMLHTTP');
    }
    
    xmlhttp.onreadystatechange = function (){
        if(xmlhttp.readyState === 4 && xmlhttp.Status === 200){
            document.getElementById().innerHTML = xmlhttp.responseText;
        }
    };
    
    var data="LocationID="+LocationID;
    xmlhttp.open("POST","../functions/delete_location.php",true);
    xmlhttp.setRequestHeader("content-type","application/x-www-form-urlencoded");
    xmlhttp.send(data);
}

