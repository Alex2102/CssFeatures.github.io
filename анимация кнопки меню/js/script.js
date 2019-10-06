/*let click = document.querySelector('.menu-btn');
click.addEventListener('click', function(evt) {
	evt.preventDefault();
	this.classList.add('menu-btn-active');
});*/

	//удаляем активный класс

$('.menu-btn').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu-btn-active');
	$('.menu-nav').toggleClass('menu-nav-active');
});