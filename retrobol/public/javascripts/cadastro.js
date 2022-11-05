//HAMBURGER MENU

const hideMenu = document.querySelector(".hide-menu")
const hamburgerMenu = document.querySelector("#hamburger-menu")


// CONTAINER DADOS DOM

const containerDados = document.querySelector(".container-dados-pessoais")
const ocultarDados = document.querySelector(".ocultar-dados-pessoais")

const dadosEmail = document.querySelector("#dados-email")
const erroEmail = document.querySelector("#erro-email")
const dadosCpf = document.querySelector("#dados-cpf")
const erroCpf = document.querySelector("#erro-cpf")

const dadosNome = document.querySelector("#dados-nome")
const erroNome = document.querySelector("#erro-nome")
const dadosSobrenome = document.querySelector("#dados-sobrenome")
const erroSobrenome = document.querySelector("#erro-sobrenome")
const dadosCelular = document.querySelector("#dados-celular")
const erroCelular = document.querySelector("#erro-celular")
const dadosNascimento = document.querySelector("#dados-nascimento")
const dadosSenha = document.querySelector("#dados-senha")
const senhaEspecial = document.querySelector("#erro-especial")
const senhaMaiuscula = document.querySelector("#erro-maiuscula")
const senhaTamanho = document.querySelector("#erro-tamanho")
const dadosConfirmacao = document.querySelector("#dados-confirmacao")
const erroConfirmacao = document.querySelector("#erro-confirmacao")
const btnDados = document.querySelector("#btn-dados-pessoais")

// VARIAVEIS DE CONFIRMAÇÃO

let confirmaEmail = false
let confirmaCpf = false
let confirmaNome = false
let confirmaSobrenome = false
let confirmaCelular = false
let confirmaSenha = false
let confirmaConfirmacao = false
let confirmaCartao = false
let confirmaCartaoCpf = false






dadosEmail.addEventListener("input", ()=>{
    
    erroEmail.innerText = "Email inválido"
            erroEmail.style.display = "block"
            confirmaEmail = false
    
    for(i=0; i < dadosEmail.value.length; i++){
        if(dadosEmail.value[i] === "@"){
            erroEmail.style.display = "none"
            confirmaEmail = true

        }
    }
})

dadosEmail.addEventListener("blur", ()=>{
    erroEmail.style.display = "none"

})

// INPUT CPF 

dadosCpf.addEventListener("input", ()=>{
    if(dadosCpf.value.length === 11){
        erroCpf.style.display = "none"
        confirmaCpf = true

        
        
        
    }else{
        erroCpf.innerText = `CPF inválido`
        erroCpf.style.display = "block"
        confirmaCpf = false

    }
})

dadosCpf.addEventListener("blur", ()=>{
    erroCpf.style.display = "none"

})

// INPUT DADOS NOME

dadosNome.addEventListener("focus", ()=>{
    if(dadosNome.value.length < 3){
        erroNome.innerText = `Digite no mínimo 3 caracteres`
        erroNome.style.display = "block"
        
        
    }else{
        erroNome.style.display = "none"
        confirmaNome = true

    }
})

dadosNome.addEventListener("input", ()=>{
    if(dadosNome.value.length < 3){
        erroNome.innerText = `Digite no mínimo 3 caracteres`
        erroNome.style.display = "block"
        
        
    }else{
        erroNome.style.display = "none"
        confirmaNome = true

    }
})

dadosNome.addEventListener("blur", ()=>{
    erroNome.style.display = "none"

})

// INPUT DADOS SOBRENOME

dadosSobrenome.addEventListener("focus", ()=>{
    if(dadosSobrenome.value.length < 3){
        erroSobrenome.innerText = `Digite no mínimo 3 caracteres`
        erroSobrenome.style.display = "block"
        
        
    }else{
        confirmaSobrenome = true
        erroSobrenome.style.display = "none"

    }
})

dadosSobrenome.addEventListener("input", ()=>{
    if(dadosSobrenome.value.length < 3){
        erroSobrenome.innerText = `Digite no mínimo 3 caracteres`
        erroSobrenome.style.display = "block"
        
        
    }else{
        confirmaSobrenome = true
        erroSobrenome.style.display = "none"

    }
})

dadosSobrenome.addEventListener("blur", ()=>{
    erroSobrenome.style.display = "none"

})

// INPUT DADOS CELULAR

dadosCelular.addEventListener("focus", ()=>{
    if(dadosCelular.value.length < 11 || dadosCelular.value.length > 11 ){
        erroCelular.innerText = "Digite um telefone válido"
        erroCelular.style.display = "block"

    }else{
        confirmaCelular = true
        erroCelular.style.display = "none"
        
    }
})

dadosCelular.addEventListener("input", ()=>{
    if(dadosCelular.value.length < 11 || dadosCelular.value.length > 11 ){
        erroCelular.innerText = "Digite um telefone válido"
        erroCelular.style.display = "block"
    }else{
        confirmaCelular = true
        erroCelular.style.display = "none"
        
    }
})

dadosCelular.addEventListener("blur", ()=>{
    erroCelular.style.display = "none"
 
})

// INPUT DADOS SENHA


