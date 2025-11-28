btn = document.getElementById('Switcher');

ColorMode = false;

function ChangeButt() {
    if (ColorMode) {
        btn.innerHTML = "Dark Mode"
    } else {
        btn.innerHTML = "Light mode"
    }
}
    ChangeButt();
function DarkOrLight() {
    document.getElementsByTagName('body')[0].classList.toggle("dark");
    ColorMode = !ColorMode
    ChangeButt();
}
btn.addEventListener('click', DarkOrLight)