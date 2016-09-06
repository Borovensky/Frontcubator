// $(document).ready(function(){

// 	setTimeout(function(){
// 		var user = {
// 			name: 'John',
// 			count: 20
// 		}
      
//       var template = $('#user-template').html();
//   		Mustache.parse(template);
//   		var rendered = Mustache.render(template, user);
//   		$('ul').html(rendered);
    
// 	}, 500);

// });


// $(document).ready(function(){


	// var render = function(templateName, target, data){
	// 	var template = $(templateName).html();
	// 	Mustache.parse(template);
	// 	var rendered = Mustache.render(template, data);
	// 	$(target).html(rendered);
	// }



// 	setTimeout(function(){
// 		var user = {
// 			name: 'John',
// 			count: 20
// 		}
      
//       render('#user-template', 'ul', user);
    
// 	}, 500);

// });


var render = function(template, target, data){
	var template = $(template).html();
  	Mustache.parse(template);
  	var rendered = Mustache.render(template, data);
  	$(target).append(rendered);
}

$(document).ready(function(){

	// $.ajax({
	// 	url: 'http://fuck.froncubator.com/v1/someshit/messages',
	// 	type: 'GET',
	// 	success: function(data){
	// 		for(var i = 0; i<data.length; i++){
	// 			render('#user-template', '.users', data[i]);
	// 		}
	// 	}
	// });

	$.ajax({
		url: 'http://fuck.froncubator.com/v1/someshit/messages',
		type: 'GET',
		success: function(data){
				var sendData = {
					'users': data
				}
				render('#user-template', '.users', sendData);
			}
	});



});