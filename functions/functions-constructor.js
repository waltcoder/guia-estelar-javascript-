/**
 * function () constructor
 * expressão new
 * criar um novo objeto
 * this keyword
 * colocar a primeira letra em maiúscula é uma boa pratica
*/

function Person (name) {
  this.name = name;
  this.walk = function () {
    return this.name + ' está andando';
  }
}
const walt = new Person ('Walt');
const john = new Person ('John');
console.log(walt.walk());
console.log(john.walk());


const date = new Date ();
console.log(date);