## Arrays
Em JavaScript, um array é uma estrutura de dados que permite armazenar vários elementos em uma única variável. Os arrays são objetos especiais que possuem propriedades e métodos integrados para facilitar a manipulação e processamento dos elementos contidos neles.
<br>

**Declaração e acesso aos elementos do array**
Para criar um array, você pode usar a seguinte sintaxe:

```
const meuArray = [elemento1, elemento2, elemento3];
```
<br><br>

Os elementos do array podem ser de qualquer tipo, incluindo números, strings, objetos, funções e até mesmo outros arrays. Os elementos são acessados pelo seu índice, que começa em 0. Por exemplo:

```
console.log(meuArray[0]); // Acessa o primeiro elemento do array
console.log(meuArray[2]); // Acessa o terceiro elemento do array
```
<br><br>

**Funções e Arrays**
Os arrays são frequentemente usados em conjunto com funções para processar e manipular seus elementos de forma conveniente. Aqui estão alguns exemplos de uso comum:

- Iterar sobre os elementos do array:
É comum usar loops para percorrer todos os elementos de um array e executar alguma lógica em cada um deles. Por exemplo, usando um loop `for`:

```
const numeros = [1, 2, 3, 4, 5];

for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}
```
<br><br>

- Manipular os elementos do array usando métodos de array:
JavaScript fornece vários métodos úteis para manipular arrays. Alguns exemplos comuns são:
- `push()`: Adiciona um elemento no final do array.
- `pop()`: Remove o último elemento do array e retorna o elemento removido.
- `shift()`: Remove o primeiro elemento do array e retorna o elemento removido.
- `unshift()`: Adiciona um elemento no início do array.
- `splice()`: Permite adicionar, remover ou substituir elementos em qualquer posição do array.
- `concat()`: Combina dois ou mais arrays e retorna um novo array resultante.
- `slice()`: Retorna uma cópia superficial (shallow copy) de parte do array.
<br>

Aqui está um exemplo que usa alguns desses métodos:

```
const frutas = ['maçã', 'banana', 'laranja'];

frutas.push('morango');
console.log(frutas); // ['maçã', 'banana', 'laranja', 'morango']

frutas.pop();
console.log(frutas); // ['maçã', 'banana', 'laranja']

frutas.splice(1, 1, 'uva');
console.log(frutas); // ['maçã', 'uva', 'laranja']
```
<br><br>

