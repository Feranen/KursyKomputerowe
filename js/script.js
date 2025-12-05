btn = document.getElementById('Switcher');
let DarkMode = JSON.parse(localStorage.getItem("DarkMode"))
btn.addEventListener('click', DarkOrLight)


if (window.localStorage.getItem("DarkMode") == undefined) {
    window.localStorage.setItem("DarkMode", false)
}

if (DarkMode == true) {
    document.getElementsByTagName('body')[0].classList.add("dark");
    ChangeButt();
} else {
    document.getElementsByTagName('body')[0].classList.remove("dark");
    ChangeButt();
}

ChangeButt();