let tecnologiaHtml = document.querySelector("#tecnologia-html")
tecnologiaHtml.addEventListener("mouseenter", mostraHtml)

let tecnologiaCss = document.querySelector("#tecnologia-css")
tecnologiaCss.addEventListener("mouseenter", mostraCss)

let tecnologiaJs = document.querySelector("#tecnologia-js")
tecnologiaJs.addEventListener("mouseenter", mostraJs)

let tecnologiaUnity = document.querySelector("#tecnologia-unity")
tecnologiaUnity.addEventListener("mouseenter", mostraUnity)

let tecnologiaCpp = document.querySelector("#tecnologia-cpp")
tecnologiaCpp.addEventListener("mouseenter", mostraCpp)

let tecnologiaLua = document.querySelector("#tecnologia-lua")
tecnologiaLua.addEventListener("mouseenter", mostraLua)

let tecnologiaPhp = document.querySelector("#tecnologia-php")
tecnologiaPhp.addEventListener("mouseenter", mostraPhp)





function mostraHtml() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "HTML"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/html-logo-escuro.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "HTML é uma 'linguagem de marcação'... se é que dá pra chamar isso de linguagem. Um monte de tags que nunca fecham direito e que você sempre tem que ficar checando no devtools pra ver onde estragou tudo. Bem... eu usei pra montar esse site podre, então já diz muito sobre meu gosto."


    console.log('%c HTML','font-size: 4em; color: red;')
}
function mostraCss() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "CSS"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/css-logo-escuro.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "CSS ou 'Como Sofrer Sem-motivo'. Uma tecnologia feita pra te enlouquecer com coisas que deveriam ser simples como centralizar uma div. Nem mesmo físicos quânticos entendem como funciona o z-index, e metade das propriedades só funciona se você sacrificar uma galinha na lua cheia. Mas ei, pelo menos tem Flexbox... que também ninguém sabe usar direito."


    console.log('%c CSS','font-size: 4em; color: blue;')
}
function mostraJs() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "Javascript"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/js-logo.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "JavaScript é uma linguagem que foi criada em 10 dias e agora todo mundo está preso usando ela por toda eternidade. Igualdade? Temos três tipos diferentes! Tipagem? Quem precisa disso? Prototype? Ninguém entende como funciona! Frameworks? Um novo por semana! Esta monstruosidade foi usada pra fazer essas boxes mudarem, legal né? (eu sei que não, é só um querySeletor básico)"


    console.log('%c JS','font-size: 4em; color: yellow;')
}

function mostraUnity() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "Unity"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/unity-logo.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "Unity é aquele motor de jogos que você usa quando quer que seu jogo fique com cara de Unity. 50GB de instalação pra fazer um cubo se mexer, e deus te ajude se você quiser atualizar para uma versão mais recente. Mas ei, pelo menos é 'gratuito'."

    console.log('%c Unity','font-size: 4em; color: black;')
}

function mostraCpp() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "C++"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/cpp-logo.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "C++ é aquela linguagem que você usa quando odeia a si mesmo. Nada como passar 8 horas procurando um vazamento de memória ou tentar entender por que seu ponteiro está apontando pro vazio. E tem gente que ainda fica orgulhoso por usar essa tortura em forma de linguagem."

    console.log('%c C++','font-size: 4em; color: #00599C;')
}

function mostraLua() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "Lua"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/lua-logo.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "Lua é aquela linguagem que começa os índices em 1 porque claramente não tem respeito pela tradição. Inventada no Brasil, então já sabe, né? Arrays são tables, tables são arrays, tudo é table. E o que diabos é 'local' mesmo? Ah sim, a palavra mágica que você esquece de colocar e acaba com 500 variáveis globais."

    console.log('%c Lua','font-size: 4em; color: #2C2D72;')
}

function mostraPhp() {
    let dinName = document.querySelector("#dinName")
    dinName.innerHTML = "PHP"

    let dinImg = document.querySelector("#dinImg")
    dinImg.setAttribute("src", "./assets/imgs/php-logo.png")
    
    let dinDesc = document.querySelector("#dinDesc")
    dinDesc.innerHTML = "PHP é a prova de que nem tudo que é popular é bom. Uma linguagem tão inconsistente que até os nomes das funções não conseguem seguir um padrão. Mas ei, ela alimenta 80% da web, então tá todo mundo preso nesse inferno sintático. O $ antes de cada variável é só pra você lembrar o quanto custa manter um servidor rodando essa aberração."

    console.log('%c PHP','font-size: 4em; color: #777BB4;')
}