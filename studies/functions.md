As funções são uma parte essencial da linguagem javascript e são usadas para agrupar blocos de código que executam uma tarefa específica e podem ser reutilizadas em vários pontos do código. Existem duas maneiras principais de declarar funções em javascript: funções padrão e funções de seta. Neste tópico, abordaremos as funções tradicionais e suas variações.

## Funções
As funções tradicionais em javascript são definidas usando a palavra-chave `function`. A sintaxe geral para declarar uma função é a seguinte:

```
function nomeDaFuncao(parametro1, parametro2, ...) {
  // código a ser executado
  return valorDeRetorno;
}
```
_Onde `nomeDaFuncao` é o nome da função, `parametro1`, `parametro2`, ... são os parâmetros que a função pode receber (opcional), o código dentro das chaves `{}` é o bloco de código a ser executado e `valorDeRetorno` é o valor retornado pela função (opcional)._
<br><br>

Por exemplo, vamos criar uma função que recebe dois números como parâmetros e retorna a soma deles:

```
function soma(a, b) {
  return a + b;
}
```
<br>

Podemos chamar essa função passando dois números como argumentos:

```
let resultado = soma(2, 3);
console.log(resultado); // Saída: 5
```
<br><br>

As funções também podem ser chamadas sem passar nenhum argumento:

```
let resultado = soma();
console.log(resultado); // Saída: NaN (Not a Number)
```
_Nesse caso, as variáveis `a` e `b` são `undefined`, portanto, a soma resultará em um valor inválido._
<br><br>

As funções também podem ser definidas como expressões de função, que são basicamente funções que são atribuídas a uma variável ou constante. Por exemplo:

```
const minhaFuncao = function(parametro1, parametro2) {
  // código a ser executado
  return valorDeRetorno;
};
```
<br>

Podemos chamar essa função da mesma forma que a função padrão:

```
let resultado = minhaFuncao(2, 3);
console.log(resultado);
```
<br><br>

As funções também podem ser definidas dentro de outras funções, chamadas funções aninhadas ou funções internas. Essas funções podem acessar as variáveis da função externa. Por exemplo:

```
function multiplicacao(a, b) {
  function soma(a, b) {
    return a + b;
  }

  let resultado = 0;
  for (let i = 0; i < b; i++) {
    resultado = soma(resultado, a);
  }

  return resultado;
}

let resultado = multiplicacao(2, 3);
console.log(resultado); // Saída: 6
```
_Observe que a função `soma` é definida dentro da função `multiplicacao` e pode ser chamada a partir da função externa._
<br><br>

**_Em resumo, as funções padrão em javascript são uma parte fundamental da linguagem e permitem agrupar blocos de código que executam uma tarefa específica e podem ser reutilizadas em várias partes do código. As funções podem ser declaradas de várias maneiras e podem ser aninhadas para criar funções mais complexas._**
<br><br><hr>

## Funções com retorno
As funções com retorno são aquelas que retornam um valor específico após executarem uma série de instruções. Para definir uma função com retorno, também usamos a palavra-chave `function`, seguida do nome da função, dos parâmetros entre parênteses e do corpo da função, que contém as instruções a serem executadas.
<br><br>

Para retornar um valor específico de uma função, usamos a palavra-chave `return`, seguida do valor que desejamos retornar. Por exemplo, suponha que desejamos criar uma função que some dois números e retorne o resultado. Podemos fazer isso da seguinte forma:

```
function soma(a, b) {
  return a + b;
}

let resultado = soma(3, 5);
console.log(resultado); // Imprime 8
```
_Neste exemplo, a função `soma` recebe dois parâmetros, `a` e `b`, e retorna a soma desses dois valores usando a instrução `return a + b;`. Depois, a função é chamada passando os valores 3 e 5 como argumentos, e o resultado é atribuído à variável `resultado`. Finalmente, o valor de `resultado` é impresso no console usando a função `console.log()`._
<br><br>

Podemos também retornar valores de diferentes tipos, como números, strings, booleanos, objetos e arrays. Por exemplo:

```
function retornaString() {
  return "Olá, mundo!";
}
```
_Essa função retorna uma string._
<br><br>

```
function retornaBooleano() {
  let a = 5;
  let b = 10;
  return a < b;
}
```
_Essa função retorna um valor booleano._
<br><br>

