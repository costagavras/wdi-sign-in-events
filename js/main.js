var btnSignin = document.querySelector('.signin');
var modalWindow = document.querySelector('.modal');
var btnClose = document.querySelector('.close');
var btnSubmit = document.querySelector('.submit');
var inpUsername = document.querySelector('#user');
var inpPassword = document.querySelector('#pass');
var formGetStarted = document.querySelector('.getstarted');


function btnSigninFn() {
  modalWindow.style.display = 'block';
}

function btnCloseFn() {
  modalWindow.style.display = 'none';
}

// makes sure the grey .getstarted form when clicked does not trigger modalWindow closing
function modalWindowFn(event){
  if (event.target.className != 'getstarted'){
    modalWindow.style.display = 'none';
  }
}

function btnSubmitFn(event) {
  inpUsername.className = 'error';
  inpPassword.className = 'error';
  event.stopPropagation();
}

function usernameClickFn(event){
  inpUsername.classList.remove("error");
  event.stopPropagation();
}

function passwordClickFn(event){
  inpPassword.classList.remove("error");
  event.stopPropagation();
}



// When the user presses the .signin button, display the modal window
btnSignin.addEventListener("click", btnSigninFn);
// When the user presses the .close button, hide the modal window
btnClose.addEventListener("click", btnCloseFn);
// When the user presses the .submit button, add an .error class to both input elements
btnSubmit.addEventListener("click", btnSubmitFn);
// When the user puts their cursor in one of the input fields, remove the .error class
inpUsername.addEventListener("click", usernameClickFn);
inpPassword.addEventListener("click", passwordClickFn);

// (Bonus) Allow the user to click the .modal to close itself
modalWindow.addEventListener("click", modalWindowFn);
