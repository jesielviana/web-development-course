# Javascript Callback e Promise


Massa de dados

```javascript
onst nomes = ["Steve", "Bill", "Linus", "Ada", "Grace", "Turing"];
const usuarios = new Map();

usuarios.set(nomes[0], "EUA");
usuarios.set(nomes[1], "EUA");
usuarios.set(nomes[2], "Finlândia");
usuarios.set(nomes[3], "Inglaterra");
usuarios.set(nomes[4], "EUA");
usuarios.set(nomes[5], "Inglaterra");
```

```javascript
//Asynchronous with callback
console.log("a");
setTimeout(() => console.log("b"), 5000);
console.log("c");
```

## Callbak

Uma função callback é uma função passada a outra função 
como argumento, que é então invocado dentro da função externa 
para completar algum tipo de rotina ou ação.

```javascript
function getNomePorIndex(index, callback) {
  console.log("Callbacks::aguarde...buscando no banco de dados...");
  setTimeout(function () {
    return callback(nomes[index]);
  }, Math.random() * 2000);
}

function getNacionalidadeDe(nome, callback) {
  console.log("Callbacks::aguarde...buscando no banco de dados...");
  setTimeout(function () {
    return callback(usuarios.get(nome));
  }, Math.random() * 2000);
}
```



## Promise

Uma Promise é um objeto que representa a eventual 
conclusão ou falha de uma operação assincrona. 

Um Promise está em um destes estados: 

pending (pendente): Estado inicial, que não foi realizada nem rejeitada.
fulfilled (realizada): sucesso na operação.
rejected (rejeitado):  falha na operação.

Essencialmente, uma promise é um objeto retornado 
para o qual você adiciona callbacks, 
em vez de passar callbacks para uma função.


```javascript
function getNomePorIndexPromise(index) {
  console.log("Promise::aguarde...buscando no banco de dados...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      if (index >= 0 && index < nomes.length) {
        resolve(nomes[index]);
      } else {
        reject("Nome não encontrado");
      }
    }, Math.random() * 2000);
  });
}

function getNacionalidadeDePromise(nome) {
  console.log("Promise::aguarde...buscando no banco de dados...");
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      const nacionalidade = usuarios.get(nome)
      if(nacionalidade){
        resolve(nacionalidade);
      }else{
        reject("Usuário não encontrado");
      }
    }, Math.random() * 2000);
  });
}
```


## Async

Quando uma função assíncrona é chamada, ela retorna uma Promise. 
Quando a função assíncrona retorna um valor, 
a Promise será resolvida com o valor retornado. 
Quando a função assíncrona lança uma exceção ou algum valor, 
a Promise será rejeitada com o valor lançado.

Uma função assíncrona pode conter uma expressão await, 
que pausa a execução da função assíncrona e espera pela 
resolução da Promise passada, e depois retoma a execução 
da função assíncrona e retorna o valor resolvido.


```javascript
async function getNomePorIndexAsync(index) {
  console.log("Async::aguarde...buscando no banco de dados...");
  return nomes[index];
  // caso queira lançar um erro use: throw Error('message');
}
```

Fonte: [https://developer.mozilla.org/pt-BR/](https://developer.mozilla.org/pt-BR/)
