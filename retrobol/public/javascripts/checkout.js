
const form = document.querySelector("#form")

    // CONTAINER ASSINTATURA DOM

const containerAssinatura = document.querySelector(".container-assinatura")
const editarAssinatura = document.querySelector(".assinatura-editor span")
const labelNacional = document.querySelector("#label-nacional")
const labelMundial = document.querySelector("#label-mundial")
const labelCoracao = document.querySelector("#label-coracao")
const nacional = document.querySelector("#nacional")
const mundial = document.querySelector("#mundial")
const coracao = document.querySelector("#coracao")
const btnAssinatura = document.querySelector("#btn-assinatura")

const optionAnual = document.querySelector("#option-anual")
const optionSemestral = document.querySelector("#option-semestral")
const optionTrimestral = document.querySelector("#option-trimestral")
    
// CONTAINER PLANO DOM

const containerPlano = document.querySelector(".container-plano")
const editarPlano = document.querySelector(".container-plano .assinatura-editor span")
const inputPlanos = document.querySelector(".planos-input select")
const ocultarPlano = document.querySelector(".ocultar-plano")
const btnPlano = document.querySelector("#btn-plano")

// CONTAINER DADOS DOM

const containerDados = document.querySelector(".container-dados-pessoais")
const ocultarDados = document.querySelector(".ocultar-dados-pessoais")
const editarDados = document.querySelector(".container-dados-pessoais .assinatura-editor span")

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

// CONTAINER COBRANCA DOM

const ocultarCobranca = document.querySelector(".ocultar-cobranca")
const containerCobranca = document.querySelector(".container-cobranca")
const editarCobranca = document.querySelector(".container-cobranca .assinatura-editor span")
const inputCep = document.querySelector("#cobranca-cep")
const erroCep = document.querySelector("#erro-cep")
const inputEndereco = document.querySelector("#cobranca-endereco")
const inputNumero = document.querySelector("#cobranca-numero")
const erroNumero = document.querySelector("#erro-numero")
const inputBairro = document.querySelector("#cobranca-bairro")
const inputEstado = document.querySelector("#cobranca-estado")
const inputCidade = document.querySelector("#cobranca-cidade")
const inputComplemento = document.querySelector("#cobranca-complemento")
const checkboxEndereco = document.querySelector("#endereco-entrega")
const btnCobranca = document.querySelector("#btn-cobranca")

// CONTAINER ENTREGA DOM

const ocultarEntrega = document.querySelector(".ocultar-entrega")
const containerEntrega = document.querySelector(".container-entrega")
const editarEntrega = document.querySelector(".container-entrega .assinatura-editor span")
const inputEntregaCep = document.querySelector("#entrega-cep")
const erroEntregaCep = document.querySelector("#erro-entrega-cep")
const inputEntregaEndereco = document.querySelector("#entrega-endereco")
const inputEntregaNumero = document.querySelector("#entrega-numero")
const erroEntregaNumero = document.querySelector("#erro-entrega-numero")
const inputEntregaBairro = document.querySelector("#entrega-bairro")
const inputEntregaEstado = document.querySelector("#entrega-estado")
const inputEntregaCidade = document.querySelector("#entrega-cidade")
const inputEntregaComplemento = document.querySelector("#entrega-complemento")
const btnEntrega = document.querySelector("#btn-entrega")

// CONTAINER FRETE DOM

const containerFrete = document.querySelector(".container-frete")
const ocultarFrete = document.querySelector(".ocultar-frete")
const btnFrete = document.querySelector("#btn-frete")
const editarFrete = document.querySelector(".container-frete .assinatura-editor span")


// CONTAINER PAGAMENTO DOM 


