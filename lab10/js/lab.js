/*
  lab.js - A quick jQuery script to insert random blurbs into the page
  
  Note: jQuery must be linked first!

  Author: Walter Serwin
  Date: May 15, 2025
*/

function getRandomPhrase() {
    const base = "Javascript? Getting quirky? Never heard of it.";
    const minLength = 4;
    const maxLength = 10;

    let length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let start = Math.floor(Math.random() * (base.length - length));
    return base.slice(start, start + length);
}

// Button click function to inject new content
$("#make-convo").click(function() {
    let phrase = getRandomPhrase();
    $("#output").append(`<div class='text'><p>${phrase}</p></div>`);
});
