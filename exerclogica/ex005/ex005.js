let emprestimo = 1000
let parcelas = 10
let juros = (emprestimo * 20)/100
let total = emprestimo + juros


console.log(`O valor total com juros é R$ ${total.toFixed(2)}, e o saldo total sera dividido em ${parcelas} parcelas de R$ ${ (total / parcelas).toFixed(2)}, serão pagos R$ ${juros.toFixed(2)} de juros.`)