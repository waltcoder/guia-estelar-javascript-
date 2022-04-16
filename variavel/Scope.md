# Scope

* Escopo determina a visibilidade de alguma variável no JavaScript
# Block Statement
```js
  // vamos iniciar
  {
    // aqui dentro é um bloco e posso colocar qualquer código
  }
  // Aqui fechamos o bloco
```

O bloco também criará um novo escopo. Chamamos de `block-scoped`

# Hoisting
 ```js
  // var é global, e também local
  // hoisting
  console.log('> existe x antes do bloco? ', x )

  {
    var x = 0;
  }

  console.log('> existe x antes do bloco? ', x)
```


## let e const
const e let são locais só funcionam no escopo onde foi criada
```js
  console.log('> existe y antes do bloco? ', y)

  {
    let y = 0
  }

  console.log('> existe y antes do bloco ', y);
```