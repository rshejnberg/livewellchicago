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
                                      pause: 3000,
                                      hoverPause: false,
                                      // Get the starting slide
                                      start: startSlide,
                                      animationComplete: function(current){
                                      // Set the slide number as a hash
                                      window.location.hash = '#' + current;
                                      }
                                      });
                  });

//Url Parser (From Reflection at webmasterworld.com /*
var category = QueryString("cat");
if(category == "forms"){showForms();}
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
QueryString_Parse()

