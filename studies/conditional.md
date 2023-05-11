
Condicionais em javascript são estruturas de controle de fluxo que permitem executar diferentes ações com base em uma condição.
<br>

## If Else
O `if-else` é uma estrutura condicional em javascript que permite executar um bloco de código se uma determinada condição for verdadeira, caso contrário, executa outro bloco de código. A sintaxe básica do `if-else` é a seguinte:

```
if (condição) {
  // bloco de código a ser executado se a condição for verdadeira
} else {
  // bloco de código a ser executado se a condição for falsa
}
```
<br><br>

A condição pode ser uma expressão que retorna `true` ou `false`, como uma comparação, uma chamada de função que retorna um valor booleano, ou uma variável booleana. Por exemplo, vamos supor que queremos verificar se um número é par ou ímpar:

```
let numero = 7;

if (numero % 2 === 0) {
  console.log("O número é par");
} else {
  console.log("O número é ímpar");
}
```
_Nesse exemplo, a condição `numero % 2 === 0` verifica se o resto da divisão do `numero` por 2 é igual a 0. Se for verdadeira, o bloco de código dentro do primeiro par de chaves é executado, caso contrário, o bloco de código dentro do segundo par de chaves é executado._
<br><br>

Também é possível encadear vários blocos `if-else` usando a sintaxe `else if`. Por exemplo:

```
let idade = 20;

if (idade < 18) {
  console.log("Você é menor de idade");
} else if (idade < 60) {
  console.log("Você é adulto");
} else {
  console.log("Você é idoso");
}
```
_Nesse exemplo, a condição `idade < 18` verifica se a idade é menor que 18. Se for verdadeira, o primeiro bloco de código é executado. Se não, a condição `idade < 60` verifica se a idade é menor que 60. Se for verdadeira, o segundo bloco de código é executado. Se não, o último bloco de código é executado._
<br><br>

O `if-else` também pode ser usado em conjunto com **operadores lógicos**, como `&&` e `||`, para criar condições mais complexas. Veja:

```
let nota = 8;

if (nota >= 7 && nota < 10) {
  console.log("Você foi aprovado");
} else if (nota === 10) {
  console.log("Você foi aprovado com louvor");
} else {
  console.log("Você foi reprovado");
}
```
_Nesse exemplo, a condição `nota >= 7 && nota < 10` verifica se a nota está entre 7 (inclusivo) e 10 (exclusivo). Se for verdadeira, o primeiro bloco de código é executado. Se não, a condição `nota === 10` verifica se a nota é igual a 10. Se for verdadeira, o segundo bloco de código é executado. Se não, o último bloco de código é executado._
<br><br><hr>