dadosSenha.addEventListener("focus", ()=>{
    let password = dadosSenha.value
    let valid = 0

    let upper = false
   
    let countMai = 0
    let countEsp = 0
    let caracteresEspeciais = ["!", "#","$","%","&", "*"]

    for(i=0 ; i < caracteresEspeciais.length ; i++){
        for(x=0 ; x < password.length ; x++){
            if(password[x] === caracteresEspeciais[i]){
                countEsp++;
            }
        }
    }

    for(i=0 ; i < password.length ; i++){
        if(password[i] === password[i].toUpperCase() && 
            password[i] !== password[i].toLowerCase()){
                countMai ++
            if(countMai > 1){
                upper = true
            }
        }
    }
    
    if(countEsp > 1 ){
        
        valid++
        senhaEspecial.style.display = "none"

    }else{
        senhaEspecial.innerText = `Mínimo de 2 caracteres especiais (!,#,$,%,&,*) `
        senhaEspecial.style.display = "block"

    }

    
    if(!upper){
        senhaMaiuscula.innerText = `Mínimo de 2 letras maíusculas`
        senhaMaiuscula.style.display = "block"
        
    }else{
        valid++
        senhaMaiuscula.style.display = "none"
    }
    
    if(password.length < 12){
        senhaTamanho.innerText = `Mínimo de 12 caracteres `
        senhaTamanho.style.display = "block"
        
    }else{
        valid++
        senhaTamanho.style.display = "none"

    }
    if(valid === 3){
        confirmaSenha = true
    }

})

dadosSenha.addEventListener("input", ()=>{
    let password = dadosSenha.value
    let valid = 0

    let upper = false
   
    let countMai = 0
    let countEsp = 0
    let caracteresEspeciais = ["!", "#","$","%","&", "*"]

    for(i=0 ; i < caracteresEspeciais.length ; i++){
        for(x=0 ; x < password.length ; x++){
            if(password[x] === caracteresEspeciais[i]){
                countEsp++;
            }
        }
    }

    for(i=0 ; i < password.length ; i++){
        if(password[i] === password[i].toUpperCase() && 
            password[i] !== password[i].toLowerCase()){
                countMai ++
            if(countMai > 1){
                upper = true
            }
        }
    }
    
    if(countEsp > 1 ){
        
        valid++
        senhaEspecial.style.display = "none"

    }else{
        senhaEspecial.innerText = `Mínimo de 2 caracteres especiais (!,#,$,%,&,*) `
        senhaEspecial.style.display = "block"

    }

    
    if(!upper){
        senhaMaiuscula.innerText = `Mínimo de 2 letras maíusculas`
        senhaMaiuscula.style.display = "block"
        
    }else{
        valid++
        senhaMaiuscula.style.display = "none"
    }
    
    if(password.length < 12){
        senhaTamanho.innerText = `Mínimo de 12 caracteres `
        senhaTamanho.style.display = "block"
        
    }else{
        valid++
        senhaTamanho.style.display = "none"

    }
    if(valid === 3){
        confirmaSenha = true
    }
})

dadosSenha.addEventListener("blur", ()=>{
    senhaEspecial.style.display = "none"
    senhaMaiuscula.style.display = "none"
    senhaTamanho.style.display = "none"

})

// INPUT DADOS CONFIRMAÇÃO


dadosConfirmacao.addEventListener("focus", ()=>{
    if(dadosSenha.value !== dadosConfirmacao.value){
        erroConfirmacao.innerText = "Confirmação diferente da senha"
        erroConfirmacao.style.display = "block"
    }else{
        confirmaConfirmacao = true
        erroConfirmacao.style.display = "none"

    }
} )

dadosConfirmacao.addEventListener("input", ()=>{
    if(dadosSenha.value !== dadosConfirmacao.value){
        erroConfirmacao.innerText = "Confirmação diferente da senha"
        erroConfirmacao.style.display = "block"
    }else{
        confirmaConfirmacao = true
        erroConfirmacao.style.display = "none"

    }
} )

dadosConfirmacao.addEventListener("blur", ()=>{
        erroConfirmacao.style.display = "none"
} )

// BOTAO AVANÇAR DADOS

btnDados.addEventListener("click", (e)=>{

    if(!confirmaNome){
        erroNome.style.display = "block"
        erroNome.innerText = "Campo obrigatório"
        e.preventDefault()
    }

    
    if(!confirmaSobrenome){
        erroSobrenome.style.display = "block"
        erroSobrenome.innerText = "Campo obrigatório"
        e.preventDefault()
    
    }

    
    if(!confirmaCelular){
        erroCelular.style.display = "block"
        erroCelular.innerText = "Campo obrigatório"
        e.preventDefault()

    }

    
    if(!confirmaSenha){
        senhaTamanho.style.display = "block"
        senhaTamanho.innerText = "Campo obrigatório"
        e.preventDefault()

    }

    
    if(!confirmaConfirmacao){
        erroConfirmacao.innerText = "Confirmação diferente da senha"
        erroConfirmacao.style.display = "block"
        e.preventDefault()

    }

    if(!confirmaEmail){
        erroEmail.innerText = "Campo obrigatório"
        erroEmail.style.display = "block"
        e.preventDefault()

    }

    if(!confirmaCpf){
        erroCpf.innerText = "Campo obrigatório"
        erroCpf.style.display = "block"
        e.preventDefault()

    }

    
})

//HAMBURGER MENU

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