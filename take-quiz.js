const quizId = new URLSearchParams(window.location.search).get('quizId');
const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
const quiz = quizzes[quizId];

const quizForm = document.getElementById('quizForm');
const questionContainer = document.getElementById('question-container');

let userAnswers = [];

function renderQuestion() {
  const currentQuestion = quiz;
  const options = currentQuestion.options.map((option, index) => {
    return `
      <label>
        <input type="radio" name="answer" value="${option}">
        ${option}
      </label>
    `;
  }).join('');

  questionContainer.innerHTML = `
    <p>${currentQuestion.question}</p>
    ${options}
  `;
}

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const selectedAnswer = quizForm.querySelector('input[name="answer"]:checked').value;
  userAnswers.push(selectedAnswer);

  // Display results
  const correct = userAnswers.filter((answer, index) => answer === quizzes[quizId].correctAnswer).length;
  alert(`Your score: ${correct}/${userAnswers.length}`);
});

renderQuestion();
