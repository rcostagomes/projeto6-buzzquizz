container = document.querySelector(".container");
let qTitle;
let qImg;
let qQ;
let qLvl;
let openqQ = [];
let closedqQ = [];
let newqQ = [];
let openLvl = [];
let closedLvls = [];
let newLvls = [];
 
function criarQuizz1() {
 container.innerHTML = `
   <div class="criacaoQuizz">
       <div class="criacaoTitulo">
           <h1>Comece pelo começo</h1>
       </div>
 
       <div class="criacaoConteudo">
           <div class="box-input"><input type="text" required placeholder="Título do seu quizz (min 20 e max 65 caracteres)"></div>
           <div class="box-input"><input type="url" required placeholder="URL da imagem do seu quizz (começar com http)"></div>
           <div class="box-input"><input type="number" required placeholder="Quantidade de perguntas do quizz (min 3)"></div>
           <div class="box-input"><input type="number" required placeholder="Quantidade de níveis do quizz (min 2)"></div>
       </div>
 
       <div class="botaoVermelho370" onclick="pegarValues1()">Prosseguir pra criar perguntas</div>
   </div>
   `;
}
 
function pegarValues1() {
 qTitle = document.querySelector(
   ".criacaoConteudo div:nth-child(1) input"
 ).value;
 qImg = document.querySelector(
   ".criacaoConteudo div:nth-child(2) input"
 ).value;
 qQ = document.querySelector(".criacaoConteudo div:nth-child(3) input").value;
 qLvl = document.querySelector(
   ".criacaoConteudo div:nth-child(4) input"
 ).value;
 
 if (
   qTitle.length < 20 ||
   qTitle.length > 65 ||
   qImg.substring(0, 4) !== "http" ||
   Number(qQ) < 3 ||
   Number(qLvl) < 2
 ) {
   alert("Você Errou");
 } else {
   criarQuizz2();
 }
}
 
function criarQuizz2() {
 container.innerHTML = `
   <div class="criacaoQuizz">
       <div class="criacaoTitulo">
           <h1>Crie suas perguntas</h1>
       </div>
   </div>
   `;
 for (let i = 0; i < qQ; i++) {
   let perguntaModelo = `
       <div class="perguntaAberta escondido">
           <div class="criacaoConteudo">
           <h2>Pergunta ${i + 1}</h2>
               <div class="box-input textoPergunta"><input type="text" required placeholder="Texto da pergunta (min 20 caracteres)"></div>
               <div class="box-input corPergunta"><input type="color" required placeholder="Cor de fundo da pergunta"></div> 
               <h2>Resposta correta</h2>
               <div class="box-input respostaCorreta"><input type="text" required placeholder="Resposta correta (obrigatório)"></div>
               <div class="box-input urlRespostaCorreta"><input type="url" required placeholder="URL da imagem (obrigatório)"></div>
               <h2>Respostas incorretas</h2>
               <div class="box-input respostaIncorreta1"><input type="text" required placeholder="Resposta incorreta 1 (obrigatório)"></div>
               <div class="box-input urlRespostaIncorreta1"><input type="url" required placeholder="URL da imagem (obrigatório)"></div>
               <br>
               <div class="box-input respostaIncorreta2"><input type="text" placeholder="Resposta incorreta 2 (opcional)"></div>
               <div class="box-input urlRespostaIncorreta2"><input type="url" pattern="https?://.+"placeholder="URL da imagem (se campo acima foi preenchido)"></div>
               <br>
               <div class="box-input respostaIncorreta3"><input type="text" placeholder="Resposta incorreta 3 (opcional)"></div>
               <div class="box-input urlRespostaIncorreta3"><input type="url" placeholder="URL da imagem (se campo acima foi preenchido)"></div>
           </div>
       </div>`;
   let perguntaModeloFechado = `
       <div class="perguntaFechada">
           <div class="criacaoConteudoMini">
               <h2>Pergunta ${i + 1}</h2>
               <img src="img/editar.svg" onclick="editarPergunta(this)">
           </div>
       </div>`;
 
   openqQ.push(`${perguntaModelo}`);
   closedqQ.push(`${perguntaModeloFechado}`);
 
   container.innerHTML += openqQ[i];
   container.innerHTML += closedqQ[i];
 }
 
 document.querySelector(".perguntaAberta").classList.remove("escondido");
 document.querySelector(".perguntaFechada").classList.add("escondido");
 
 container.innerHTML += `<div class="botaoVermelho370" onclick="pegarValues2()">Prosseguir pra criar níveis</div>`;
}
 
