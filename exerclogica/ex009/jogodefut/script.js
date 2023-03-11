function resultado(){
    let b = window.document.getElementById('b')
    let m = window.document.getElementById('m')
    let r = window.document.getElementById('res')

    if(b.value.length == 0 || m.value.length == 0){
        window.alert('[ERRO] Caixa Vazia')
    } else {
        let ban = Number(b.value)
        let mad = Number(m.value)
        let saldo = ban - mad
        if(saldo < 0){
            saldo *= -1
            if (saldo == 0) {
                r.innerHTML = `DIFERENÇA: ${saldo} <br>`
                r.innerHTML += `STATUS: EMPATE`
            } else if (saldo <= 3){
                r.innerHTML = `DIFERENÇA: ${saldo} <br>`
                r.innerHTML += `STATUS: PARTIDA NORMAL`
            } else {
                r.innerHTML = `DIFERENÇA: ${saldo} <br>`
                r.innerHTML += `STATUS: GOLEADA`
            }
        } else {
            if (saldo == 0) {
                r.innerHTML = `DIFERENÇA: ${saldo} <br>`
                r.innerHTML += `STATUS: EMPATE`
            } else if (saldo <= 3){
                r.innerHTML = `DIFERENÇA: ${saldo} <br>`
                r.innerHTML += `STATUS: PARTIDA NORMAL`
            } else {
                r.innerHTML = `DIFERENÇA: ${saldo} <br>`
                r.innerHTML += `STATUS: GOLEADA`
            }
        } 
    }
}