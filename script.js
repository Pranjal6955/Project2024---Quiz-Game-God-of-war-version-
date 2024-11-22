const questions = [
  {
    era: "Greek Mythology",
    question: "Who is Kratos' father in the God of War series?",
    answers: ["Zeus", "Poseidon", "Hades", "Ares"],
    correct: 0,
    image: 'https://images2.alphacoders.com/122/1226024.jpg' // Image for this question
  },
  {
    era: "Norse Mythology",
    question: "In God of War (2018), who is revealed to be Atreus' mother?",
    answers: ["Athena", "Faye", "Freya", "Sif"],
    correct: 1,
    image: 'https://i.ytimg.com/vi/qzzo914VoSI/maxresdefault.jpg' // Image for this question
  },
  {
    era: "The Realms",
    question: "Which realm is known as the land of fire in the God of War series?",
    answers: ["Helheim", "Asgard", "Muspelheim", "Vanaheim"],
    correct: 2,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/god-of-war-project/c/cf/Muspelheim_Banner.png?width=1024' // Image for this question
  },
  {
    era: "Weapons of War",
    question: "What weapon does Kratos use alongside the Leviathan Axe in God of War (2018)?",
    answers: ["Blades of Chaos", "Spear of Destiny", "Hammer of Thor", "Shield of Olympus"],
    correct: 0,
    image: 'https://w0.peakpx.com/wallpaper/18/885/HD-wallpaper-artstation-blade-of-chaos-god-of-war-blades-of-chaos.jpg' // Image for this question
  },
  {
    era: "Fate and Prophecy",
    question: "What is the name of the giant serpent that aids Kratos and Atreus?",
    answers: ["Nidhogg", "Jörmungandr", "Fenrir", "Surt"],
    correct: 1,
    image: 'https://c4.wallpaperflare.com/wallpaper/950/237/302/god-of-war-video-games-god-of-war-2018-jormungandr-wallpaper-preview.jpg' // Image for this question
  },
  // New questions added below
  {
    era: "Greek Mythology",
    question: "Who was the original God of War before Kratos?",
    answers: ["Ares", "Athena", "Zeus", "Poseidon"],
    correct: 0,
    image: 'https://preview.redd.it/is-there-a-reason-why-the-gods-didnt-just-kill-ares-v0-yfxic2a1ktzc1.jpeg?width=640&crop=smart&auto=webp&s=49bf3a6ff424d31ef9bacde721ba925dd2ba65a8' // Image for this question
  },
  {
    era: "Norse Mythology",
    question: "Who is the ruler of Asgard in God of War (2018)?",
    answers: ["Thor", "Odin", "Loki", "Freya"],
    correct: 1,
    image: 'https://static.wikia.nocookie.net/godofwar/images/1/12/Josiah-scholten-odin-lp-game.jpg/revision/latest/scale-to-width-down/670?cb=20230204085423'
  },
  {
    era: "The Realms",
    question: "Which realm is known as the land of the dead?",
    answers: ["Niflheim", "Helheim", "Asgard", "Svartalfheim"],
    correct: 1,
    image: 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/god-of-war-project/2/23/HelheimLegendary2P2.jpg'
  },
  {
    era: "Weapons of War",
    question: "What is the name of Kratos' iconic double-chained weapons?",
    answers: ["Blades of Chaos", "Leviathan Axe", "Blade of Olympus", "Spear of Destiny"],
    correct: 0,
    image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2021/12/God-of-War-2018-Kratos-Blades-of-Chaos.jpeg'
    },
  {
    era: "Fate and Prophecy",
    question: "What is Atreus' true identity in the Norse mythology?",
    answers: ["God of War", "Thor", "Loki", "Freyja"],
    correct: 2,
    image: 'https://static.wikia.nocookie.net/godofwar/images/9/94/Photo_2021-09-10_10-45-29.jpg/revision/latest/scale-to-width-down/250?cb=20210911205630'
  }
];

let currentQuestionIndex = 0;
let score = 0;
let timer;

const timerElement = document.getElementById("timer");
const scoreElement = document.getElementById("current-score");
const eraElement = document.getElementById("era");
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");
const resultElement = document.getElementById("result");
const scoreResultElement = document.getElementById("score");
const imageContainer = document.getElementById("image-container");
const congratsMessageElement = document.getElementById("congrats-message"); // Congrats message element

function startQuiz() {
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  eraElement.textContent = currentQuestion.era;

  // Set the question text
  questionElement.textContent = currentQuestion.question;

  // Create blood drops (optional)
  createBloodDrops();

  // Show the default image initially
  imageContainer.style.backgroundImage = "url('https://rare-gallery.com/mocahbig/69109-God-Of-War-2018-4k-Ultra-HD-Wallpaper.jpg')";

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(index));
    answersElement.appendChild(button);
  });

  startTimer();
}

function resetState() {
  answersElement.innerHTML = "";
  clearInterval(timer);
  timerElement.textContent = "Time: 10";
  imageContainer.style.backgroundImage = ""; // Clear the image for the next question
}

function createBloodDrops() {
  const bloodDropCount = 0; // Adjust number of blood drops as needed
  for (let i = 0; i < bloodDropCount; i++) {
    const drop = document.createElement("div");
    drop.classList.add("blood-drop");
    drop.style.left = `${Math.random() * 100}%`; // Random horizontal position
    document.querySelector('.quiz-container').appendChild(drop);
  }
}

function selectAnswer(index) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = answersElement.querySelectorAll("button");

  buttons.forEach((button, i) => {
    if (i === currentQuestion.correct) {
      button.classList.add("correct");
    } else {
      button.classList.add("wrong");
    }
    button.disabled = true;
  });

  // Update image to the current question's image
  imageContainer.style.backgroundImage = `url(${currentQuestion.image})`;

  if (index === currentQuestion.correct) {
    score++;
  }

  scoreElement.textContent = `Score: ${score}`;
  setTimeout(nextQuestion, 2000);
}

function startTimer() {
  let timeLeft = 10;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time: ${timeLeft}`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function nextQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  resultElement.classList.remove("hidden");
  scoreResultElement.textContent = `Your final score is: ${score}`;
}

startQuiz();
