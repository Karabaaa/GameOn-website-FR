function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//function close Modal
function closeModal() {
  modalbg.style.display = "none";
}

// validate form :
function validate(event) {
  if (event) {
    event.preventDefault(); // empêche le reload de la page
  }
  let formIsValid = true;

  const form = document.forms["reserve"];
  const first = document.querySelector("#first").value.trim();
  const last = document.querySelector("#last").value.trim();
  const email = document.querySelector("#email").value.trim();
  const quantity = document.querySelector("#quantity").value.trim();
  const location = document.querySelector('input[name="location"]:checked');
  const conditions = document.querySelector("#checkbox1").checked;

  if (first === null || first.length < 2) {
    formIsValid = false;
  }

  if (last === null || last.length < 2) {
    formIsValid = false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    formIsValid = false;
  }

  if (quantity === "" || isNaN(quantity) || Number(quantity) < 0) {
    formIsValid = false;
  }

  if (!location) {
    formIsValid = false;
  }

  if (!conditions) {
    formIsValid = false;
  }

  if (formIsValid) {
    form.submit();
  }
}
