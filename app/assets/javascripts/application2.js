// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs


//Project created by Raphael Shejnberg, 2012, IT238
function slideShow(){
	setInterval( function(){ 
	var $active = $('#slideshow IMG.active');
    if ( $active.length == 0 ) $active = $('#slideshow IMG:last');
    // use this to pull the images in the order they appear in the markup
    var $next =  $active.next().length ? $active.next()
        : $('#slideshow IMG:first');
    // uncomment the 3 lines below to pull the images in random order
    // var $sibs  = $active.siblings();
    // var rndNum = Math.floor(Math.random() * $sibs.length );
    // var $next  = $( $sibs[ rndNum ] );
    $active.addClass('last-active');
    $next.css({opacity: 0.0}).addClass('active').animate({opacity: 1.0}, 1000, 
    	function() {$active.removeClass('active last-active');});}, 5000);}
});