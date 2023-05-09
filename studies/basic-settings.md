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