const containerPagamento = document.querySelector(".container-pagamento")
const inputCartao = document.querySelector("#numero-cartao")
const erroCartao = document.querySelector("#erro-cartao")
const inputValidade = document.querySelector("#validade-cartao")
const erroValidade = document.querySelector("#erro-validade")
const inputCvv = document.querySelector("#cvv-cartao")
const erroCvv = document.querySelector("#erro-cvv")
const inputNomeCartao = document.querySelector("#nome-cartao")
const inputCpfCartao = document.querySelector("#cpf-cartao")
const erroCartaoCpf = document.querySelector("#erro-cartao-cpf")
const ocultarPagamento = document.querySelector(".ocultar-pagamento")
const btnPagamento = document.querySelector("#btn-pagamento")
const editarPagamento = document.querySelector(".container-pagamento .assinatura-editor span")



// CONTAINER RESUMO DOM

const containerResumo = document.querySelector(".container-resumo")

const valor = document.querySelector("#resumo-valor")
const subtotal = document.querySelector("#resumo-subtotal")
const parcelado = document.querySelector("#resumo-parcelado")







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
let valorAnual
let valorSemestral
let valorTrimestral
let idPlano


form.addEventListener("keypress",(e)=>{
    if(e.key==="Enter"){
        e.preventDefault()
    }
})




function getPlanos(id){
    return fetch(`/checkout/lista/planos/${id}`)
    
}



// CLICK EVENTLISTENER ASSINATURA

btnAssinatura.addEventListener("click", async ()=>{
    

    
    if(coracao.checked){
        const planoInfo = await (await getPlanos(4)).json()
        const planoInfo2 = await (await getPlanos(5)).json()
        const planoInfo3 = await (await getPlanos(6)).json()
        idPlano = "coração"

        valorAnual = planoInfo.valor
        valorSemestral = planoInfo2.valor
        valorTrimestral = planoInfo3.valor
      
        optionAnual.innerText = `Plano Anual --12x R$${valorAnual}`
        optionSemestral.innerText = `Plano Semestral  6x--- R$${valorSemestral}`
        optionTrimestral.innerText = `Plano Trimestral  3x--- R$${valorTrimestral}`

        
    }

    if(nacional.checked){
        const planoInfo = await (await getPlanos(7)).json()
        const planoInfo2 = await (await getPlanos(8)).json()
        const planoInfo3 = await (await getPlanos(9)).json()

        idPlano = "nacional"



        valorAnual = planoInfo.valor
        valorSemestral = planoInfo2.valor
        valorTrimestral = planoInfo3.valor

        optionAnual.innerText = `Plano Anual --12x R$${valorAnual}`
        optionSemestral.innerText = `Plano Semestral  6x--- R$${valorSemestral}`
        optionTrimestral.innerText = `Plano Trimestral  3x--- R$${valorTrimestral}`

    

    }
    
    if(mundial.checked){
        const planoInfo = await (await getPlanos(10)).json()
        const planoInfo2 = await (await getPlanos(11)).json()
        const planoInfo3 = await (await getPlanos(12)).json()

        idPlano = "mundial"


        valorAnual = planoInfo.valor
        valorSemestral = planoInfo2.valor
        valorTrimestral = planoInfo3.valor

        optionAnual.innerText = `Plano Anual --12x R$${valorAnual}`
        optionSemestral.innerText = `Plano Semestral  6x--- R$${valorSemestral}`
        optionTrimestral.innerText = `Plano Trimestral  3x--- R$${valorTrimestral}`
    }

   

    containerAssinatura.style.border = "none"
    editarAssinatura.style.display = "block"
    btnAssinatura.style.display = "none"

    ocultarPlano.style.display = "flex"
    containerPlano.style.filter = "opacity(1)"
    containerPlano.style.border = "2px solid #b4b533"
    btnPlano.style.display = "block"

    if(!nacional.checked){
        labelNacional.style.display = "none"
    }

    if(!mundial.checked){
        labelMundial.style.display = "none"
    }

    if(!coracao.checked){
        labelCoracao.style.display = "none"
    }

    inputPlanos.disabled = false    
    inputPlanos.style.border = "1px solid black"





})

