## getElementById
A função `getElementById` é um método do objeto `document` em javascript, que é usado para selecionar um elemento HTML com base no seu atributo `id`. Essa função retorna uma referência para o elemento encontrado ou `null` se nenhum elemento correspondente for encontrado.
<br>
Para usar o `getElementById`, você precisa chamar a função `document.getElementById` e passar o valor do `id` do elemento que deseja selecionar como argumento.
<br>
Veja o exemplo:

```
<!DOCTYPE html>
<html>
<body>

<h1 id="titulo">Título do Documento</h1>

<script>
const tituloElemento = document.getElementById("titulo");
console.log(tituloElemento); // Output: <h1 id="titulo">Título do Documento</h1>
</script>

</body>
</html>
```
_Neste exemplo, a função `getElementById` é usada para selecionar o elemento com o `id` "titulo" e armazenar a referência a esse elemento na variável `tituloElemento`. Em seguida, o elemento selecionado é exibido no console._
<br><br>
Além disso, o método `getElementById` também pode ser usado para manipular o conteúdo ou os atributos do elemento selecionado. Por exemplo, você pode alterar o texto dentro de um elemento ou modificar seus atributos:

Veja esse exemplo de manipulação de conteúdo:

```
<!DOCTYPE html>
<html>
<body>

<p id="paragrafo">Texto inicial</p>

<script>
const paragrafoElemento = document.getElementById("paragrafo");
paragrafoElemento.textContent = "Novo texto";
</script>

</body>
</html>
```
_Neste exemplo, o conteúdo do elemento com o `id` "paragrafo" é alterado usando a propriedade `textContent`._
<br><br>
Agora veja esse exemplo de manipulação de atributos:
```
<!DOCTYPE html>
<html>
<body>

<img id="imagem" src="imagem.jpg" alt="Imagem">

<script>
const imagemElemento = document.getElementById("imagem");
imagemElemento.src = "nova_imagem.jpg";
imagemElemento.alt = "Nova Imagem";
</script>

</body>
</html>
```
_Neste exemplo, os atributos `src` e `alt` do elemento com o `id` "imagem" são alterados para exibir uma nova imagem e um novo texto alternativo._
<br><br>
Em resumo, o `getElementById` é usado para selecionar elementos HTML com base em seus `id` e permite manipular seu conteúdo ou atributos de forma dinâmica usando javascript.
<br><br><hr>

## getElementByTagName
A função `getElementsByTagName` é um método do objeto `document` em javascript, que é usado para selecionar um ou mais elementos HTML com base em seu nome de tag. Essa função retorna uma coleção de elementos que correspondem à tag especificada.
<br>
Para usar o `getElementsByTagName`, você precisa chamar a função `document.getElementsByTagName` e passar o nome da tag que deseja selecionar como argumento. O método retornará uma coleção de elementos correspondentes.
<br>
Veja o exemplo:

```
<!DOCTYPE html>
<html>
<body>

<h1>Título 1</h1>
<h2>Título 2</h2>
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>

<script>
const paragrafos = document.getElementsByTagName("p");
console.log(paragrafos); // Output: HTMLCollection [p, p]
</script>

</body>
</html>
```
_Neste exemplo, a função `getElementsByTagName` é usada para selecionar todos os elementos `<p>` no documento e armazenar a coleção de elementos na variável `paragrafos`. Em seguida, a coleção de elementos é exibida no console._
<br><br>
É importante notar que a função `getElementsByTagName` retorna uma coleção HTML, não um array comum. Para iterar sobre os elementos selecionados, você pode usar um loop, como `for` ou `forEach`, ou acessar os elementos por índice.
<br>
Veja esse exemplo de iteração com loop `for`:

```
<!DOCTYPE html>
<html>
<body>

<h1>Título 1</h1>
<h2>Título 2</h2>
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>

<script>
const paragrafos = document.getElementsByTagName("p");
for (let i = 0; i < paragrafos.length; i++) {
  console.log(paragrafos[i].textContent);
}
</script>

</body>
</html>
```
_Neste exemplo, usamos um loop `for` para iterar sobre os elementos selecionados e exibir o texto de cada parágrafo no console._
<br><br>
Você também pode acessar um elemento específico por índice, se souber a posição do elemento na coleção:
<br>
Veja esse exemplo de acesso a um elemento por índice:

```
<!DOCTYPE html>
<html>
<body>

<h1>Título 1</h1>
<h2>Título 2</h2>
<p>Parágrafo 1</p>
<p>Parágrafo 2</p>

<script>
const paragrafo2 = document.getElementsByTagName("p")[1];
console.log(paragrafo2.textContent); // Output: Parágrafo 2
</script>

</body>
</html>
```
_Neste exemplo, o segundo elemento `<p>` é acessado diretamente pelo índice `[1]` e seu conteúdo é exibido no console._
<br><br>
Em resumo, o `getElementsByTagName` é usado para selecionar elementos HTML com base em seu nome de tag e retorna uma coleção de elementos correspondentes. Essa função permite manipular os elementos selecionados de forma dinâmica usando javascript.
<br><br><hr>

## getElementsByClassName
O método `getElementsByClassName` é usado para selecionar um ou mais elementos HTML com base em suas classes. Ele retorna uma coleção HTML de elementos que possuem a classe especificada.
<br>
Para utilizar o `getElementsByClassName`, você precisa chamar a função `document.getElementsByClassName` e passar o nome da classe desejada como argumento. O método retornará uma coleção de elementos que possuem essa classe.
<br>
Veja o exemplo:

