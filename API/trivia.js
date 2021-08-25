// https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple
let mainForm = document.getElementById("triviaForm");
let nextBtn = document.getElementById("next");

let questions;
let q = 0;
let score = 0;
//Funciones
const createApiUrl = e => {
  e.preventDefault();
  let difficulty = document.getElementById("difficulty").value;
  let amount = document.getElementById("amount").value;
  let type = document.getElementById("type").value;
  const API = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`;
  fetchDataAPI(API);
};

const fetchDataAPI = url => {
  fetch(url)
    .then(respuesta => respuesta.json()) // function(respuestaDeFetchQueEsUnaPromesa){return respuestaDeFetchQueEsUnaPromesa.json() ------> respuestaDeFetchQueEsUnaPromesa pero convertida en objeto}
    .then(resultado => fillQuestions(resultado.results)) // funcion(RespuestaDeFetchConvertidaEnObjeto) {console.log(RespuestaDeFetchConvertidaEnObjeto ----> {results: [{}]})}
    .catch(error => console.log(error));
};

const fillQuestions = questionsAPI => {
  console.log(questionsAPI);
  questions = questionsAPI;
  showQuestions();
};

const showQuestions = () => {
  console.log(questions[q]);
  //   questions.forEach(question => {
  //     console.log(`Pregunta: ${question.question}`);
  //     console.log(`Respuesta correcta: ${question.correct_answer}`);
  //     console.log(`Respuestas incorrectas: ${question.incorrect_answers}`);
  //     console.log(`Dificultad: ${question.difficulty}`);
  //     console.log(`Categoría: ${question.category}`);
  //   });
};

const handleNextQuestion = () => {
  q++;
  showQuestions();
};

console.log(questions);

//Events
mainForm.onsubmit = createApiUrl;
nextBtn.onclick = handleNextQuestion;
