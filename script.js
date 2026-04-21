const loginBtn = document.getElementById("loginBtn");
const divLogin = document.getElementById("divLogin");
const closeLogin = document.getElementById("closeLogin");

loginBtn.addEventListener('click', function() {
    divLogin.style.display = "flex";
});

closeLogin.addEventListener('click', function() {
    divLogin.style.display = "none";
});