function selecionarModelo(elemento){
    selecionado = document.querySelector('.modelo .selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
    }
        elemento.classList.toggle('selecionado');
}

function selecionarGola(elemento){
    selecionado = document.querySelector('.gola .selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
    }
        elemento.classList.toggle('selecionado');
}

function selecionarTecido(elemento){
    selecionado = document.querySelector('.tecido .selecionado');
    if(selecionado !== null){
        selecionado.classList.toggle('selecionado');
    }
        elemento.classList.toggle('selecionado');
}