let Terceiratela = document.querySelector(".Terceiratela");
let titulo;
let imgQ;
let pergs;
let niveis;

function CQ1() {
  container.innerHTML = `
  <div class="q-base-info">
      <div class="Titulo">
          <h1>Comece pelo começo</h1>
      </div>
      <div class="Conteudo">
          <div class="insert"><input placeholder="Título do seu quizz (min 20 e max 65 caracteres)"></div>
          <div class="insert"><input placeholder="URL da imagem do seu quizz (começar com http)"></div>
          <div class="insert"><input placeholder="Quantidade de perguntas do quizz (min 3)"></div>
          <div class="insert"><input placeholder="Quantidade de níveis do quizz (min 2)"></div>
      </div>
      <div class="botaoVermelho370" onclick="Values()">Prosseguir pra criar perguntas</div>
  </div> 

  <div class="redbutton" onclick="Values()">Prosseguir pra criar perguntas</div>
  </div> 


  `;
}

function Values() {
  tituloQuizz = document.querySelector(
    ".Conteudo div:nth-child(1) input"
  ).value;
  imgQuizz = document.querySelector(".Conteudo div:nth-child(2) input").value;
  qtdPerg = document.querySelector(".Conteudo div:nth-child(3) input").value;
  qtdNiveis = document.querySelector(".Conteudo div:nth-child(4) input").value;

  if (
    titulo === null ||
    titulo.length < 20 ||
    titulo.length > 65 ||
    (img[0] !== "h" && img[1] !== "t" && img[2] !== "t" && img[3] !== "p") ||
    Number(Perg) < 3 ||
    Number(Niveis) < 2
  ) {
    alert("Respeite os requisitos");
  } else {
    CQ2();
  }
}
