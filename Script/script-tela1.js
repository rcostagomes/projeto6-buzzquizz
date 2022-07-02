PegarQuizz();
let QuizID=0;


function CriarQuiz() {
    let Fechartela1 = document.querySelector(".Primeiratela");
    let AbrirTela3 = document.querySelector(".Terceiratela");
    Fechartela1.classList.add("escondido");
    AbrirTela3.classList.remove("escondido");
}

function PegarQuizz(){
    const requerimento= axios.get('https://mock-api.driven.com.br/api/v4/buzzquizz/quizzes')
    requerimento.then(popularQuizzes);
    console.log(requerimento);
}

function popularQuizzes(resposta){
const info = resposta.data;
let quizzes = document.querySelector('.TodosQuizzes');
quizzes.innerHTML= "";

for (i=0; i < info.length; i++ ){

quizzes.innerHTML += `<div class="quizz" onclick="TeladeQuiz()">
 <img class="imagem" src="${info[i].image}" class="${info[i].id}">
 <div class="Titulo">${info[i].title} </div>
 </div>`
 }

}

function TeladeQuiz() {
    let Fechartela1 = document.querySelector(".Primeiratela");
    let AbrirTela2 = document.querySelector(".Segundatela");
    Fechartela1.classList.add("escondido");
    AbrirTela2.classList.remove("escondido");
    Quizzaberto();
    
}