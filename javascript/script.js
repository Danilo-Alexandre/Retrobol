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