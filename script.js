
const quizData = [
    {
      question: "What is the process of cleaning and transforming data called?",
      a: "Data visualization",
      b: "Data exploration",
      c: "Data modeling",
      d: "Data wrangling",
      correct: "d",
    },
    {
      question: "Which programming language is commonly used for data science?",
      a: "Java",
      b: "Python",
      c: "JavaScript",
      d: "C++",
      correct: "b",
    },
    {
      question: "What is the process of making predictions based on data called?",
      a: "Data modeling",
      b: "Data mining",
      c: "Data analysis",
      d: "Machine learning",
      correct: "d",
    },
    {
      question: "What is the name of the statistical measure that shows how much individual values in a dataset differ from the mean?",
      a: "Variance",
      b: "Standard deviation",
      c: "Correlation",
      d: "Regression",
      correct: "b",
    },
    {
      question: "What is the process of finding patterns or relationships in data called?",
      a: "Data visualization",
      b: "Data exploration",
      c: "Data modeling",
      d: "Data mining",
      correct: "d",
    },
    {
      question: "What is the name of the process of reducing the dimensionality of a dataset while preserving important information?",
      a: "Feature engineering",
      b: "Feature selection",
      c: "Dimensionality reduction",
      d: "Model evaluation",
      correct: "c",
    },
    {
      question: "Which type of machine learning algorithm is used for classification tasks?",
      a: "Regression",
      b: "Clustering",
      c: "Decision trees",
      d: "Naive Bayes",
      correct: "c",
    },
    {
      question: "What is the name of the process of choosing the best model from a set of candidate models?",
      a: "Model selection",
      b: "Model training",
      c: "Model evaluation",
      d: "Model optimization",
      correct: "a",
    },
    {
      question: "Which type of data visualization is used to show the distribution of a dataset?",
      a: "Scatter plot",
      b: "Line chart",
      c: "Bar chart",
      d: "Histogram",
      correct: "d",
    },
    {
      question: "What is the name of the process of identifying and removing irrelevant or redundant features from a dataset?",
      a: "Feature engineering",
      b: "Feature selection",
      c: "Dimensionality reduction",
      d: "Model evaluation",
      correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')
let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }
       currentQuiz++
       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})