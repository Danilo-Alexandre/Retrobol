const hideMenu = document.querySelector(".hide-menu")
const hamburgerMenu = document.querySelector("#hamburger-menu")

const hideLogin = document.querySelector(".hide-login")
const loginMenu = document.querySelector("#login-menu")

function sendEmail(event) {
  
   event.preventDefault()
   alert("Email enviado com sucesso")
  
}

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

// hamburgerMenu.addEventListener("click", ()=>{
//     if(window.innerWidth < 768){
//         hideMenu.classList.toggle("hide")
//     }
//     if(!hideMenu.classList.contains("hide")){
//         hideMenu.style.animation = "showLogin 1s forwards"
//         if(!hideLogin.classList.contains("hide")){

//         hideLogin.style.animation = "hideLogin 1s forwards"
//         hideLogin.classList.toggle("hide")


//         }
        
//     }else{
//         hideMenu.style.animation = "hideLogin 1s forwards"

//     }
 
// })


// loginMenu.addEventListener("click", ()=>{
//     if(window.innerWidth < 768){
//         hideLogin.classList.toggle("hide")
//     }
//     if(!hideLogin.classList.contains("hide")){
//         hideLogin.style.animation = "showLogin 1s forwards"
//         if(!hideMenu.classList.contains("hide")){
//             hideMenu.style.animation = "hideLogin 1s forwards"
//             hideMenu.classList.toggle("hide")
    
    
//             }
        
//     }else{
//         hideLogin.style.animation = "hideLogin 1s forwards"

//     }
 
// })



