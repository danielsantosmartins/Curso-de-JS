function contar(){
    var inicio = window.document.getElementById("txtini")
    var fim = window.document.getElementById("txtfim")
    var passo = window.document.getElementById("txtpas")
    var res = window.document.getElementById("res")
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Impossivel contar!'
        //window.alert ('[ERRO] Faltam Dados')
        // Erro caixa vazia
        
    } else {
        res.innerHTML = "Contando: <br>"
        var i = Number(inicio.value) 
        var f = Number(fim.value)
        var p = Number(passo.value)
        
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }// Erro passo = 0
        
        if (i < f){
            // Contagem crescente
            for(i; i <= f; i += p){
                res.innerHTML += ` ${i} \u{1F449}`
            }
        } else {
            for(i; i >= f; i-= p) {
            // Contagem regressiva    
                res.innerHTML += ` ${i} \u{1F449}`
            }
            
        }
        res.innerHTML += `\u{1F3C1}`
    }
}   