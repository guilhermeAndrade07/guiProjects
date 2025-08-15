function Calculadora() {
    this.display = document.querySelector('.display');

    this.inicia = () => {
        this.capturarCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => { // capturar o Enter
        document.addEventListener('keydown', (event) => {
            if (event.key === "Enter") {
                this.realizaConta();
            }
        });
    };

    this.teclasNumericas = () => { // capturar o as teclas numericas
        document.addEventListener('keydown', (e) => {
            const teclasPermitidas = "0123456789+-*/.()";
            if(teclasPermitidas.includes(e.key)) {
                this.display.value += e.key;
            } 
        });
    };

    this.capturarCliques = () => { // capturar os clicks
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-igual')) this.realizaConta();
        });
    };

    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if (!conta) {
                alert('Conta inválida!');
                return;
            }

        this.display.value = conta;
        } catch(e) {
            alert('Conta inválida!');
            return;
        }
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    };

    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
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

const calculadora = new Calculadora();
calculadora.inicia();