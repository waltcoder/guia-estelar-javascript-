// Manipulando Arrays
let techs = ['html', 'css', 'javascript'];

// Adicionar um item no fim
techs.push('nodesjs')
// Adicionar um item no começo
techs.unshift('sql');
// remover do fim
techs.pop();
// remover do começo
techs.shift();
// pegar somente alguns elementos do array
console.log(techs.slice(1, 2));
// remover 1 ou mais posição do array
techs.splice(1, 2);
// encontrar a posição de um elemento
let index = techs.indexOf('css');
console.log(index)
console.log(techs);