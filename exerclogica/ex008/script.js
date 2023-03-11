function media(){
    let nota1 = document.getElementById('n1')
    let nota2 = document.getElementById('n2')
    let res = window.document.getElementById('res')

    if(nota1.value.length == 0 || nota2.value.length == 0){
        window.alert('[ERRO]Campos Vazios!')
    } else{
        let n1 = Number(nota1.value)
        let n2 = Number(nota2.value)
        let media = (n1 + n2) / 2
        
        res.innerHTML = `MÉDIA: ${media.toFixed(1)}<br>`
        if(media >= 7){
            res.innerHTML += `ALUNO APROVADO`
        } else if (media < 7 && media >= 5) {
            res.innerHTML += `ALUNO EM RECUPERAÇÃO`
        } else {
            res.innerHTML += `ALUNO REPROVADO`
        }
    }
}

