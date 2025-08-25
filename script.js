const questions = {
  tech: [
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlinks Text Management Language"],
      correct: 0
    },
    {
      question: "Which programming language is used for styling web pages?",
      answers: ["HTML", "CSS", "JavaScript", "Python"],
      correct: 1
    }
  ],
  math: [
    {
      question: "What is 5 + 7?",
      answers: ["10", "11", "12", "13"],
      correct: 2
    },
    {
      question: "What is the square root of 64?",
      answers: ["6", "7", "8", "9"],
      correct: 2
    }
  ],
  fun: [
    {
      question: "Which is the largest mammal?",
      answers: ["Elephant", "Blue Whale", "Giraffe", "Shark"],
      correct: 1
    },
    {
      question: "What color are bananas when ripe?",
      answers: ["Red", "Green", "Yellow", "Blue"],
      correct: 2
    }
  ]
};

let currentCategory = "";
let currentIndex = 0;
let score = 0;

function startQuiz(category) {
  currentCategory = category;
  currentIndex = 0;
  score = 0;

  document.getElementById("category-container").classList.add("hidden");
  document.getElementById("quiz").classList.remove("hidden");

  showQuestion();
}

function showQuestion() {
  const questionData = questions[currentCategory][currentIndex];
  document.getElementById("question").innerText = questionData.question;

  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  questionData.answers.forEach((ans, i) => {
    const button = document.createElement("button");
    button.innerText = ans;
    button.onclick = () => checkAnswer(i);
    answersDiv.appendChild(button);
  });

  document.getElementById("next-btn").style.display = "none";
}

function checkAnswer(i) {
  const questionData = questions[currentCategory][currentIndex];
  const buttons = document.querySelectorAll("#answers button");

  buttons.forEach((btn, index) => {
    if (index === questionData.correct) {
      btn.classList.add("correct");
    } else if (index === i) {
      btn.classList.add("wrong");
    }
    btn.disabled = true;
  });

  if (i === questionData.correct) score++;

  document.getElementById("next-btn").style.display = "block";
}

function nextQuestion() {
  currentIndex++;
  if (currentIndex < questions[currentCategory].length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  document.getElementById("quiz").classList.add("hidden");
  document.getElementById("result").classList.remove("hidden");
  document.getElementById("score").innerText = `${score} / ${questions[currentCategory].length}`;
}

function restartQuiz() {
  document.getElementById("result").classList.add("hidden");
  document.getElementById("category-container").classList.remove("hidden");
}
