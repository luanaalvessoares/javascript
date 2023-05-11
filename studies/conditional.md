
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

## Switch case
A declaração `switch` é usada em javascript para executar diferentes ações com base em diferentes condições. É semelhante a uma sequência de declarações `if`, mas é mais fácil de ler.  A sintaxe do `switch` é a seguinte:

```
switch (expressão) {
  case valor1:
    // código a ser executado caso expressão seja igual a valor1
    break;
  case valor2:
    // código a ser executado caso expressão seja igual a valor2
    break;
  default:
    // código a ser executado caso nenhum dos casos anteriores seja verdadeiro
    break;
}
```
<br><br>

O `switch` avalia a expressão passada como argumento e verifica se ela é igual a um dos valores especificados pelos `case`. Caso seja verdadeiro, o bloco de código correspondente ao `case` é executado. Se nenhum dos `case` corresponder à expressão, o bloco `default` é executado. Veja o exemplo:

```
const diaDaSemana = 5;
let mensagem;

switch (diaDaSemana) {
  case 0:
    mensagem = 'Domingo';
    break;
  case 1:
    mensagem = 'Segunda-feira';
    break;
  case 2:
    mensagem = 'Terça-feira';
    break;
  case 3:
    mensagem = 'Quarta-feira';
    break;
  case 4:
    mensagem = 'Quinta-feira';
    break;
  case 5:
    mensagem = 'Sexta-feira';
    break;
  case 6:
    mensagem = 'Sábado';
    break;
  default:
    mensagem = 'Dia da semana inválido';
    break;
}

console.log(mensagem); // Saída: Sexta-feira
```
_Neste exemplo, a variável `diaDaSemana` contém o valor `5`. Quando a expressão `switch` é executada, ela verifica se `diaDaSemana` é igual a um dos valores especificados pelos `case`. Como `diaDaSemana` é igual a `5`, o bloco de código correspondente ao `case 5` é executado, atribuindo a mensagem "Sexta-feira" à variável `mensagem`. Em seguida, o valor da variável `mensagem` é impresso no console._
<br><br><hr>

