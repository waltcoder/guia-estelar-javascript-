// Manipulando Strings e Números

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array.
//Depois disso transforme o array em um texto e onde era espaços e coloque _

let phrases = 'Eu quero viver o Amor!';
console.log(phrases);
let myArray = phrases.split(' ');
console.log(myArray);
let phraseWithUnderscore = myArray.join('_');
console.log(phraseWithUnderscore);
const toLowerCase = phraseWithUnderscore.toLowerCase();
const toUpperCase = phraseWithUnderscore.toUpperCase();

console.log(toLowerCase);
console.log(toUpperCase);
