var scroll = 0;
var speed = 0.1;

$( document ).ready( function() {
	window.setInterval( function() {
		
		scroll = scroll - speed;
		$('#movie-scroll').css( 'background-position', scroll );	

	}, 0 );
});
