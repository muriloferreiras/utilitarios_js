let indiceAtual = 0;
const imagens = document.querySelectorAll('.imagens img');

function mostrarImagem(index) {
    imagens.forEach((img, i) => {
        img.classList.remove('ativo');
        if (i === index) {
            img.classList.add('ativo');
        }
    });
}

function mudarImagem(direcao) {
    indiceAtual += direcao;
    if (indiceAtual < 0) {
        indiceAtual = imagens.length - 1;
    } else if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }
    mostrarImagem(indiceAtual);
}

// Inicializa o carrossel exibindo a primeira imagem
mostrarImagem(indiceAtual);