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