function editarPergunta(elemento) {
 let perguntasAbertas = document.querySelectorAll(".perguntaAberta");
 for (let i = 0; i < perguntasAbertas.length; i++) {
  perguntasAbertas[i].classList.add("escondido");
}

let perguntasFechadas = container.querySelectorAll(".perguntaFechada");
for (let i = 0; i < perguntasFechadas.length; i++) {
  perguntasFechadas[i].classList.remove("escondido");
}

let elementoPai = elemento.parentNode;
let elementoAvo = elementoPai.parentNode;

let elementoAnterior = elementoAvo.previousElementSibling;

elementoAvo.classList.add("escondido");

elementoAnterior.classList.remove("escondido");
}

function pegarValues2() {
let divsPerguntas = container.querySelectorAll(".criacaoConteudo");
let pergunta = {};

for (let i = 0; i < divsPerguntas.length; i++) {
  let tituloPergunta = divsPerguntas[i].querySelector(
    ".textoPergunta input"
  ).value;
  let cordeFundoPergunta =
    divsPerguntas[i].querySelector(".corPergunta input").value;

  let respostaCorreta = divsPerguntas[i].querySelector(
    ".respostaCorreta input"
  ).value;
  let URLrespostaCorreta = divsPerguntas[i].querySelector(
    ".urlRespostaCorreta input"
  ).value;

  let respostaIncorreta1 = divsPerguntas[i].querySelector(
    ".respostaIncorreta1 input"
  ).value;
  let URLrespostaIncorreta1 = divsPerguntas[i].querySelector(
    ".urlRespostaIncorreta1 input"
    ).value;
 
    let respostaIncorreta2 = divsPerguntas[i].querySelector(
      ".respostaIncorreta2 input"
    ).value;
    let URLrespostaIncorreta2 = divsPerguntas[i].querySelector(
      ".urlRespostaIncorreta2 input"
    ).value;
  
    let respostaIncorreta3 = divsPerguntas[i].querySelector(
      ".respostaIncorreta3 input"
    ).value;
    let URLrespostaIncorreta3 = divsPerguntas[i].querySelector(
      ".urlRespostaIncorreta3 input"
    ).value;
  
    if (
      respostaCorreta.length < 1 ||
      respostaIncorreta1.length < 1 ||
      tituloPergunta.length < 20 ||
      URLrespostaCorreta.substring(0, 4) !== "http" ||
      URLrespostaIncorreta1.substring(0, 4) !== "http"
    ) {
      alert("Não preencheu os requisitos");
      newqQ = [];
      break;
    } else if (respostaIncorreta2.length > 0 && respostaIncorreta3.length > 0) {
      if (
        URLrespostaIncorreta2.substring(0, 4) !== "http" ||
        URLrespostaIncorreta3.substring(0, 4) !== "http"
      ) {
        alert("Errou URL");
        newqQ = [];
        break;
      } else {
        pergunta = {
          title: tituloPergunta,
          color: cordeFundoPergunta,
          answers: [
            {
              text: respostaCorreta,
              image: URLrespostaCorreta,
              isCorrectAnswer: true,
            },
            {
              text: respostaIncorreta1,
              image: URLrespostaIncorreta1,
              isCorrectAnswer: false,
            },
            {
              text: respostaIncorreta2,
              image: URLrespostaIncorreta2,
              isCorrectAnswer: false,
            },
            {
              text: respostaIncorreta3,
              image: URLrespostaIncorreta3,
              isCorrectAnswer: false,
            },
          ],
        };
      }
    } else if (respostaIncorreta2.length > 0 && respostaIncorreta3.length < 1) {
      if (URLrespostaIncorreta2.substring(0, 4) !== "http") {
        alert(
          "Errou a URL"
        );
        newqQ = [];
        break;
      } else {
        pergunta = {
          title: tituloPergunta,
          color: cordeFundoPergunta,
          answers: [
            {
              text: respostaCorreta,
              image: URLrespostaCorreta,
              isCorrectAnswer: true,
            },
            {
              text: respostaIncorreta1,
              image: URLrespostaIncorreta1,
              isCorrectAnswer: false,
            },
            {
              text: respostaIncorreta2,
              image: URLrespostaIncorreta2,
              isCorrectAnswer: false,
            },
          ],
        };
      }
    } else {
      pergunta = {
        title: tituloPergunta,
        color: cordeFundoPergunta,
        answers: [
          {
            text: respostaCorreta,
            image: URLrespostaCorreta,
            isCorrectAnswer: true,
          },
          {
            text: respostaIncorreta1,
            image: URLrespostaIncorreta1,
            isCorrectAnswer: false,
          },
        ],
      };
    }
  
    newqQ.push(pergunta);
  }
  
  if (newqQ.length === divsPerguntas.length) {
    criarQuizz3();
  }
 }
  
 function criarQuizz3() {
  container.innerHTML = `
    <div class="criacaoQuizz">
    <div class="criacaoTitulo">
    <h1>Agora, decida os níveis</h1>
</div>
</div>
`;
for (let i = 0; i < qLvl; i++) {
let nivelModelo = `
<div class="nivelAberta escondido">
    <div class="criacaoConteudo">
        <h2>Nivel ${i + 1}</h2>
        <div class="box-input tituloNivel"><input type="text" placeholder="Título do nível (min 10 caracteres)"></div>
        <div class="box-input porcentagemAcerto"><input type="number" placeholder="% de acerto mínima (numero de 0 a 100)"></div>
        <div class="box-input imagemNivel"><input type="url" placeholder="URL da imagem do nível"></div>
        <div class="box-input descricaoNivel"><input type="text" placeholder="Descrição do nível (min 30 caracteres)"></div>
    </div>
</div>`;
let nivelModeloFechado = `
<div class="nivelFechada">
    <div class="criacaoConteudoMini">
        <h2>Nivel ${i + 1}</h2>
        <img src="img/editar.svg" onclick="editarnivel(this)">
    </div>
</div>`;

openLvl.push(`${nivelModelo}`);
closedLvls.push(`${nivelModeloFechado}`);

container.innerHTML += openLvl[i];
container.innerHTML += closedLvls[i];
}

document.querySelector(".nivelAberta").classList.remove("escondido");
document.querySelector(".nivelFechada").classList.add("escondido");

container.innerHTML += `<div class="botaoVermelho370" onclick="pegarValues3()">Finalizar Quizz</div>`;
}

