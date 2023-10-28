const errImg = document.querySelector(".email-error");
const errMessage = document.querySelector(".error-message");
const form = document.querySelector("#content__form");
const emailInput = document.querySelector("#content__form input");

form.addEventListener("submit", (event) => {
  let userEmail = emailInput.value;
  if (userEmail == "") {
    //error if field empty
    event.preventDefault();
    toggleError(errImg, errMessage);
  }
  if (userEmail.length > 30) {
    event.preventDefault();
    toggleError(errImg, errMessage);
  }
});

function toggleError(eImg, eMsg) {
  eImg.classList.toggle("hidden");
  eMsg.classList.toggle("hidden");
}
