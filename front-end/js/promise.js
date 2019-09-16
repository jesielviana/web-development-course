function getNome (callback) { 
  setTimeout(function () {
    return callback('Jessé');
  }, 1000);
}

function getNomePromise () { 
  return new Promise(function (resolve, reject) { 
      resolve('Daniel');
  });
}

// getNome(function (retorno) { 
//   console.log(retorno);
// })

// getNomePromise().then(function (retorno) { 
//   console.log('Promise Success: ', retorno);
// });

function getEnderecoPorCep (cep) { 
  return new Promise(function (resolve, reject) {
    if (cep.length === 9) {
      resolve('Rua Tal, número x');
    } else { 
      reject('cep inválido')
    }
  });
}

getEnderecoPorCep('64600-000').then(function (endereco) { 
  console.log('Endereço: ', endereco);
}).catch(function (erro) { 
  console.error('Deu erro: ', erro);
})