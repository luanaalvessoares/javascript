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

