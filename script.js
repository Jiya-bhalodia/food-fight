const questions = [
  { text: "Do you drink 8 glasses of water daily?", healthy: true },
  { text: "Do you eat fruits and vegetables daily?", healthy: true },
  { text: "Do you sleep 7/8 hours everyday?", healthy: true },
  { text: "Do you workout thrice a week?", healthy: true },
  { text: "Do you drink smoke?", healthy: false },
  { text: "Do you consume alcohol?", healthy: false },
  { text: "Do you often skip meals?", healthy: false },
  { text: "Do you maintain a healthy body weight?", healthy: true },
  { text: "Do you visit a doctor for regular check-ups?", healthy: true },
  { text: "Do you consume more fast food than necessary?", healthy: false },
  { text: "Do you fall ill frequently?", healthy: false },
  { text: "Do you often feel anxious or restless?", healthy: false },
  { text: "Do you feel tired on most of the days?", healthy: false },
  { text: "Do you limit your screen time before bed?", healthy: true },
];

let current = 0;
let answers = [];

const questionText = document.getElementById("questionText");
const questionNumber = document.getElementById("questionNumber");
const card = document.querySelector(".card");

card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

loadQuestion();

function loadQuestion() {
  questionNumber.textContent = current + 1;
  questionText.textContent = questions[current].text;
}


function handleAnswer(answer) {
  const isHealthyQ = questions[current].healthy;
  let score = 0;

  if ((isHealthyQ && answer === "yes") || (!isHealthyQ && answer === "no")) {
    score = 1;
  }

  answers.push(score);
  current++;

  if (current < questions.length) {
    card.classList.remove("flipped");
    setTimeout(loadQuestion, 400); 
  } else {
    localStorage.setItem("quizResults", JSON.stringify(answers));
    window.location.href = "result.html";
  }
}
