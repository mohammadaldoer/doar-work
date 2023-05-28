let UEmailL = document.querySelector(".YourEmailL");
let UPassword = document.querySelector(".PasswordL");
let signIn_btn = document.querySelector(".button");
let signup_btn = document.querySelector(".sign-up");
let array = JSON.parse(localStorage.getItem("users"));
let error = document.querySelector(".error");

signIn_btn.addEventListener("click", (e) => {
    if (UEmailL.value === "" || UPassword.value === "")
        return (error.innerText = `please enter the password & email`);
    
    let existsUser = array.find(
        (user) =>
            user.email === UEmailL.value && user.password === UPassword.value
    );
    
    if (existsUser) {
        localStorage.setItem("currentUser", JSON.stringify(existsUser));
        window.location = "../index.html";
        e.preventDefault();
    } else {
        error.innerText = `Email or password is not correct`;
    }
});

signup_btn.addEventListener("click", () => {
    window.location = "/html/register.html";
});
