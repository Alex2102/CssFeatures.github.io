let click = document.querySelector('.menu-btn');
click.addEventListener('click', function(evt) {
	evt.preventDefault();
	this.classList.add('menu-btn-active');
});