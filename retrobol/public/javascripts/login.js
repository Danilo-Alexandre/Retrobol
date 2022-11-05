
const hideMenu = document.querySelector(".hide-menu")
const hamburgerMenu = document.querySelector("#hamburger-menu")


hamburgerMenu.addEventListener("click", ()=>{
    if(window.innerWidth < 768){
        hideMenu.classList.toggle("hide")
    }
    if(!hideMenu.classList.contains("hide")){
        hideMenu.style.animation = "showLogin 1s forwards"
        

        
        
    }else{
        hideMenu.style.animation = "hideLogin 1s forwards"

    }
 
})