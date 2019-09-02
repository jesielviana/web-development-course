console.log('before:', square(2)); 
console.log('before:', squareTwo(2)); // ReferenceError: squareTwo is not defined

function square (number) {
  return number * number;
}

const squareTwo = function(number){
  return number * number;
}

console.log('after:', square(3)); 
console.log('after:', squareTwo(3));