function contar(){
    let i = document.getElementById('i')
    let r = document.getElementById('res')
    if(i.value.length == 0){
        window.alert('[ERRO] Caixa Vazia')
    } else {
        r.innerHTML = "Calculando...<br>"
        let c = 0
        let ini = Number(i.value)
        if(c < ini){
            while (c <= ini){
                r.innerHTML += `${c} <br>`
                c += 1
            }
        } else {
            while (c >= ini){
                r.innerHTML += `${c} <br>`
                c -= 1 
            }
        }
    }  
}
