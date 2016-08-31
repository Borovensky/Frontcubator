function priceFormat(price){
	var price_sep;
	price_sep = price + '';
	price_sep = price_sep.replace(/^\s*(\d+)(\d{3})\s*([а-я\.]+)?\s*$/, '$1 $2 $3');
	return price_sep += '$';
};
// =====================================

// =====================================
function priceConvert(price){
	if(price != undefined && price > 10){
		price = price + 500;
		price = priceFormat(price);
	}else{
		price = 'not available';
	}
	return price;
}
// =====================================

// =====================================
function shortDescription(descr){
	if(descr == undefined){
		return '';
	}else if(descr.length > 128){ 
		descr = descr.substr(0, 128).trim();
		return descr + '...';
	}else{
		return descr;
	}
}
// =====================================

// =====================================
var products = [];

products.push({
		'name' : 'macbook',
		'description' : 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis nemo autem sed facere veritatis cumque voluptates, ut repellat magnam velit perspiciatis animi quia itaque, saepe eaque nulla ullam, hic ducimus! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error consequuntur sit impedit ipsum, dignissimos ducimus dolorum repellat eum voluptatem soluta distinctio perspiciatis odit, corporis doloremque dicta aliquam reprehenderit vitae natus.',
		'price' : 5000
	});

products.push({
		'name' : 'macbookPRO',
		// 'description' : 'cool macbookPRO',
		'price' : 10000
	});

products.push({
		'name' : 'Dell XPS',
		'description' : 'cool Dell XPS',
		'price' : 8000
	});

products.push({
		'name' : 'HP',
		'description' : 'ProBook 4510s',
		'price' : 0
	});

products.push({
		'name' : 'Acer',
		'description' : 'the same shit Acer'
	});

products.push({
		'name' : 'Acer',
		'description' : 'so so Acer',
		'price' : 1000
	});
// ====================================

// ====================================
function buildRow(product){
	var html = '';
	html += '<tr>';
	html += '<td style="white-space: nowrap">' + product.name + '</td>';
	html += '<td>' + product.description + '</td>';
	html += '<td style="white-space: nowrap">' + product.priceConverted + '</td>';
	html += '</tr>';
	return html;
}
// ====================================

// ====================================
function sortPrice(){

	count = products.length - 1;

	for(var i = 0; i < count; i++){
		for(var j = 0; j < count - i; j++){
			if(products[i].price > products[j + 1].price){
				var max = products[j];
				products[i] = products[j + 1];
				products[j + 1] = max;
			}
		}
	}

	return '';
}
// ====================================

// ====================================
function productExec(elm){

	var html = '';
	var filtred = false;

	if(elm.className == 'filtred'){
		filtred = false;
		elm.className = 'not-filtred';
		elm.innerHTML = 'Only available products';
	}else{
		filtred = true;
		elm.className = 'filtred';
		elm.innerHTML = 'Show all';
	}

	for(var i = 0; i < products.length; i++){
		var product = products[i];
		if(!filtred || product.priceConverted != 'not available'){
			var productTable = document.getElementById('products');
			html += buildRow(product);
		}
	}	

	// if(elm.innerHTML == 'Show all'){
	// 	for(var i = 0; i < products.length; i++){
	// 		var product = products[i];
	// 		var productTable = document.getElementById('products');
	// 		html += buildRow(product);
	// 	}
	// 	productTable.innerHTML = html;
	// 	elm.innerHTML = 'Only available products';
	// }else{
	// 	for(var i = 0; i < products.length; i++){
	// 	var product = products[i];
	// 	if(product.priceConverted != 'not available'){
	// 		var productTable = document.getElementById('products');
	// 		html += buildRow(product);
	// 	}
	// }
	// 	productTable.innerHTML = html;
	// 	elm.innerHTML = 'Show all';
	// }

	productTable.innerHTML = html;
}
// =====================================

// =====================================
// поскольку в html мы загружаем наш скрипт main.js в head. то в данном случае надо использовать window.onload.
window.onload = function(){

		var html = '';

		for(var i = 0; i < products.length; i++){
			var product = products[i];
			product.priceConverted = priceConvert(product.price);
			product.description = shortDescription(product.description);

			var productTable = document.getElementById('products');
			html += buildRow(product);
			
			/* Один из способов как это можно сделать */
			// var productTable = document.getElementById('products');
			// var tr = document.createElement('tr');
			// var tdName = document.createElement('td');
			// var tdDescr = document.createElement('td');
			// var tdPrice = document.createElement('td');

			// tdName.innerHTML = product.name;
			// tdDescr.innerHTML = product.description;
			// tdPrice.innerHTML = product.priceConverted;

			// tr.appendChild(tdName);
			// tr.appendChild(tdDescr);
			// tr.appendChild(tdPrice);

			// productTable.appendChild(tr);
	}

		productTable.innerHTML = html;
}
// =====================================








// var products = [
// 	{
// 		'name' : 'macbook',
// 		'description' : 'cool macbook',
// 		'prise' : 5000
// 	},
// 	{
// 		'name' : 'macbookPRO',
// 		'description' : 'cool macbookPRO',
// 		'prise' : 10000
// 	},
// ];

// for(var i = 0; i < products.length; i++){
// 	var product = products[i];
// 	if(product.price != undefined && product.price > 0){
// 		product.price = product.price + 500;
// 		product.price = priceFormat(product.price);
// 	}else{
// 		product.price = 'not available';
// 	}

// 	console.log(product);
// }
