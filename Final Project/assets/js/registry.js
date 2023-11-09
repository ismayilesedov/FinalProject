let passwordeyes = document.querySelector(".eyes");
let password = document.querySelector(".password_input");
passwordeyes.addEventListener("click", function () {
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});
let form = document.querySelector("form");
form.addEventListener('submit', function (e) {
    e.preventDefault();
});