/*
  O que precisamos fazer? - Quando o usuário clicar no botão "Aplicar filtros", vamos filtrar as cartas baseado na categoria e no preço máximo selecionados
    OBJETIVO 1 - Criar a funcionalidade de filtrar as cartas
        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS
        passo 2 - escutar o clique no botão de aplicar filtros
        passo 3 - pegar os valores dos campos de categoria e preço
        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida 
*/
//        passo 1 - pegar o botao de aplicar filtros  do HTML e mandar pro JS

const botaoFiltrar = document.querySelector('.btn-filtrar')

//        passo 2 - escutar o clique no botão de aplicar filtros

botaoFiltrar.addEventListener('click', function (evento) {
    evento.preventDefault();
    //        passo 3 - pegar os valores dos campos de categoria e preço
    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    //        passo 4 - para cada carta, verificar se ela deve ser mostrada ou escondida

    const cartas = document.querySelectorAll('.carta');
    cartas.forEach(function (carta) {

        //Filtro de carta
        const categoriaCarta = carta.dataset.categoria;
        const precoaCarta = carta.dataset.preco;

        let mostrarCarta = true
        const temFiltroDeCategoria = categoriaSelecionada !== ''
        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase()

        if (temFiltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false
        }

        //Filtro de preço
        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoaCarta) > parseFloat(precoMaximoSelecionado)

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.add('esconder');
            carta.classList.remove('mostrar');
        }
    });
})
