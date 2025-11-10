// Passo 1 - Pegar o botão
const botaoFiltrar = document.querySelector('.btn-filtrar');

// Passo 2 - Escutar o clique
botaoFiltrar.addEventListener('click', function (evento) {
    evento.preventDefault();

    // Passo 3 - Pegar os valores dos selects
    const categoriaSelecionada = document.querySelector('#categoria').value.toLowerCase();
    const motocicletaSelecionada = document.querySelector('#motocicleta').value.toLowerCase();

    // Passo 4 - Selecionar todas as cartas
    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaProduto = carta.dataset.categoria.toLowerCase();
        const categoriaMoto = carta.dataset.moto.toLowerCase();

        let mostrarCarta = true;

        // Filtro de categoria
        if (categoriaSelecionada && categoriaSelecionada !== categoriaProduto) {
            mostrarCarta = false;
        }

        // Filtro de motocicleta
        if (motocicletaSelecionada && motocicletaSelecionada !== categoriaMoto) {
            mostrarCarta = false;
        }

        // Mostrar ou esconder carta
        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.add('esconder');
            carta.classList.remove('mostrar');
        }
    });
});
