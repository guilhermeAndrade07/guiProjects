const tela = document.getElementById('tela');
    const simBtn = document.getElementById('simBtn');
    const naoBtn = document.getElementById('naoBtn');

    simBtn.addEventListener('click', () => {
        tela.classList.add('fade-out');
        setTimeout(() => {
        window.location.href = "../pag05/pag05.html";
        }, 700);
    });

    naoBtn.addEventListener('click', () => {
        tela.classList.add('fade-out');
        setTimeout(() => {
        window.location.href = "../pagVoltar/index.html";
        }, 700);
    });