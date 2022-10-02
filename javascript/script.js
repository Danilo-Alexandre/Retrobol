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

// Script para o banner
let bannerIndex = 1;
showBanner(bannerIndex);
// Controles próximo/anterior
function plusBanner(n) {
  showBanner(bannerIndex += n);
  }
// Controle de imagem
function currentBanner(n) {
  showBanner(bannerIndex = n);
  }
  function showBanner(n) {
    let i;
    let banner = document.getElementsByClassName("bannerWide");
    if (n > banner.length) {bannerIndex = 1}
    if (n < 1) {bannerIndex = banner.length}
    for (i = 0; i < banner.length; i++) {
      banner[i].style.display = "none";
    }
    banner[bannerIndex-1].style.display = "block";
  }


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

    slides[slideIndex-1].style.display = "block";
  }