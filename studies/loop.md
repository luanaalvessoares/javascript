Loops em javascript são estruturas de controle de fluxo que permitem que um bloco de código seja executado repetidamente enquanto uma condição específica for verdadeira. Eles são usados para automatizar tarefas repetitivas e processar grandes conjuntos de dados de forma mais eficiente.
<br>

## For
O `loop for` é uma estrutura de repetição que permite executar um bloco de código várias vezes, de acordo com uma condição estabelecida. A estrutura básica do `for` consiste em uma declaração inicial, uma condição a ser avaliada a cada iteração e um incremento ou decremento da variável de controle.  O exemplo abaixo ilustra um `for` que imprime os números de 1 a 5:

```
for (let i = 1; i <= 5; i++) {
  console.log(i); // 1 2 3 4 5
}
```
_Na primeira parte da declaração, `let i = 1`, é inicializada a variável de controle `i` com o valor 1. Na segunda parte, `i <= 5`, é definida a condição que deve ser avaliada a cada iteração, que neste caso é verificar se `i` é menor ou igual a 5. Na terceira parte, `i++`, é incrementado o valor da variável de controle em 1 unidade a cada iteração._
<br><br>

Note que o `loop for` também pode ser utilizado para percorrer arrays, usando a propriedade `length` do array para definir a condição de parada do loop:

```
const arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
```
_Nesse caso, o loop percorre todos os elementos do array `arr` e imprime cada um deles._
<br><br><hr>

