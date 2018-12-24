var main = function(){
	"use strict";

	var $input = $(".input");
	var $button = $(".search");
	
	var searchURL;

	$button.on("click", function(event){

		if($input.val() !== "") {

			$(".photos").empty();
		
			var $searchTag=$input.val();

			//console.log($searchTag);
		
			
			var searchURL = "http://api.flickr.com/services/feeds/photos_public.gne?tags="+$searchTag+"&format=json&jsoncallback=?";
				
			//console.log(searchURL);
			
			$input.val("");


			$.getJSON(searchURL, function(flickrResponse){

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

		}
	});
	
};

$(document).ready(main);