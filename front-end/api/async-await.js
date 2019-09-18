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

