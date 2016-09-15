
var render = function(templateName, target, data){
	var template = $(templateName).html();
	Mustache.parse(template);
	var rendered = Mustache.render(template, data);
	$(target).append(rendered);
}

$(document).ready(function(){

	$.ajax({
		url: 'http://fuck.froncubator.com/v1/someshit/menu',
		type: 'GET',
		success: function(data){		
			for(var i = 0; i < data.length; i++){
				render('#menu-template', '.menu', data[i]);	
			}
		}
	});

	$.ajax({
		url: 'http://fuck.froncubator.com/v1/someshit/messages',
		type: 'GET',
		success: function(data){		
			var messageData = {
				'message': data
			}
			render('#message-template', '.message', messageData);
		}
	});


	$('#red_button').click(function(){
		$('.user').animate({
			opacity: 'toggle',
		}, 1000)
	})

	$('#green_button').click(function(){
		if($('.user').is(":hidden")){
			$('.user:eq(0)').show('slow', function(){
				$(this).next().show(1000, arguments.callee);
			});
		}else{
			$('.user').slideUp();
		}
	})


});