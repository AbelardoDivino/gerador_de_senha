const chkMinusculas = document.getElementById("minusculas")
const chkMaiusculas = document.getElementById("maiusculas")
const chkNumeros = document.getElementById("numeros")
const chkSimbolos = document.getElementById("sinbolos")
const range = document.getElementById("range")


const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz"
const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numerosStr = "0123456789"
const simbolosStr = "!@#$%&*?"


let gerar = document.getElementById('gerar')
let res = document.getElementById("res")
gerar.addEventListener("click", () => {

    const tamanho = range.value

    let pool = ""

    if (chkMinusculas.checked) pool += letrasMinusculas
    if (chkMaiusculas.checked) pool += letrasMaiusculas
    if (chkNumeros.checked) pool += numerosStr
    if (chkSimbolos.checked) pool += simbolosStr

    if (pool.length === 0) {
        res.innerHTML = "Selecione ao menos uma opção"
        return
    }

    let senha = ""

    for (let i = 0; i < tamanho; i++) {
        let indice = Math.floor(Math.random() * pool.length)
        senha += pool[indice]
    }

    res.innerHTML = senha   // ← TEM que estar aqui dentro
})
