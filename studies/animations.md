As animações em JavaScript permitem criar movimentos e transições suaves em elementos HTML, proporcionando uma experiência visual mais dinâmica e interativa para os usuários. Existem várias abordagens para criar animações em JavaScript, desde o uso de funções básicas até o aproveitamento de bibliotecas e frameworks especializados. Vamos explorar os principais conceitos, propriedades, métodos e exemplos relacionados a animações em JavaScript.
<br>

**Transições CSS**
- Propriedades CSS: As transições CSS permitem animar propriedades específicas de um elemento, como cor, tamanho, posição, etc. É possível definir a duração, atraso e função de tempo para controlar a velocidade e o estilo da animação.
<br>

Exemplo:
```
const element = document.getElementById("myElement");
element.style.transition = "width 2s ease-in-out";
element.style.width = "200px";
```
<br><br>

**Animando propriedades com JavaScript**
- Propriedade `requestAnimationFrame()`: Essa função permite executar uma função de atualização antes do próximo repintar da tela, proporcionando uma animação suave.
<br>

Exemplo:
```
function animate() {
    const element = document.getElementById("myElement");
    element.style.left = parseInt(element.style.left) + 5 + "px";
    if (parseInt(element.style.left) < 200) {
    requestAnimationFrame(animate);
    }
}
animate();
```
<br><br>

