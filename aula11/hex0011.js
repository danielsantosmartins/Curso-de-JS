var pais = window.document.getElementById("txtnac")
var res = window.document.querySelector("div#res")
function verificar(){
    if (pais != 'brasil') {
        res.innerHTML += "Você é estrangeiro"
    } else {
        res.innerHTML += "Você é brasileiro"
    }
}