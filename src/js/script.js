var range = document.getElementById("tamanho")
var valor = document.getElementById("valor")

range.oninput = function() {
    valor.innerText = range.value
}

function gerar() {
    var caracteres = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%&*"
    var senha = ""
    var i = 0
    var tamanho = range.value

    while (i < tamanho) {
        var aleatorio = Math.floor(Math.random() * caracteres.length)
        senha = senha + caracteres[aleatorio]
        i = i + 1
    }

    document.getElementById("senha").value = senha
}