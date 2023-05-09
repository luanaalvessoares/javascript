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
