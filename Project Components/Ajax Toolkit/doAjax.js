/*
   This ajax toolkit handles the behind the scene of an ajax request,
        -Creating the xhr object.
        -Handling the onreadystatechange.
        -Opening the request.
        -sending the request.
        
    This toolkit makes use of two methods that are attached to a global objet to avoid 
    overiding someone else's varriables. The two methods used are:
        -ajax 
            -createXHRObject
*/

var doAjax = {};

/*
    this method handles
*/
doAjax.createXHRObjet = function(url, options){
    //initialize xhr to false;
    var xhr = false;
    
    //check support for newer and older versions of IE.
    if(window.XMLHttpRequest){
        xhr = new XMLHttpRequest();
        
    }else if(window.ActiveXObject){
        //for older versions of IE
        try{
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }catch(exception){
            xhr = false;
        }
    }
    
    //checking if there's an xhr object to work with
    if(xhr){
        //initializing all value pairs of the options object
        options = options || {};
        options.method = options.method || "GET";
        options.async = options.async || true;
        options.cache = options.cache || false;
        options.data = options.data || null;
        
        if(options.data){
            queryString = [];
            
            for(key in options.data){
                queryString.push(encodeURIComponent(key)+"="+encodeURIComponent(options.data[key]));
            }
            
            options.data = queryString.join("&");
        }
        
        if(!options.cache && options.method.toUpperCase() == "GET"){
            url = url+ "?_="+ new Date().getTime();
        }
        
        /*
            handling the onreadystatechange event
            xhr.readyState property values are:
                - 0: uninitialized
                - 1: loading
                - 2: loaded
                - 3: interactive
                - 4: complete
        */
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 1){
                if(options.before){
                    options.before.call(xhr);
                }
            } 
            
            if((xhr.readyState == 4) && (xhr.status == 200 || xhr.status == 304)){
                var contentType = xhr.getResponseHeader("Content-Type");
                
                if(options.complete){
                    if(contentType == "application/xml" || contentType == "text/xml"){
                        options.complete.call(xhr, xhr.responseXML);
                        
                    }else if(contentType == "application/json" || contentType == "text/json"){
                        options.complete.call(xhr, JSON.parse(xhr.responseText));
                        
                    }else {
                        options.complete.call(xhr, xhr.responseText);
                    }
                }
            }
        };
        
        //opening the request
        xhr.open(options.method, url, options.async);
        return xhr;
    }else{
        return false;
    }
}

/*
    This method handles creating the xhr object
*/
doAjax.ajax = function(url, options){
    
    //creating the xhr object using the createXHRObject method
    var xhr = doAjax.createXHRObjet(url, options);
    
    //Check if we have an xhr object to work with first from the createXHRObject method
    if(xhr){
        xhr.setRequestHeader("X-Requested-With","XMLHttpRequest");
        
        if(options.method.toUpperCase() == "POST"){
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        }
        xhr.send(options.data);
    }
    
}