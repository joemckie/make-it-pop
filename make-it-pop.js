/*
	Popcorn.js
	For a site that pops!
	Brought to you by Joe McKie (http://joemck.ie/) and BluthCompany (http://bluth.is)
*/

var popcornContainer,
		popcornImages = [
			'https://raw.github.com/joemckie/make-it-pop/master/assets/popcorn.png', 
		],
		popcornMP3 = 'https://raw.github.com/joemckie/make-it-pop/master/assets/popcorn.mp3';
		
window.onload = function() {
	// Preload assets
	new Audio().src=popcornMP3;
	for(var i in popcornImages) {
		new Image().src= popcornImages[i];
	}
}		
		
function addPopcorn() {
	setTimeout(function() {
		var popcorn 						= document.createElement('img'), // Add popcorn
				randomImage 				= Math.floor(Math.random()),
				positionTop					= Math.floor(Math.random() * document.documentElement.clientHeight),
				positionLeft				= Math.floor(Math.random() * document.body.clientWidth),
				rotation						= Math.floor(Math.random() * 360);
				
		// Add popcorn attributes		
		popcorn.setAttribute('src', popcornImages[randomImage]); // Add src
		popcorn.style.position='absolute';
		popcorn.style.top=positionTop+"px";
		popcorn.style.left=positionLeft+"px";
		popcorn.style.transform = "rotate("+rotation+"deg)";
		popcorn.style.webkitTransform = "rotate("+rotation+"deg)";
		popcorn.style.mozTransform = "rotate("+rotation+"deg)";
		
		// Add to container
		popcornContainer.appendChild(popcorn);
		
		// Repeat loop
		addPopcorn();
	}, 444)
} 

// Initialise popcorny goodness
var success = function() {
	popcornContainer = document.createElement('div'); // container
	popcornContainer.style.position="fixed";
	popcornContainer.style.top=0;
	popcornContainer.style.left=0;
	popcornContainer.style.height="100%";
	popcornContainer.style.width="100%";
	popcornContainer.style.zIndex="10000";
	
	// Load via HTML5 audio if supported.
	var audio = new Audio();
	if(audio.canPlayType('audio/mpeg') == "maybe"){
		audio.autoplay = true;
		audio.loop = true;
		audio.src=popcornMP3;
		audio.load();
	}else{ // Or fallback to the old embed style.
		popcornContainer.innerHTML='<embed src="'+popcornMP3+'" autostart="true" loop="true" hidden="true" />';
	}

	// add elements to body
	document.body.appendChild(popcornContainer);
	
	addPopcorn();
}
var konami = new Konami(success);