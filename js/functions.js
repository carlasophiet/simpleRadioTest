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
		$('.tab').on('click',function(){
			var pathArray = window.location.pathname.split('/')
			pathArray[6]=$(this).data('id') //6 for localhost, change on production
			console.log('pathArray is '+ pathArray) 
			console.log($(this).data('id'));
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
		window.location="http://localhost/"
		var urlChange = "http://localhost/"	
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
		console.log('estrella');
		$(this).toggleClass('yellow');
	});


	});

	
