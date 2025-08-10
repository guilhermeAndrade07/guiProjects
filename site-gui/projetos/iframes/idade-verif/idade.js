function verificar() {
    var data= new Date()
    var ano = data.getFullYear()
    const name = document.getElementById('inome').value
    var nscm = document.getElementById('iano')
    var res = document.getElementById('resultado')
    

    if (nscm.value.length == ' ' || Number(nscm.value) > ano) {
        window.alert("Verifique seu dados!!")
        res.innerHTML = ' '
    } else {
        var idade = ano - Number(nscm.value)
        document.getElementById('resultado').textContent= `${name} tem ou irá completar ${idade} anos de idade em ${ano}.`
    }
    
}