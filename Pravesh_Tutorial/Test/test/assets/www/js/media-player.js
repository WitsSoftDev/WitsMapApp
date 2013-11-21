var audio = null;
var mediaTimer = null;
var trackName = null;

function playAudio(src, name){
	if(audio== null){
	audio = new Media(src, onSuccess, onError, status);
	}
	if(trackName == null){
		trackName=name;
	}
	//alert(onStatus);
	audio.play();
	
	var timerDuration = setInterval(function() {
		var counter = counter + 100;
		if (counter > 2000) {
			clearInterval(timerDuration);
		}
		var duration = audio.getDuration();
		
		if (duration>0){
			clearInterval(timerDuration);
			var duration1=Math.round(duration);
			//document.getElementById("slider1").slider.max=Math.round(duration);
			//alert(duration1+"sec");
		}
	});
	
	  if (mediaTimer == null) {
          mediaTimer = setInterval(function() {
              // get my_media position
              audio.getCurrentPosition(
                  // success callback
                  function(position) {
                      if (position > -1) {
                          setAudioPosition((position) + " sec");
                      }
                  },
                  // error callback
                  function(e) {
                      console.log("Error getting pos=" + e);
                      setAudioPosition("Error: " + e);
                  }
              );
          }, 1000);

	  }
		
}

//onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

