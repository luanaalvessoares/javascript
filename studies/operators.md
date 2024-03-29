Existem diversos tipos de operadores que podemos usar em javascript, desde os operados lógicos, operadores matemáticos, relacionais e bitwise. Vamos ver sobre alguns deles.

## Operadores matemáticos
<br>

### Adição
A adição em javascript tem como símbolo o `+` e é usada para adicionar dois valores numéricos ou concatenar strings. Veja o exemplo:

```
const num1 = 5;
const num2 = 10;
const result = num1 + num2;

console.log(result); // 15
```
<br><br><hr>

### Subtração
A subtração em javascript tem como símbolo o `-` e é usada para subtrair dois valores numéricos. Veja o exemplo:

```
const num1 = 10;
const num2 = 5;
const result = num1 - num2;

console.log(result); // 5
```
<br><br><hr>

### Multiplicação
A multiplicação em javascript tem como símbolo o `*` e é usada para multiplicar dois valores numéricos. Veja o exemplo:

```
const num1 = 5;
const num2 = 10;
const result = num1 * num2;

console.log(result); // 50
```
<br><br><hr>

### Divisão
A divisão em javascript tem como símbolo a `/` e é usada para  Veja o exemplo:

```
const num1 = 10;
const num2 = 2;
const result = num1 / num2;

console.log(result); // 5
```
<br><br><hr>

### Resto da divisão
Para obtermos o resto de uma divisão em javascript utilizamos o símbolo `%`, esse tipo de operação é usada para obter o resto da divisão entre dois valores numéricos. Veja o exemplo:

```
const num1 = 10;
const num2 = 3;
const result = num1 % num2;

console.log(result); // 1
```
<br><br>

**_É importante lembrar que esses operadores podem ser usados não apenas em números, mas também em variáveis que armazenam valores numéricos. Além disso, a ordem de precedência dos operadores matemáticos segue a mesma ordem da matemática convencional (parênteses, multiplicação/divisão, adição/subtração)._**

<br><br><hr>

## Operadores relacionais
Os operadores relacionais em javascript são usados ​​para comparar dois valores e retornar um valor booleano (verdadeiro ou falso).
<br>

### ==
O operador `==` verifica se os valores são iguais, não considerando o tipo de dado. Veja o exemplo:

```
const a = 10;
const b = '10';

console.log(a == b); // true
console.log(a == 15); // false
```
_Nesse caso o operador não considerou a variável b como sendo string por isso é impresso que a variável a é igual a variável b._
<br><br><hr>

### ===
O operador `===` verifica se os valores são iguais e do mesmo tipo de dado. Veja o exemplo:

```
const a = 10;
const b = '10';

console.log(a === b); // false
console.log(a === 10); // true
```
_Já nesse caso o operador considerou o tipo de variável e imprimiu que a comparação entre um `number` e uma `string` não é igual._
<br><br><hr>

### !=
O operador `!=` verifica se os valores são diferentes, não considerando o tipo de dado. Veja o exemplo:

```
const a = 10;
const b = '10';

console.log(a != b); // false
console.log(a != 15); // true
```
_Nesse caso o operador não considerou a variável b como sendo string por isso é impresso que a variável a não é diferente da variável b._
<br><br><hr>

### !==
O operador `!==`` verifica se os valores são diferentes e/ou de tipos diferentes. Veja o exemplo:

```
const a = 10;
const b = '10';

console.log(a !== b); // true
console.log(a !== 10); // false
```
_Já nesse caso o operador considerou o tipo de variável e imprimiu que a comparação entre um `number` e uma `string` é diferente._
<br><br><hr>

### >
O operador `>` verifica se o valor à esquerda é maior que o valor à direita. Veja o exemplo:

```
const a = 10;
const b = 5;

console.log(a > b); // true
console.log(b > a); // false
```
<br><br><hr>

### >=
O operador `>=` verifica se o valor à esquerda é maior ou igual ao valor à direita. Veja o exemplo:

```
const a = 10;
const b = 5;

console.log(a >= b); // true
console.log(b >= a); // false
console.log(a >= 10); // true
```
<br><br><hr>

### <
O operador `<` verifica se o valor à esquerda é menor que o valor à direita. Veja o exemplo:

```
const a = 10;
const b = 5;

console.log(a < b); // false
console.log(b < a); // true
```
<br><br><hr>

### <=
O operador `<=` verifica se o valor à esquerda é menor ou igual ao valor à direita. Veja o exemplo:

```
const a = 10;
const b = 5;

