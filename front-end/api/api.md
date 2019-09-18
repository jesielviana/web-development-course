# API Application Programming Interface

It is a set of codes and specifications that an application offers to communicate with external systems.

It's the way an app talks to another.

It's like a **power outlet**

Publics API:
* [http://www.portaltransparencia.gov.br/api-de-dados](http://www.portaltransparencia.gov.br/api-de-dados)

* [https://viacep.com.br/](https://viacep.com.br/)


## Client API:

* [Postman](https://www.getpostman.com/)
* [Restlet](https://chrome.google.com/webstore/detail/restlet-client-rest-api-t/aejoelaoggembcahagimdiliamlcdmfm)

## JSON

JSON (JavaScript Object Notation) is a lightweight data-interchange format. It is easy for humans to read and write. It is easy for machines to parse and generate. 

**Language independent**

Prior to JSON, XML was used.

JSON Type:
 * Object {"key": "value"}
 * Array ["one", "two"]

A **value** can be a string in double quotes, or a number, or true or false or null, or an object or an array.

## Fetch API

The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set.

Exemples:

```javascript
//GET
fetch(URL_TO_FETCH)
  .then(function(response) {
    response.json().then(function(result) {
      console.log(result);
    });
  })
  .catch(function(error) {
    console.error(error);
  });
```

```javascript
// POST
fetch(URL_TO_FETCH, {
  method: 'POST',
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }),
  body: JSON.stringify(content),
})
  .then(function(response) {
    console.log(response.status);
  })
  .catch(function(error) {
    console.error(error);
  });
```

Reference: [https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API)

Learn More: [https://css-tricks.com/using-fetch/](https://css-tricks.com/using-fetch/)

## Async Await 
## Async Await

Async functions enable us to write promise based code as if it were synchronous, but without blocking the execution thread.

The await operator is used to wait for a Promise. It can be used inside an Async block only. The keyword Await makes JavaScript wait until the promise returns a result.

Example:

```javascript
// define promise
async function getName () {
  return 'Jhon';
}

// exuction promise
getName().then(console.log)

// not working
//const name = await getName();

async function main () { 
  const name = await getName();
  console.log('Async-Await: ', name);
}

main();
```

Reference: [https://imasters.com.br/front-end/entenda-tudo-sobre-asyncawait](https://imasters.com.br/front-end/entenda-tudo-sobre-asyncawait)
