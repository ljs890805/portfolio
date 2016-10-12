$( document ).ready( function() {

	$('#modal').delay(1000).fadeIn(3000);
	$('#button-yes').click( function() {
		$('#modal').fadeOut();
	});
});
