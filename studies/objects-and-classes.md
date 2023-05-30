## Objetos
Em JavaScript, objetos são estruturas de dados que permitem armazenar e organizar valores relacionados e suas funcionalidades associadas. Um objeto é uma coleção de propriedades, onde cada propriedade é composta por uma chave (também chamada de nome) e um valor. O valor pode ser qualquer tipo de dado válido em JavaScript, como strings, números, arrays, outros objetos e até mesmo funções.
<br>

Abaixo alguns conceitos importantes sobre objetos em JavaScript:
<br>

**Criação de objetos**
Existem várias maneiras de criar objetos em JavaScript. Duas das formas mais comuns são usando a sintaxe literal de objetos e o construtor `Object()`. Aqui estão exemplos de cada um:

```
// Sintaxe literal de objetos
const pessoa = {
  nome: 'Alice',
  idade: 25,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

// Usando o construtor Object()
const carro = new Object();
carro.marca = 'Toyota';
carro.ano = 2021;
```
_Nesses exemplos, criamos objetos `pessoa` e `carro` com suas propriedades e valores associados._
<br><br>

**Acesso às propriedades**
Podemos acessar as propriedades de um objeto usando a notação de ponto (`objeto.propriedade`) ou a notação de colchetes (`objeto['propriedade']`). Aqui está um exemplo:

```
console.log(pessoa.nome); // "Alice"
console.log(carro['marca']); // "Toyota"
```
<br><br>

**Adição, modificação e exclusão de propriedades**
Podemos adicionar novas propriedades, modificar o valor de propriedades existentes e excluir propriedades de um objeto. Aqui estão exemplos dessas operações:

```
pessoa.sobrenome = 'Silva'; // Adição de nova propriedade
pessoa.idade = 26; // Modificação de valor de propriedade
delete pessoa.idade; // Exclusão de propriedade
```
<br><br>

**Métodos**
Um método é uma função que está associada a um objeto. Ele pode ser chamado para executar uma ação específica no contexto do objeto. Aqui está um exemplo:

```
const pessoa = {
  nome: 'Alice',
  idade: 25,
  saudacao: function() {
    console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
  }
};

pessoa.saudacao(); // "Olá, meu nome é Alice e eu tenho 25 anos."
```
_Neste exemplo, `saudacao` é um método associado ao objeto `pessoa` que imprime uma mensagem de saudação com base nas propriedades do objeto._
<br><br>

