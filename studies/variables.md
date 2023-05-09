`let`, `var` e `const` são palavras-chave utilizadas para declarar variáveis em javascript, mas elas possuem diferenças importantes em relação ao escopo, hoisting e mutabilidade.
<br><br>

### Var
O tipo de variável `var` declara variáveis com escopo de função ou global e pode ser acessada antes mesmo de ser declarada (hoisting). Ela permite reatribuição de valores e pode causar problemas devido a sua flexibilidade, especialmente quando utilizada em loops e funções aninhadas. É recomendado evitar o uso de `var` em projetos modernos de javascript. Veja o exemplo:

```
var x = 1;

if (true) {
  var x = 2;
}

console.log(x); // retorna 2
```
<br><br><br><hr>