console.log(a <= b); // false
console.log(b <= a); // true
console.log(a <= 10); // true
```
<br><br>

**_Esses operadores são comumente usados em condicionais e loops para controlar o fluxo do programa com base em comparações de valores._**
<br><br><hr>


## Operadores lógicos
Em javascript, existem três operadores lógicos: AND (&&), OR (||) e NOT (!). Abaixo uma descrição de cada um deles:

### AND
O operador lógico `AND` tem como símbolo `&&`. Ele retorna `true` se duas expressões que estão sendo comparadas são verdadeiras, caso contrário, retorna `false`. Veja o exemplo:

```
let x = 5;
let y = 10;

if (x > 0 && y < 15) {
  console.log("Ambas as condições são verdadeiras");
}
```
<br><br><hr>

### OR
O operador lógico `OR` tem como símbolo `||`. Ele retorna `true` se pelo menos uma das expressões que estão sendo comparadas for verdadeira, caso contrário, retorna `false`. Veja o exemplo:

```
let a = 5;
let b = 10;

if (a > 0 || b < 5) {
  console.log("Pelo menos uma das condições é verdadeira");
}
```
<br><br><hr>

### NOT
O operador lógico `NOT` tem como símbolo `!`. Ele inverte o valor da expressão. Se a expressão é verdadeira, retorna `false`; se a expressão é falsa, retorna `true`. Veja o exemplo:

```
let z = true;

if (!z) {
  console.log("Isso nunca será executado");
} else {
  console.log("A expressão é verdadeira, porque o valor de z é true");
}
```
<br><br><hr>

## Operadores bitwise
Os operadores bitwise em JavaScript são usados para realizar operações em nível de bits em números.
<br>

### AND Bit-a-Bit
O operador `AND bit-a-bit` é representado pelo símbolo `&`. Ele compara cada bit de um valor com o bit correspondente do outro valor. Se ambos os bits forem 1, o resultado será 1, caso contrário, será 0. Veja o exemplo:

```
let a = 5; // 5 em binário é 0101
let b = 3; // 3 em binário é 0011

let result = a & b; // Resultado é 0001, ou seja, 1 em decimal
```
<br><br><hr>

### OR Bit-a-Bit
O operador `OR bit-a-bit` é representado pelo símbolo `|`. Ele compara cada bit de um valor com o bit correspondente do outro valor. Se pelo menos um dos bits for 1, o resultado será 1, caso contrário, será 0. Veja o exemplo:

```
let a = 5; // 5 em binário é 0101
let b = 3; // 3 em binário é 0011

let result = a | b; // Resultado é 0111, ou seja, 7 em decimal
```
<br><br><hr>

### NOT Bit-a-Bit
O operador `NOT bit-a-bit` é representado pelo símbolo `~`. Ele inverte todos os bits de um valor. Veja o exemplo:

```
let a = 5; // 5 em binário é 0101

let result = ~a; // Resultado é -6 em decimal
```
<br><br><hr>

### XOR Bit-a-Bit
O operador `XOR bit-a-bit` é representado pelo símbolo `^`. Ele compara cada bit de um valor com o bit correspondente do outro valor. Se os bits comparados forem diferentes, o resultado será 1, caso contrário, será 0. Veja o exemplo:

```
let a = 5; // 5 em binário é 0101
let b = 3; // 3 em binário é 0011

let result = a ^ b; // Resultado é 0110, ou seja, 6 em decimal
```
<br><br><hr>

### Left Shift
O operador `Left Shift` é representado pelo símbolo `<<`. Ele desloca os bits de um valor para a esquerda pelo número de posições especificado. Veja o exemplo:

```
let a = 5; // 5 em binário é 0101

let result = a << 2; // Resultado é 010100, ou seja, 20 em decimal
```
<br><br><hr>

### Right Shift
O operador `Right Shift` é representado pelo símbolo `>>`. Ele desloca os bits de um valor para a direita pelo número de posições especificado. Se o número for positivo, os bits serão deslocados para a direita e zeros serão adicionados ao início. Se for negativo, os bits serão deslocados para a direita e uns serão adicionados ao início. Veja o exemplo:

```
let a = 16; // 16 em binário é 10000

let result1 = a >> 2; // Resultado é 00100, ou seja, 4 em decimal

