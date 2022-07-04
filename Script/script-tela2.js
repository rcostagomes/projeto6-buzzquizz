let comparador=0;
let acertos=0;
let numeroDeperguntas=0;


listaSorteada.sort(sorte);
function sorte(){
    return Math.random() - 0.5;
}
function TeladeQuiz(QuizID) {
    const promise = axios.get(`${URL_API}/quizzes/${QuizID}`)
    promise.then(verificarR);
    console.log(promise);
    ;
}    
function verificarR(resposta){
    renderizarQuizz(resposta.data);
    Quizzaberto();
}

function Quizzaberto(){
    let Fechartela1 = document.querySelector(".Primeiratela");
    let AbrirTela2 = document.querySelector(".Segundatela");
    Fechartela1.classList.add("escondido");
    AbrirTela2.classList.remove("escondido");
}


function renderizarQuizz(dados){
    dadosQuizz=dados;
    const tela2 = document.querySelector(".Segundatela");
    QuantidadePerguntas=dados.questions.length;
    tela2.innerHTML= `
    <div class="bannerQuizz">
    <img src="${dados.image}">
    <p>${dados.title}</p>
  </div>
    `;

for (let i = 0; i < dados.questions.length; i++) {
    tela2.innerHTML += `
    <div class="caixa-de-perguntas"id="${[i]}">

    <div class="pergunta-quizz" style="background-color:${dados.questions[i].color};" >
        <p >${dados.questions[i].title}</p>
    </div>
    <div class="caixa-respostas ${[i]}" >
    <div class="resposta ${dados.questions[i].answers[listaSorteada[0]].isCorrectAnswer}" onclick="responder(this)">
        <img src="${dados.questions[i].answers[listaSorteada[0]].image}" alt="Image">
        <p>${dados.questions[i].answers[listaSorteada[0]].text}</p>
    </div>
    <div class="resposta ${dados.questions[i].answers[listaSorteada[1]].isCorrectAnswer}" onclick="responder(this)">
        <img src="${dados.questions[i].answers[listaSorteada[1]].image}" alt="Image">
        <p >${dados.questions[i].answers[listaSorteada[1]].text}</p>
    </div>
    <div class="resposta ${dados.questions[i].answers[listaSorteada[2]].isCorrectAnswer}" onclick="responder(this)">
        <img src="${dados.questions[i].answers[listaSorteada[2]].image}" alt="Image">
        <p>${dados.questions[i].answers[listaSorteada[2]].text}</p>
    </div>
    <div class="resposta ${dados.questions[i].answers[listaSorteada[3]].isCorrectAnswer}" onclick="responder(this)">
        <img src="${dados.questions[i].answers[listaSorteada[3]].image}" alt="Image">
        <p>${dados.questions[i].answers[listaSorteada[3]].text}</p>
    </div>
</div>
    </div>`;
    listaSorteada.sort(sorte);
  }
  tela2.innerHTML += `
  <div class="telafinal escondido">

</div>
`
}


function responder(elemento) {
  const Select = elemento.parentNode;
  console.log("ta indo")

  let NextQuestion=Select.parentNode.getAttribute('id')

  const respostas = Select.querySelectorAll(".resposta")

  NextQuestion=parseInt(NextQuestion)+1

  const selecionador=Select.querySelector(".selecionado");

  if(selecionador!==null){ return}
  elemento.classList.add("selecionado")
  
  comparador++
  for (let i = 0; i < respostas.length; i++) {


    if (respostas[i].classList.contains("selecionado")) {
      verdeOuVermelho(respostas[i])
      if(respostas[i].classList.contains('verde')){
        acertos++
      }
    } else {
      respostas[i].classList.add("opaco")
      verdeOuVermelho(respostas[i])
    }
    
  }  

  const elementoQueQueroQueApareca = document.getElementById(NextQuestion);
  setTimeout(Proxima,2000)
  function Proxima(){elementoQueQueroQueApareca.scrollIntoView(finalDaTela);
  const finalDaTela=document.querySelector(".telafinal")
  
  if(comparador==numeroDeperguntas){
    
    let porcentagem=acertos/numeroDeperguntas*100
    porcentagem=Math.round(porcentagem)
    for(let i=0;i<dadosDoQuizz.levels.length;i++){
      if(porcentagem>dadosDoQuizz.levels[i].minValue){
        salvarNivel=i
      }
    }
    finalDaTela.classList.remove('escondido')
    finalDaTela.innerHTML=  `
    <div class="final " >
    <div class="acertos">
        <p>${porcentagem}% ${dadosDoQuizz.levels[salvarNivel].title}</p>
    </div>
  
    <div class="caixa-meme-e-texto">
        <img src="${dadosDoQuizz.levels[salvarNivel].image}">
        <p>${dadosDoQuizz.levels[salvarNivel].text}</p>
    </div>
  </div>
  <div class="botoes-finais ">
    <button class="reinicio" onclick="reiniciar()"> Reiniciar Quizz</button>
    <p class="volta" onclick="home()">Voltar pra home</p>
  </div>
  `
  setTimeout(irProFinal,2000)
  function irProFinal(){finalDaTela.scrollIntoView();}
  }
}
}
function verdeOuVermelho(resposta) {
  if (resposta.classList.contains("false")) {
    resposta.classList.add('vermelho')
  } else {
    resposta.classList.add('verde')
  }

}
function reiniciar(){
    Quizzaberto();
  window.scrollTo(0,0);
}
function home(){
  requererQuizz();
  const tela2 = document.querySelector(".Segundatela");
  const tela1 = document.querySelector(".Primeiratela");
  tela2.classList.add('escondido');
  tela1.classList.remove('escondido')
  window.scrollTo(0,0);
}





