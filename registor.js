let isLogin = true;

const title = document.getElementById("formTitle");
const btn = document.getElementById("mainBtn");
const switchText = document.getElementById("switchText");

const userInput = document.getElementById("username");
const passInput = document.getElementById("password");

// переключение формы
function toggleForm(e) {
    e.preventDefault();
    isLogin = !isLogin;

    if (isLogin) {
        title.innerText = "Login";
        btn.innerText = "Login";
        switchText.innerHTML = 'Нет аккаунта? <a href="#" id="switchLink">Регистрация</a>';
    } else {
        title.innerText = "Register";
        btn.innerText = "Создать аккаунт";
        switchText.innerHTML = 'Уже есть аккаунт? <a href="#" id="switchLink">Войти</a>';
    }

    document.getElementById("switchLink").onclick = toggleForm;
}

document.getElementById("switchLink").onclick = toggleForm;

// показать профиль
function showProfile(username) {
    document.getElementById("authForm").style.display = "none";
    document.getElementById("profile").style.display = "block";

    document.getElementById("welcome").innerText = username;

    const avatar = localStorage.getItem("avatar");
    if (avatar) {
        document.getElementById("avatar").src = avatar;
    }
}

// кнопка вход/регистрация
btn.onclick = () => {
    const user = userInput.value;
    const pass = passInput.value;

    if (isLogin) {
        const savedUser = localStorage.getItem("user");
        const savedPass = localStorage.getItem("pass");

        if (user === savedUser && pass === savedPass) {
            localStorage.setItem("loggedIn", "true");
            showProfile(user);
        } else {
            alert("Неверно");
        }

    } else {
        localStorage.setItem("user", user);
        localStorage.setItem("pass", pass);
        localStorage.setItem("loggedIn", "true");

        showProfile(user);
    }
};

// выход
document.getElementById("logoutBtn").onclick = () => {
    localStorage.setItem("loggedIn", "false");

    document.getElementById("profile").style.display = "none";
    document.getElementById("authForm").style.display = "block";
};

// аватар
document.getElementById("fileInput").onchange = function (e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = function () {
        document.getElementById("avatar").src = reader.result;
        localStorage.setItem("avatar", reader.result);
    };

    reader.readAsDataURL(file);
};

// авто вход
window.onload = () => {
    const user = localStorage.getItem("user");
    const loggedIn = localStorage.getItem("loggedIn");

    if (user && loggedIn === "true") {
        showProfile(user);
    }
};