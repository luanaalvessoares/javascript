## Strings
Em JavaScript, as strings são usadas para representar texto e são um tipo de dado primitivo. As strings são imutáveis, o que significa que uma vez criadas, não podem ser alteradas. Vamos explorar as principais propriedades, métodos, usos e restrições relacionadas a strings em JavaScript, juntamente com exemplos.
<br>

**Propriedades de strings:**
`length`: Propriedade que retorna o número de caracteres em uma string.
<br>

Exemplo:
```
const texto = "Hello, World!";
console.log(texto.length); // 13
```
<br><br>

**Métodos de acesso:**
- `charAt(index)`: Retorna o caractere no índice especificado.
- `charCodeAt(index)`: Retorna o valor Unicode do caractere no índice especificado.
- `substring(start, end)`: Retorna uma nova string que contém uma parte da string original, do índice de início ao índice de fim (não incluído).
<br>

Exemplo:
```
const texto = "Hello, World!";
console.log(texto.charAt(1)); // "e"
console.log(texto.charCodeAt(0)); // 72
console.log(texto.substring(7, 12)); // "World"
```
<br><br>

