const btnCalcular = document.querySelector('.botao button');
const resultado = document.querySelector('.resultado');

btnCalcular.addEventListener('click', (e) => {
    e.preventDefault();
    if (resultado.style.display === '' || resultado.style.display === 'none') {
        resultado.style.display = 'block';
    } else {
        resultado.style.display === 'none';
    }
});