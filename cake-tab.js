let cakeFlavors = ['Vanilla', 'Chocolate', 'Yellow Cake with Ganache Buttercream', 'Mocha', 'Lemon-Blueberry', 'Strawberry Jam'];
let cakeFlavorsList = document.querySelector('.cake-flavors-list');

//LOOPING THROUGH THE cakeFlavors ARRAY 
//USING insertAdjacentHTML TO DYMAICALLY INSERT THE CURRENT CAKE FLAVOR IN THE ARRAY INTO THE .cake-flavors-list <UL>
for(let i = 0; i < cakeFlavors.length; i ++){
	cakeFlavorsList.insertAdjacentHTML("beforeend", createCakeFlavorsHtml(cakeFlavors[i]));
}

//CREATES AN <LI> ELEMENT TO DISPLAY THE CAKE FLAVORS
function createCakeFlavorsHtml (cakeFlavors){
	let template = `<li>${cakeFlavors}</li>`
	return template
}

let cakeTableInfo = [
	{
	size: '2-Layer 8" Round',
	serving: 'Serves- 10-12',
	price: '$25.00'
},
	{
	size: '2-Layer 10" Round',
	serving: 'Serves- 20-22',
	price: '$35.00'
},
{
	size: 'Quarter Sheet',
	serving: 'Serves- 12-15',
	price: '$25.00'
},
{
	size: 'Half Sheet',
	serving: 'Serves- 30-35',
	price: '$40.00'
},
{
	size: 'Full Sheet',
	serving: 'Serves- 60-65',
	price: '$80.00'
},
{
	size: 'Cupcakes One Dozen',
	serving: ' ',
	price: '$15.00'
}
];

let table = document.querySelector('.cake-table');

for(let i = 0; i < cakeTableInfo.length; i ++) {
	table.insertAdjacentHTML("beforeend", createTableHtml(cakeTableInfo[i]));
}

//CREATES A TABLE ROW ELEMENT TO DISPLAY THE CAKE TABLE INFO
function createTableHtml (cakeTableInfo){
	let template = `
<tr>
		<td>${cakeTableInfo.size}</td>
		<td>${cakeTableInfo.serving}</td>
		<td>Starts at <span>${cakeTableInfo.price}</span></td>
</tr>`
	return template
}