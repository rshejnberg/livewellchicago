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
//= require_tree .

//Project created by Raphael Shejnberg, 2012, IT238


$(function()//event handling function
  {
  
  //$("#aptMenu").hide();
  
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
  
  $(".home").click(function(){
                   $("#home").show();
                   $("#forms").hide();
                   $("#landlords").hide();
                   $("#contactUs").hide();
                   $("#apartments").hide();
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
                    
                    });
  $(".contactUs").click(function(){
                        $("#contactUs").show();
                        $("#forms").hide();
                        $("#landlords").hide();
                        $("#apartments").hide();
                        $("#home").hide();
                        });
  $(".landlords").click(function(){
                        $("#landlords").show();
                        $("#forms").hide();
                        $("#contactUs").hide();
                        $("#apartments").hide();
                        $("#home").hide();
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
                   });	});

  $(".landlords").hover(
                        function(){this.src = this.src.replace("assets/landlords2","assets/							hovlandlords2");},
                        function(){this.src = this.src.replace("assets/hovlandlords2","assets/						landlords2");}
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
                    function(){this.src = this.src.replace("assets/contactus","assets/							hovcontactus2");},
                    function(){this.src = this.src.replace("assets/hovcontactus2","assets/						contactus");}
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


$(document).ready(function()
                  {
                  // Set starting slide to 1
                  var startSlide = 1;
                  // Get slide number if it exists
                  if (window.location.hash) {
                  startSlide = window.location.hash.replace('#','');
                  }
                  // Initialize Slides
                  $('#slides').slides({
                                      preload: true,
                                      preloadImage: 'img/loading.gif',
                                      generatePagination: true,
                                      play: 5000,
                                      pause: 1500,
                                      hoverPause: true,
                                      // Get the starting slide
                                      start: startSlide,
                                      animationComplete: function(current){
                                      // Set the slide number as a hash
                                      window.location.hash = '#' + current;
                                      }
                                      });
                  });

