const tabs = document.querySelectorAll(".tab");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register");
tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        if(tab.id === "login-tab") {
            loginForm.style.display = "block";
            registerForm.style.display = "none";
        }
        if (tab.id === "register-tab") {
            registerForm.style.display = "block";
            loginForm.style.display = 'none';
        }
        tabs.forEach(t => {
            t.classList.remove("active");
        });
            tab.classList.add("active");
    });
});