var listaLivros = ["https://cache.skoob.com.br/local/images//EgmkyNzhweHmpvCtimbafeynp9k=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/1034135/88bbb05f9cd676484a5ab48835115950B.jpg", "https://cache.skoob.com.br/local/images//N73yXZ7WLkfeyiBMZ2GTIA2_4YY=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/1145846/OS_IMORTAIS_15856194701145846SK1585619471B.jpg", "https://cache.skoob.com.br/local/images//g931EdQfI_RB94L2GBU7ijiggWs=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/11645271/ANJO_A_REDENCAO_160098740611645271SK1600987407B.jpg",           "https://cache.skoob.com.br/local/images//cDJgYnXpnGAHSq8vYjRSwf9PdGs=/200x/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/livros/11717071/CHORO_DE_CHRISTIAN_160773488211717071SK1607734882B.jpg"]

var nomeLivros =["Faênäróc, a Floresta", "Os Imortais, os Quatro Príncipes", "Anjo: a Redenção, Caos e Ordem", "Choro de Christian, Maldição do Palliun"]

var linkLivros = ["https://loja.uiclap.com/titulo/ua654/", "https://loja.uiclap.com/titulo/ua1311/", "https://loja.uiclap.com/titulo/ua2655/", "https://loja.uiclap.com/titulo/ua3655/"]

for (var i= 0; i < listaLivros.length; ++i){
  document.write("<div class='itens'>", "<a href=", linkLivros[i], " target='_blank' >", `<img class='${(i == 4)?"poster impel":"capas"}'  
  src=${listaLivros[i]}  >`, "<h2 class='nomesLivros'>", nomeLivros[i], "</h2>", "</a>", "</div>")
}

function adicionarLivro() {
  var campoLivroFavorito = document.querySelector('#livro')
  var livroFavorito = campoLivroFavorito.value
  if(livroFavorito.endsWith('.jpg')){
  listarLivros(livroFavorito)
} else {
  alert("Imagem Inválida")
}
  campoLivroFavorito.value = ""
}

function listarLivros(livro) {
  var listaLivros = document.querySelector('#listaLivros')
  var elementoLivro = "<img src=" + livro + ">"
  listaLivros.innerHTML = listaLivros.innerHTML + elementoLivro
}

