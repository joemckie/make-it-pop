var popcornContainer,
		popcornImages = [
			'assets/popcorn.png', 
			'assets/popcorn2.png',
		],
		popcornMP3 = 'assets/popcorn.mp3',
		popcornSong = '<object data='+popcornMP3+' type="audio/mp3" width=0 height=0><param name=autostart value="true"><param name="hidden" value="true"></object>';
		
window.onload = function() {
	new Image().src=popcornSong;
}		
		
function addPopcorn() {
	setTimeout(function() {
		var popcorn 						= document.createElement('img'), // Add popcorn
				randomImage 				= Math.floor(Math.random() * 2),
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
	
	setTimeout(function() {
		addPopcorn();
	}, 222); // synchronise BPM
}
var konami = new Konami(success);