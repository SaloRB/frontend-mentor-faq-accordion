const questionElements = document.querySelectorAll('.question__title')

const answer1 = document.querySelector('#a1')
const answer2 = document.querySelector('#a2')
const answer3 = document.querySelector('#a3')
const answer4 = document.querySelector('#a4')
const answer5 = document.querySelector('#a5')

const question1 = document.querySelector('#q1')
const question2 = document.querySelector('#q2')
const question3 = document.querySelector('#q3')
const question4 = document.querySelector('#q4')
const question5 = document.querySelector('#q5')

questionElements.forEach((question) => {
  question.addEventListener('click', openAnswer)
})

function openAnswer(e) {
  const answer = e.target.dataset.id

  answer1.classList.remove('question__answer--open')
  answer2.classList.remove('question__answer--open')
  answer3.classList.remove('question__answer--open')
  answer4.classList.remove('question__answer--open')
  answer5.classList.remove('question__answer--open')

  question1.classList.remove('question__title--open')
  question2.classList.remove('question__title--open')
  question3.classList.remove('question__title--open')
  question4.classList.remove('question__title--open')
  question5.classList.remove('question__title--open')

  if (answer === 'q1') {
    answer1.classList.add('question__answer--open')
    question1.classList.add('question__title--open')
  }

  if (answer === 'q2') {
    answer2.classList.add('question__answer--open')
    question2.classList.add('question__title--open')
  }

  if (answer === 'q3') {
    answer3.classList.add('question__answer--open')
    question3.classList.add('question__title--open')
  }

  if (answer === 'q4') {
    answer4.classList.add('question__answer--open')
    question4.classList.add('question__title--open')
  }

  if (answer === 'q5') {
    answer5.classList.add('question__answer--open')
    question5.classList.add('question__title--open')
  }
}
