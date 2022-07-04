const URL_API = "https://mock-api.driven.com.br/api/v4/buzzquizz";
let QuizID;
let Quizzdados=[];
const listaSorteada= [0,1,2,3];

PegarQuizz();



function CriarQuiz() {
    let Fechartela1 = document.querySelector(".Primeiratela");
    let AbrirTela3 = document.querySelector(".Terceiratela");
    Fechartela1.classList.add("escondido");
    AbrirTela3.classList.remove("escondido");
}

function PegarQuizz(){
    const requerimento= axios.get(`${URL_API}/quizzes`)
    requerimento.then(popularQuizzes);
    console.log(requerimento);

}

function popularQuizzes(resposta){
const info = resposta.data;
let quizzes = document.querySelector('.TodosQuizzes');
quizzes.innerHTML= "";
for (i=0; i < info.length; i++ ){
    let idQuizz = (info[i].id);
quizzes.innerHTML += `<div class="quizz" onclick="TeladeQuiz(${idQuizz})">
 <img class="imagem" src="${info[i].image}" class="${info[i].id}">
 <div class="Titulo">${info[i].title} </div>
 </div>`;
 QuizID = idQuizz;
 }
}




