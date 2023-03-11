function calcular(){
    let n = document.getElementById('nom')
    let s = window.document.getElementById('sal')
    let d = document.getElementById('dep')
    let r = document.getElementById('res')

    if(n.value.length == 0 || s.value.length == 0 || d.value.length == 0){
        window.alert('[ERRO] Campos Vazios!')
    } else {
        let nom = n.toString()
        let sal = Number(s.value)
        let dep = Number(d.value)
        if( dep < 0 || sal < 0){
        window.alert('[ERRO] Valor inválido')
        } else {
            let nsal = ''
            switch(dep){
                case 0:
                    nsal = sal + (sal*5/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                case 1:
                    nsal = sal + (sal*10/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                case 2:
                    nsal = sal + (sal*10/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                case 3:
                    nsal = sal + (sal*10/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                case 4:
                    nsal = sal + (sal*15/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                case 5:
                    nsal = sal + (sal*15/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                case 6:
                    nsal = sal + (sal*15/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break
                default:
                    nsal = sal + (sal*18/100)
                    r.innerHTML = `O funcionário ${nom}, possuirá um salário total de R$ ${nsal.toFixed(2).replace('.',',')}.`
                break 
            }
        }
        
    }
}


