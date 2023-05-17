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
