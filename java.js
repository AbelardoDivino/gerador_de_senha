const minusculas = 'abcdefghijklmnopqrstuvwxyz'
const range = document.getElementById("range")
const maiuscula = document.getElementById('maiusculas')
maiuscula = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numeros = document.getElementById('numeros')
numeros = [0,1,2,3,4,5,6,7,8,9]
const sinbolos = document.getElementById('sinbolos')
sinbolos = "!@#$%&&*?\/"
let gerar = document.getElementById('gerar')
let res = document.getElementById("res")

gerar.addEventListener("click",()=>{
  res.innerText = range.value



let senha = ''

  for(let i = 0; i< range.value; i++){

    let letra 

    let indice1 = Math.floor(Math.random() * minusculas.length)

    letra = minusculas[indice1]

    senha += letra

     let indice2 = Math.floor(Math.random() * maiuscula.length)

      let indice3 = Math.floor(Math.random() * sinbolos.length)

  }


})