function editarnivel(elemento) {
  let nivelAbertas = document.querySelectorAll(".nivelAberta");
 
  for (let i = 0; i < nivelAbertas.length; i++) {
    nivelAbertas[i].classList.add("escondido");
  }
  
  let nivelFechadas = container.querySelectorAll(".nivelFechada");
  for (let i = 0; i < nivelFechadas.length; i++) {
    nivelFechadas[i].classList.remove("escondido");
  }
  
  let elementoPai = elemento.parentNode;
  let elementoAvo = elementoPai.parentNode;
  
  let elementoAnterior = elementoAvo.previousElementSibling;
  
  elementoAvo.classList.add("escondido");
  
  elementoAnterior.classList.remove("escondido");
 }
  
 function pegarValues3() {
  let divsNiveis = container.querySelectorAll(".criacaoConteudo");
  let nivel = {};
  let verificaPorcentagem = 0;
  for (let i = 0; i < divsNiveis.length; i++) {
    let tituloNivel = divsNiveis[i].querySelector(".tituloNivel input").value;
    let porcentagemAcertoString = divsNiveis[i].querySelector(
      ".porcentagemAcerto input"
    ).value;
    let porcentagemAcerto = Number(porcentagemAcertoString);
    let imagemNivel = divsNiveis[i].querySelector(".imagemNivel input").value;
    let descricaoNivel = divsNiveis[i].querySelector(
      ".descricaoNivel input"
    ).value;
  
    if (
      imagemNivel.substring(0, 4) !== "http" ||
      tituloNivel.length < 10 ||
      descricaoNivel.length < 30 ||
      porcentagemAcerto < 0 ||
      porcentagemAcerto > 100
      ) {
        alert("Dados Incorretos");
        newLvls = [];
        break;
      } else {
        nivel = {
          title: tituloNivel,
          image: imagemNivel,
          text: descricaoNivel,
          minValue: porcentagemAcerto,
        };
      }
      if (porcentagemAcerto === 0) {
        verificaPorcentagem = 1;
      }
    
      newLvls.push(nivel);
    }
    
    if (newLvls.length === divsNiveis.length && verificaPorcentagem === 0) {
      alert("Pelo menos 1 com 0");
      newLvls = [];
    } else if (
      newLvls.length === divsNiveis.length &&
      verificaPorcentagem === 1
    ) {
      EnviarQuizz();
    }
   }
    
   function EnviarQuizz() {
    criandoQuizz = {
      title: qTitle,
      image: qImg,
      questions: newqQ,
    
      levels: newLvls,
    };
    
    const promise = axios.post(
      "https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes",
      criandoQuizz
      );
      promise.then(quizzEnviado);
      promise.catch(erroCriacaoQuizz);
     }
      
     function quizzEnviado() {
      console.log("Quizz enviado com sucesso!");
      criarQuizz4();
     }
     function erroCriacaoQuizz(erro) {
      console.log("Deu ruim");
     }  
      
     function criarQuizz4() {
      container.innerHTML = `
        <div class="criacaoQuizz">
        <div class="criacaoTitulo">
            <h1>Seu quizz está pronto!</h1>
        </div>
      
        <div class="criacaoConteudoFinal">
            <img src=${qImg} alt="">
            <div class="gradiente"></div>
            <h1>${qTitle}</h1>
        </div>
        <div class="botaoVermelho221" onclick="acessarQuizz()">Acessar Quizz</div>
        <div class="botaoVermelho221Branco" onclick="voltarprahome()">Voltar pra home</div>
     </div>
        `;
     }
      
     function voltarprahome() {
      window.location.reload();
     }
         
