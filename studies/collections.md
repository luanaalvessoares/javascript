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

**Arrays com Funções**
Em JavaScript, um array pode conter funções como seus elementos. Isso permite que você armazene um conjunto de funções para uso posterior. Aqui está um exemplo simples:
```
const funcoes = [
  function() {
    console.log('Olá');
  },
  function() {
    console.log('Mundo');
  }
];

funcoes[0](); // 'Olá'
funcoes[1](); // 'Mundo'
```
_Nesse exemplo, o array `funcoes` contém duas funções. Podemos chamar as funções através dos índices do array e os parênteses `()` para invocá-las._
<br><br>

**Os arrays são uma parte fundamental do JavaScript e são amplamente utilizados em diversas situações. Eles são flexíveis, permitem armazenar e manipular coleções de elementos de forma eficiente. Seja para armazenar uma lista de itens, realizar iterações, aplicar transformações ou executar lógica personalizada, os arrays são uma ferramenta poderosa no desenvolvimento de aplicativos JavaScript.**
<br><br><hr>

## Strings
Em JavaScript, uma string é uma sequência de caracteres, como texto, que pode ser armazenada em uma variável. As strings são imutáveis, o que significa que, uma vez criadas, elas não podem ser modificadas. No entanto, é possível realizar várias operações e manipulações em strings por meio de funções e métodos disponíveis.
<br>

**Declaração e acesso aos caracteres da string**
Para criar uma string em JavaScript, você pode usar aspas simples ou duplas, por exemplo:

```
const minhaString = 'Exemplo de uma string';
```
<br><br>

Você também pode usar o template literals (delimitado por crases) para criar strings com interpolação de valores:

```
const nome = 'João';
const idade = 25;
const mensagem = `Olá, meu nome é ${nome} e eu tenho ${idade} anos.`;
```
<br><br>

Para acessar caracteres individuais em uma string, você pode usar a notação de colchetes (`[]`) e o índice do caractere desejado. Lembre-se de que os índices das strings começam em 0. Por exemplo:

```
const minhaString = 'Exemplo';
console.log(minhaString[0]); // 'E'
console.log(minhaString[2]); // 'e'
```
<br><br>

**Funções e Strings**
As strings são frequentemente usadas com funções para realizar várias operações e manipulações. Aqui estão alguns exemplos de uso comum:

- Comprimento da string:
A função `length` retorna o número de caracteres em uma string. Por exemplo:

```
const minhaString = 'Exemplo';
console.log(minhaString.length); // 7
```
<br><br>

- Conversão de caixa (maiúsculas e minúsculas):
As funções `toUpperCase()` e `toLowerCase()` são usadas para converter os caracteres de uma string em maiúsculas ou minúsculas, respectivamente. Por exemplo:

```
const minhaString = 'Exemplo';
console.log(minhaString.toUpperCase()); // 'EXEMPLO'
console.log(minhaString.toLowerCase()); // 'exemplo'
```
<br><br>

- Concatenação de strings:
A função `concat()` é usada para concatenar duas ou mais strings. Por exemplo:

```
const string1 = 'Olá';
const string2 = 'Mundo';
const resultado = string1.concat(' ', string2);
console.log(resultado); // 'Olá Mundo'
```
<br><br>

**Strings com Funções**
Em JavaScript, você pode chamar funções em strings para realizar várias manipulações e operações. Aqui estão alguns exemplos:

- Buscar um caractere ou uma sequência de caracteres:
A função `indexOf()` retorna o índice da primeira ocorrência de um caractere ou uma sequência de caracteres em uma string. Por exemplo:

```
const minhaString = 'Exemplo de uma string';
console.log(minhaString.indexOf('de')); // 8
```
<br><br>

- Substituir caracteres ou sequências de caracteres:
A função `replace()` é usada para substituir uma sequência de caracteres por outra em uma string. Por exemplo:

```
const minhaString = 'Exemplo de uma string';
const novaString = minhaString.replace('string', 'frase');
console.log(novaString); // 'Exemplo de uma frase'
```
<br><br>

- Dividir uma string em um array de substrings:
A função `split()` divide uma string em um array de substrings com base em um separador especificado. Por exemplo:

```
const minhaString = 'Exemplo de uma string';
const arraySubstrings = minhaString.split(' ');
console.log(arraySubstrings); // ['Exemplo', 'de', 'uma', 'string']
```
<br><br>

**Esses são apenas alguns exemplos de como as strings podem ser usadas com funções em JavaScript. As strings são amplamente utilizadas para manipulação de texto, processamento de dados e apresentação de informações em aplicativos. JavaScript oferece uma variedade de funções e métodos para trabalhar com strings, permitindo que você realize diversas operações e manipulações para atender às suas necessidades.**
<br><br><hr>

## Map
Em JavaScript, o objeto `Map` é uma coleção de pares chave-valor, onde cada valor pode ser recuperado usando sua chave correspondente. Ao contrário dos arrays, as chaves em um `Map` podem ser de qualquer tipo, como strings, números, objetos e até mesmo funções.
<br>

**Criação de um `Map`**
Para criar um novo `Map`, você pode usar a seguinte sintaxe:

```
const meuMap = new Map();
```
<br><br>

**Adição de elementos**
Para adicionar um par chave-valor ao `Map`, você pode usar o método `set()`:

```
meuMap.set(chave, valor);
```
<br>

Por exemplo:

```
const meuMap = new Map();
meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');
```
<br><br>

**Acesso aos elementos**
Você pode acessar o valor correspondente a uma chave usando o método `get()`:

```
meuMap.get(chave);
```
<br>

Por exemplo:

```
console.log(meuMap.get('chave1')); // 'valor1'
```
<br><br>

