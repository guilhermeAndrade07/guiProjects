const cultivo = document.querySelector('.selectCultivo');
const produto = document.querySelector('.selectProduto');
const litros = document.querySelector('#litros');
const calcular = document.querySelector('.btnCalcular');
const resultado = document.querySelector('.resultadoTxt');

calcular.addEventListener('click', function () {
    const cultivoSelecionado = cultivo.value;
    const produtoSelecionado = produto.value;
    const qtdLitros = parseFloat(litros.value);

    if (!cultivoSelecionado || !produtoSelecionado || isNaN(qtdLitros)) {
    resultado.textContent = "⚠️ Preencha todas as informações!";
    return;
    }

    let dosagemPorLitro = 0;

    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'npk') {
        dosagemPorLitro = 6;
    }

    if (dosagemPorLitro  === 0) {
    resultado.textContent = "❌ Não existe dosagem cadastrada para essa combinação!";
    return;
    }

    const dosagemTotal = dosagemPorLitro * qtdLitros;

    resultado.textContent = `✅ Dosagem recomendada → ${dosagemTotal.toFixed(1)} ml de ${produtoSelecionado.toUpperCase()} para ${qtdLitros}L de água`;
});








