var main = function(){
	"use strict";

	var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags=flowers&format=json&jsoncallback=?";
	$.getJSON(url, function(flickrResponse){

		//iterate over the item objects
		flickrResponse.items.forEach(function(photo){
			
			// print out individual images
			//console.log(photo.media.m);

			var $photos = $(".photos");

			var $image = $("<img>");
			
			//add image src attribute using jQuery 
			$image.attr("src", photo.media.m);
				//append to class .photos
				$photos.append($image);
		});
	});
};

$(document).ready(main);