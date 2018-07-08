let pieFlavors = [
	{name: 'Apple- ',
	price: ' $15.00'},

	{name: 'Lemon Meringue- ',
	price: ' $15.00'},

	{name: 'Chocolate Cream- ',
	price: ' $15.00'},

	{name: 'Strawberry- ',
	price: ' $15.00'},

	{name: 'Rasberry- ',
	price: ' $15.00'},

	{name: 'Blueberry- ',
	price: ' $15.00'},

	{name: 'Mixed Berry- ',
	price: ' $17.00'},

	{name: 'Cherry- ',
	price: ' $18.00'},

	{name: 'Pecan- ',
	price: ' $20.00'}];

let pieFlavorsList = document.querySelector('.pie-flavors-list');

function renderHtml(flavors) { 
	for(var i = 0; i < flavors.length; i ++){
		pieFlavorsList.insertAdjacentHTML("beforeend", createPieFlavorsHtml(pieFlavors[i]));
	}
}

function createPieFlavorsHtml (pieFlavor){
	var template = `<li class="pie-li"><span class="pie-flavor">${pieFlavor.name}</span><span class="price">${pieFlavor.price}</span></li>`
	return template
}

renderHtml(pieFlavors);

