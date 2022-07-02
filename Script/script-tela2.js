let Quizzdados=[];
const listaSorteada= [0,1,2,3];
let corretos=0;
let Comparador=0;
let QuantidadePerguntas=0;
let GuardarNivel=0;


listaSorteada.sort(sorte);
function sorte(){
    return Math.random() - 0.5;
}

function Quizzaberto(){
    const promise = axios.get ('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes/9482')
    promise.then(verificarR);
}

function verificarR(){
    renderizarQuizz(resposta.data);
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
}