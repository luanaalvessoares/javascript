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

**Métodos de manipulação:**
- `concat(str1, str2, ..., strN)`: Concatena duas ou mais strings.
- `slice(start, end)`: Retorna uma parte da string original, do índice de início ao índice de fim (não incluído).
- `replace(searchValue, replaceValue)`: Substitui um valor de string por outro valor em uma string.
- `toUpperCase()`: Retorna a string em letras maiúsculas.
- `toLowerCase()`: Retorna a string em letras minúsculas.
- `trim()`: Remove os espaços em branco do início e do fim da string.
<br>

Exemplo:
```
const str1 = "Hello";
const str2 = "World";
console.log(str1.concat(", ", str2)); // "Hello, World"
console.log(str1.slice(1, 4)); // "ell"
console.log(str1.replace("Hello", "Hi")); // "Hi"
console.log(str1.toUpperCase()); // "HELLO"
console.log(str2.toLowerCase()); // "world"
console.log("   Spaces   ".trim()); // "Spaces"
```
<br><br>

**Métodos de busca e verificação:**
- `indexOf(searchValue, startIndex)`: Retorna o índice da primeira ocorrência do valor de pesquisa na string.
- `lastIndexOf(searchValue, startIndex)`: Retorna o índice da última ocorrência do valor de pesquisa na string.
- `startsWith(searchValue, startIndex)`: Verifica se a string começa com o valor de pesquisa.
- `endsWith(searchValue, endIndex)`: Verifica se a string termina com o valor de pesquisa.
- `includes(searchValue, startIndex)`: Verifica se a string contém o valor de pesquisa.
<br>

Exemplo:
```
const texto = "Hello, World!";
console.log(texto.indexOf("o")); // 4
console.log(texto.lastIndexOf("o")); // 8
console.log(texto.startsWith("Hello")); // true
console.log(texto.endsWith("World!")); // true
console.log(texto.includes("lo")); // true
```
<br><br>

