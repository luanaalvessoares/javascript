## Template strings
Template strings são uma forma mais conveniente de criar strings em JavaScript, permitindo a interpolação de expressões dentro dessas strings. Em vez de usar aspas simples ('') ou aspas duplas ("") para delimitar uma string, utilizamos crases (``).
<br>

**Interpolação de expressões**
Dentro de uma template string, podemos incluir expressões JavaScript usando a sintaxe `${expressao}`. A expressão é avaliada e seu valor é inserido na string resultante. Por exemplo:

```
const nome = 'Alice';
const idade = 25;

const mensagem = `Olá, meu nome é ${nome} e tenho ${idade} anos.`;
console.log(mensagem);
```
_Neste exemplo, a interpolação `${nome}` e `${idade}` permite que as variáveis sejam inseridas diretamente na string resultante._
<br><br>

**Strings multi-linhas**
As template strings permitem que você crie facilmente strings que ocupam várias linhas sem a necessidade de usar caracteres de escape. Basta digitar o texto diretamente dentro das crases. Por exemplo:

```
const mensagem = `
  Olá,
  Esta é uma mensagem
  de várias linhas.
`;
console.log(mensagem);
```
_Neste exemplo, a string é criada com várias linhas de texto sem a necessidade de caracteres de escape._
<br><br>

**Expressões dentro de interpolação**
Além de variáveis, você também pode usar expressões mais complexas dentro das interpolações. Isso inclui operações matemáticas, chamadas de função e até mesmo expressões ternárias. Por exemplo:

```
const a = 10;
const b = 5;

const resultado = `A soma de ${a} e ${b} é ${a + b}.`;
console.log(resultado); // "A soma de 10 e 5 é 15."
```
_Neste exemplo, a expressão `${a + b}` é avaliada e seu resultado é inserido na string resultante._
<br><br>

**As template strings são muito úteis quando você precisa criar strings complexas que envolvem a combinação de texto fixo e valores dinâmicos. Além disso, elas tornam o código mais legível e fácil de manter.**
<br>
