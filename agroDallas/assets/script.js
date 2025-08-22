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
    let hectare = '';

    // hortalicas
    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'npk') {
        dosagemPorLitro = 6;
        hectare = '1 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'nitro30') {
        dosagemPorLitro = 6;
        hectare = '1 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'phos30') {
        dosagemPorLitro = 6;
        hectare = '1 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'turfa') {
        dosagemPorLitro = 10;
        hectare = '3 - 5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'calMag+') {
        dosagemPorLitro = 10;
        hectare = '3 - 5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'hortalicas' && produtoSelecionado === 'trikronix') {
        dosagemPorLitro = 4;
    }

    // Grãos
    if (cultivoSelecionado === 'graos' && produtoSelecionado === 'npk') {
        dosagemPorLitro = 10;
        hectare = '2 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'graos' && produtoSelecionado === 'nitro30') {
        dosagemPorLitro = 10;
        hectare = '2 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'graos' && produtoSelecionado === 'phos30') {
        dosagemPorLitro = 10;
        hectare = '2 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'graos' && produtoSelecionado === 'turfa') {
        dosagemPorLitro = 10;
        hectare = '4 - 5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'graos' && produtoSelecionado === 'calMag+') {
        dosagemPorLitro = 10;
        hectare = '4 - 5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'graos' && produtoSelecionado === 'trikronix') {
        dosagemPorLitro = 4;
    }

    // Frutifera
    if (cultivoSelecionado === 'frutifera' && produtoSelecionado === 'npk') {
        dosagemPorLitro = 10;
        hectare = '1 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'frutifera' && produtoSelecionado === 'nitro30') {
        dosagemPorLitro = 10;
        hectare = '1 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'frutifera' && produtoSelecionado === 'phos30') {
        dosagemPorLitro = 10;
        hectare = '1 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'frutifera' && produtoSelecionado === 'turfa') {
        dosagemPorLitro = 10;
        hectare = '4 - 5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'frutifera' && produtoSelecionado === 'calMag+') {
        dosagemPorLitro = 10;
        hectare = '4 - 5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'frutifera' && produtoSelecionado === 'trikronix') {
        dosagemPorLitro = 4;
    }

    // Pastagem/Gramado
    if (cultivoSelecionado === 'pastagem' && produtoSelecionado === 'npk') {
        dosagemPorLitro = 10;
        hectare = '2 - 4 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'pastagem' && produtoSelecionado === 'nitro30') {
        dosagemPorLitro = 10;
        hectare = '2 - 4 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'pastagem' && produtoSelecionado === 'phos30') {
        dosagemPorLitro = 10;
        hectare = '2 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'pastagem' && produtoSelecionado === 'turfa') {
        dosagemPorLitro = 10;
        hectare = '5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'pastagem' && produtoSelecionado === 'calMag+') {
        dosagemPorLitro = 10;
        hectare = '5 Litros do produto por hectare.';
    }
    if (cultivoSelecionado === 'pastagem' && produtoSelecionado === 'trikronix') {
        dosagemPorLitro = 4;
    }

    if (qtdLitros  === 0) {
    resultado.textContent = "❌ Não existe dosagem cadastrada para essa combinação!";
    return;
    }

    const dosagemTotal = dosagemPorLitro * qtdLitros;

    resultado.textContent = `${dosagemTotal.toFixed(0)}ml de ${produtoSelecionado.toUpperCase()} para ${qtdLitros}L de água` +  ' ' + `✅Dosagem recomendada: ${hectare}`;
});








