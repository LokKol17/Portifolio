let tecnologiaHtml = document.querySelector("#tecnologia-html")
tecnologiaHtml.addEventListener("mouseenter", mostraHtml)

let tecnologiaCss = document.querySelector("#tecnologia-css")
tecnologiaCss.addEventListener("mouseenter", mostraCss)

let tecnologiaJs = document.querySelector("#tecnologia-js")
tecnologiaJs.addEventListener("mouseenter", mostraJs)







function mostraHtml() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "HTML"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/html-logo-escuro.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores."


    console.log('%c HTML','font-size: 4em; color: red;')
}
function mostraCss() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "CSS"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/css-logo-escuro.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web."




    console.log('%c CSS','font-size: 4em; color: blue;')
}
function mostraJs() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "Javascript"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/js-logo.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma. Juntamente com HTML e CSS, o JavaScript é uma das três principais tecnologias da World Wide Web."



    console.log('%c JS','font-size: 4em; color: yellow;')
}