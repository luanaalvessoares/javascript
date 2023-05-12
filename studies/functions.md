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
As funções com retorno em javascript são aquelas que retornam um valor específico após executarem uma série de instruções. Para definir uma função com retorno, também usamos a palavra-chave `function`, seguida do nome da função, dos parâmetros entre parênteses e do corpo da função, que contém as instruções a serem executadas.
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
Funções parametrizadas em javascript são aquelas que recebem um ou mais parâmetros (argumentos) como entrada e retornam um valor ou executam uma ação com base nesses parâmetros. Os parâmetros são definidos na declaração da função, dentro dos parênteses após o nome da função, e podem ser usados dentro do corpo da função.
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