**Verificação de existência de uma chave**
Você pode verificar se uma chave existe no `Map` usando o método `has()`:

```
meuMap.has(chave);
```
<br>

Por exemplo:

```
console.log(meuMap.has('chave1')); // true
console.log(meuMap.has('chave3')); // false
```
<br><br>

**Remoção de elementos**
Para remover um elemento do `Map`, você pode usar o método `delete()`:

```
meuMap.delete(chave);
```
<br>

Por exemplo:

```
meuMap.delete('chave2');
```
<br><br>

**Iteração sobre os elementos**
Existem várias maneiras de iterar sobre os elementos de um `Map`. Alguns exemplos são:
<br>

- Usando o método `forEach()`:

```
meuMap.forEach(function(valor, chave) {
  console.log(chave, valor);
});
```
<br><br>

- Usando um loop `for...of`:

```
for (const [chave, valor] of meuMap) {
  console.log(chave, valor);
}
```
<br><br>

- Obtendo as chaves usando `keys()` e os valores usando `values()`:

```
for (const chave of meuMap.keys()) {
  console.log(chave);
}

for (const valor of meuMap.values()) {
  console.log(valor);
}
```
<br><br>

Veja um exemplo simples de uso de uma coleção `map`:

```
const meuMap = new Map();
meuMap.set('chave1', 'valor1');
meuMap.set('chave2', 'valor2');

console.log(meuMap.get('chave1')); // 'valor1'
console.log(meuMap.has('chave2')); // true

meuMap.delete('chave1');

for (const [chave, valor] of meuMap) {
  console.log(chave, valor);
}
```
<br><br>

Agora um exemplo mais complexo utilizando também `template strings`:

```
const estudantes = new Map();

const aluno1 = { nome: 'João', idade: 20 };
const aluno2 = { nome: 'Maria', idade: 22 };
const aluno3 = { nome: 'Pedro', idade: 19 };

estudantes.set(aluno1, 'Aprovado');
estudantes.set(aluno2, 'Reprovado');
estudantes.set(aluno3, 'Aprovado');

for (const [aluno, status] of estudantes

) {
  console.log(`${aluno.nome} - ${aluno.idade} anos: ${status}`);
}
```
_Nesse exemplo, usamos objetos como chaves e atribuímos um status para cada aluno em um `Map`. Em seguida, percorremos o `Map` para exibir o nome, idade e status de cada aluno._
<br><br>

**O `Map` é útil quando você precisa associar valores a chaves e acessá-los de forma eficiente. Ele fornece métodos para adicionar, recuperar, verificar a existência e remover elementos de forma simples. Além disso, permite a iteração fácil sobre seus elementos. O `Map` é uma estrutura de dados versátil e poderosa para lidar com coleções chave-valor em JavaScript.**
<br><br><hr>

## Set
Em JavaScript, o objeto `Set` é uma coleção de valores únicos, o que significa que não pode conter elementos duplicados. O Set fornece métodos para adicionar, remover e verificar a existência de elementos. É uma estrutura de dados útil quando você precisa armazenar uma lista de valores exclusivos.
<br>

**Criação de um Set**
Para criar um novo Set, você pode usar a seguinte sintaxe:

```
const meuSet = new Set();
```
<br><br>

**Adição de elementos**
Para adicionar um elemento ao Set, você pode usar o método add():

```
meuSet.add(valor);
```
<br>

Por exemplo:

```
const meuSet = new Set();
meuSet.add('valor1');
meuSet.add('valor2');
```
<br><br>

**Verificação de existência de um elemento**
Você pode verificar se um elemento existe no Set usando o método has():

```
meuSet.has(valor);
```
<br>

Por exemplo:

```
console.log(meuSet.has('valor1')); // true
console.log(meuSet.has('valor3')); // false
```
<br><br>

**Remoção de elementos**
Para remover um elemento do Set, você pode usar o método delete():

```
meuSet.delete(valor);
```
<br>

Por exemplo:

```
meuSet.delete('valor2');
```
<br><br>

**Iteração sobre os elementos**
Existem várias maneiras de iterar sobre os elementos de um Set. Alguns exemplos são:

- Usando o método forEach():

```
meuSet.forEach(function(valor) {
  console.log(valor);
});
```
<br>

- Usando um loop for...of:

```
for (const valor of meuSet) {
  console.log(valor);
}
```
<br><br>

**Obtendo o tamanho do Set**
Você pode obter o número de elementos em um Set usando a propriedade size:

```
console.log(meuSet.size);
```
<br><br>

Veja um exemplo simples do uso de uma coleção `Set`:

```
const meuSet = new Set();
meuSet.add('valor1');
meuSet.add('valor2');

console.log(meuSet.has('valor1')); // true

meuSet.delete('valor2');

for (const valor of meuSet) {
  console.log(valor);
}
```
_Neste exemplo, criamos um Set e adicionamos dois valores. Em seguida, verificamos a existência do valor 'valor1', removemos o valor 'valor2' e, por fim, iteramos sobre os valores restantes._
<br><br>

Agora um exemplo mais completo que remove valores duplicados:

```
const numeros = [1, 2, 3, 4, 4, 5, 5, 5];
const numerosUnicos = new Set(numeros);

console.log(numerosUnicos); // Set { 1, 2, 3, 4, 5 }
console.log(numerosUnicos.size); // 5
```
_Neste exemplo, temos uma lista de números. Ao criar um Set a partir dessa lista, os valores duplicados são automaticamente removidos, resultando em um conjunto de valores únicos._
<br><br>

**O Set é útil quando você precisa armazenar uma coleção de valores únicos e realizar operações de conjunto, como união, interseção e diferença. Ele oferece métodos eficientes para adicionar, remover e verificar elementos e é uma ótima opção quando a ordem dos elementos não é importante.**
