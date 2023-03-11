function calcular(){
    let atual = document.getElementById('atual') 
    let nasc = document.getElementById('nasc')
    let res = document.getElementById('res')
    if(atual.value.length == 0 || nasc.value.lenght == 0){
        window.alert ('[ERRO] valor inválido')  
    } else {
        res.innerHTML = ''
        let a = Number(atual.value)
        let n = Number(nasc.value)

        if(a < n){
            window.alert ('Ano atual menor que ano de nascimento!')
        } else {
        res.innerHTML = `Você tem ${a-n} anos de idade`
        }
    }
}
