## Filter
O método `filter` é uma função de array em JavaScript que cria um novo array com todos os elementos que passam por um teste (função de callback) especificado. Ele é usado para filtrar elementos de um array com base em determinados critérios.
<br>

Abaixo a sintaxe do método `filter`:
<br>

```
const newArray = array.filter(callback(element, index, array));
```
<br>

Onde:
- `array`: O array original a ser filtrado.
- `callback`: Uma função de callback que é chamada para cada elemento do array.
- `element`: O elemento atual sendo processado.
- `index` (opcional): O índice do elemento atual.
- `array` (opcional): O array original.
<br>

Veja um exemplo simples do uso do `filter`:
<br>

```
const numbers = [1, 2, 3, 4, 5, 6];

const evenNumbers = numbers.filter((number) => number % 2 === 0);

console.log(evenNumbers); // Output: [2, 4, 6]
```
_Neste exemplo, o método `filter` é usado para criar um novo array chamado `evenNumbers` que contém apenas os números pares do array original `numbers`. A função de callback verifica se cada número é divisível por 2 usando o operador `%` e retorna `true` se for o caso._
<br><br>

Veja um exemplo elaborado com um objeto:
```
const students = [
  { name: 'Alice', grade: 85 },
  { name: 'Bob', grade: 92 },
  { name: 'Charlie', grade: 78 },
  { name: 'David', grade: 95 },
];

const topStudents = students.filter((student) => student.grade >= 90);

console.log(topStudents);
// Output: [
//   { name: 'Bob', grade: 92 },
//   { name: 'David', grade: 95 }
// ]
```
_Neste exemplo, o método `filter` é usado para criar um novo array chamado `topStudents` que contém apenas os estudantes com nota igual ou superior a 90. A função de callback verifica se a nota de cada estudante é maior ou igual a 90 e retorna `true` se for o caso._
<br><br>

**Em resumo, o método `filter` permite filtrar elementos de um array com base em determinados critérios, criando um novo array com os elementos que atendem ao teste especificado. Isso oferece uma maneira conveniente de trabalhar com arrays e realizar operações de filtragem.**
<br><br><hr>

## Find
O método `find` em JavaScript é usado para encontrar o primeiro elemento em um array que satisfaça uma determinada condição. Ele retorna o valor do elemento encontrado ou `undefined` caso nenhum elemento seja encontrado.
<br><br>

Encontrando um número par em um array:

```
let numeros = [1, 3, 4, 7, 8, 10];

let numeroPar = numeros.find(numero => numero % 2 === 0);

console.log(numeroPar); // Resultado: 4
```
_Neste exemplo, temos um array de números. Usando o método `find`, criamos uma função de callback que verifica se um número é par usando a condição `numero % 2 === 0`. O método `find` itera sobre cada elemento do array e retorna o primeiro número que satisfaz essa condição. No caso, o número `4` é o primeiro número par encontrado, então ele é retornado como resultado._
<br><br>

Encontrando um objeto com base em uma propriedade:
```
let pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 35 }
];

let pessoa = pessoas.find(p => p.nome === 'Maria');

console.log(pessoa); // Resultado: { nome: 'Maria', idade: 30 }
```
_Neste exemplo, temos um array de objetos que representam pessoas. Utilizando o método `find`, criamos uma função de callback que verifica se o nome de uma pessoa é igual a `'Maria'`. O método `find` itera sobre cada objeto do array e retorna o primeiro objeto que satisfaz essa condição. No caso, o objeto com nome `'Maria'` é o primeiro objeto encontrado, então ele é retornado como resultado._
<br><br>

Encontrando um objeto com base em múltiplas condições:

```
let pessoas = [
  { nome: 'João', idade: 25 },
  { nome: 'Maria', idade: 30 },
  { nome: 'Pedro', idade: 35 }
];

let pessoa = pessoas.find(p => p.nome === 'Maria' && p.idade > 25);

console.log(pessoa); // Resultado: { nome: 'Maria', idade: 30 }
```
_Neste exemplo, estamos procurando um objeto no array `pessoas` com base em duas condições: o nome deve ser igual a `'Maria'` e a idade deve ser maior que `25`. Usando o método `find` com uma função de callback que verifica essas condições, o primeiro objeto que satisfaz ambas as condições é retornado como resultado._
<br><br>

Encontrando um objeto em um array de objetos aninhados:
```
let loja = {
  nome: 'Minha Loja',
  produtos: [
    { id: 1, nome: 'Camiseta', preco: 29.99 },
    { id: 2, nome: 'Calça', preco: 49.99 },
    { id: 3, nome: 'Sapato', preco: 79.99 }
  ]
};

let produto = loja.produtos.find(p => p.id === 2);

console.log(produto); // Resultado: { id: 2, nome: 'Calça', preco: 49

.99 }
```
_Neste exemplo, temos um objeto `loja` que possui uma propriedade `produtos`, que é um array de objetos representando os produtos da loja. Usando o método `find` no array `loja.produtos`, encontramos o objeto com `id` igual a `2`, que representa uma calça. O objeto encontrado é retornado como resultado._
<br><br><hr>

