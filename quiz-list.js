const quizList = document.getElementById('quizList');
const quizzes = JSON.parse(localStorage.getItem('quizzes')) || [];

quizzes.forEach((quiz, index) => {
  const listItem = document.createElement('li');
  listItem.innerHTML = `<a href="take-quiz.html?quizId=${index}">${quiz.question}</a>`;
  quizList.appendChild(listItem);
});
