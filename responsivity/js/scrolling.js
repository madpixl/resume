
$(function() {

 	$(window).on("load,resize", function() {
 		$(".fill-screen").css("height", window.innerHeight);	
 	});

	$('body').scrollspy({
	target: '.navbar',
	offset: 160
});

//animated scrolling
$('nav a, #down-butt').bind('click', function() {

	$('html, body').stop().animate({
		scrollTop: $($(this).attr('href')).offset().top -80
	}, 1500, 'easeInOutExpo'); 
	event.preventDefault();
	$('.navbar-collapse').removeClass('in');
});



//parallax
$(window).stellar();

//wow
new WOW().init();


$(document).ready(function() {
	 $('card div').each(function (i){
	 var itm = "#nanoGallery"+(i+1);  
    $(itm).nanoGallery(); 
 });
	});

 
});




