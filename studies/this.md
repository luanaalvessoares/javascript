O `this` em javascript é uma palavra-chave que se refere ao objeto em que uma função é chamada. Ele é usado para acessar propriedades e métodos desse objeto dentro da função. O valor de `this` pode mudar dependendo de como a função é chamada.
<br>
Existem quatro maneiras comuns de chamar uma função em javascript e o valor de `this` pode variar em cada uma dessas maneiras:
<br>
1. Chamada de função simples: Quando uma função é chamada diretamente, sem nenhum objeto, o valor de `this` será o objeto global (no navegador, é o objeto `window`).

```
function myFunction() {
  console.log(this); // window (no navegador)
}

myFunction();
```
<br><br>