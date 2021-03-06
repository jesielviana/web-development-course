const cepInput = document.getElementById('cep');
cepInput.addEventListener('blur', function() {
  searchByCep();
});

function searchByCep() {
  const cep = cepInput.value;
  const url = 'https://viacep.com.br/ws/' + cep + '/json/';
  fetch(url)
    .then(function(response) {
      response.json().then(function(address) {
        console.log(address);
        fillForm(address);
      });
    })
    .catch(function(error) {
      console.error(error);
    });
}

function fillForm(address) {
  const fields = document.getElementsByClassName('address');
  fields[0].value = address.logradouro;
  fields[1].value = address.bairro;
  fields[2].value = address.localidade;
  fields[3].value = address.uf;
}

// Post Exemple, not working.
/** 
function post() {
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
}
*/