editarAssinatura.addEventListener("click", ()=>{

    containerAssinatura.style.display = "flex"
    ocultarDados.style.display = "none"
    ocultarCobranca.style.display = "none"
    ocultarEntrega.style.display = "none"
    ocultarFrete.style.display = "none"
    ocultarPagamento.style.display = "none"


    labelCoracao.style.display = "flex"
    labelNacional.style.display = "flex"
    labelMundial.style.display = "flex"
    editarAssinatura.style.display = "none"
    btnAssinatura.style.display = "block"


    containerEntrega.style.border = "none"
    containerPagamento.style.border = "none"
    containerResumo.style.border = "none"
    containerDados.style.border = "none"
    containerPlano.style.border = "none"
    containerFrete.style.border = "none"
    containerCobranca.style.border = "none"
    containerAssinatura.style.border = "2px solid #b4b533"
    
})

// CLICK EVENTLISTENER PLANO


btnPlano.addEventListener("click",()=>{

    containerPlano.style.border = "none"
    editarPlano.style.display = "block"
    inputPlanos.style.border = "none"
    btnPlano.style.display = "none"

    ocultarDados.style.display = "flex"
    containerDados.style.filter = "opacity(1)"
    containerDados.style.border = "2px solid #b4b533"


    if(optionAnual.selected){

        let valorDoze = parseFloat(valorAnual) * 12
      switch (idPlano) {
        case "coração":
            idPlano = 4
            break;
        case "nacional":
            idPlano = 7
            break;    
      
        case "mundial":
            idPlano = 10
            break;

        default:
            break;
      }
      
      valor.innerText = `R$ ${valorDoze.toString()}`
      optionAnual.value = idPlano
      console.log(optionAnual.value);
        subtotal.innerText = `R$ ${valorDoze.toString()}`
        parcelado.innerText = `--12x R$ ${valorAnual}`
    }
    if(optionSemestral.selected){

        let valorSeis = parseFloat(valorSemestral) * 6

        switch (idPlano) {
            case "coração":
                idPlano = 5
                break;
            case "nacional":
                idPlano = 8
                break;    
          
            case "mundial":
                idPlano = 11
                break;
    
            default:
                break;
          }
          
          optionSemestral.value = idPlano
          
          console.log(optionSemestral.value);
        valor.innerText = `R$ ${valorSeis.toString()}`
        subtotal.innerText = `R$ ${valorSeis.toString()}`
        parcelado.innerText = `--6x R$ ${valorSemestral}`
    }
    if(optionTrimestral.selected){

        let valorTres = parseFloat(valorTrimestral) * 3

        switch (idPlano) {
            case "coração":
                idPlano = 6
                break;
            case "nacional":
                idPlano = 9
                break;    
          
            case "mundial":
                idPlano = 12
                break;
    
            default:
                break;
          }
          optionTrimestral.value = idPlano
          console.log(optionTrimestral.value);

        
        valor.innerText = `R$ ${valorTres.toString()}`
        subtotal.innerText = `R$ ${valorTres.toString()}`
        parcelado.innerText = `--3x R$ ${valorTrimestral}`
    }

 


  
})

editarPlano.addEventListener("click", ()=>{
    
    ocultarPlano.style.display = "flex"
    ocultarDados.style.display = "none"
    ocultarCobranca.style.display = "none"
    ocultarEntrega.style.display = "none"
    ocultarFrete.style.display = "none"
    ocultarPagamento.style.display = "none"


    containerEntrega.style.border = "none"
    containerPagamento.style.border = "none"
    containerResumo.style.border = "none"
    containerDados.style.border = "none"
    containerPlano.style.border = "2px solid #b4b533"
    containerFrete.style.border = "none"
    containerCobranca.style.border = "none"
    containerAssinatura.style.border = "none"
    
    inputPlanos.disabled = false    
    inputPlanos.style.border = "1px solid black"
    btnPlano.style.display = "block"
 
})


