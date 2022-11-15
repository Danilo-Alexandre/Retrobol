// Menu dos beneficios colapsaveis

var col = document.getElementsByClassName('beneficio')
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
const planoTrimestral = document.querySelector(".plano-trimestral")
const planoAnual = document.querySelector(".plano-anual")
const planoSemestral = document.querySelector(".plano-semestral")


planoAnual.addEventListener("click", ()=>{
    planoAnual.firstElementChild.style.color = "white";
    planoAnual.lastElementChild.style.color = "white"
    planoAnual.style.marginBottom = "20px";
    planoAnual.style.background = "#858640";

    planoSemestral.firstElementChild.style.color = "#858640"
    planoSemestral.lastElementChild.style.color = "black"
    planoSemestral.style.marginBottom = "0px"
    planoSemestral.style.background = "#d9d9d9"

    planoTrimestral.firstElementChild.style.color = "#858640"
    planoTrimestral.lastElementChild.style.color = "black"
    planoTrimestral.style.marginBottom = "0px"
    planoTrimestral.style.background = "#d9d9d9"
})

planoSemestral.addEventListener("click", ()=>{
    planoSemestral.firstElementChild.style.color = "white"
    planoSemestral.lastElementChild.style.color = "white"
    planoSemestral.style.marginBottom = "20px"
    planoSemestral.style.background = "#858640"
    
    planoAnual.firstElementChild.style.color = "#858640";
    planoAnual.lastElementChild.style.color = "black";
    planoAnual.style.marginBottom = "0px";
    planoAnual.style.background = "#d9d9d9";

    planoTrimestral.firstElementChild.style.color = "#858640"
    planoTrimestral.lastElementChild.style.color = "black"
    planoTrimestral.style.marginBottom = "0px"
    planoTrimestral.style.background = "#d9d9d9"
})


planoTrimestral.addEventListener("click", ()=>{
    planoTrimestral.firstElementChild.style.color = "white"
    planoTrimestral.lastElementChild.style.color = "white"
    planoTrimestral.style.marginBottom = "20px"
    planoTrimestral.style.background = "#858640"
    
    planoSemestral.firstElementChild.style.color = "#858640"
    planoSemestral.lastElementChild.style.color = "black"
    planoSemestral.style.marginBottom = "0px"
    planoSemestral.style.background = "#d9d9d9"
    
    planoAnual.firstElementChild.style.color = "#858640";
    planoAnual.lastElementChild.style.color = "black";
    planoAnual.style.marginBottom = "0px";
    planoAnual.style.background = "#d9d9d9";
})

  
botaoCoracao.addEventListener("click",()=>{
    listaDescricao1.innerText = "Escolha um time do coração"
    listaDescricao2.innerText = "Receba uma linda camisa retrô todo mês"
    listaDescricao3.innerText = "Uma camisa extra no plano anual"

    botaoCoracao.style.background = "#858640"
    botaoCoracao.style.color = "white"

    botaoMundial.style.background = "#f8f8f8"
    botaoMundial.style.color = "black"

    botaoNacional.style.background = "#f8f8f8"
    botaoNacional.style.color = "black"

    valorAnual.innerText = "159,99"
    valorSemestral.innerText = "189,99"
    valorTrimestral.innerText = "199,99"

    imagemPlanos.src = "images/imgs/assinaturas/inter.jpg"

    


})
botaoNacional.addEventListener("click",()=>{
    listaDescricao1.innerText = "Camisas retrô dos principais times do Brasil"
    listaDescricao2.innerText = "Incluído camisas da seleção!"
    listaDescricao3.innerText = "Uma camisa extra no plano anual"

    botaoCoracao.style.background = "none"
    botaoCoracao.style.color = "black"

    botaoMundial.style.background = "#f8f8f8"
    botaoMundial.style.color = "black"

    botaoNacional.style.background = "#858640"
    botaoNacional.style.color = "white"

    valorAnual.innerText = "169,99"
    valorSemestral.innerText = "199,99"
    valorTrimestral.innerText = "200,99"

    imagemPlanos.src = "images/imgs/assinaturas/brasil1.png"



})
botaoMundial.addEventListener("click",()=>{
    listaDescricao1.innerText = "As camisas retrô mais bonitas de seleções e clubes mundiais"
    listaDescricao2.innerText = "Frete Grátis"
    listaDescricao3.innerText = "Uma camisa extra no plano anual"

    botaoCoracao.style.background = "none"
    botaoCoracao.style.color = "black"

    botaoMundial.style.background = "#858640"
    botaoMundial.style.color = "white"

    botaoNacional.style.background = "#f8f8f8"
    botaoNacional.style.color = "black"

    valorAnual.innerText = "189,99"
    valorSemestral.innerText = "209,99"
    valorTrimestral.innerText = "219,99"

    imagemPlanos.src = "images/imgs/assinaturas/barcelona1.png"

})

// Passando texto para o banner
const advertisementText = document.getElementsByClassName(".textoBanner");

// Banner automatico 
let contador = 1;
const backgroundImages = [
'url("/images/imgs/banners/1.png")',
'url("/images/imgs/banners/2.png")',
'url("/images/imgs/banners/3.png")',
'url("/images/imgs/banners/4.png")',
'url("/images/imgs/banners/5.png")',
        ];
setInterval(() => {
    const banner = document.querySelector(".banners");
    banner.style.background = backgroundImages[contador];
    banner.style.backgroundPosition = "center";
    banner.style.backgroundRepeat = "no-repeat";
    banner.style.backgroundSize = "contain"
    if (contador == 4) {
        contador = 0;
    }
    else contador ++;
}, 5000);


// Script para o carroussel de times
let slideIndex = 1;
showSlides(slideIndex);
// Controles próximo/anterior
function plusSlides(n) {
    showSlides(slideIndex += n);
  }
// Controle de imagem
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("carroussel");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "flex";
  }


// side bar //

const menuHam = document.getElementById('menu-hamburguer')
const sideBar = document.getElementById('side-bar')

menuHam.addEventListener('click', () => {
    if (sideBar.classList.contains('open')) {
        sideBar.classList.remove('open')
    } else {
        sideBar.classList.add('open')
    }
})