```
function retornaObjeto() {
  let objeto = {nome: "João", idade: 30};
  return objeto;
}
```
_Essa função retorna um objeto._
<br><br>

```
function retornaArray() {
  let array = [1, 2, 3, 4];
  return array;
}
```
_Essa função retorna um array._
<br><br>

Ao chamar essas funções, podemos armazenar o valor retornado em uma variável e usá-la posteriormente em nosso código:

```
let minhaString = retornaString();
console.log(minhaString); // Imprime "Olá, mundo!"
```
<br><br>

```
let meuBooleano = retornaBooleano();
console.log(meuBooleano); // Imprime true
```
<br><br>

```
let meuObjeto = retornaObjeto();
console.log(meuObjeto.nome); // Imprime "João"
console.log(meuObjeto.idade); // Imprime 30
```
<br><br>

```
let meuArray = retornaArray();
console.log(meuArray); // Imprime [1, 2, 3, 4]
```
<br><br><hr>

## Funções com parâmetros
Funções parametrizadas são aquelas que recebem um ou mais parâmetros (argumentos) como entrada e retornam um valor ou executam uma ação com base nesses parâmetros. Os parâmetros são definidos na declaração da função, dentro dos parênteses após o nome da função, e podem ser usados dentro do corpo da função.
<br>

Abaixo um exemplo de uma função parametrizada:

```
function saudacao(nome) {
  console.log(`Olá, ${nome}!`);
}

saudacao("João"); // saída: "Olá, João!"
saudacao("Maria"); // saída: "Olá, Maria!"
```
_Neste exemplo, a função `saudacao` recebe um parâmetro `nome` e imprime uma mensagem de saudação para o nome fornecido. Quando chamamos a função `saudacao` com o argumento "João", a mensagem "Olá, João!" é impressa no console. Da mesma forma, quando chamamos a função com o argumento "Maria", a mensagem "Olá, Maria!" é impressa._
<br><br>

Podemos definir funções com qualquer número de parâmetros, separando-os com vírgulas. Abaixo um exemplo de uma função com dois parâmetros:

```
function soma(a, b) {
  return a + b;
}

let resultado = soma(2, 3);
console.log(resultado); // saída: 5
```
_Neste exemplo, a função `soma` recebe dois parâmetros, `a` e `b`, e retorna a soma desses valores. Quando chamamos a função com os argumentos 2 e 3, a função retorna o valor 5 e atribuímos esse valor à variável `resultado`. Em seguida, imprimimos o valor de `resultado` no console, que é 5._
<br><br>

**As funções parametrizadas em javascript são úteis quando precisamos reutilizar o mesmo código com diferentes valores de entrada. Ao definir parâmetros na função, podemos torná-la mais flexível e adaptável a diferentes cenários de uso.**
<br><br><hr>

## Funções com parâmetros REST
Em javascript, o `parâmetro REST` é um recurso que permite que uma função receba um número indefinido de argumentos em forma de um array. Ele é indicado pelo uso de três pontos `( ... )` antes do nome do parâmetro. Quando a função é chamada, todos os argumentos passados após os argumentos regulares são agrupados em um array que pode ser acessado dentro da função através do `parâmetro REST`.

Abaixo um exemplo de função com `parâmetros REST`:

```
function soma(a, b, ...c) {
  let resultado = a + b;
  for (let i = 0; i < c.length; i++) {
    resultado += c[i];
  }
  return resultado;
}

console.log(soma(1, 2)); // output: 3
console.log(soma(1, 2, 3)); // output: 6
console.log(soma(1, 2, 3, 4)); // output: 10
```
_Neste exemplo, a função `soma()` recebe dois parâmetros regulares `a` e `b`, e um parâmetro REST `c`. Dentro da função, os parâmetros `a` e `b` são somados, e depois o loop `for` percorre o array `c` e adiciona cada elemento ao resultado final. Em seguida, o resultado é retornado. Quando chamamos a função `soma()`, podemos passar quantos argumentos quisermos após os dois primeiros, e eles serão agrupados no array `c`. Isso nos permite criar funções mais flexíveis que podem lidar com diferentes números de argumentos._
<br><br><hr>

## Funções anônimas
As funções anônimas são funções que não têm um nome associado a elas. Elas são úteis quando você precisa de uma função que será usada apenas uma vez ou quando deseja passar uma função como argumento para outra função.

