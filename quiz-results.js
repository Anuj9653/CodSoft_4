// Assuming the user has completed the quiz and answers are stored in localStorage or passed via URL
const quizId = new URLSearchParams(window.location.search).get('quizId');
const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];
const quiz = quizzes[quizId];

const userAnswers = JSON.parse(localStorage.getItem('userAnswers')) || []; // User's selected answers
const resultsContainer = document.getElementById('results');

let correctCount = 0;
let resultHTML = '';

// Compare user answers to correct answers and generate the results
quiz.questions.forEach((question, index) => {
  const userAnswer = userAnswers[index];
  const isCorrect = userAnswer === question.correctAnswer;

  if (isCorrect) {
    correctCount++;
  }

  resultHTML += `
    <div class="question-result">
      <p><strong>Question ${index + 1}: ${question.question}</strong></p>
      <p>Your answer: ${userAnswer}</p>
      <p>Correct answer: ${question.correctAnswer}</p>
      <p style="color: ${isCorrect ? 'green' : 'red'};">${isCorrect ? 'Correct!' : 'Incorrect'}</p>
    </div>
  `;
});

// Display the score and detailed results
resultsContainer.innerHTML = `
  <h2>Your Score: ${correctCount} / ${quiz.questions.length}</h2>
  ${resultHTML}
`;
