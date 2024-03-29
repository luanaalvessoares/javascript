### Use strict
``use stric`` é uma diretiva de javascript que indica ao navegador para executar o código em `modo estrito`. Isso significa que o código será executado com regras mais rígidas de sintaxe, o que pode ajudar a evitar erros e tornar o código mais seguro. Ele previne o uso de certas ações inseguras e não recomendadas em javascript, incluindo o uso de variáveis não declaradas, a atribuição de valores a propriedades de objetos somente leitura, o uso de palavras-chave reservadas como nomes de variáveis ​​e funções, entre outros. Isso ajuda a evitar erros e torna o código mais consistente e seguro. Veja como e onde o `use strict` atua:
<br>
- `Uso de variáveis não declaradas`: Em modo estrito, o uso de variáveis ​​não declaradas é proibido, o que ajuda a evitar erros de digitação ou variáveis ​​não intencionais.
- `Atribuição a propriedades somente leitura`: Em modo estrito, atribuir valores a propriedades de objetos somente leitura resultará em um erro.
- `Palavras-chave reservadas`: Em modo estrito, o uso de palavras-chave reservadas (como "eval" ou "arguments") como nome de variáveis ou parâmetros de função é proibido, evitando erros de sintaxe ou comportamentos inesperados.
<br>
Para usá-lo, basta adicionar a diretiva `use strict` no início do escopo do seu código javascript. Veja:

```
"use strict";

function minhaFuncao() {
  // código em modo estrito
}
```

## Casos em que ponto e vírgula (;) é obrigatório
Em JavaScript, o ponto e vírgula (;) é usado para separar instruções ou comandos individuais. Embora o ponto e vírgula seja opcional em muitos casos, existem situações em que ele é obrigatório para evitar comportamentos inesperados no código. Vejamos abaixo os casos em que o ponto e vírgula é obrigatório:
<br>

**Separação de instruções em uma linha:**
O ponto e vírgula é usado para separar múltiplas instruções em uma única linha. Se você tiver várias instruções em uma linha, cada uma delas deve ser finalizada com um ponto e vírgula.

```
const a = 5; const b = 10; const c = a + b;
```
<br><br>

**Declaração de função imediatamente invocada:**
Em uma declaração de função imediatamente invocada (IIFE), o ponto e vírgula é necessário para separar a expressão da função e a chamada imediata.

```
(function() {
  // código da função
})();
```
<br><br>

**Loops for/of e for/in:**
Ao usar loops for/of ou for/in, é recomendado o uso de ponto e vírgula após cada expressão do loop.

```
const array = [1, 2, 3];
for (const element of array) {
  // código do loop
}

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  // código do loop
}
```
<br><br>

**Uso de expressões após o comando return, throw ou break:**
Se você tiver uma expressão após um comando return, throw ou break, é necessário colocar um ponto e vírgula antes dessa expressão.

```
function myFunction() {
  if (condition) {
    return 1;
  }
  return 2;
}
```
<br><br>

**É importante notar que o JavaScript possui um mecanismo chamado "inserção automática de ponto e vírgula" (Automatic Semicolon Insertion - ASI), que adiciona automaticamente pontos e vírgulas em certas situações onde eles são omitidos. No entanto, confiar exclusivamente no ASI pode levar a erros sutis no código, portanto, é recomendado incluir explicitamente os pontos e vírgulas nos lugares apropriados.**
<br>

**_Embora o ponto e vírgula seja obrigatório nos casos mencionados acima, é comum e recomendado também utilizá-lo ao final de cada instrução como boa prática de codificação, para evitar problemas e ambiguidades em situações futuras._**