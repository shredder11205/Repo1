/*
Author: Walter Serwin
Date: May 7
*/

$("#challenges").append("<button id='button-challenge'>Make Special</button>");
$("#problems").append("<button id='button-problems'>Make Special</button>");
$("#results").append("<button id='button-results'>Make Special</button>");

$("#button-challenge").click(function(){
    $("#challenges").toggleClass("special");
});

$("#button-problems").click(function(){
    $("#problems").toggleClass("special");
});

$("#button-results").click(function(){
    $("#results").toggleClass("special");
});
