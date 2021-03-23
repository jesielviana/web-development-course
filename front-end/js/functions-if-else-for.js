const notas = []
function leNotas () {
  for (let index = 0; index < 3; index++) {
    const nota = prompt('informe a nota ' + (index + 1))
    notas.push(parseFloat(nota))
  }
}

function calculaMedia () {
  let soma = 0
  for (let index = 0; index < notas.length; index++) {
    soma = soma + notas[index]
  }
  const media = soma / notas.length
  return media
}

leNotas()
const media = calculaMedia()
console.log('A sua média final é: ', media)
