/*
Lab 15 – AJAX Example with Yes/No API
Author: Walter
Date: June 2
*/

$(document).ready(function() {
    $("#activate").click(function() {
        $.ajax({
            url: "https://yesno.wtf/api",
            type: "GET",
            dataType: "json",
            success: function(data) {
                $("#output").html(`
                    <p>Answer: <strong>${data.answer}</strong></p>
                    <img src="${data.image}" alt="response gif" />
                `);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log("Error:", textStatus, errorThrown);
                $("#output").text("Something went wrong. Check the console.");
            }
        });
    });
});
