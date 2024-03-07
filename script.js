let titulo = document.getElementById("tituloPagina");
console.log(titulo);

//alterando conteudo
document.getElementById("m").textContent ="Riley é uma garota divertida de 11 anos de idade, que deve enfrentar mudanças importantes em sua vida quando seus pais decidem deixar a sua cidade natal, no estado de Minnesota, para viver em San Francisco. Dentro do cérebro de Riley, convivem várias emoções diferentes, como a Alegria, o Medo, a Raiva, o Nojinho e a Tristeza. ";

//modificando atributos
document.querySelector("img").setAttribute("src","barbie.jpg");

document.getElementById("meuElemento").style.backgroundColor = "#deedff";



// Captura o botão
var toggleColorBtn = document.getElementById('toggleColorBtn');

// Define um indicador para verificar o estado atual da cor de fundo
var isBlack = false;

// Adiciona um ouvinte de evento de clique ao botão
toggleColorBtn.addEventListener('click', function() {
    // Verifica se a cor de fundo atual é preto
    if (isBlack) {
        // Se for preto, muda para a cor de fundo inicial (branco)
        document.body.style.backgroundColor = '#deedff';
        // Atualiza o indicador
       isBlack = false;
   } else {
        // Se não for preto, muda para a cor de fundo preta
        document.body.style.backgroundColor = '#000';
        // Atualiza o indicador
       isBlack = true;
    }
});

document.getElementById("botaoMudaCor").addEventListener("click",function(){
    document.body.style.backgroundColor = "black";
});


var novoElemento = document.createElement("div");
novoElemento.textContent = "Eu sou um novo elemento";
var elementoDeReferencia = document.querySelector("#tituloPagina");
document.body.insertBefore(novoElemento, elementoDeReferencia);