```
<!DOCTYPE html>
<html>
<body>

<div class="box">Caixa 1</div>
<div class="box">Caixa 2</div>
<div class="box">Caixa 3</div>

<script>
const caixas = document.getElementsByClassName("box");
console.log(caixas); // Output: HTMLCollection [div.box, div.box, div.box]
</script>

</body>
</html>
```
_Neste exemplo, a função `getElementsByClassName` é usada para selecionar todos os elementos com a classe "box" e armazenar a coleção de elementos na variável `caixas`. Em seguida, a coleção de elementos é exibida no console._
<br><br>
Assim como `getElementsByTagName`, a função `getElementsByClassName` também retorna uma coleção HTML, não um array comum. Para iterar sobre os elementos selecionados, você pode usar um loop, como `for` ou `forEach`, ou acessar os elementos por índice.

Veja o exemplo de iteração com loop `for`:
```
<!DOCTYPE html>
<html>
<body>

<div class="box">Caixa 1</div>
<div class="box">Caixa 2</div>
<div class="box">Caixa 3</div>

<script>
const caixas = document.getElementsByClassName("box");
for (let i = 0; i < caixas.length; i++) {
  console.log(caixas[i].textContent);
}
</script>

</body>
</html>
```
_Neste exemplo, usamos um loop `for` para iterar sobre os elementos selecionados e exibir o conteúdo de cada caixa no console._
<br><br>
Você também pode acessar um elemento específico por índice, se souber a posição do elemento na coleção:
<br>
Veja o exemplo de acesso a um elemento por índice:
```
<!DOCTYPE html>
<html>
<body>

<div class="box">Caixa 1</div>
<div class="box">Caixa 2</div>
<div class="box">Caixa 3</div>

<script>
const caixa2 = document.getElementsByClassName("box")[1];
console.log(caixa2.textContent); // Output: Caixa 2
</script>

</body>
</html>
```
_Neste exemplo, o segundo elemento com a classe "box" é acessado diretamente pelo índice `[1]` e seu conteúdo é exibido no console._
<br><br>
Em resumo, o `getElementsByClassName` é usado para selecionar elementos HTML com base em suas classes e retorna uma coleção de elementos correspondentes. Essa função permite manipular os elementos selecionados de forma dinâmica usando javascript.
<br><br><hr>

## querySelector
O método `querySelector` é usado para selecionar elementos HTML com base em um seletor CSS. Ele retorna o primeiro elemento correspondente ao seletor especificado.
<br>
Para usar o `querySelector`, você precisa chamar a função `document.querySelector` e passar o seletor desejado como argumento. O seletor pode ser uma classe, um ID, um elemento HTML específico ou qualquer outro seletor CSS válido.
<br>
Veja o exemplo:

```
<!DOCTYPE html>
<html>
<body>

<div class="box">Caixa 1</div>
<div class="box">Caixa 2</div>
<div class="box">Caixa 3</div>

<script>
const caixa = document.querySelector(".box");
console.log(caixa.textContent); // Output: Caixa 1
</script>

</body>
</html>
```
_Neste exemplo, o `querySelector` é usado para selecionar o primeiro elemento com a classe "box" e armazená-lo na variável `caixa`. Em seguida, o conteúdo desse elemento é exibido no console._
<br><br>
Você também pode usar seletores mais específicos para encontrar elementos específicos:
<br>
Veja o exemplo com seletores mais específicos:

```
<!DOCTYPE html>
<html>
<body>

<div class="container">
  <div class="box">Caixa 1</div>
  <div class="box">Caixa 2</div>
  <div class="box">Caixa 3</div>
</div>

<script>
const caixa = document.querySelector(".container .box");
console.log(caixa.textContent); // Output: Caixa 1
</script>

</body>
</html>
```
_Neste exemplo, o `querySelector` é usado para selecionar o primeiro elemento com a classe "box" dentro de um elemento com a classe "container". Assim, apenas o primeiro elemento dentro do elemento "container" será selecionado e seu conteúdo será exibido no console._
<br><br>
O `querySelector` também pode ser usado para selecionar elementos com base em outros atributos, como ID:
<br>
Veja o exemplo com seleção por ID:

```
<!DOCTYPE html>
<html>
<body>

<div id="container">
  <div class="box">Caixa 1</div>
  <div class="box">Caixa 2</div>
  <div class="box">Caixa 3</div>
</div>

<script>
const container = document.querySelector("#container");
console.log(container.textContent); // Output: Caixa 1Caixa 2Caixa 3
</script>

</body>
</html>
```
_Neste exemplo, o `querySelector` é usado para selecionar o elemento com o ID "container" e armazená-lo na variável `container`. Em seguida, o conteúdo desse elemento, incluindo o conteúdo dos elementos filhos, é exibido no console._
<br><br>
Em resumo, o `querySelector` é usado para selecionar o primeiro elemento correspondente a um seletor CSS especificado. Ele oferece flexibilidade ao permitir seletores mais específicos, como classes, IDs e seletores de atributos, para encontrar elementos desejados na página HTML.
<br><br><hr>

## querySelectorAll
O método `querySelectorAll` é usado para selecionar todos os elementos HTML que correspondem a um seletor CSS especificado. Ele retorna uma lista de elementos correspondentes, conhecida como `NodeList`.
<br>