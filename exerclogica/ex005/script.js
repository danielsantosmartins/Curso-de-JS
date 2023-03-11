function emprestimo() {
    let emprestimo = document.getElementById('emp')
    let parcelas = document.getElementById('parc')
    let saldo = window.document.getElementById('saldo')

    if(emprestimo.value.length == 0 || parcelas.value.length == 0) {
        window.alert('[ERRO] Valores inválidos!')
    } else {
        let e = Number(emprestimo.value)
        let p = Number(parcelas.value)
        
        if (p <= 0) {
            window.alert('[ERRO] Valor de parcela inválido')
            
        } else {
            let juros = (e * 20)/100
            let total = juros + e
            saldo.innerHTML += `VALOR ORIGINAL: R$ ${e.toFixed(2).replace('.',',')} <br>`
            saldo.innerHTML += `Nº de PARCELAS: ${p} <br>`
            saldo.innerHTML += `VALOR DE PARCELA: R$ ${(total/p).toFixed(2).replace('.',',')} <br>`
            saldo.innerHTML += `JUROS: R$ ${juros.toFixed(2).replace('.',',')}<br>`
            saldo.innerHTML += `VALOR TOTAL: R$ ${total.toFixed(2).replace('.',',')}<br>`
            
        }
    }
}

