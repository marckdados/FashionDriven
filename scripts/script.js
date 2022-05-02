const API = 'https://mock-api.driven.com.br/api/v4/shirts-api/shirts';
let modelo;
let gola;
let tecido;
let nome = prompt('Qual seu nome ?');
pegarAPI();

function selecionarModelo(elemento){
    selecionado = document.querySelector('.modelo .selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
    }
        elemento.classList.toggle('selecionado');
    
    modelo = elemento.parentNode;
    modelo = modelo.querySelector('h3').innerHTML;
    
    modelo = converteModelo(modelo);
    ativarPedido();
}

function selecionarGola(elemento){
    selecionado = document.querySelector('.gola .selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
    }
        elemento.classList.toggle('selecionado');
    
        gola = elemento.parentNode;
        gola = gola.querySelector('h3').innerHTML;
    gola = converteGola(gola);
    ativarPedido();
}

function selecionarTecido(elemento){
    selecionado = document.querySelector('.tecido .selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
    }
        elemento.classList.toggle('selecionado');

    tecido = elemento.parentNode;
    tecido = tecido.querySelector('h3').innerHTML;
    tecido = converteTecido(tecido);
    ativarPedido();
}

function ativarPedido(){
    if (modelo !== undefined) {
        if (gola !== undefined) {
          if (tecido !== undefined) {
            const botaoPedido = document.querySelector('.botao-confirma');
            botaoPedido.classList.add('ativado');
          }
        }
    }
}

function converteModelo(elemento){
    
    if(elemento === 'T-shirt'){
        elemento = 't-shirt';
    }
    else if(elemento === 'Manga longa'){
        elemento = 'long'
    }
    else if(elemento === 'Camiseta'){
        elemento = 'top-tank'
    }
    
    return elemento;
}
function converteGola(elemento){
    if(elemento === 'Gola V'){
        elemento = 'v-neck';
    }
    else if(elemento === 'Gola Redonda'){
        elemento = 'round'
    }
    else if(elemento === 'Gola Polo'){
        elemento = 'polo'
    }
    return elemento;
}

function converteTecido(elemento){
    if(elemento === 'Seda'){
        elemento = 'silk'
    }
    else if(elemento === 'Algodão'){
        elemento = 'cotton'
    }
    else if(elemento === 'Poliéster'){
        elemento = 'polyester'
    }
    else{
        console.log('Deu ruim')
    }
    return elemento;
}

function pegarAPI(){
    const promise = axios.get(API);
    promise.then(mostrarCamisas)
    promise.then(clicarEncomenda)
}

function mostrarCamisas(resposta){
    console.log(resposta.data);
    const ultimosPedidos = document.querySelector('.lista-pedidos');
    console.log(ultimosPedidos);
    for(let i = 0; i < resposta.data.length; i++){
        console.log(i);
        ultimosPedidos.innerHTML += 
            `
                <li class="item-pedido" onclick="clicarEncomenda(this)">
                    <img src="${resposta.data[i].image}" alt="">
                    <span class="nome"><bold>Criado:</bold> ${resposta.data[i].owner}</span>
                </li>
            `
    }
}

function confirmarPedido(){
    
    let image = document.querySelector('.referencia input').value;
    
    if (modelo !== undefined) {
        if (gola !== undefined) {
          if (tecido !== undefined) {
            const promise = axios.post(API,{
                "model": modelo,
                "neck": gola,
                "material": tecido,
                "image": image,
                "owner": nome,
                "author": nome
                });
            promise.then(pedidoSucesso)
            promise.catch(pedidoFalha)
            image = "";
          }
        }
    }

    if(image === null || image === undefined){
        alert('Link da camisa é obrigatório !');
    }
}

function pedidoSucesso(){
    alert('Encomenda Confirmada');
    window.Location.reload();
}

function pedidoFalha(){
    alert('Ops, não conseguimos processar sua encomenda');
    window.Location.reload();
}

function clicarEncomenda(resposta){
    
}