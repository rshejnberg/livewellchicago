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
   
   