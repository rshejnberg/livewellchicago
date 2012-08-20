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
$(window).ready(function() {
    $('#slider').nivoSlider();
    $("#forms").hide();
    $("#home").show();
    $("#aboutUs").show();
    if(QueryString("cat") == "forms"){$("#forms").show(); $("#home").hide();}
    if(QueryString("cat") == "contactUs"){$("#contactUs").show(); $("#home").hide();}
    if(QueryString("cat") == "landlords"){$("#landlords").show(); $("#home").hide();}

    showHome();
});
$(function()//event handling function
  {
 
  
  $("#aptAll").show();
  $("#aptMenuTable").hide();
  $(".hovApart").hide();
  $("#oneBdr").hide();
  $("#twoBdr").hide();
  $("#threeBdr").hide();
  $("#fourBdr").hide();
  $(".pic2big").hide();
  $(".pic3big").hide();
  $(".pic4big").hide();
    
                        
                  	
  $(".formsNav").click(showForms());
  $(".contactUs").click(showContactUs());
  $(".landlords").click(showLandlords());
  $(".home").click(showHome());



  function showHome(){
                    $("#home").show();
                    $("#forms").hide();
                    $("#landlords").hide();
                    $("#contactUs").hide();
                    $("#apartments").hide();
                    $("#aboutUs").show();
                    }
  function showForms(){
                    $("#forms").show();
                    $("#landlords").hide();
                    $("#contactUs").hide();
                    $("#apartments").hide();
                    $("#home").hide();
                    $("#aboutUs").hide();
                    }
                    
                    $(".forms").click(function(){$("#forms").show(),$("#landlords").hide(),$("#contactUs").hide(),$("#apartments").hide(),$("#home").hide(),$("#aboutUs").hide()}),
  function showContactUs(){
                    $("#contactUs").show();
                    $("#forms").hide();
                    $("#landlords").hide();
                    $("#apartments").hide();
                    $("#home").hide();
                    $("#aboutUs").hide();
                    }
  function showLandlords(){
                    $("#landlords").show();
                    $("#forms").hide();
                    $("#contactUs").hide();
                    $("#apartments").hide();
                    $("#home").hide();
                    $("#aboutUs").hide();
                    }
  
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
  					$("#aptAll").show();
  					$("studio").hide();
                    $("#oneBdr").hide();
                    $("#twoBdr").hide();
                    $("#threeBdr").hide();
                    $("#fourBdr").hide();
                    });
  $('.backButton').click(function () {history.back();});
             
    //Individual apartment slideshow
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
 			
   
//Hover image swaps
  $(".landlords").hover(
                  function(){this.src = this.src.replace("assets/landlords","assets/hovlandlords");},
                  function(){this.src = this.src.replace("assets/hovlandlords","assets/landlords");}
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
                  function(){this.src = this.src.replace("assets/forms","assets/hovforms");},
                  function(){this.src = this.src.replace("assets/hovforms","assets/forms");}
                    );
  $(".contactUs").hover(
                  function(){this.src = this.src.replace("assets/contactus","assets/hovcontactus");},
                  function(){this.src = this.src.replace("assets/hovcontactus","assets/contactus");}
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
  $(".menuSel").hover(function(){$(this).css('background-color', 'gray', 'color', 'black');},
  				      function() {$(this).css('background-color', '#2E272A', 'color', 'white');});
  });

//Url Parser (From Reflection at webmasterworld.com 




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
	} } } 

QueryString_Parse();
var category = QueryString("cat");
if(category == "forms"){$("#forms").show();}




function testForms()
{
$("#home").hide();
$("#forms").show();
}

