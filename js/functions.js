$(document).ready(function(){
		/*var $content = $('.content');
		var testObject = {'content':$content};
		localStorage.setItem('testObject', JSON.stringify(testObject));

		// Retrieve the object from storage
		/*var retrievedObject = localStorage.getItem('testObject');

		console.log('retrievedObject: ', JSON.parse(retrievedObject));
		
		$(function(){
		$(document).on('click', '.tab', function(){
			var href = $(this).attr('href')
			window.history.pushState({testObject}, '', href)
			$('.container').load({retrievedObject})
			return false;
		});
	})

	//function for changing url
	/*$(function() {
 		 var $content = $('.content');
 		 $(document).on('click', '.tab', function() {
  		  var href = $(this).attr('href')
  		  window.history.pushState({}, '', href)
  		  $content.load(href)
  		  return false;
 			 });
		});*/
	$('.tab').on('click', function(){
		var pathArray = window.location.pathname.split( '/' );
		pathArray[6]=$(this).data('id');
		console.log('pathArray is ' + pathArray[6]); // 6 for localhost
		console.log($(this).data('id'));


	});
	/*function for star*/
	$(".star-fav").on('click', function(){
		$(this).toggleClass('yellow');
	});


	});


