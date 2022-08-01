const btnAvancar = document.getElementById('btn-avancar');
const cartaoAtual = 0;

btnAvancar.addEventListener('click', function (){
    const cartoes = document.querySelectorAll('.cartao');
    cartaoAtual++;
    cartoes[cartaoAtual].classList.add('selecionado');
});