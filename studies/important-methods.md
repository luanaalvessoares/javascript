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

