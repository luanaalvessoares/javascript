Aqui estão algumas maneiras de adicionar JavaScript em um projeto front-end:
<br><br>

### Inline
Para inserir javascript inline em seu projeto, temos que adicionar o código diretamente na marcação HTML usando a tag ``<script>``. Veja o exemplo:

```
<body>
  <h1>Exemplo de JavaScript Inline</h1>
  <script>
    console.log('Olá, mundo!');
  </script>
</body>
```
<br><br><br><hr>

### Externo
Para inserir em seu index HTML um arquivo javascript externo temos que referenciá-lo na marcação HTML com a tag ``<script>``. Veja como fazer:

```
<body>
  <h1>Exemplo de Arquivo JavaScript Externo</h1>
  <script src="script.js"></script>
</body>
```
<br><br>

Podemos também adicioná-lo ao cabeçalho, dentro da tag ``<head>``:

```
<head>
  <script src="script.js"></script>
</head>
```
<br><br>

**_É importante frisar que quando o javascript é adicionado ao `head` do HTML, ele é carregado antes do conteúdo da página e pode atrasar a renderização. Já quando adicionado no final do `body`, o script só é carregado após o conteúdo da página ser renderizado. Por isso, é recomendado adicionar scripts no final do `body` para melhorar a performance da página e evitar possíveis erros de carregamento de elementos do DOM._**
<br><br><br><hr>

### Módulos ES
Podemos também incorporar em nosso index HTML um módulo ES, para importar e exportar códigos entre arquivos javascript. Abaixo um exemplo:

```
<body>
  <h1>Exemplo de Módulo ES JavaScript</h1>
  <script type="module">
    import { hello } from './script.js';
    hello();
  </script>
</body>
```

**_Um módulo ES é um arquivo JavaScript que contém código isolado e pode exportar/importar funcionalidades para serem utilizadas em outros arquivos. É uma forma de organizar e modularizar o código JavaScript em aplicações complexas._**