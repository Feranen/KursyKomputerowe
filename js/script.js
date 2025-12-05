btn = document.getElementById('Switcher');

if (window.localStorage.getItem("DarkMode") == undefined) {
    window.localStorage.setItem("DarkMode", false)
}

let DarkMode = JSON.parse(localStorage.getItem("DarkMode"))

function ChangeButt() {
    let DarkMode = window.localStorage.getItem("DarkMode")
    if (DarkMode == "true") {
        btn.innerHTML = "Dark Mode"
    } else {
        btn.innerHTML = "Light mode"
    }
}
ChangeButt();
function DarkOrLight() {
    let DarkMode = JSON.parse(localStorage.getItem("DarkMode"))
    document.getElementsByTagName('body')[0].classList.toggle("dark");
    window.localStorage.setItem("DarkMode", !DarkMode)
    ChangeButt();
}

if (DarkMode == true) {
    document.getElementsByTagName('body')[0].classList.add("dark");
    ChangeButt();
} else {
    document.getElementsByTagName('body')[0].classList.remove("dark");
    ChangeButt();
}
btn.addEventListener('click', DarkOrLight)