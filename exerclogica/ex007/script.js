function calculoImc(){
    let altura = window.document.getElementById('alt')
    let peso = window.document.getElementById('pes')
    let res = document.getElementById('res')

    if(altura.value.length == 0 || peso.value.length == 0){
        window.alert('[ERRO] Campos vazios!')
    } else {
        let a = Number(altura.value)
        let p = Number(peso.value)
        let imc = p/(a ** 2)
        res.innerHTML = `Meu IMC é ${imc.toFixed(2).replace('.',',')}.<br>`

        if(imc < 17){
            res.innerHTML += `Você está <strong>muito abaixo</strong> do peso ideal.`
        } else if (imc >= 17 && imc <= 18.5) {
            res.innerHTML += `Você está <strong>abaixo</strong> do peso ideal.`
        } else if (imc > 18.5 && imc <= 25) {
            res.innerHTML += `<strong>Parabéns!</strong> Você está no peso ideal.`
        } else if (imc > 25 && imc <= 30) {
            res.innerHTML += `Você está com <strong>sobrepeso</strong>.`
        } else if (imc > 30 && imc <= 35) {
            res.innerHTML += `Você está com <strong>obesidade</strong>.`
        } else if (imc > 35 && imc < 40) {
            res.innerHTML += `Você está com <strong>obesidade sevéra</strong>.`
        } else {
            res.innerHTML += `Você está com <strong>obesidade mórbida</strong>`
        }
    }
}

