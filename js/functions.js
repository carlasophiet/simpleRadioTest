$(document).ready(function(){
	/*function for changing url*/
		$(function(){
		$(document).on('click', '.tab', function(){
			var urlChange = window.location.pathname.split('/')[1]
			var href = $(this).find('a').attr('href').replace('#', '')
			console.log('href is ' + href)
			console.log('urlChange is ' + urlChange)
			if ($(this).find('a').hasClass('active')){
				console.log('active')
				window.history.pushState({}, href , href)
			}
		})
	});	
	/*function for star*/
	$(".star-fav").on('click', function(){
		$(this).toggleClass('yellow');
	});


});

	
