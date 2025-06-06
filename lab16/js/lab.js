/*
 * Author: Walter Serwin
 * Date: June 3
 * Lab 16
 */

$.ajax({
    url: "https://api.allorigins.win/get?url=https://xkcd.com/info.0.json",
    type: "GET",
    dataType: "json",
    success: function(response) {
        const comicObj = JSON.parse(response.contents);
        console.log(comicObj);

        const titleEl = $("<h3>").text(comicObj.title);
        const imgEl = $("<img>")
            .attr("src", comicObj.img)
            .attr("alt", comicObj.alt)
            .attr("title", comicObj.alt);

        $("#output").append(titleEl, imgEl);
    },
    error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error:", textStatus, errorThrown);
    }
});
