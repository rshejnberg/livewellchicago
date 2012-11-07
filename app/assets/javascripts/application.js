// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap

$(window).ready(function(){
	
	

	$("#navLandlords").click(function(){showLandlords()});
	$("#navHome").click(function(){showHome()});
	$("#navApartments").click(function(){showApartments()});
	$("#navForms").click(function(){showForms()});
	$("#navContactUs").click(function(){showContactUs()});
	$(".backButton").click(function(){history.back()});
	$("#aboutUsButton").click(function(){showAboutUs()});
	$(".close").click(function(){closeSplitScreen()});

	//Split Screen Controls
	var screenOpen = false;
	var currentPage = null;
	function openSplitScreen()
		{
		$("#splitScreen").animate({width: '750px'}, 750);
		$("#aboutUsButton").fadeOut(750);
		screenOpen = true;
		}
	function closeSplitScreen()
		{
		$("#splitScreen").animate({width: '0px'}, 750);
		$("#aboutUsButton").fadeIn(750);
		screenOpen = false;	
		}
	function splitScreenCheck()
		{
		if(screenOpen == false) 
			{openSplitScreen();}
		}
	function movePageOffScreen()
		{
		if(currentPage != null)
			{
			$(currentPage).animate({left: '715px'}, 750);
			$(currentPage).fadeOut(200);
			$(currentPage).animate({left: '-715px'}, 5);
			$(currentPage).delay(1000).fadeIn(10);
			//$(currentPage).delay(000).css('visibility', 'visible');
			}
		else return;
		}
	function movePageOnScreen()
		{
		if(currentPage != null)
			{
			$(currentPage).animate({left: '0px'}, 750);
			}
		}
	function slideChange()
		{
			
		}
	//Show Section Functions
	function showHome()
				{
				if(currentPage != '#aboutUs')
					{
					movePageOffScreen();
					currentPage = '#aboutUs';
					movePageOnScreen();
					}
				splitScreenCheck();
				}
	function showApartments()
				{
				
				movePageOffScreen();
				currentPage = '#apartments';
				movePageOnScreen();
				splitScreenCheck();
				}
	function showForms()
				{
				movePageOffScreen();
				currentPage = '#forms';
				movePageOnScreen();
				splitScreenCheck();
				}
	function showContactUs()
				{
				movePageOffScreen();
				currentPage = '#contactUs';
				movePageOnScreen();
				splitScreenCheck();
				}
	function showLandlords()
				{
				movePageOffScreen();
				currentPage = '#landlords';
				movePageOnScreen();
				splitScreenCheck();
				}
	function showAboutUs()
				{
				movePageOffScreen();
				currentPage = '#aboutUs';
				movePageOnScreen();
				splitScreenCheck();
				
				}
	
	
	
	//Apartments Controls	
	showAll();
	$("#aptStudioBut").click(function(){showaptStudio()});
	$("#1bdr").click(function(){show1bdr()});
	$("#2bdr").click(function(){show2bdr()});
	$("#3bdr").click(function(){show3bdr()});
	$("#4bdr").click(function(){show4bdr()});
	$("#all").click(function(){showAll()});
	function showaptStudio(){
				$("aptStudio").fadeIn('1000');
				$("#aptOneBdr").hide();
				$("#aptAll").hide();
				$("#aptTwoBdr").hide();
				$("#aptaptThreeBdr").hide();
				$("#aptFourPlusBdr").hide();
				}
	function show1bdr(){
				$("aptStudio").hide();
				$("#aptOneBdr").show();
				$("#aptAll").hide();
				$("#aptTwoBdr").hide();
				$("#aptaptThreeBdr").hide();
				$("#aptFourPlusBdr").hide();
				}
	function show2bdr(){
				$("aptStudio").hide();
				$("#aptOneBdr").hide();
				$("#aptAll").hide();
				$("#aptTwoBdr").show();
				$("#aptaptThreeBdr").hide();
				$("#aptFourPlusBdr").hide();
				}
	function show3bdr(){
				$("aptStudio").hide();
				$("#aptOneBdr").hide();
				$("#aptAll").hide();
				$("#aptTwoBdr").hide();
				$("#aptaptThreeBdr").fadeIn('1000');
				$("#aptFourPlusBdr").hide();
				}
	function show4bdr(){
				$("#aptOneBdr").hide();
				$("#aptAll").hide();
				$("#aptTwoBdr").hide();
				$("#aptaptThreeBdr").hide();
				$("#aptFourPlusBdr").fadeIn('1000');
				$("aptStudio").hide();
				}
	function showAll(){
				$("aptStudio").hide();
				$("#aptOneBdr").hide();
				$("#aptAll").fadeIn('1000');
				$("#aptTwoBdr").hide();
				$("#aptaptThreeBdr").hide();
				$("#aptFourPlusBdr").hide();
				}

});