//  EVENTLISTENER DADOS 
// INPUT EMAIL

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

btnDados.addEventListener("click", ()=>{
    console.log(dadosNome.value)

    if(!dadosNome.value){
        erroNome.style.display = "block"
        erroNome.innerText = "Campo obrigatório"
    }

    
    if(!dadosSobrenome.value){
        erroSobrenome.style.display = "block"
        erroSobrenome.innerText = "Campo obrigatório"
    }

    
    if(!dadosCelular.value){
        erroCelular.style.display = "block"
        erroCelular.innerText = "Campo obrigatório"
    }

    
    if(!confirmaSenha){
        senhaTamanho.style.display = "block"
        senhaTamanho.innerText = "Campo obrigatório"
    }

    
    if(!confirmaConfirmacao){
        erroConfirmacao.innerText = "Confirmação diferente da senha"
        erroConfirmacao.style.display = "block"
    }

    if(!dadosEmail.value){
        erroEmail.innerText = "Campo obrigatório"
        erroEmail.style.display = "block"

    }

    if(!dadosCpf.value){
        erroCpf.innerText = "Campo obrigatório"
        erroCpf.style.display = "block"
    }

    if( dadosCelular.value && 
        dadosNome.value && 
        dadosSenha.value && 
        dadosSobrenome.value && 
        dadosConfirmacao.value &&
        dadosEmail.value &&
        dadosCpf.value
        ){
           

        ocultarDados.style.display = "none"
        ocultarCobranca.style.display = "flex"
        containerDados.style.border = "none"
        editarDados.style.display = "block"
        containerCobranca.style.filter = "opacity(1)"
        containerCobranca.style.border = "2px solid #b4b533"

        }
})

editarDados.addEventListener("click",()=>{
    
    ocultarDados.style.display = "flex"
    ocultarCobranca.style.display = "none"
    ocultarEntrega.style.display = "none"
    ocultarFrete.style.display = "none"
    ocultarPagamento.style.display = "none"

    containerDados.style.border = "2px solid #b4b533"
    containerEntrega.style.border = "none"
    containerPagamento.style.border = "none"
    containerResumo.style.border = "none"
    containerPlano.style.border = "none"
    containerFrete.style.border = "none"
    containerCobranca.style.border = "none"
    containerAssinatura.style.border = "none"
})


//  EVENTLISTENER ENDEREÇO COBRANÇA 

// INPUT CEP

inputCep.addEventListener("blur", ()=>{
    fetch(`http://viacep.com.br/ws/${inputCep.value}/json/`)
    .then(response =>{
        return response.json()
    })
    .then(buscaCep =>{

        inputBairro.value = buscaCep.bairro
        inputEstado.value = buscaCep.uf
        inputCidade.value = buscaCep.localidade
        inputEndereco.value = buscaCep.logradouro
        inputEstado.disabled = true
        inputCidade.disabled = true
        inputEndereco.disabled = true
        inputBairro.disabled = true

        erroCep.style.display = "none"

        

        console.log(buscaCep);

    })
    .catch((error)=>{
        erroCep.style.display = "block"
        erroCep.innerText = "CEP inválido"
        console.log(error)
    })

})

inputNumero.addEventListener("input", ()=>{

    if(inputNumero.length > 0){
        erroNumero.style.display = "none"
        
    }else{
        erroNumero.style.display = "block"
        erroNumero.innerText = "Campo obrigatório"
        
    }
})

inputNumero.addEventListener("blur", ()=>{
    erroNumero.style.display = "none"

})

