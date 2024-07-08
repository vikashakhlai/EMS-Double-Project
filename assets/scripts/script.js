const formBtn = document.querySelector('.main-info-button');
const closeBtn = document.querySelector('.close-button');
const signIn = document.querySelector('.sign-in');
const signUp = document.querySelector('.sign-up');
const shadow = document.querySelector('.shadow');
const main_form = document.querySelector('.main-form');

formBtn.onclick = function () {
	let shadow = document.querySelector('.shadow');
	let form = document.querySelector('.main-form');
	shadow.style.display = 'block';
	form.style.display = 'block';
};

closeBtn.onclick = function () {
	let shadow = document.querySelector('.shadow');
	let form = document.querySelector('.main-form');
	shadow.style.display = 'none';
	form.style.display = 'none';
};

shadow.onclick = function () {
	let shadow = document.querySelector('.shadow');
	let form = document.querySelector('.main-form');
	shadow.style.display = 'none';
	form.style.display = 'none';
};

main_form.onsubmit = function () {
	alert('Login');
	return false;
};

signUp.onclick = function (e) {
	alert('Registration');
	e.preventDefault();
};
