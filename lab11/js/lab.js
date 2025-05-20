/*
    lab.js - This simple JavaScript/jQuery script gets a value from an input field and outputs a modified version.

    Requirements: jQuery must be loaded for this script to work.

    Author: Walter Serwin
    Date: May 2025
*/

// Sorts the characters of a string in alphabetical order
function sortString(inputString) {
    // Convert string to array, sort it, and join it back
    return inputString.split('').sort().join('');
}

// Click listener for button
$("#submit").click(function() {
    // Get value of input field
    const userName = $("#user-name").val();

    // Sort the input
    const userNameSorted = sortString(userName);

    // Output the sorted name inside a new div
    $("#output").html('<div class="text"><p>' + userNameSorted + '</p></div>');
});
