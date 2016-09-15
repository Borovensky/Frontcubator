$(document).ready(function(){

	var render = function(templateName, target, data){
		var template = $(templateName).html();
		Mustache.parse(template);
		var rendered = Mustache.render(template, data);
		$(target).append(rendered);
	}		

	function getMessages(){
		$.get("http://fuck.froncubator.com/v1/feed", function(data){
			$('.messages').html('');
			for(var i = 0; i < data.length; i++){
				render('#messages-template', '.messages', data[i]);	
			}
		})
	}
//===================================================================
	$('.logIn').on("click", function(){
		var email = $('.email').val();
		var password = $('.password').val();

		var userInfo = {
			email: email,
			password: password
		}

		$.ajax({
			url: 'http://fuck.froncubator.com/v1/user/login',
			type: 'POST',
			data: userInfo,
			success: function(data){
				if(data.error){
					alert(data.error);
				}else{
					alert("Вы авторизовались епт");
					localStorage.setItem('Token', data.user.token)
					getMessages()
				}
			}
		})
	});
//===================================================================
	$('.signUp').on("click", function(){
		var email = $('.email').val();
		var password = $('.password').val();

		var userInfo = {
			email: email,
			password: password
		}

		$.ajax({
			url: 'http://fuck.froncubator.com/v1/user/signup',
			type: 'POST',
			data: userInfo,
			success: function(data){
				if(data.error){
					alert(data.error);
				}else{
					alert(data.message);
				}
			}
		})
	});
//===================================================================
	$('.send').on("click", function(){
		var post = $('.textarea').val();

		var postInfo = {
			post: post,
			token: localStorage.getItem('Token')
		}

		$.ajax({
			url: 'http://fuck.froncubator.com/v1/feed/post',
			type: 'POST',
			data: postInfo,
			success: function(data){
				getMessages()
			}
		})
	})
//===================================================================
});