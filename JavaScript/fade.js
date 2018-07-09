

openBtn.addEventListener('click', function() {
	console.log('hello')
   modal.classList.add('fade-in')
   modal.classList.remove('fade-out')
});

closeBtn.addEventListener('click', function() {
	modal.classList.remove('fade-in')
	modal.classList.add('fade-out')
});