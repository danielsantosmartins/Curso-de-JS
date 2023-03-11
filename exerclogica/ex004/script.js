function calcimposto(){
    let preco = window.document.getElementById ('prc')
    let saldo = document.getElementById('saldo')

    if(preco.value.length == 0){
        window.alert ('[ERRO] Valor inválido inválida')
    } else {
        let p = Number(preco.value)
        let i = (p*60)/100
        saldo.innerHTML = `O valor do imposto é de US$ ${i.toFixed(2).replace('.',',')} Dollares.`
    }
}


