function DarkOrLight() {
    let DarkMode = JSON.parse(localStorage.getItem("DarkMode"))
    document.getElementsByTagName('body')[0].classList.toggle("dark");
    window.localStorage.setItem("DarkMode", !DarkMode)
    ChangeButt();
}
function ChangeButt() {
    let DarkMode = window.localStorage.getItem("DarkMode")
    if (DarkMode == "true") {
        btn.innerHTML = "Dark Mode"
    } else {
        btn.innerHTML = "Light mode"
    }
}