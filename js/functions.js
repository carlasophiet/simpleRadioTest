$(document).ready(function(){
		/*var $content = $('.content');
		var testObject = {'content':$content};
		localStorage.setItem('testObject', JSON.stringify(testObject));

		// Retrieve the object from storage
		var retrievedObject = localStorage.getItem('testObject');

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
	$(function() {
 		 var $content = $('.content');
 		 $(document).on('click', '.tab', function() {
  		  var href = $(this).attr('href')
  		  window.history.pushState({}, '', href)
  		  $content.load(href)
  		  return false;
 			 });
		});*/
		var urlChange = window.location.pathname.split('/')[6]
		var testObject = {'url' : urlChange}
		localStorage.setItem('testObject', JSON.stringify(testObject))
		// Retrieve the object from storage
		var retrievedObject = localStorage.getItem('testObject');
		console.log('retrievedObject: ', JSON.parse(retrievedObject));
		
		$(function(){
		$(document).on('click', '.tab', function(){
			var href = $(this).find('a').attr('href').replace('#', '');
			console.log('href is ' + href)
			console.log('urlChange is ' + urlChange)
			if ($('.tab').attr('state') == 'active'){
				window.history.pushState({}, 'Simple Radio | ' + href , href)
				urlChange.load({href})
				return false;
			}
			
		});
	})



	/*function for star*/
	$(".star-fav").on('click', function(){
		$(this).toggleClass('yellow');
	});


	});

	
