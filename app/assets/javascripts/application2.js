// This is a manifest file that'll be compiled into application.js; which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory; lib/assets/javascripts; vendor/assets/javascripts;
// or vendor/assets/javascripts of plugins; if any; can be referenced here using a relative path.
//
// It's not advisable to add code directly here; but if you do; it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED; ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs


//Project created by Raphael Shejnberg; 2012; IT238
$(window).load(
	function(){
	alert("Test");
			$('#slider').nivoSlider();
			})
$(function(){
			$("#forms").hide();
			$(".hovApt").hide();
			$(".aptMenuHomeHover").hide();
			$("#contactUs").hide();
			$("#landlords").hide();
			$("#apartments").hide();
			$("#aptAll").show();
			$("#oneBdr").hide();
			$("#twoBdr").hide();
			$("#threeBdr").hide();
			$("#fourBdr").hide();
			$("#navHome").click(function(){
					$("#home").fadeIn('1000');
					$("#forms").hide();
					$("#landlords").hide();
					$("#contactUs").hide();
					$("#apartments").hide();
					$("#aboutUs").show();
					});
			$(".backButton").click(function(){history.back()});
			$("#navForms").click(function(){
					$("#forms").fadeIn('1000');
					$("#landlords").hide();
					$("#contactUs").hide();
					$("#apartments").hide();
					$("#home").hide();
					$("#aboutUs").hide();
					});
			$("#navContactUs").click(function(){
					$("#contactUs").fadeIn('1000');
					$("#forms").hide();
					$("#landlords").hide();
					$("#apartments").hide();
					$("#home").hide();
					$("#aboutUs").hide();
					});
			$("#navLandlords").click(function(){
					$("#landlords").fadeIn('1000');
					$("#forms").hide();
					$("#contactUs").hide();
					$("#apartments").hide();
					$("#home").hide();
					$("#aboutUs").hide();
					});
			$("#studioBut").click(function(){
					$("studio").fadeIn('1000');
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
					$("#threeBdr").fadeIn('1000');
					$("#fourBdr").hide();
					});
			$("#4bdrSel").click(function(){
					$("#oneBdr").hide();
					$("#aptAll").hide();
					$("#twoBdr").hide();
					$("#threeBdr").hide();
					$("#fourBdr").fadeIn('1000');
					$("studio").hide();
					});
			$("#all").click(function(){
					$("studio").hide();
					$("#oneBdr").hide();
					$("#aptAll").fadeIn('1000');
					$("#twoBdr").hide();
					$("#threeBdr").hide();
					$("#fourBdr").hide()});
			$(".aptForms").click(function(){
					$("#homePage").ready(function(){
						$("#home").hide();
						$("#forms").fadeIn('1000');
						$("#landlords").hide();
						$("#contactUs").hide();
						$("#apartments").hide();
					})
			});
$(".landlords").hover(
				function(){
				this.src=this.src.replace("assets/landlords";"assets/hovlandlords")
				},
				function(){
				this.src=this.src.replace("assets/hovlandlords";"assets/landlords")
				});
$(".apartments").hover(
				function(){
				$(".aptBut").hide();
				$(".hovApt").show()
				},
				function(){
				$(".hovApt").hide();
				$(".aptBut").show()
				});
$(".home").hover(
				function(){
				this.src=this.src.replace("assets/home";"assets/hovhome")
				},
				function(){
				this.src=this.src.replace("assets/hovhome";"assets/home")
				});
$(".forms").hover(
				function(){
				this.src=this.src.replace("assets/forms";"assets/hovforms")
				},
				function(){
				this.src=this.src.replace("assets/hovforms";"assets/forms")
				});
$(".contactUs").hover(
				function(){
				this.src=this.src.replace("assets/contactus";"assets/hovcontactus")
				},
				function(){
				this.src=this.src.replace("assets/hovcontactus";"assets/contactus")
				});
$("#navHome").hover(
				function(){
				$(".navBarHome").animate({position: 'absolute'; top: '-20px'}; 200)
				},
				function(){
				$(".navBarHome").animate({position: 'absolute'; top: '0px'}; 100)
				});
$("#navApt").hover(
				function(){
				$(".navBarApt").animate({position: 'absolute'; top: '-20px'}; 200)
				},
				function(){
				$(".navBarApt").animate({position: 'absolute'; top: '0px'}; 100)
				});
$("#navForms").hover(
				function(){
				$(".navBarForms").animate({position: 'absolute'; top: '-20px'}; 200)
				},
				function(){
				$(".navBarForms").animate({position: 'absolute'; top: '0px'}; 100)
				});
$("#navLandlords").hover(
				function(){
				$(".navBarLandlords").animate({position:'absolute';top:'-20px'}; 200)
				},
				function(){
				$(".navBarLandlords").animate({position:'absolute';top:'0px'}; 100)
				});
$("#navContactUs").hover(
				function(){
				$(".navBarContactUs").animate({position:'absolute';top:'-20px'}; 200)
				},
				function(){
				$(".navBarContactUs").animate({position: 'absolute';top:'0px'}; 100)
				})


});

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
					var argname = pairs[i].substring(0;pos); 
					var value = pairs[i].substring(pos+1); 
					QueryString.keys[QueryString.keys.length] = argname; 
					QueryString.values[QueryString.values.length] = value; 
	} } } 
QueryString_Parse();
var category = QueryString("cat");
if(category == "forms")
{show}



alert(QueryString("cat"));