## Every
Em JavaScript, a função `every()` é um método que verifica se todos os elementos de um array atendem a uma determinada condição. Ele retorna um valor booleano, `true` se todos os elementos cumprirem a condição e `false` se pelo menos um deles não cumprir.
<br>

A sintaxe básica do método `every()` é a seguinte:
```
array.every(callback(elemento, índice, array), thisArg)
```
<br>

Onde:

- `array`: O array que será verificado.
- `callback`: Uma função que será chamada para cada elemento do array. Ela recebe três argumentos: `elemento` (o elemento atual), `índice` (o índice do elemento) e `array` (o próprio array).
- `thisArg` (opcional): Um valor a ser usado como `this` quando executar a função `callback`.
<br>

A função `callback` é executada para cada elemento do array. Se ela retornar `true` para todos os elementos, o método `every()` retorna `true`. Caso contrário, se a função `callback` retornar `false` para algum elemento, o método `every()` retorna `false` imediatamente e não continua a executar a função `callback` para os elementos restantes.
<br><br>

Exemplo de uso do método `every()` para verificar se todos os números de um array são maiores que 5:

```
const numeros = [10, 7, 6, 9];
const todosMaioresQue5 = numeros.every(function(numero) {
  return numero > 5;
});

console.log(todosMaioresQue5); // true
```
_No exemplo acima, a função `callback` verifica se cada `numero` é maior que 5. Como todos os números atendem a essa condição, o método `every()` retorna `true`._
<br><br>

Exemplo de uso do `every()` em conjunto com arrow function e o método `includes()`:

```
const palavras = ['gato', 'cachorro', 'elefante', 'girafa'];
const temLetraA = palavras.every(palavra => palavra.includes('a'));

console.log(temLetraA); // false
```
_Neste exemplo, a função `callback` verifica se cada `palavra` do array contém a letra "a" usando o método `includes()`. Como uma das palavras, "elefante", não contém a letra "a", o método `every()` retorna `false`._
<br><br>

**O método `every()` é útil quando você precisa verificar se todos os elementos de um array satisfazem uma determinada condição. Ele pode ser usado para validação, filtragem de dados e outras situações em que você precisa ter certeza de que todos os elementos atendem a uma condição específica.**
<br><br><hr>

## Some
A função `some()` é um método que verifica se pelo menos um dos elementos de um array atende a uma determinada condição. Ele retorna um valor booleano, `true` se pelo menos um elemento cumprir a condição e `false` se nenhum elemento cumprir.
<br>

A sintaxe básica do método `some()` é a seguinte:

```
array.some(callback(elemento, índice, array), thisArg)
```

Onde:
- `array`: O array que será verificado.
- `callback`: Uma função que será chamada para cada elemento do array. Ela recebe três argumentos: `elemento` (o elemento atual), `índice` (o índice do elemento) e `array` (o próprio array).
- `thisArg` (opcional): Um valor a ser usado como `this` quando executar a função `callback`.

A função `callback` é executada para cada elemento do array. Se ela retornar `true` para pelo menos um elemento, o método `some()` retorna `true`. Caso contrário, se a função `callback` retornar `false` para todos os elementos, o método `some()` retorna `false`.
<br><br>

Exemplo de uso do método `some()` para verificar se há pelo menos um número par em um array:

```
const numeros = [1, 3, 5, 6, 7];
const temPar = numeros.some(function(numero) {
  return numero % 2 === 0;
});

console.log(temPar); // true
```
_No exemplo acima, a função `callback` verifica se cada `numero` é par usando o operador `%` (módulo) para verificar se o número é divisível por 2. Como pelo menos um número (6) é par, o método `some()` retorna `true`._
<br><br>

Exemplo que usa `some()` em conjunto com arrow function (função de seta) e o método `includes()`:

```
const palavras = ['gato', 'cachorro', 'elefante', 'girafa'];
const temLetraA = palavras.some(palavra => palavra.includes('a'));

console.log(temLetraA); // true
```
_Neste exemplo, a função `callback` verifica se pelo menos uma `palavra` do array contém a letra "a" usando o método `includes()`. Como uma das palavras, "gato", contém a letra "a", o método `some()` retorna `true`._
<br><br>

**O método `some()` é útil quando você precisa verificar se pelo menos um dos elementos de um array satisfaz uma determinada condição. Ele pode ser usado para realizar validações, encontrar elementos específicos em uma coleção e tomar decisões com base em pelo menos uma ocorrência em um conjunto de dados.**
<br><br><hr>

## Reduce
A função `reduce()` é um método poderoso que permite reduzir um array a um único valor por meio da aplicação de uma função de redução. Essa função de redução é aplicada a cada elemento do array, em sequência, acumulando um valor a partir de uma operação definida.
<br>

