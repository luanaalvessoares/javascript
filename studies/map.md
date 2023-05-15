O método `map()` em javascript é uma função de ordem superior (higher-order function) que permite criar um novo array a partir da aplicação de uma função em cada elemento do array original. Ele é usado para iterar sobre cada item do array e retornar um novo array com o resultado da aplicação de uma função em cada item.
<br>
A sintaxe básica do método `map()` é a seguinte:

```
array.map(function(item) {
  // código a ser executado em cada item do array
});
```
<br>
Ou usando uma arrow function:

```
array.map(item => {
  // código a ser executado em cada item do array
});
```
<br>
_A função passada para o método `map()` recebe um argumento que representa cada item do array e deve retornar um novo valor que será incluído no novo array. Esse valor pode ser qualquer tipo de dado, inclusive outro array ou objeto._

Veja abaixo alguns exemplos de uso do método `map()`:
