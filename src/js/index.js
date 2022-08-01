const btnAvancar = document.getElementById("btn-avancar");
let cartaoAtual = 0;

btnAvancar.addEventListener("click", function () {
    const cartoes = document.querySelectorAll(".cartao");
    
    cartaoAtual++;
    console.log(cartaoAtual)
    cartoes[cartaoAtual].classList.add("selecionado");

    const cartaoSelecionado = document.querySelector(".selecionado");
    cartaoSelecionado.classList.remove("selecionado");
    
});