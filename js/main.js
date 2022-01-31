const p = document.querySelectorAll(".p");
const img = document.querySelectorAll("#img");
const input = document.querySelectorAll("input");
const button = document.querySelector("#button");
const form = document.querySelector("form");

for (let i = 0; i < img.length; i++) {
  img[i].style.display = "none";
  p[i].style.display = "none";
}
email.setAttribute("placeholder", "Email");
button.addEventListener("click", function () {
  if (email.value == null || email.value == "") {
    // email.setAttribute("placeholder", "email@example/com");
    email.setAttribute("placeholder", "email@example/com");
    // email.style.color = "reds";
  }
  for (let n = 0; n < input.length; n++) {
    if (input[n].value == "" || input[n].value == null) {
      input[n].style.border = "1px solid red";
      img[n].style.display = "block";
      p[n].style.display = "block";
    } else if (input[n].value != null || input[n].value != "") {
      input[n].style.border = "1px solid #b9b6d3";
      img[n].style.display = "none";
      p[n].style.display = "none";
    }
  }
});
// on submit
// change type of button to submit

// form.addEventListener("submit", function () {
//   if (email.value == null || email.value == "") {
//     // email.setAttribute("placeholder", "email@example/com");
//     email.setAttribute("placeholder", "email@example/com");
//     // email.style.color = "red";
//   }
//   for (let n = 0; n < input.length; n++) {
//     if (input[n].value == "" || input[n].value == null) {
//       input[n].style.border = "1px solid red";
//       img[n].style.display = "block";
//       p[n].style.display = "block";
//     } else if (input[n].value != null || input[n].value != "") {
//       input[n].style.border = "1px solid #b9b6d3";
//       img[n].style.display = "none";
//       p[n].style.display = "none";
//     }
//   }
// });
