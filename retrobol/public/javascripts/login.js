
const hideMenu = document.querySelector(".hide-menu")
const hamburgerMenu = document.querySelector("#hamburger-menu")


hamburgerMenu.addEventListener("click", ()=>{
    if(hideMenu.style.display === "flex"){
      setTimeout(() => {
        hideMenu.style.display = "none"
        
      }, 1000);
      hideMenu.style.animation = "1s ease normal forwards running hideLogin"
  
    }else{
      hideMenu.style.display = "flex"
      hideMenu.style.animation = "1s ease normal forwards running showLogin"
  
    }
  })