var col = document.getElementsByClassName('vantagem')

for (let i = 0; i < col.length; i++){
    col[i].addEventListener('click', colapsar) 
    
    function colapsar(){
        if (col[i].nextElementSibling.style.display == 'none'){
            col[i].nextElementSibling.style.display = 'block'
        } else {
            col[i].nextElementSibling.style.display = 'none'
        }
    }
}

// POR QUE O ANUAL NÃO MUDA DE COR QUANDO PASSA O MOUSE SÓ NO CSS

const cobranca = document.querySelectorAll(".cobranca")
const listaPlanos = document.querySelector("#lista-planos")
const botaoCoracao = document.querySelector("#botao-coracao")
const botaoNacional = document.querySelector("#botao-nacional")
const botaoMundial = document.querySelector("#botao-mundial")
const listaDescricao1 = document.querySelector("#lista-descricao1")
const listaDescricao2 = document.querySelector("#lista-descricao2")
const listaDescricao3 = document.querySelector("#lista-descricao3")
const valorAnual = document.querySelector("#valor-anual")
const valorSemestral = document.querySelector("#valor-semestral")
const valorTrimestral = document.querySelector("#valor-trimestral")
const imagemPlanos = document.querySelector("#imagem-planos")



cobranca.forEach((plano)=>{
    plano.addEventListener("mouseover", ()=>{
        plano.firstElementChild.style.color = "white";
        plano.firstElementChild.style.transition = "0.5s";
    })
})

cobranca.forEach((plano)=>{
    plano.addEventListener("mouseout", ()=>{
        plano.firstElementChild.style.color = "#858640";
        plano.firstElementChild.style.transition = "0.5s";

    })
})

// botaoCoracao.addEventListener("mouseover", ()=>{
//     botaoCoracao.style.background = "#858640"
//     botaoCoracao.style.color = "white"

// })

// botaoMundial.addEventListener("mouseover", ()=>{
//     botaoMundial.style.background = "#858640"
//     botaoMundial.style.color = "white"

// })

// botaoNacional.addEventListener("mouseover", ()=>{
//     botaoNacional.style.background = "#858640"
//     botaoNacional.style.color = "white"

// })

// botaoCoracao.addEventListener("mouseout", ()=>{
//     botaoCoracao.style.background = "#f8f8f8"
//     botaoCoracao.style.color = "black"

// })

// botaoMundial.addEventListener("mouseout", ()=>{
//     botaoMundial.style.background = "#f8f8f8"
//     botaoMundial.style.color = "black"

// })

// botaoNacional.addEventListener("mouseout", ()=>{
//     botaoNacional.style.background = "#f8f8f8"
//     botaoNacional.style.color = "black"

// })




botaoCoracao.addEventListener("click",()=>{
    listaDescricao1.innerText = "mudou1"
    listaDescricao2.innerText = "mudou2"
    listaDescricao3.innerText = "mudou3"
    botaoCoracao.style.background = "#858640"
    botaoCoracao.style.color = "white"
    botaoMundial.style.background = "#f8f8f8"
    botaoMundial.style.color = "black"
    botaoNacional.style.background = "#f8f8f8"
    botaoNacional.style.color = "black"
    valorAnual.innerText = "189,99"
    valorSemestral.innerText = "159,99"
    valorTrimestral.innerText = "139,99"
    imagemPlanos.src = "./imgs/assinaturas/03e1ebc41-a2b300ad1c71f5eb6d16160152993443-1024-1024.jpg"

    


})
botaoNacional.addEventListener("click",()=>{
    listaDescricao1.innerText = "nacional1"
    listaDescricao2.innerText = "nacional2"
    listaDescricao3.innerText = "nacional3"
    botaoCoracao.style.background = "#f8f8f8"
    botaoCoracao.style.color = "black"
    botaoMundial.style.background = "#f8f8f8"
    botaoMundial.style.color = "black"
    botaoNacional.style.background = "#858640"
    botaoNacional.style.color = "white"
    valorAnual.innerText = "199,99"
    valorSemestral.innerText = "149,99"
    valorTrimestral.innerText = "129,99"
    imagemPlanos.src = "./imgs/assinaturas/camisa_retro_internacional_1994_559_1_efb7d5bd98d08515fd32e0ebdf0a41b6.webp"



})
botaoMundial.addEventListener("click",()=>{
    listaDescricao1.innerText = "mundial1"
    listaDescricao2.innerText = "mundial2"
    listaDescricao3.innerText = "mundial3"
    botaoCoracao.style.background = "#f8f8f8"
    botaoCoracao.style.color = "black"
    botaoMundial.style.background = "#858640"
    botaoMundial.style.color = "white"
    botaoNacional.style.background = "#f8f8f8"
    botaoNacional.style.color = "black"
    valorAnual.innerText = "209,99"
    valorSemestral.innerText = "189,99"
    valorTrimestral.innerText = "159,99"
    imagemPlanos.src = "./imgs/assinaturas/00508915.jpg"

})

console.log(imagemPlanos)