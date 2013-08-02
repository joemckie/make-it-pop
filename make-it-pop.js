/*
	Popcorn.js
	For a site that pops!
	Brought to you by Joe McKie (http://joemck.ie/) and BluthCompany (http://bluth.is)
*/

var popcornContainer,
		popcornImages = [
			'https://raw.github.com/joemckie/make-it-pop/master/assets/popcorn.png', 
		],
		popcornMP3 = 'https://raw.github.com/joemckie/make-it-pop/master/assets/popcorn.mp3',
		popcornSong = '<object data='+popcornMP3+' type="audio/mp3" width=0 height=0><param name=autostart value="true"><param name="hidden" value="true"></object>';
		
window.onload = function() {
	// Preload assets
	new Image().src=popcornMP3;
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
	popcornContainer.style.zIndex="100000";
	
	// add elements to body
	popcornContainer.innerHTML=popcornSong;
	document.body.appendChild(popcornContainer);
	
	addPopcorn();
}
var konami = new Konami(success);