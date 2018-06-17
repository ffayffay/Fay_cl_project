
let modal = document.querySelector('.modal');
let openBtn = document.querySelector('.open');
let closeBtn = document.querySelector('.close');

openBtn.addEventListener('click', function() {
  modal.classList.remove('hidden')
});

closeBtn.addEventListener('click', function() {
  modal.classList.add('hidden')
});

let cakeDiv = document.querySelector('.cake-div');
let pieDiv = document.querySelector('.pie-div');
let aboutDiv = document.querySelector('.about-div');
let cookieDiv = document.querySelector('.cookie-div');
let tab = document.querySelectorAll('.tab');


function handler(event) {
	// log event for testing and exploring
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


