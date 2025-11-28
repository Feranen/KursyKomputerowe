btn = document.getElementById('Switcher');


if (window.localStorage.getItem("ColorMode") == undefined) {
    window.localStorage.setItem("ColorMode", false)
}

let ColorMode = window.localStorage.getItem("ColorMode")

function ChangeButt() {
    let ColorMode = window.localStorage.getItem("ColorMode")
    if (ColorMode == "true") {
        btn.innerHTML = "Dark Mode"
    } else {
        btn.innerHTML = "Light mode"
    }
}
ChangeButt();
function DarkOrLight() {
    let ColorMode = window.localStorage.getItem("ColorMode")
    document.getElementsByTagName('body')[0].classList.toggle("dark");
    var isTrueSet = (ColorMode === 'true');
    window.localStorage.setItem("ColorMode", !isTrueSet)
    ChangeButt();
}

if (ColorMode == "true") {
    document.getElementsByTagName('body')[0].classList.add("dark");
    ChangeButt();
} else {
    document.getElementsByTagName('body')[0].classList.remove("dark");
    ChangeButt();
}
btn.addEventListener('click', DarkOrLight)