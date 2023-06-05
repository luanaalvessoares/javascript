A biblioteca `Math` em JavaScript fornece um conjunto de funções e constantes para realizar cálculos matemáticos. Ela possui diversos métodos para realizar operações comuns, como arredondamento, exponenciação, trigonometria, entre outros. Vamos explorar algumas das principais funções e métodos da biblioteca `Math` com exemplos:
<br>

**Funções numéricas básicas:**
- `Math.abs(x)`: Retorna o valor absoluto de `x`.
- `Math.round(x)`: Arredonda `x` para o número inteiro mais próximo.
- `Math.floor(x)`: Retorna o maior número inteiro menor ou igual a `x`.
- `Math.ceil(x)`: Retorna o menor número inteiro maior ou igual a `x`.
<br>

Exemplo:
```
console.log(Math.abs(-5)); // 5
console.log(Math.round(3.7)); // 4
console.log(Math.floor(4.2)); // 4
console.log(Math.ceil(4.2)); // 5
```
<br><br>

**Funções trigonométricas:**
- `Math.sin(x)`: Retorna o seno de `x`.
- `Math.cos(x)`: Retorna o cosseno de `x`.
- `Math.tan(x)`: Retorna a tangente de `x`.
- `Math.atan2(y, x)`: Retorna o ângulo em radianos entre o eixo x positivo e o ponto `(x, y)`.
<br>

Exemplo:
```
console.log(Math.sin(Math.PI / 2)); // 1 (seno de 90 graus)
console.log(Math.cos(0)); // 1 (cosseno de 0 grau)
console.log(Math.tan(Math.PI / 4)); // 1 (tangente de 45 graus)
console.log(Math.atan2(1, 1)); // 0.7853981633974483 (ângulo entre o eixo x positivo e o ponto (1, 1))
```
<br><br>

**Funções exponenciais e logarítmicas:**
- `Math.pow(x, y)`: Retorna `x` elevado à potência `y`.
- `Math.sqrt(x)`: Retorna a raiz quadrada de `x`.
- `Math.log(x)`: Retorna o logaritmo natural (base e) de `x`.
- `Math.exp(x)`: Retorna `e` elevado à potência `x`.
<br>

Exemplo:
```
console.log(Math.pow(2, 3)); // 8 (2 elevado à potência de 3)
console.log(Math.sqrt(16)); // 4 (raiz quadrada de 16)
console.log(Math.log(Math.E)); // 1 (logaritmo natural de e)
console.log(Math.exp(2)); // 7.3890560989306495 (e elevado à potência de 2)
```
<br><br>

**Constantes:**
A biblioteca `Math` também possui algumas constantes úteis, como `Math.PI` para o valor de pi (π) e `Math.E` para o valor de Euler.
<br>

Exemplo:
```
console.log(Math.PI); // 3.141592653589793 (valor de pi)
console.log(Math.E); // 2.718281828459045 (valor de Euler)
```