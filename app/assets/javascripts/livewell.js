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
$(window).ready(function()
{
	$('#slider').nivoSlider();


//Nav Controls
	showHome();
	$("#navLandlords").click(function(){showLandlords()});
	$("#navHome").click(function(){showHome()});
	$("#navApartments").click(function(){showApartments()});
	$("#navForms").click(function(){showForms()});
	$("#navContactUs").click(function(){showContactUs()});
	$(".backButton").click(function(){history.back()});
	function showHome()
				{
				$("#home").fadeIn('1000');
				$("#forms").hide();
				$("#landlords").hide();
				$("#contactUs").hide();
				$("#apartments").hide();
				$("#aboutUs").show();
				}
	function showApartments()
				{
				$("#apartments").fadeIn('1000');
				$("#contactUs").hide();
				$("#forms").hide();
				$("#landlords").hide();
				$("#apartments").hide();
				$("#home").hide();
				$("#aboutUs").hide();
				
				}
	function showForms()
				{
				$("#forms").fadeIn('1000');
				$("#landlords").hide();
				$("#contactUs").hide();
				$("#apartments").hide();
				$("#home").hide();
				$("#aboutUs").hide();
				}
	function showContactUs()
				{
				$("#contactUs").fadeIn('1000');
				$("#forms").hide();
				$("#landlords").hide();
				$("#apartments").hide();
				$("#home").hide();
				$("#aboutUs").hide();
				}
	function showLandlords()
				{
				$("#landlords").fadeIn('1000');
				$("#forms").hide();
				$("#contactUs").hide();
				$("#apartments").hide();
				$("#home").hide();
				$("#aboutUs").hide();
				}

	
//Nav hover animation
$("#navHome").hover(
		function(){
			$(".navBarHome").animate({position: 'absolute', top: '-20px'}, 200)
			},
		function(){
			$(".navBarHome").animate({position: 'absolute', top: '-10px'}, 100)
			});
$("#navApartment").hover(
		function(){
			$(".navBarApartment").animate({position: 'absolute', top: '-20px'}, 200)
			},
		function(){
			$(".navBarApartment").animate({position: 'absolute', top: '-10px'}, 100)
			});
$("#navForms").hover(
		function(){
			$(".navBarForms").animate({position: 'absolute', top: '-20px'}, 200)
			},
		function(){
			$(".navBarForms").animate({position: 'absolute', top: '-10px'}, 100)
			});
$("#navLandlords").hover(
		function(){
			$(".navBarLandlords").animate({position:'absolute',top:'-20px'},200)
			},
		function(){
			$(".navBarLandlords").animate({position:'absolute',top:'-10px'}, 100)
			});
$("#navContactUs").hover(
		function(){
			$(".navBarContactUs").animate({position:'absolute',top:'-20px'},200)
			},
		function(){
			$(".navBarContactUs").animate({position: 'absolute',top:'-10px'}, 100)
			});
//Apartments Controls	
	showAll();
	$("#studioBut").click(function(){showStudio()});
	$("#1bdr").click(function(){show1bdr()});
	$("#2bdr").click(function(){show2bdr()});
	$("#3bdr").click(function(){show3bdr()});
	$("#4bdr").click(function(){show4bdr()});
	$("#all").click(function(){showAll()});
	function showStudio(){
				$("studio").fadeIn('1000');
				$("#oneBdr").hide();
				$("#aptAll").hide();
				$("#twoBdr").hide();
				$("#threeBdr").hide();
				$("#fourBdr").hide();
				}
	function show1bdr(){
				$("studio").hide();
				$("#oneBdr").show();
				$("#aptAll").hide();
				$("#twoBdr").hide();
				$("#threeBdr").hide();
				$("#fourBdr").hide();
				}
	function show2bdr(){
				$("studio").hide();
				$("#oneBdr").hide();
				$("#aptAll").hide();
				$("#twoBdr").show();
				$("#threeBdr").hide();
				$("#fourBdr").hide();
				}
	function show3bdr(){
				$("studio").hide();
				$("#oneBdr").hide();
				$("#aptAll").hide();
				$("#twoBdr").hide();
				$("#threeBdr").fadeIn('1000');
				$("#fourBdr").hide();
				}
	function show4bdr(){
				$("#oneBdr").hide();
				$("#aptAll").hide();
				$("#twoBdr").hide();
				$("#threeBdr").hide();
				$("#fourBdr").fadeIn('1000');
				$("studio").hide();
				}
	function showAll(){
				$("studio").hide();
				$("#oneBdr").hide();
				$("#aptAll").fadeIn('1000');
				$("#twoBdr").hide();
				$("#threeBdr").hide();
				$("#fourBdr").hide();
				}

function QueryString(key) 
	{ 
		var value = null; 
		for (var i=0;i<QueryString.keys.length;i++) 
			{ 
				if (QueryString.keys[i]==key) 
				{ 
				value = QueryString.values[i]; 
				break; 
				} 
			} 
		return value; 
	} 
QueryString.keys = new Array(); 
QueryString.values = new Array();

function QueryString_Parse() 
	{ 
		var query = window.location.search.substring(1); 
		var pairs = query.split("&");

		for (var i=0;i<pairs.length;i++) 
			{ 
				var pos = pairs[i].indexOf('='); 
				if (pos >= 0) 
				{ 
					var argname = pairs[i].substring(0,pos); 
					var value = pairs[i].substring(pos+1); 
					QueryString.keys[QueryString.keys.length] = argname; 
					QueryString.values[QueryString.values.length] = value; 
				}
			}
	} 
QueryString_Parse();
var category = QueryString("cat");
if(category == "forms"){showForms();}
if(category == "home"){showHome();}
if(category == "contactUs"){showContactUs();}
if(category == "landlords"){showLandlords();}
});