function status(code){
	if (code == 1){
		var playButton = document.getElementById("play_btn");
		var pauseButton = document.getElementById("pause_btn");
		var bufferButton = document.getElementById("buffer_btn");
		var toggleNextButton = document.getElementById("toggleNext_btn");
		var toggleBackButton = document.getElementById("toggleBack_btn");
		pauseButton.style.display="none";
		playButton.style.display="none";
		toggleNextButton.style.display="none";
		toggleBackButton.style.display="none";
		bufferButton.style.display="table-cell";
		
	};
	
	if (code == 2){
		var playButton = document.getElementById("play_btn");
		var pauseButton = document.getElementById("pause_btn");
		var bufferButton = document.getElementById("buffer_btn");
		var toggleNextButton = document.getElementById("toggleNext_btn");
		var toggleBackButton = document.getElementById("toggleBack_btn");
		pauseButton.style.display="table-cell";
		toggleNextButton.style.display="table-cell";
		toggleBackButton.style.display="table-cell";
		playButton.style.display="none";
		bufferButton.style.display="none";
		
	};
	
	if (code == 4){
		var playButton = document.getElementById("play_btn");
		var pauseButton = document.getElementById("pause_btn");
		var bufferButton = document.getElementById("buffer_btn");
		pauseButton.style.display="none";
		playButton.style.display="table-cell";
		
	};
	
}
// onError Callback 
//
function onError(error) {
    console.log('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}


function pauseAudio(){
	if (audio){
		audio.pause();
		var playButton = document.getElementById("play_btn");
		var pauseButton = document.getElementById("pause_btn");
		var bufferButton = document.getElementById("buffer_btn");
		playButton.style.display="table-cell";
		pauseButton.style.display="none";
		bufferButton.style.display="none";
	}
}

function stopAudio(){
	if (audio){
		audio.stop();
		var playButton = document.getElementById("play_btn");
		var pauseButton = document.getElementById("pause_btn");
		var bufferButton = document.getElementById("buffer_btn");
		playButton.style.display="table-cell";
		pauseButton.style.display="none";
		bufferButton.style.display="none";
		audio.release();
		
		//var trackInfo = document.getElementById("trackName");
		//trackInfo.behavior="alternate";
		//trackInfo.loop="1";
		
		clearInterval(mediaTimer);
        mediaTimer = null;
        audio = null;
        trackName = null;
	}
}

function setAudioPosition(position) {
    document.getElementById('theGruf').innerHTML = position;
}

/* Variables */
/*
var audio = null;
var audioTimer = null;
var pausePos = 0;

function playAudio(file){
	audio = new Media(file, onSuccess , onError);
	
	// get duration of track
	var duration = audio.getDuration();
	
	//set slider data
	if (duration >0){
		$('#slider').attr('max', Math.round(duration));
		$('#slider').slider('refresh');
	}

	// play track
	audio.play();
	
	audio.seekTo(pausePos*1000);
	
	//update audio position once a second
	if (audioTimer == null) {
		audioTimer = setInterval( function(){
			//get audio position
			audio.getCurrentPosition(
					function(position){
						//get position Success
						if (position > -1){
							setAudioPosition(position);
						}
					}, function(e){
						// get position error
						console.log("error getting position =" +e);
						//setAudioPosition(Duration);
					});
		}, 1000);
	}
	
}

function onSuccess(){ 
	//Success CallBack
	console.log("playAudio():Audio Success");
}

function onError(error){
	//Error Callback
	alert('code: ' + error.code + '\n' +
		  'message' + error.message + '\n');
}

/* Set Audio Position
function setAudioPosition(position){
	pausePos=position;
	position=Math.round(position);
	$('#slider').val(position);
	$('#slider').slider('refresh');
}

/* Pause Audio
function pauseAudio{
	if (audio){
		audio.pause();
	}
}

/* Stop Audio 
function stopAudio(){
	if (audio) {
		audio.stop();
		audio.release();
	}
	clearInterval(audioTimer);
	audioTimer = null;
	pausePos=0;
}

/*
function onDeviceReady(){

var play_btn = $('#play');
var pause_btn = $('#pause');
var stop_btn = $('#stop');

play_btn.click(function(){
	playAudio("http://197.85.191.92/gigguide/web/upload/track/17-track1.mp3");
	alert("play pressed");
	$(this).button('disable');
	pause_btn.button('enable');
});

pause_btn.click(function(){
	pauseAudio();

	$(this).button('disable');
	play_btn.button('enable');
	
});

pause_btn.click(function(){
	pauseAudio();

	$(this).button('disable');
	play_btn.button('enable');
	
});

stop_btn.click(function(){
	stopAudio();
	
	//reset Slider
	('#slider').val(0);
	('#slider').slider('refresh');

	pause_btn.button('disable');
	play_btn.button('enable');
	
});

}















/* // AUDIO SUPPORT FUNCTIONS

var my_media = null;
var mediaTimer = null;

// Play audio
//
function playAudio(src) {
	
	new_media = new Media(src, onSuccess, onError);
	
	if (my_media === null){
		my_media=new Media(src, onSuccess, onError);
	}
	
	if (my_media.src !== src){
		stopAudio(my_media.src);
		my_media.release();
		my_media= new Media(src, onSuccess, onError);
	} 
	    
	my_media.play();
}
    
   // var counter = 0;
   // var timerDur = setInterval(function() {
   //     counter = counter + 100;
   //     if (counter > 2000) {
   //         clearInterval(timerDur);
   //     }
   //     var dur = my_media.getDuration();
   //     if (dur > 0) {
   //         clearInterval(timerDur);
   //         alert(dur + " sec");
   //     }
   //}, 100);
  
  
    
    // Update my_media position every second
  /*  if (mediaTimer == null) {
        mediaTimer = setInterval(function() {
            // get my_media position
            my_media.getCurrentPosition(
                // success callback
                function(position) {
                    if (position > -1) {
                        setAudioPosition((position) + " sec");
                    }
                },
                // error callback
                function(e) {
                    console.log("Error getting pos=" + e);
                    setAudioPosition("Error: " + e);
                }
            );
        }, 1000);
    }
	
}
// Pause audio
// 
function pauseAudio(src) {
	if (my_media) {
		if (my_media.src !== src) {
			//Do nothing if user pressed other pause
			} else {
				my_media.pause();
			}
	}
}

// Stop audio
// 
function stopAudio(src) {
	if (my_media) {
		if (my_media.src !== src) {
			//Do nothing if user pressed other pause
			} else {
				my_media.stop();
			}
	}
    //clearInterval(mediaTimer);
    //mediaTimer = null;
}

// onSuccess Callback
//
function onSuccess() {
    console.log("playAudio():Audio Success");
}

// onError Callback 
//
function onError(error) {
    alert('code: '    + error.code    + '\n' + 
          'message: ' + error.message + '\n');
}


// END OF AUDIO SUPPORT FUNCTIONS


// CHANGE IMG SRC FUNCTION //

*/

