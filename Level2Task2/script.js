// Add event listener to hamburger button
document.querySelector('.hamburger').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('nav ul').classList.toggle('active');
});

