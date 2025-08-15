const form = document.querySelector('#formulario');

form.addEventListener('reset', function() {
    const limpar = document.querySelector('.result');
    return limpar.innerHTML = '';
});

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const inputPeso = document.querySelector('.peso');
    const inputAltura = document.querySelector('.altura');
    const Inputnome = document.querySelector('.nome');

    const nome = Inputnome.value;
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // função para calcular o IMC
    const nivelImc = getNivelImc(imc); // função para o nivel do IMC

    const msg = `${nome} seu IMC é ${imc} (${nivelImc}).`; // mensagem

    setResultado(msg, true);
});

function getImc(peso, altura) { //Calculo do IMC
    const imc = peso / altura ** 2;
    return imc.toFixed(2); 
}

function getNivelImc (imc) { // nivel do IMC
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1',
        'Obesidade grau 2', 'Obesidade grau 3'];
    
    if (imc >= 39.9) return nivel[5]; 
    if (imc >= 34.9) return nivel[4];   
    if (imc >= 29.9) return nivel[3];    
    if (imc >= 24.9) return nivel[2];    
    if (imc >= 18.5) return nivel[1];   
    if (imc < 18.5) return nivel[0];    
}

function criaP() { // função que cria um paragrafo
    const p = document.createElement('p'); 
    return p; 
}

function setResultado(msg, isValid) { // função que recebe uma mensagem e confirma se é valido
    const resultado = document.querySelector('.result');
    resultado.innerHTML = '';

    const p = criaP(); 
    
    if (isValid) {
        p.classList.add('paragrafo-resultado'); // cria uma class no paragráfo
    } else {
        p.classList.add('bad'); // cria uma class no paragráfo
    }

    p.innerHTML = msg;
    resultado.appendChild(p);
}

// menu burguer
const btnMenu = document.querySelector('.menu button');
const menuOpcoes = document.querySelector('.menu-opcoes');

btnMenu.addEventListener('click', (e) => {
    e.preventDefault(); // evita comportamento de submit
    if (menuOpcoes.style.display === '' || menuOpcoes.style.display === 'none') {
        menuOpcoes.style.display = 'block';
    } else {
        menuOpcoes.style.display = 'none';
    }
});