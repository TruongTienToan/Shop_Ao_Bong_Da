const listAccount = [
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "admin1",
        password: "admin"
    },
    {
        username: "admin",
        password: "admin"
    }
]
let isLogin = !!localStorage.getItem("token")

function CheckLogin() {
    if (isLogin) {
        window.location.href = "index.html"
    }
}

function Login() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value
    let checkLogin = listAccount.some(value => value.username === username && value.password === password)
    if (checkLogin) {
        localStorage.setItem("token", username)
        isLogin = true
        CheckLogin()
    } else {
        alert("Bạn đã nhập sai tài khoản hoặc mật khẩu")
    }
}