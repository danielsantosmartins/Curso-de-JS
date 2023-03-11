function escolha(){
    let opcao = document.getElementById('esql')
    let res = document.getElementById('res')

    if(opcao.value.length == 0){
        window.alert('[ERRO] Campo em branco!')
    } else {
        let o = Number(opcao.value)
        if(o < 1 || o > 4) {
            window.alert('[ERRO] Opção inválida')
        } else {
            let vlrDoado = ''
            switch(o){
                case 1:
                    vlrDoado = 10
                    res.innerHTML = `O valor doado foi de R$ ${vlrDoado}`
                    break
                case 2:
                    vlrDoado = 25
                    res.innerHTML = `O valor doado foi de R$ ${vlrDoado}`
                    break
                case 3:
                    vlrDoado = 50
                    res.innerHTML = `O valor doado foi de R$ ${vlrDoado}`
                    break
                case 4:
                    res.innerHTML = `Digite o valor da doação: `
                    let caixa = document.createElement('input')
                    caixa.setAttribute("type", "number")
                    caixa.setAttribute('id', 'doaQqv')
                    res.appendChild(caixa)
                    
                    break
                default:
                    
                    break
                }
        }
    }
    }
