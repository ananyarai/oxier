window.onload = function () {
	button_1 = document.querySelector('.buttons .one');
	button_2 = document.querySelector('.buttons .two');
	line = document.querySelector('.buttons .line');
	login = document.querySelector('.content .login');
	login_form = document.querySelector('.content .login .form');
	signup = document.querySelector('.content .signup');
	signup_form = document.querySelector('.content .signup .form');
	inputs = document.querySelectorAll('input');

	for (i=0; i<inputs.length; i++) {
		inputs[i].addEventListener('focusin', onfocus);
		inputs[i].addEventListener('focusout', outfocus);
	}
}

function buttons() {
	without_change = 1;

	button_1.classList.toggle('active');
	button_2.classList.toggle('active');

	if (button_1.classList.contains('active')) {
		line.style.transform = "translateX(0)";
	}

	if (button_2.classList.contains('active')) {
		line.style.transform = "translateX(100%)";
	}

	if (login.classList.contains('login-change-1')) {

		login.classList.toggle('login-change-1');
		login.classList.toggle('login-change-2');
		login_form.classList.toggle('animation-opacity-off');
		login_form.classList.toggle('animation-opacity-on');

		signup.classList.toggle('signup-change-1');
		signup.classList.toggle('signup-change-2');
		signup_form.classList.toggle('animation-opacity-on');
		signup_form.classList.toggle('animation-opacity-off');

		without_change = 0;

	} else if (login.classList.contains('login-change-2')) {

		login.classList.toggle('login-change-2');
		login.classList.toggle('login-change-1');
		login_form.classList.toggle('animation-opacity-off');
		login_form.classList.toggle('animation-opacity-on');

		signup.classList.toggle('signup-change-2');
		signup.classList.toggle('signup-change-1');
		signup_form.classList.toggle('animation-opacity-off');
		signup_form.classList.toggle('animation-opacity-on');

		without_change = 0;
		
	}

	if (without_change == 1) {
		login.classList.toggle('login-change-1');
		login_form.classList.toggle('animation-opacity-off');

		signup.classList.toggle('signup-change-1');
		signup_form.classList.toggle('animation-opacity-on');
	}
}

function onfocus(event) {
	var label = event.target.previousElementSibling;
	label.style.display = 'none';
}

function outfocus(event) {
	if (event.target.value.length > 0){
		null
	} else {
		event.target.previousElementSibling.style.display = "block";
	}
}