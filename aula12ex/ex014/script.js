function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas. `
    if (hora >= 0 && hora < 12){
        //BOM DIA
        msg.innerHTML += "Bom Dia!"
        img.src = "fotomanha.png"
        document.body.style.background = "#5a535d"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        msg.innerHTML += "Boa Tarde!"
        img.src = "fototarde.png"
        document.body.style.background = '#de7e48'
    } else {
        //BOA NOITE
        msg.innerHTML += "Boa Noite!"
        img.src = 'fotonoite.png'
        document.body.style.background = "#022856"
    }
}
