let cookieFlavors = ['Chocolate Chip', 'Classic Sugar with a hint of Lemon', 'Peanut Butter', 
	'Triple Chocolate Mocha', 'Shortbread with Raspberry Jam', 'Oatmeal Cherry Walnut'];
let cookieFlavorsList = document.querySelector('.cookie-flavors-list');

// LOOPS THROUGH THE cookieFlavors ARRAY AND INSERTS THE FLAVORS INTO THE HTML INSIDE OF THE .cookie-flavors-list <DIV>
for(var i = 0; i < cookieFlavors.length; i ++){
	cookieFlavorsList.insertAdjacentHTML("beforeend", createCookieFlavorsHtml(cookieFlavors[i]));
}

//CREATES AN <LI> ELEMENT TO DISPLAY THE COOKIE FLAVORS
function createCookieFlavorsHtml (cookieFlavors){
	var template = `<li>${cookieFlavors}</li>`
	return template
}