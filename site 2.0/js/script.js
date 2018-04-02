$(document).ready(function(){

    $('#menu li').hover(
	
	    function(){
		    $('ul', this).fadeIn();
		},
		
		function(){
		   $('ul', this).fadeOut();
		}
	
	);

});