btnCobranca.addEventListener("click", ()=>{
    if(inputCep.value.length == 0){
        erroCep.style.display = "block"
        erroCep.innerText = "Campo obrigatório"
        return  
    }
    if(inputNumero.value === ""){
        erroNumero.style.display = "block"
        erroNumero.innerText = "Campo obrigatório"
        return
        
    }

    if(checkboxEndereco.checked === true){

        inputEntregaCep.value = inputCep.value 
        inputEntregaBairro.value = inputBairro.value 
        inputEntregaEstado.value = inputEstado.value 
        inputEntregaCidade.value = inputCidade.value  
        inputEntregaEndereco.value = inputEndereco.value
        inputEntregaNumero.value = inputNumero.value
        inputEntregaComplemento.value = inputComplemento.value

        inputEntregaNumero.readonly = true
        inputEntregaComplemento.readonly = true
        inputEntregaEstado.readonly = true
        inputEntregaCidade.readonly = true
        inputEntregaEndereco.readonly = true
        inputEntregaBairro.readonly = true
        inputEntregaCep.readonly = true
        erroEntregaCep.style.display = "none"
        erroEntregaNumero.style.display = "none"


        
    }
    
    ocultarCobranca.style.display = "none"
    containerCobranca.style.border = "none"
    editarCobranca.style.display = "block"
    btnCobranca.style.display = "block"

    containerEntrega.style.filter = "opacity(1)"
    containerEntrega.style.border = "2px solid #b4b533"
    ocultarEntrega.style.display = "flex"
})


editarCobranca.addEventListener("click", ()=>{
    ocultarDados.style.display = "none"
    ocultarCobranca.style.display = "flex"
    ocultarEntrega.style.display = "none"
    ocultarFrete.style.display = "none"
    ocultarPagamento.style.display = "none"

    containerEntrega.style.border = "none"
    containerPagamento.style.border = "none"
    containerResumo.style.border = "none"
    containerDados.style.border = "none"
    containerPlano.style.border = "none"
    containerFrete.style.border = "none"
    containerCobranca.style.border = "2px solid #b4b533"
    containerAssinatura.style.border = "none"

    checkboxEndereco.checked = false
    inputEntregaCep.value = ""
    inputEntregaBairro.value = "" 
    inputEntregaEstado.value = "" 
    inputEntregaCidade.value = ""  
    inputEntregaEndereco.value = ""
    inputEntregaNumero.value = ""
    inputEntregaComplemento.value = ""

    inputEntregaNumero.disabled = false
    inputEntregaComplemento.disabled = false
    inputEntregaEstado.disabled = false
    inputEntregaCidade.disabled = false
    inputEntregaEndereco.disabled = false
    inputEntregaBairro.disabled = false
    inputEntregaCep.disabled = false
})


//  EVENTLISTENER ENDEREÇO ENTREGA

inputEntregaCep.addEventListener("blur", ()=>{
    fetch(`http://viacep.com.br/ws/${inputEntregaCep.value}/json/`)
    .then(response =>{
        return response.json()
    })
    .then(buscaCep =>{

        inputEntregaBairro.value = buscaCep.bairro
        inputEntregaEstado.value = buscaCep.uf
        inputEntregaCidade.value = buscaCep.localidade
        inputEntregaEndereco.value = buscaCep.logradouro
        inputEntregaEstado.disabled = true
        inputEntregaCidade.disabled = true
        inputEntregaEndereco.disabled = true
        inputEntregaBairro.disabled = true

        erroEntregaCep.style.display = "none"

        

        console.log(buscaCep);

    })
    .catch((error)=>{
        erroEntregaCep.style.display = "block"
        erroEntregaCep.innerText = "CEP inválido"
        console.log(error)
    })

})


editarEntrega.addEventListener("click", ()=>{
    
    
    
    
    ocultarDados.style.display = "none"
    ocultarCobranca.style.display = "none"
    ocultarEntrega.style.display = "flex"
    ocultarFrete.style.display = "none"
    ocultarPagamento.style.display = "none"
    
    containerEntrega.style.border = "2px solid #b4b533"
    containerPagamento.style.border = "none"
    containerResumo.style.border = "none"
    containerDados.style.border = "none"
    containerPlano.style.border = "none"
    containerFrete.style.border = "none"
    containerCobranca.style.border = "none"
    containerAssinatura.style.border = "none"
    
    
    editarEntrega.style.display = "none"
    btnEntrega.style.display = "block"
    containerEntrega.style.filter = "opacity(1)"

    containerFrete.style.filter = "opacity(0.5)"
})

