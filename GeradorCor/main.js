window.onload = alterarCor();

document
    .querySelector('button')
    .addEventListener('click', alterarCor);

function alterarCor() {
    const cor =  gerarCor();

    if (cor.luz <= 100) {
        alterarCorTexto('white');
    } else {
        alterarCorTexto('black');
    }

    alterarCorFundo(cor.cor);
}

function alterarCorTexto(cor) {
    const textos = document.querySelectorAll('body *:not(script)');

    for (var i = 0; i < textos.length; i++) {
    textos[i].style.color = cor;
    }   
}

function alterarCorFundo(cor) {
    document.body.style.backgroundColor = cor;
    document.querySelector('button').style.backgroundColor = cor;
    document.querySelector('span').textContent = cor;
}

function gerarCor() {
    const r = gerarNumero();
    const g = gerarNumero();
    const b = gerarNumero();
    const luz = (r + g + b) / 3;
    const cor = `rgb(${r},${g},${b})`;

    return {
        vermelho: r,
        verde: g, 
        azul: b,
        luz, 
        cor
    }
}

function gerarNumero() {
    return Math.floor(Math.random() * (255 - 1));
}