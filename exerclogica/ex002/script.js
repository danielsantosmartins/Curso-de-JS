function converta(){
    let reais = document.getElementById('txtrs') 
    let res = document.getElementById('res')
    
    if(reais.value.length == 0){
        window.alert ('[ERRO] valor inválido') 
    } else{
        let r = Number(reais.value)
        let dollares = r/5.17
        res.innerHTML = `Você tem $${dollares.toFixed(2).replace('.',',')} dollares americanos.`
    }

}