btnEntrega.addEventListener("click",()=>{
    if(inputEntregaCep.value.length == 0){
        erroEntregaCep.style.display = "block"
        erroEntregaCep.innerText = "Campo obrigatório"
        return  
    }
    if(inputEntregaNumero.value === ""){
        erroEntregaNumero.style.display = "block"
        erroEntregaNumero.innerText = "Campo obrigatório"
        return
        
    }
    
    ocultarEntrega.style.display = "none"
    containerEntrega.style.border = "none"
    editarEntrega.style.display = "block"
    btnEntrega.style.display = "block"

    containerFrete.style.filter = "opacity(1)"
    containerFrete.style.border = "2px solid #b4b533"
    ocultarFrete.style.display = "flex"
})






// EVENTLISTENER FRETE

btnFrete.addEventListener("click", ()=>{
    ocultarFrete.style.display = "none"
    containerFrete.style.border = "none"
    editarFrete.style.display = "block"
    btnFrete.style.display = "block"

    containerPagamento.style.filter = "opacity(1)"
    containerPagamento.style.border = "2px solid #b4b533"
    ocultarPagamento.style.display = "flex"
})

editarFrete.addEventListener("click", ()=>{
    
    ocultarDados.style.display = "none"
    ocultarCobranca.style.display = "none"
    ocultarEntrega.style.display = "none"
    ocultarFrete.style.display = "flex"
    ocultarPagamento.style.display = "none"
    
    
    
    containerFrete.style.border = "2px solid #b4b533"
    containerPagamento.style.border = "none"
    containerResumo.style.border = "none"
    containerDados.style.border = "none"
    containerPlano.style.border = "none"
    containerCobranca.style.border = "none"
    containerAssinatura.style.border = "none"
    containerEntrega.style.border = "none"

    
    
    
    editarFrete.style.display = "none"
    btnFrete.style.display = "block"
    containerFrete.style.filter = "opacity(1)"

    containerPagamento.style.filter = "opacity(0.5)"
})


// EVENTLISTENER PAGAMENTO 


inputCartao.addEventListener("blur", ()=>{
    erroCartao.style.display = "none"

})

// inputValidade.addEventListener("input",()=>{

// })
inputCpfCartao.addEventListener("input", ()=>{
    if(inputCpfCartao.value.length === 11){
        erroCartaoCpf.style.display = "none"
        confirmaCartaoCpf = true

        
        
        
    }else{
        erroCartaoCpf.innerText = `CPF inválido`
        erroCartaoCpf.style.display = "block"
        confirmaCpfCartao = false
    }
})


btnPagamento.addEventListener("click", ()=>{
    ocultarPagamento.style.display = "none"
    containerPagamento.style.border = "none"
    editarPagamento.style.display = "block"
    btnPagamento.style.display = "block"

    containerResumo.style.filter = "opacity(1)"
    containerResumo.style.border = "2px solid #b4b533"
})

editarPagamento.addEventListener("click", ()=>{
    
    ocultarDados.style.display = "none"
    ocultarCobranca.style.display = "none"
    ocultarEntrega.style.display = "none"
    ocultarFrete.style.display = "none"
    ocultarPagamento.style.display = "flex"
    
    containerEntrega.style.border = "none"
    containerPagamento.style.border = "2px solid #b4b533"
    containerResumo.style.border = "none"
    containerDados.style.border = "none"
    containerPlano.style.border = "none"
    containerFrete.style.border = "none"
    containerCobranca.style.border = "none"
    containerAssinatura.style.border = "none"
    
    
    editarPagamento.style.display = "none"
    btnPagamento.style.display = "block"
    containerPagamento.style.filter = "opacity(1)"

    containerResumo.style.filter = "opacity(0.5)"
})