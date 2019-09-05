console.log(1)
console.log(2)
console.log(3)

setTimeout(function () {
  console.log('a')
}, 3000)
setTimeout(function () {
  console.log('b')
}, 2000)
setTimeout(function () {
  console.log('c')
}, 1000)

function getNome (callback) {
  setTimeout(function () {
    return callback('Gabriel');
   }, 2000)
}

function getSobrenome (callback) {
  setTimeout(function () {
    return callback('Silva');
   }, 2000)
}

function getNomeCompleto (nome, sobreNome, callback) {
  setTimeout(function () {
    return callback(nome + ' ' + sobreNome);
   }, 2000)
}

getNome((retornoNome) => {
  console.log('Nome: ', retornoNome);
  getSobrenome((retornoSobreNome) => {
    console.log('Sobrenome', retornoSobreNome);
    getNomeCompleto(retornoNome, retornoSobreNome, (retornoNomeCompleto) => {
      console.log('Nome Completo: ', retornoNomeCompleto);
    });
  });
});


document.getElementById('a').addEventListener('click', function () {
  console.log('clicou!')
});

// Reference
// https://bit.ly/2kwwXs5
