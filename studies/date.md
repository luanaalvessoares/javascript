Em JavaScript, o objeto `Date` é utilizado para trabalhar com datas e horas. Ele fornece várias funções, métodos e propriedades para manipular e exibir informações relacionadas a datas e horas. Vamos explorar algumas das principais funcionalidades abaixo:
<br>

**Criando uma instância de data:**
Para criar uma instância de `Date`, você pode usar o construtor `new Date()` sem argumentos, o qual retorna a data e hora atual do sistema, ou fornecer uma string contendo uma data específica.
<br>

Exemplo:
```
const dataAtual = new Date();
console.log(dataAtual); // Exibe a data e hora atual

const dataEspecifica = new Date('2023-06-30');
console.log(dataEspecifica); // Exibe a data especificada: Fri Jun 30 2023 00:00:00 GMT+0000 (Coordinated Universal Time)
```
<br><br>

**Obtendo informações de data e hora:**
O objeto `Date` fornece vários métodos para obter informações específicas, como o ano, mês, dia, hora, minuto, segundo e milissegundo.
<br>

Exemplo:
```
const data = new Date();
console.log(data.getFullYear()); // Obtém o ano atual (ex: 2023)
console.log(data.getMonth()); // Obtém o mês atual (ex: 5 - junho, pois os meses são indexados a partir de 0)
console.log(data.getDate()); // Obtém o dia do mês atual (ex: 4)
console.log(data.getHours()); // Obtém a hora atual (ex: 14)
console.log(data.getMinutes()); // Obtém os minutos atuais (ex: 30)
console.log(data.getSeconds()); // Obtém os segundos atuais (ex: 15)
console.log(data.getMilliseconds()); // Obtém os milissegundos atuais (ex: 500)
```
<br><br>

**Formatação de datas e horas:**
Para exibir datas e horas de maneira legível, é possível formatá-las usando métodos como `toLocaleString()` ou `toLocaleDateString()`, que levam em consideração as configurações regionais do usuário.
<br>

Exemplo:
```
const data = new Date();
console.log(data.toLocaleString()); // Exibe a data e hora formatadas de acordo com a configuração regional do usuário

console.log(data.toLocaleDateString()); // Exibe apenas a data formatada
```
<br><br>

