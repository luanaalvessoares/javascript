## Get element by ID
A função `getElementById` é um método do objeto `document` em javascript, que é usado para selecionar um elemento HTML com base no seu atributo `id`. Essa função retorna uma referência para o elemento encontrado ou `null` se nenhum elemento correspondente for encontrado.
<br>
Para usar o `getElementById`, você precisa chamar a função `document.getElementById` e passar o valor do `id` do elemento que deseja selecionar como argumento.
<br>
Veja o exemplo:

```
<!DOCTYPE html>
<html>
<body>

<h1 id="titulo">Título do Documento</h1>

<script>
const tituloElemento = document.getElementById("titulo");
console.log(tituloElemento); // Output: <h1 id="titulo">Título do Documento</h1>
</script>

</body>
</html>
```
_Neste exemplo, a função `getElementById` é usada para selecionar o elemento com o `id` "titulo" e armazenar a referência a esse elemento na variável `tituloElemento`. Em seguida, o elemento selecionado é exibido no console._
