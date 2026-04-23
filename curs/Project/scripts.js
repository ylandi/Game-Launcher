function showRegister(){
document.getElementById("register").style.display = "block"
document.getElementById("login").style.display = "none"
}

function showLogin(){
document.getElementById("register").style.display = "none"
document.getElementById("login").style.display = "block"
}

function register(){

let user = document.getElementById("regUser").value
let pass = document.getElementById("regPass").value

if(pass.length < 6){
alert("Пароль минимум 6 символов")
return
}

localStorage.setItem("user", user)
localStorage.setItem("pass", pass)

document.getElementById("message").innerText = "Регистрация успешна"
}

function login(){

let user = document.getElementById("loginUser").value
let pass = document.getElementById("loginPass").value

let savedUser = localStorage.getItem("user")
let savedPass = localStorage.getItem("pass")

if(user === savedUser && pass === savedPass){
document.getElementById("message").innerText = "Вход выполнен"
}else{
document.getElementById("message").innerText = "Неверный логин или пароль"
}

}