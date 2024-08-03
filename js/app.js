const html = document.querySelector('html');
const botaoMudarModo = document.querySelector('#modo-claro-escuro');

const imgModoEscuro = '<img class="botao-modo" src="img/sol.svg" alt="">';

const imgModoClaro = '<img class="botao-modo img-lua" src="img/lua.svg">';

function alterarContexto(contexto) {
    html.setAttribute('data-contexto', contexto);
}

function mudarImagem() {
    if (botaoMudarModo.classList.contains('modo-claro')) {
        botaoMudarModo.innerHTML = imgModoEscuro;
        botaoMudarModo.classList.remove('modo-claro');
        botaoMudarModo.classList.add('modo-escuro');
    } else if (botaoMudarModo.classList.contains('modo-escuro')){
        botaoMudarModo.innerHTML = imgModoClaro;
        botaoMudarModo.classList.remove('modo-escuro');
        botaoMudarModo.classList.add('modo-claro');
    }
}

botaoMudarModo.addEventListener('click', () => {
    if (botaoMudarModo.classList.contains('modo-claro')) {
        alterarContexto('escuro');
        mudarImagem();
    } else if (botaoMudarModo.classList.contains('modo-escuro')) {
        alterarContexto('claro');
        mudarImagem();
    }
})