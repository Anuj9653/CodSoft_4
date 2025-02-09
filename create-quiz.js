const quizForm = document.getElementById('quizForm');
const quizData = JSON.parse(localStorage.getItem('quizzes')) || [];

quizForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const question = document.getElementById('question').value;
  const option1 = document.getElementById('option1').value;
  const option2 = document.getElementById('option2').value;
  const option3 = document.getElementById('option3').value;
  const option4 = document.getElementById('option4').value;
  const correctAnswer = document.getElementById('correctAnswer').value;

  const newQuiz = {
    question,
    options: [option1, option2, option3, option4],
    correctAnswer
  };

  quizData.push(newQuiz);
  localStorage.setItem('quizzes', JSON.stringify(quizData));

  alert('Question added!');
  quizForm.reset();
});