Para criar uma função anônima, você pode atribuí-la a uma variável ou passá-la diretamente como argumento para outra função. Veja um exemplo:

```
// Atribuindo uma função anônima a uma variável
const soma = function(a, b) {
  return a + b;
}

// Passando uma função anônima diretamente como argumento para outra função
const numeros = [1, 2, 3, 4, 5];
numeros.forEach(function(numero) {
  console.log(numero);
});
```
_Observe que, no segundo exemplo, estamos usando o método `forEach()` em um array e passando uma função anônima como argumento. Essa função é executada para cada elemento do array._
<br><br>

Também é possível criar funções anônimas usando arrow functions. Veja um exemplo:

```
// Criando uma função anônima usando arrow function
const quadrado = (num) => {
  return num * num;
}

// Passando uma função anônima criada com arrow function como argumento para outra função
const numeros = [1, 2, 3, 4, 5];
const numerosAoQuadrado = numeros.map((numero) => {
  return numero * numero;
});
console.log(numerosAoQuadrado); // [1, 4, 9, 16, 25]
```
_Observe que, no segundo exemplo, estamos usando o método `map()` em um array e passando uma função anônima criada com arrow function como argumento. Essa função é executada para cada elemento do array e retorna um novo array com os resultados das operações._
<br><br>

**As funções anônimas são muito úteis porque permitem que você crie funções dinamicamente e as passe como argumentos para outras funções.**
<br><br><hr>

## Arrow function
As Arrow Functions são uma forma concisa de escrever funções em javascript, introduzida no ES6 (ECMAScript 2015). Elas são chamadas de `"Arrow"` porque usam a sintaxe de uma seta `"=>"` para definir a função. As Arrow Functions são úteis quando se deseja escrever funções curtas e expressivas de maneira mais concisa.

A sintaxe básica de uma Arrow Function é a seguinte:

```
(param1, param2, ..., paramN) => { statements }
```
_Onde:
- `param1`, `param2`, ..., `paramN` são os parâmetros da função.
- `statements` são as instruções da função._
<br><br>

Abaixo um exemplo simples de uma Arrow Function que recebe dois parâmetros e retorna sua soma:

```
const sum = (a, b) => a + b;
```
_Observe que a Arrow Function `sum` tem dois parâmetros `a` e `b`, e retorna a soma dos dois parâmetros usando a expressão `a + b`. A Arrow Function é atribuída a uma constante `sum`, que pode ser chamada como uma função normal._
<br><br>

As Arrow Functions também podem ser usadas para funções com um único parâmetro, sem a necessidade de usar parênteses ao redor do parâmetro. Veja o exemplo:

```
const double = x => x * 2;
```
_Observe que a Arrow Function `double` tem um único parâmetro `x`, e retorna o dobro do valor do parâmetro usando a expressão `x * 2`._
<br><br>

Outra característica interessante das Arrow Functions é que elas são sempre funções anônimas. Isso significa que elas não têm um nome como as funções tradicionais, mas podem ser atribuídas a uma variável ou constante e chamadas por essa referência. Por exemplo:

```
const greet = name => console.log(`Hello, ${name}!`);
greet("John"); // Output: "Hello, John!"
```
_Observe que a Arrow Function `greet` é atribuída à constante `greet`, que é usada para chamar a função passando o argumento `"John"`. A função imprime "Hello, John!" no console._
<br><br>

As Arrow Functions também podem ser usadas como funções de retorno em outras funções, o que pode tornar o código mais legível e conciso. Veja o exemplo:

```
function createGreeting(name) {
  return () => console.log(`Hello, ${name}!`);
}

const greetJohn = createGreeting("John");
const greetJane = createGreeting("Jane");

greetJohn(); // Output: "Hello, John!"
greetJane(); // Output: "Hello, Jane!"
```
_Observe que a função `createGreeting` retorna uma Arrow Function que usa a variável `name` definida no escopo da função `createGreeting`. Essa Arrow Function é atribuída a `greetJohn` e `greetJane`, que são chamadas para imprimir "Hello, John!" e "Hello, Jane!" no console, respectivamente._
<br><br>

As Arrow Functions também podem ser usadas em conjunto com métodos de array como `map`, `filter` e `reduce` para manipulação de dados. Aqui está um exemplo simples:

```
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); // Output:
```
<br><br><hr>

