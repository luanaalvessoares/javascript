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

**É importante observar que as template strings são suportadas em versões mais recentes do JavaScript, como o ECMAScript 6 (ES6) e versões posteriores. Se você estiver trabalhando com uma versão mais antiga, pode ser necessário usar outras abordagens para obter recursos semelhantes, como concatenação de strings ou o método `join()` em arrays.**
<br><br><hr>

## Promises
Promises são objetos em JavaScript que representam a eventual conclusão (ou falha) de uma operação assíncrona. Elas são usadas para lidar com fluxos de código assíncronos de maneira mais legível e organizada. Uma promise pode ter três estados: pendente (pending), resolvida (fulfilled) e rejeitada (rejected).
<br>

Uma promise pode ser criada utilizando o construtor `Promise`, que recebe uma função executora com dois parâmetros: `resolve` e `reject`. A função executora é chamada imediatamente quando a promise é criada e pode conter qualquer código assíncrono, como uma requisição HTTP ou uma leitura de arquivo.
<br>

**Veja esse exemplo de uso de promise para simular um atraso de 2 segundos antes de exibir uma mensagem:**
```
function delayMessage(message, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, delay);
  });
}

delayMessage("Olá, mundo!", 2000)
  .then((result) => {
    console.log(result); // "Olá, mundo!" será exibido após 2 segundos
  });
```
_Nesse exemplo, a função `delayMessage` retorna uma promise que é resolvida com a mensagem após o atraso especificado._
<br><br>

**Agora, vejamos um exemplo mais complexo que envolve múltiplas promises e o método `Promise.all` para aguardar a conclusão de todas as promises:**
```
function fetchData(url) {
  return new Promise((resolve, reject) => {
    // Simulação de uma requisição assíncrona
    setTimeout(() => {
      const data = { id: 1, name: "Exemplo de dado" };
      resolve(data);
    }, 2000);
  });
}

const urls = ["https://api.example.com/1", "https://api.example.com/2", "https://api.example.com/3"];

const promises = urls.map((url) => fetchData(url));

Promise.all(promises)
  .then((results) => {
    console.log(results); // Array com os dados de todas as requisições
  })
  .catch((error) => {
    console.error(error); // Tratamento de erro, caso uma ou mais promises sejam rejeitadas
  });
```

_Nesse exemplo, a função `fetchData` simula uma requisição assíncrona e retorna uma promise que é resolvida com os dados após um atraso de 2 segundos. O método `Promise.all` é usado para aguardar a conclusão de todas as promises retornadas pela função `fetchData` para todas as URLs. O resultado é um array com os dados de todas as requisições, que é exibido no console._
<br><br>

**Esses exemplos ilustram como as promises podem ser poderosas ao lidar com operações assíncronas e simplificar o código, permitindo que você controle melhor o fluxo de execução e trate erros de maneira eficiente.**