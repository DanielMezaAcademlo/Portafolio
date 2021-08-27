// https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple
let mainForm = document.getElementById("triviaForm");
let container = document.getElementById("question-container");

let questions;
let q = 0;
let score = 0;

let correctAnswer;

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
  questions = questionsAPI;
  console.log(questions);
  showQuestions();
};

const showQuestions = () => {
  correctAnswer = questions[q].correct_answer;

  if (questions[q].incorrect_answers.length > 1) {
    container.innerHTML = `
    <div>
      <h4>${questions[q].question}</h4>
      <ul>
        <li><button onClick="handleCheckAnswer(this)">${
          questions[q].correct_answer
        }</button></li>
        <li><button onClick="handleCheckAnswer(this)"> ${
          questions[q].incorrect_answers[0]
        }</button></li>
        <li><button onClick="handleCheckAnswer(this)">${
          questions[q].incorrect_answers[1]
        }</button></li>
        <li><button onClick="handleCheckAnswer(this)">${
          questions[q].incorrect_answers[2]
        }</button></li>

    </ul>
    </div>
  `;
  } else {
    container.innerHTML = `
    <div>
      <h4>${questions[q].question}</h4>
      <ul>
        <li><button onClick="handleCheckAnswer(this)">${
          questions[q].correct_answer
        }</button></li>
        <li><button onClick="handleCheckAnswer(this)"> ${
          questions[q].incorrect_answers[0]
        }</button></li>

    </ul>
    </div>
  `;
  }
};

const handleCheckAnswer = button => {
  if (button.innerText === correctAnswer) {
    score++;
    console.log("Correcto");
  } else {
    console.log("Incorrecto");
  }

  if (questions.length - 1 !== q) {
    q++;
    showQuestions();
  } else {
    console.log(`Juego terminado. Este es tu puntuación: ${score}`);
  }
};

// const handleNextQuestion = () => {
//   q++;
//   showQuestions();
// };

//Events
mainForm.onsubmit = createApiUrl;
