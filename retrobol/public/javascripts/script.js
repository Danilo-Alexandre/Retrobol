const arrowLeft = document.querySelector(".arrow-mobile-left")
const arrowRight = document.querySelector(".arrow-mobile-right")
const bannerMobile = document.querySelectorAll(".banner-mobile")
const mobileMenu = document.querySelector("#side-bar")
const hamburgerMenu = document.querySelector("#menu-hamburguer")
const submit = document.querySelector(".submit")

hamburgerMenu.addEventListener("click", ()=>{
  if(mobileMenu.style.display === "flex"){
    setTimeout(() => {
      mobileMenu.style.display = "none"
      
    }, 1000);
    mobileMenu.style.animation = "1s ease normal forwards running hideLogin"

  }else{
    mobileMenu.style.display = "flex"
    mobileMenu.style.animation = "1s ease normal forwards running showLogin"

  }
})

 function sendEmail() {
  
  //  event.preventDefault()
   alert("Email enviado com sucesso")
  
}
  



let idx = 0

function carrousselHandler(){
  switch (idx) {
    case 0:
      bannerMobile[0].style.display = "flex"
      bannerMobile[1].style.display = "none"
      bannerMobile[2].style.display = "none"
      bannerMobile[3].style.display = "none"
      bannerMobile[4].style.display = "none"

      break;
  
    case 1:
      bannerMobile[0].style.display = "none"
      bannerMobile[1].style.display = "flex"
      bannerMobile[2].style.display = "none"
      bannerMobile[3].style.display = "none"
      bannerMobile[4].style.display = "none"

      break;
  
    case 2:
      bannerMobile[0].style.display = "none"
      bannerMobile[1].style.display = "none"
      bannerMobile[2].style.display = "flex"
      bannerMobile[3].style.display = "none"
      bannerMobile[4].style.display = "none"

      break;
  
    case 3:
      bannerMobile[0].style.display = "none"
      bannerMobile[1].style.display = "none"
      bannerMobile[2].style.display = "none"
      bannerMobile[3].style.display = "flex"
      bannerMobile[4].style.display = "none"

      break;  
  
    case 4:
      bannerMobile[0].style.display = "none"
      bannerMobile[1].style.display = "none"
      bannerMobile[2].style.display = "none"
      bannerMobile[3].style.display = "none"
      bannerMobile[4].style.display = "flex"

      break;   
   
    default:
      break;
  }
}

setInterval(() => {
  if (idx < bannerMobile.length -1){
    idx++
  }else{
    idx = 0
  }
  carrousselHandler()
}, 4000);


arrowRight.addEventListener("click", ()=>{
  if (idx < bannerMobile.length -1){
    idx++
  }else{
    idx = 0
  }

  carrousselHandler()
  console.log(idx);
})
arrowLeft.addEventListener("click", ()=>{
  if (idx <= 0){
    idx = 4
  }else{
    idx--
  }
  carrousselHandler()
  
  console.log(idx);
})



// Menu dos beneficios colapsaveis

var col = document.getElementsByClassName('beneficio')
for (let i = 0; i < col.length; i++){
    col[i].addEventListener('click', colapsar) 
    
    function colapsar(){
        if (col[i].nextElementSibling.style.display == 'none'){
            col[i].nextElementSibling.style.display = 'flex'
        } else {
            col[i].nextElementSibling.style.display = 'none'
        }
    }
}


const arrowLeftWide = document.querySelector(".arrow-wide-left")
const arrowRightWide = document.querySelector(".arrow-wide-right")
const bannerWide = document.querySelectorAll(".bannerWide")

let idwide = 1

function wideCarroussel() {
  switch (idwide) {
    case 1:
      bannerWide[0].style.display = "flex"
      bannerWide[1].style.display = "none"
      bannerWide[2].style.display = "none"
      break;
    case 2:
      bannerWide[0].style.display = "none"
      bannerWide[1].style.display = "flex"
      bannerWide[2].style.display = "none"
    break;
    case 3:
      bannerWide[0].style.display = "none"
      bannerWide[1].style.display = "none"
      bannerWide[2].style.display = "flex"
    break;
  
    default:
      break;
  }
}

arrowRightWide.addEventListener("click", ()=>{
  if (idwide < bannerWide.length ){
    idwide++
  }else{
    idwide = 1
  }
  wideCarroussel()
  console.log(idwide);


})

arrowLeftWide.addEventListener("click", ()=>{
  if (idwide <= 1){
    idwide = bannerWide.length
  }else{
    idwide--
  }

  console.log(idwide);
  wideCarroussel()

})

setInterval(() => {
  if (idwide < bannerWide.length -1){
    idwide++
  }else{
    idwide = 1
  }
  wideCarroussel()
}, 4000);

const navMobile = document.querySelector(".nav-list-mobile")


















































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





//  Script para o banner
// let bannerIndex = 1;
// showBanner(bannerIndex);
//  Controles próximo/anterior
// function plusBanner(n) {
//   showBanner(bannerIndex += n);
//   }
//  Controle de imagem
// function currentBanner(n) {
//   showBanner(bannerIndex = n);
//   }
//   function showBanner(n) {
//     let i;
//     let banner = document.getElementsByClassName("bannerWide");
//     if (n > banner.length) {bannerIndex = 1}
//     if (n < 1) {bannerIndex = banner.length}
//     for (i = 0; i < banner.length; i++) {
//       banner[i].style.display = "none";
//     }
//     banner[bannerIndex-1].style.display = "flex";
//   }


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

// const menuHam = document.getElementById('menu-hamburguer')
// const sideBar = document.getElementById('side-bar')

// menuHam.addEventListener('click', () => {
//     if (sideBar.classList.contains('open')) {
//         sideBar.classList.remove('open')
//     } else {
//         sideBar.classList.add('open')
//     }
// })