let result2 = a >> -2; // Resultado é 00100000, ou seja, 32 em decimal
```
<br><br><hr>

### Zero-fill Right Shift
O operador `Zero-fill Right Shift` é representado pelo símbolo `>>>`. Ele desloca os bits de um número para a direita e preenche os novos bits à esquerda com zeros. O resultado é sempre um número não negativo, independentemente do sinal do número original. Veja o exemplo:

```
let num1 = 100; // em binário: 0000000001100100
let num2 = -100; // em binário: 1111111110011100

let resultado1 = num1 >>> 2; // desloca 2 bits para a direita e preenche com zeros à esquerda
console.log(resultado1); // 25 (em binário: 0000000000011001)

let resultado2 = num2 >>> 2; // desloca 2 bits para a direita e preenche com zeros à esquerda
console.log(resultado2); // 1073741799 (em binário: 00111111111100111001111111111111)
```
<br><br><hr>

## Pré-incremento e pós-incremento
O pré-incremento e o pós-incremento são operadores unários que são usados para aumentar o valor de uma variável em 1.
<br>

### Pré-incremento
No pré-incremento o valor da variável é incrementado em 1 antes da sua utilização na expressão. Veja o exemplo:

```
let a = 5;
let b = ++a;

console.log(a); // Output: 6
console.log(b); // Output: 6
```
<br><br><hr>

### Pós-incremento
No pós-decremento o valor da variável é incrementado em 1 depois da sua utilização na expressão. Veja o exemplo:

```
let c = 10;
let d = c++;

console.log(c); // Output: 11
console.log(d); // Output: 10
```
<br><br><hr>

## Pré-decremento e pós-decremento
O pré-decremento e o pós-decremento são operadores unários que são usados para diminuir o valor de uma variável em 1.
<br>

### Pré-decremento
No pré-decremento o valor da variável é decrementado em 1 antes da sua utilização na expressão. Veja o exemplo:

```
let e = 8;
let f = --e;

console.log(e); // Output: 7
console.log(f); // Output: 7
```
<br><br><hr>

### Pós-decremento
No pós-decremento o valor da variável é decrementado em 1 depois da sua utilização na expressão. Veja o exemplo:

```
let g = 15;
let h = g--;

console.log(g); // Output: 14
console.log(h); // Output: 15
```
<br><br>

**_É importante lembrar que o pré-incremento e o pós-incremento, assim como o pré-decremento e o pós-decremento, só funcionam em variáveis numéricas. Além disso, é necessário ter cuidado com o seu uso em expressões complexas, já que eles podem afetar o resultado final._**

<br><br><hr>

## Operador ternário
O operador ternário em javascript é uma forma simplificada de escrever uma estrutura condicional `if-else`. Ele é representado por `expressão ? valorSeVerdadeiro : valorSeFalso`. Veja o exemplo de como usá-lo:

```
const numero = 5;

numero % 2 === 0 ? console.log("O número é par") : console.log("O número é ímpar");
```
_Nesse exemplo, a expressão `numero % 2 === 0` verifica se o número é par. Se for verdadeiro, a mensagem "O número é par" é exibida no console. Caso contrário, a mensagem "O número é ímpar" é exibida._
<br><br><hr>

## Typeof
O operador `typeof` é usado para determinar o tipo de dado de uma variável em javascript. Ele retorna uma string que representa o tipo do dado da variável. O uso do operador `typeof` pode ser útil para garantir que o tipo de dado esteja correto antes de realizar determinadas operações ou manipulações. Veja o exemplo:

```
let x = 42;
let y = "Olá, mundo!";

console.log(typeof x); // "number"
console.log(typeof y); // "string"
```
_Nesse exemplo, o operador `typeof` é usado para obter o tipo de dado das variáveis `x` e `y`. O resultado de `typeof x` é uma string `number` que representa o tipo de dado da variável `x`, que é um número. Da mesma forma, o resultado de `typeof y` é uma string `string` que representa o tipo de dado da variável `y`, que é uma string._
<br><br><hr>

## Spread operator
O spread operator é um operador que permite expandir um objeto iterável em um novo objeto ou em um parâmetro de uma função. Ele é representado pelo sinal de três pontos `...` e é usado para desmembrar um objeto em partes individuais. Para exemplificar o uso do `spread operator` no código abaixo vamos criar uma nova lista a partir de duas listas existentes, veja:

```
const lista1 = [1, 2, 3];
const lista2 = [4, 5, 6];

const novaLista = [...lista1, ...lista2];

console.log(novaLista); // [1, 2, 3, 4, 5, 6]
```
<br><br><hr>

