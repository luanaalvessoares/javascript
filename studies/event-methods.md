## addEventListener
O método `addEventListener` em JavaScript permite que você registre uma função que será executada quando um determinado evento ocorrer em um elemento HTML específico. Isso é muito útil para manipular eventos de entrada do usuário, como cliques, pressionamentos de teclas, rolagem, entre outros.
<br>
A sintaxe básica do método é a seguinte:

```
elemento.addEventListener(evento, função, useCapture);
```
<br>
Onde:
- `elemento`: é o elemento HTML no qual o evento ocorrerá.
- `evento`: é o tipo de evento a ser registrado (por exemplo, "click", "keydown", "scroll", etc.).
- `função`: é a função a ser executada quando o evento ocorrer.
- `useCapture`: um valor booleano opcional, que indica se o evento deve ser capturado durante a fase de propagação, que ocorre quando um evento é disparado em um elemento pai e se propaga para seus elementos filhos. O valor padrão é `false`.
<br>
Veja um exemplo de evento de click simples:
```
<button id="myBtn">Clique aqui!</button>
```
<br>
```
const myButton = document.querySelector('#myBtn');

function handleClick() {
  console.log('Botão clicado!');
}

myButton.addEventListener('click', handleClick);
```
_Nesse exemplo, quando o botão com o ID "myBtn" é clicado, a função `handleClick` será executada e a mensagem "Botão clicado!" será impressa no console._
<br><br>

Veja um exemplo de envio de formulário:
```
<form id="myForm">
  <label for="name">Nome:</label>
  <input type="text" id="name">
  <button type="submit">Enviar</button>
</form>
```
<br>
```
const myForm = document.querySelector('#myForm');

function handleSubmit(event) {
  event.preventDefault(); // Evita que o formulário seja enviado
  const nameInput = document.querySelector('#name');
  console.log(`O nome digitado foi: ${nameInput.value}`);
}

myForm.addEventListener('submit', handleSubmit);
```
_Nesse exemplo, a função `handleSubmit` é chamada quando o formulário é submetido, seja clicando no botão "Enviar" ou pressionando a tecla Enter. O método `event.preventDefault()` é usado para evitar que o formulário seja enviado e a página seja recarregada. Em seguida, é obtido o valor do campo de entrada de nome e é impresso no console._
<br><br>

Veja o exemplo com um evento de teclado:
```
<input type="text" id="myInput">
```
<br>
```
const myInput = document.querySelector('#myInput');

function handleKeyDown(event) {
  console.log(`Tecla pressionada: ${event.key}`);
}

function handleKeyUp(event) {
  console.log(`Tecla solta: ${event.key}`);
}

myInput.addEventListener('keydown', handleKeyDown);
myInput.addEventListener('keyup', handleKeyUp);
```
_Nesse exemplo, as funções `handleKeyDown` e `handleKeyUp` são chamadas quando uma tecla é pressionada ou solta, respectivamente, no campo de entrada. A propriedade `event.key` é usada para obter o valor da tecla pressionada._
<br><br>

Veja o exemlo com um evento de rolagem:
```
<div id="myDiv" style="height: 200px; overflow: auto;">
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vestibulum rutrum est.</p>
</div>
```
<br>
```
const myDiv = document.querySelector('#myDiv');

function handleScroll() {
  console.log('Rolagem ocorreu!');
}

myDiv.addEventListener('scroll', handleScroll);
```
_Nesse exemplo, a função `handleScroll` é chamada sempre que ocorrer uma rolagem no elemento `myDiv`. Isso é útil para detectar quando um usuário está visualizando uma parte específica de um conteúdo rolável._
<br><br><hr>

## stopPropagation
O método `stopPropagation()` é utilizado em JavaScript para interromper a propagação de eventos, ou seja, impedir que um evento seja propagado para elementos pais ou filhos. Isso é útil quando você deseja evitar que outros elementos respondam ao mesmo evento.
<br>
Quando um evento é disparado em um elemento, ele passa por uma fase de propagação, conhecida como bubbling (bolhas), onde o evento é primeiro acionado no elemento alvo e depois propagado para os elementos pais. O `stopPropagation()` é chamado para interromper essa propagação.

Veja abaixo a sintaxe básica do método `stopPropagation()`:

```
event.stopPropagation();
```
<br><br>

Veja o exemplo de um click no botão dentro de um elemento pai:
```
<div id="parent">
  <button id="child">Clique aqui!</button>
</div>
```
<br>
```
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

function handleClickParent() {
  console.log('Evento clicado no elemento pai');
}

function handleClickChild(event) {
  event.stopPropagation();
  console.log('Evento clicado no elemento filho');
}

parent.addEventListener('click', handleClickParent);
child.addEventListener('click', handleClickChild);
```
_Nesse exemplo, quando o botão dentro do elemento pai é clicado, o evento é propagado para o elemento pai e, em seguida, para o elemento filho. No entanto, o `stopPropagation()` é chamado dentro da função `handleClickChild()`, interrompendo a propagação do evento. Como resultado, apenas a mensagem "Evento clicado no elemento filho" será exibida no console._
<br><br>
Veja o exemplo de um click em elementos dentro de uma lista:
```
<ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```
<br>
```
const list = document.querySelector('#myList');

function handleClickList(event) {
  const clickedElement = event.target;
  if (clickedElement.tagName === 'LI') {
    console.log(`Clicou no item: ${clickedElement.textContent}`);
  }
}

list.addEventListener('click', handleClickList);
```
_Nesse exemplo, quando qualquer item da lista é clicado, o evento é propagado para o elemento pai (a lista). A função `handleClickList()` verifica se o elemento clicado é um `<li>`, e se for, exibe o texto desse elemento no console. O `stopPropagation()` não é necessário neste exemplo, pois estamos verificando o elemento alvo dentro da função de tratamento de evento._
<br><br>

**O `stopPropagation()` pode ser usado em vários contextos onde você deseja controlar a propagação de eventos. É útil quando você precisa evitar que outros elementos reajam ao mesmo evento ou quando deseja manipular especificamente um elemento dentro de um conjunto de elementos.**
<br><br><hr>