# Functions


### Função anonima
### Arrow Functions
 - É atribuído geralmente por uma constante
```js
  const sayMyName = () => {
    console.log('Walt');
  }
  sayNyName();

  // console
  Walt
```
### Callback Functions
- callback nada mais é uma função que está passando como parâmetro outra função
- callback do inglês significa chamar de volta
```js
// callback function
function sayMyName (name) {
  console.log('antes de executar a callback');
  name();
  console.log('depois de executar a callback')
}

sayMyName( () => {
  console.log('Estou em uma callback');
});

// console
antes de executar a callback
Estou em uma callback
depois de executar a callback
```
