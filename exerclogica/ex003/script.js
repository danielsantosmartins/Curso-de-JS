function temperatura(){
    let temp = window.document.getElementById ('t')
    let resp = document.getElementById('resp')

    if(temp.value.length == 0){
        window.alert ('[ERRO] Temperatura inválida')
    } else {
        let t = Number(temp.value)
        let f = (t-32)/1.8
        resp.innerHTML = `A temperatura atual é de ${f.toFixed(1)} C°`
        
    }
}

