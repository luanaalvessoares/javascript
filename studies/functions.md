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

