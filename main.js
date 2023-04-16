window.onload = alterarCor();

document
    .querySelector('button')
    .addEventListener('click', alterarCor);

function alterarCor() {
    const cor =  gerarCor();

    document.body.style.backgroundColor = cor;
    document.querySelector('button').style.backgroundColor = cor;
    document.querySelector('span').textContent = cor;
}

function gerarCor() {
    return `rgb(${gerarNumero()},${gerarNumero()},${gerarNumero()})`;
}

function gerarNumero() {
    return Math.floor(Math.random() * (255 - 1));
}