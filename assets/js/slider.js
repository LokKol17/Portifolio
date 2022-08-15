const menuLtr = document.getElementById("menuLtr")
const body = document.getElementById("body")


function PuxaMenu() {
    let pmenu = anime({
        targets: menuLtr,
        translateX: 30,
        translateY: -70,
        duration: 100,
        easing: 'linear'
    })
    menuLtr.style.display = "block"
    body.style.overflow = "hidden"


}
function EmpurraMenu() {
    let emenu = anime({
        targets: menuLtr,
        duration: 100,
    })
        menuLtr.style.display = "none"
        body.style.overflowY = "visible"


}