var main = function(){
	"use strict";

	var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=flowers&format=json&jsoncallback=?";
	$.getJSON(url, function(flickrResponse){

		console.log(flickrResponse);

	});
}

$(document).ready(main);