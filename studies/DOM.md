O DOM (Document Object Model) é uma representação estruturada em forma de árvore de todos os elementos HTML de uma página. Ele fornece uma interface de programação para interagir com esses elementos, permitindo a manipulação, adição e remoção de elementos, bem como a alteração de seus atributos e conteúdo.
<br>
O DOM organiza os elementos HTML em uma hierarquia, onde cada elemento é representado por um objeto no DOM. A partir desse objeto, podemos acessar e manipular as propriedades e métodos associados ao elemento.
<br><br>
Principais conceitos e detalhes do DOM:
<br>
1. Árvore do DOM: O DOM é uma estrutura em forma de árvore, onde o elemento raiz é o objeto `document`. Cada elemento HTML é representado por um nó na árvore, sendo o nó pai dos elementos filhos.
<br>
2. Relação dos elementos: No DOM, os elementos têm uma relação pai-filho, onde o elemento pai é chamado de nó pai e os elementos filhos são chamados de nós filhos. Um elemento pode ter vários nós filhos e também pode ser filho de outro elemento.
<br>
3. Acesso aos elementos: Podemos acessar os elementos do DOM usando métodos como `getElementById`, `getElementsByTagName`, `getElementsByClassName`, `querySelector` e `querySelectorAll`, que permitem selecionar elementos com base em seus IDs, tags, classes ou seletores CSS.
<br>
4. Manipulação dos elementos: O DOM permite a manipulação dos elementos, como adicionar, remover ou modificar elementos e seus atributos. Podemos usar métodos como `createElement`, `appendChild`, `removeChild`, `setAttribute`, `innerHTML` e `textContent` para realizar essas manipulações.
<br>
5. Eventos: O DOM também permite lidar com eventos, como cliques, pressionamentos de teclas, movimentos do mouse, etc. Podemos usar o método `addEventListener` para vincular funções de tratamento de eventos a elementos específicos.
<br><br>
A relação dos elementos da página no DOM é estabelecida pela estrutura HTML do documento. Cada elemento HTML é representado por um nó no DOM, e sua posição na árvore reflete sua relação com os outros elementos. Os nós filhos estão aninhados dentro de seus nós pais, formando uma hierarquia que corresponde à estrutura da página.
<br>
