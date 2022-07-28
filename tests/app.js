let yo = document.querySelector('#yo')
let h1 = document.querySelector('#h1')
let h2 = document.querySelector('#h2')
let h3 = document.querySelector('#h3')

yo.addEventListener('click', Click)

let contador = 0


function Click() {
    console.log("YOOOOO")
    console.log(contador)
    if (contador == 0) {
        h1.style.cssText = 'transform: translate(0 , 25px) rotate(45deg);'
        h2.style.cssText = 'width: 0px;' + 'transition: none'
        h3.style.cssText = 'transform: translate(0 , -25px) rotate(-45deg);'
    

        contador = 1
    } else {
        h1.style.cssText = 'transform: translate(0 , 50px) rotate(0deg);'
        h2.style.cssText = 'width: 100px;' + 'transition: all .5s'
        h3.style.cssText = 'transform: translate(0 , -50px) rotate(0deg);'


        contador = 0
    }










}