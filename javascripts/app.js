var main = function(){
	"use strict";

	
	
	var $input = $(".input");
	var $button = $(".search");
	var url;

	$button.on("click", function(event){
		
		var $searchTag=$input.val();

		console.log($searchTag);
	
		

		var url = "http://api.flickr.com/services/feeds/photos_public.gne?tags={{searchterm}}&format=json&jsoncallback=?";

		
		
		url.replace("{{searchterm}}", $searchTag);

		
		console.log(url);
		//$input.val("");
	});




	

	$.getJSON(url, function(flickrResponse){

		//iterate over the item objects
		flickrResponse.items.forEach(function(photo){
			
			// print out individual images
			//console.log(photo.media.m);

			var $photos = $(".photos");

			var $image = $("<img>").hide();
			
			//add image src attribute to each returned url  
			$image.attr("src", photo.media.m);
				//append to class .photos
				$photos.append($image);
				$image.fadeIn();
		});
	});
};

$(document).ready(main);