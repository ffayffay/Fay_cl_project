
let modal = document.querySelector('.modal');
let openBtn = document.querySelector('.open');
let closeBtn = document.querySelector('.close');

// ADDS AN EVENT LISTENER TO THE OPEN BUTTON THAT REMOVES THE HIDDEN CLASS FROM THE MODAL ELEMENT WHEN CLICKED
openBtn.addEventListener('click', function() {
  modal.classList.remove('hidden')
});

//ADDS AN EVENT LISTENER TO THE CLOSE BUTTON THAT ADDS THE HIDDEN CLASS TO THE MODAL ELEMENT WHEN CLICKED
closeBtn.addEventListener('click', function() {
  modal.classList.add('hidden').remove('visible')
});

let cakeDiv = document.querySelector('.cake-div');
let pieDiv = document.querySelector('.pie-div');
let aboutDiv = document.querySelector('.about-div');
let cookieDiv = document.querySelector('.cookie-div');
let tab = document.querySelectorAll('.tab');
let tabs = document.querySelector('#tabs');


function handler(event) {
	// LOGGING THE EVENT FOR TESTING
	console.log(event)

	for(var i = 0; i < tab.length; i++) {
		tab[i].classList.add('hidden');
	}

	if (event.target.tagName !== 'A') return

	let textOfClickedTarget = event.target.innerText.toLowerCase();

	switch(textOfClickedTarget) {
		case 'about':
			aboutDiv.classList.remove('hidden');
			break;

		case 'cakes':
			cakeDiv.classList.remove('hidden');
			break;

		case 'cookies':
			cookieDiv.classList.remove('hidden');
			break;

		case 'pies':
			pieDiv.classList.remove('hidden');
			break;
	}

	let curActive = document.querySelector('.is-active');
	let newActive = event.target.parentNode; 

	curActive.classList.remove('is-active');
	newActive.classList.add('is-active');
	
}

tabs.addEventListener('click', handler);


