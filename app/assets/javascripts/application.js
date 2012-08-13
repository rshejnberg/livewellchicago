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
$(window).load(function() {$('#slider').nivoSlider();});
$(function()//event handling function
  {
  $("#forms").hide();
  $(".hovApart").hide();
  $("#contactUs").hide();
  $("#landlords").hide();
  $("#apartments").hide();
  $("#aptAll").show();
  $("#oneBdr").hide();
  $("#twoBdr").hide();
  $("#threeBdr").hide();
  $("#fourBdr").hide();
  $(".pic2big").hide();
  $(".pic3big").hide();
  $(".pic4big").hide();
  
  $(".home").click(function(){
                    $("#home").show();
                    $("#forms").hide();
                    $("#landlords").hide();
                    $("#contactUs").hide();
                    $("#apartments").hide();
                    $("#aboutUs").show();
                    });                  
 $('.backButton').click(function () {
          		    history.back();
          		    });  	
  $(".forms").click(function(){
                    $("#forms").show();
                    $("#landlords").hide();
                    $("#contactUs").hide();
                    $("#apartments").hide();
                    $("#home").hide();
                    $("#aboutUs").hide();
                    });
  $(".contactUs").click(function(){
  					$(document).ready(function() {
                        $("#contactUs").show();
                        $("#forms").hide();
                        $("#landlords").hide();
                        $("#apartments").hide();
                        $("#home").hide();
                        $("#aboutUs").hide();
                        }); 
                    });
  $(".landlords").click(function(){
                    $("#landlords").show();
                    $("#forms").hide();
                    $("#contactUs").hide();
                    $("#apartments").hide();
                    $("#home").hide();
                    $("#aboutUs").hide();
                    });
  $("#studioBut").click(function(){               
                   	$("studio").show();
                    $("#oneBdr").hide();
                    $("#aptAll").hide();
                    $("#twoBdr").hide();
                    $("#threeBdr").hide();
                    $("#fourBdr").hide();
                    });
  $("#1bdr").click(function(){
                	$("studio").hide();
                    $("#oneBdr").show();
                    $("#aptAll").hide();
                    $("#twoBdr").hide();
                    $("#threeBdr").hide();
                    $("#fourBdr").hide();
                    });
  $("#2bdr").click(function(){
                    $("studio").hide();
                    $("#oneBdr").hide();
                    $("#aptAll").hide();
                    $("#twoBdr").show();
                    $("#threeBdr").hide();
                    $("#fourBdr").hide();
                    });
  $("#3bdr").click(function(){
                    $("studio").hide();
                    $("#oneBdr").hide();
                    $("#aptAll").hide();
                    $("#twoBdr").hide();
                    $("#threeBdr").show();
                    $("#fourBdr").hide();
                    });
  $("#4bdrSel").click(function(){
                    $("#oneBdr").hide();
                    $("#aptAll").hide();
                    $("#twoBdr").hide();
                    $("#threeBdr").hide();
                    $("#fourBdr").show();
                    $("studio").hide();
                    });
  $("#all").click(function(){
  					$("studio").hide();
                    $("#oneBdr").hide();
                    $("#aptAll").show();
                    $("#twoBdr").hide();
                    $("#threeBdr").hide();
                    $("#fourBdr").hide();
                    });
  $(".aptForms").click(function(){
	    	$("#homePage").ready(function(){
  				   $("#home").hide();
                   $("#forms").show();
                   $("#landlords").hide();
                   $("#contactUs").hide();
                   $("#apartments").hide();
                   });	
             });
    $(".pic1small").click(function(){
 			$(".pic1big").fadeIn('1000');
 			$(".pic2big").hide();
            $(".pic3big").hide();
 			$(".pic4big").hide();
 			});
   $(".pic2small").click(function(){
 			$(".pic1big").hide();
 			$(".pic2big").fadeIn('1000');
 			$(".pic3big").hide();
 			$(".pic4big").hide();             
 			});
   $(".pic3small").click(function(){
 			$(".pic1big").hide();
 			$(".pic2big").hide();
 			$(".pic3big").fadeIn('1000');
 			$(".pic4big").hide();             
 			});
   $(".pic4small").click(function(){
 			$(".pic1big").hide();
 			$(".pic2big").hide();
 			$(".pic3big").hide();
 			$(".pic4big").fadeIn('1000');             
 			});
   
   

  $(".landlords").hover(
                        function(){this.src = this.src.replace("assets/landlords","assets/							hovlandlords");},
                        function(){this.src = this.src.replace("assets/hovlandlords","assets/						landlords");}
                        );
$(".apartments").hover(
                        function(){ $(".aptBut").hide();$(".hovApart").show();},
                        function(){$(".hovApart").hide(); $(".aptBut").show();}
                        );
  $(".home").hover(
                   function(){this.src = this.src.replace("assets/home","assets/hovhome");},
                   function(){this.src = this.src.replace("assets/hovhome","assets/home");}
                   );
  $(".forms").hover(
                    function(){this.src = this.src.replace("assets/forms","assets/								hovforms");},
                    function(){this.src = this.src.replace("assets/hovforms","assets/forms");}
                    );
  $(".contactUs").hover(
                    function(){this.src = this.src.replace("assets/contactus","assets/							hovcontactus");},
                    function(){this.src = this.src.replace("assets/hovcontactus","assets/						contactus");}
                        );
  $(".1bdr").hover(
                   function(){this.src = this.src.replace("assets/1bdr","assets/hov1bdr");},
                   function(){this.src = this.src.replace("assets/hov1bdr","assets/1bdr");});
  $(".2bdr").hover(
                   function(){this.src = this.src.replace("assets/2bdr","assets/hov2bdr");},
                   function(){this.src = this.src.replace("assets/hov2bdr","assets/2bdr");});
  $(".3bdr").hover(
                   function(){this.src = this.src.replace("assets/3bdr","assets/hov3bdr");},
                   function(){this.src = this.src.replace("assets/hov3bdr","assets/3bdr");});
  $(".4+bdr").hover(
                    function(){this.src = this.src.replace("assets/4+bdr","assets/hov4+bdr");},
                    function(){this.src = this.src.replace("assets/hov4+bdr","assets/4+bdr");});
  $(".studio").hover(
                     function(){this.src = this.src.replace("assets/studio","assets/hovstudio");},
                     function(){this.src = this.src.replace("assets/hovstudio","assets/studio");});
   $(".menuSel").hover(function(){
                    $(this).css('background-color', 'gray', 'color', 'black');
                    },function() {
                    $(this).css('background-color', '#2E272A', 'color', 'white');});
  });



