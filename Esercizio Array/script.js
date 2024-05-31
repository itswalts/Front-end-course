//const arr1 = [1, 2, 3];
//const arr2 = [4, 5, 6];

//const arrFinal = [...arr1, ...arr2];
//const arrFinal2 = arr1.concat(arr2);

//const arr1Pushed = arr1.push(7);
//const arr1Popped = arr1.pop();
//const arr1Shifted = arr1.shift();
//const arr1Unshifted = arr1.unshift(0);

//const arrEven = arrFinal2.filter((element) => element % 2 == 0 );

//const isDuobleValue = arrFinal2.map((element) => element * 2);

/*const arrEvenAndDuble = arrFinal2
  .filter((element) => element % 2 == 0)
  .map((element) => element * 2);*/

//arrFinal2.forEach((element) => console.log(element));



//const sum = arrFinal2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

//console.log(sum);


//console.log(arrFinal);
//console.log(arrFinal2);
//console.log(arr1);
//console.log(arrEven);
//console.log(isDuobleValue);
//console.log(arrEvenAndDuble);

//const maxNumber = Math.max(...arr1);
//const minNumber = Math.min(...arr1);
//const randomNumber = Math.random();
//const ceilNumber = Math.ceil(randomNumber);
//const floorNumber = Math.floor(randomNumber);
//console.log(maxNumber);
//console.log(minNumber);
//console.log(ceilNumber);
//console.log(floorNumber);


// Esercizio Array

const arrayEs = [1, 2, 3, 4];

const arrayEs2 = [5, 6, 7, 8];

const numeriDisordinati = [6, 2, 8, 3, 23];



function sumArray(Array) {
  const somma = Array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log(somma);
}

sumArray(arrayEs);

function maxNumber(Array){
  console.log(Math.max(...Array));
}

maxNumber(arrayEs);

function isEven(Array){
  console.log(Array.filter((element) => element % 2 === 0));
}

isEven(arrayEs);

function concatArray(Array1, Array2){
  const arrayConcatenati = [...Array1, ...Array2];
  console.log(arrayConcatenati);
}

concatArray(arrayEs, arrayEs2);

function crescente(Array){
  const numeriOrdinati = Array.sort((a, b) => a -b);
  console.log(numeriOrdinati);
}

crescente(numeriDisordinati);