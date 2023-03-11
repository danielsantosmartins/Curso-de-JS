function calcular(){
    let atual = document.getElementById('atual') 
    let nasc = document.getElementById('nasc')
    let res = document.getElementById('res')
    if(atual.value.length == 0 || nasc.value.lenght == 0){
        window.alert ('[ERRO] valor inválido')  
    } else {
        let a = Number(atual.value)
        let n = Number(nasc.value)
        let i = a - n

        if(a < n){
            window.alert ('[ERRO] Ano atual menor que ano de nascimento!')
        } else {
        res.innerHTML = `Você tem ${i} anos de idade<br>`
        if(i >= 21){
            res.innerHTML += `E você já atingiu a maioridade`
            }
        }
        
    }
}
