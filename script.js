function contactUs() {
  let name = prompt("What is your name?");
  let email = prompt("What is your email address?");


  let body = document.querySelector("body");
  body.innerHTML = "Thank you " + name + ", we'll be in touch! 🌊";
}

let contactButton = document.querySelector("button");
contactButton.addEventListener("click", contactUs);

