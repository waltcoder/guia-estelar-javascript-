// Operador Condicional (Ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value1

// Exemplos
// Café da manhã top
let pao = true;
let queijo = true;

let niceBreakfast = pao && queijo ? 'Café top' : 'Café ruim';
console.log(niceBreakfast);
 niceBreakfast = pao || queijo ? 'Café top' : 'Café ruim';
console.log(niceBreakfast);
 niceBreakfast = !pao && queijo ? 'Café top' : 'Café ruim';
console.log(niceBreakfast);

// Maior de 18
let age = 16;
let canDrive = age >= 18 ? 'Can drive' : "can't drive";
console.log(canDrive);