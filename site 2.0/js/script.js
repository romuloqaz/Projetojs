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
/*Codido do slide show*/

$(document).ready(function(){
    $(".slides ul").cycle({
        fx: 'fade',
        speed: 2000,
        timeout:300,
    });
});


