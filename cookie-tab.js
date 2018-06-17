let cookieFlavors = ['Chocolate Chip', 'Classic Sugar with a hint of Lemon', 'Peanut Butter', 
	'Triple Chocolate Mocha', 'Shortbread with Raspberry Jam', 'Oatmeal Cherry Walnut'];
let cookieFlavorsList = document.querySelector('.cookie-flavors-list');

for(var i = 0; i < cookieFlavors.length; i ++){
	cookieFlavorsList.insertAdjacentHTML("beforeend", createCookieFlavorsHtml(cookieFlavors[i]));
}

function createCookieFlavorsHtml (cookieFlavors){
	var template = `<li>${cookieFlavors}</li>`
	return template
}