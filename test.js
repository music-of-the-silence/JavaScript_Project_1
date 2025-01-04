const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "Home Tool Markup Language",
      "Hyperlinks and Text Markup Language",
      "Hyper Text Makeup Language",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which tag is used for creating a hyperlink in HTML?",
    options: ["<a>", "<link>", "<href>", "<url>"],
    correctAnswer: 0,
  },
  {
    question: "What does the ‘id’ attribute in HTML do?",
    options: [
      "Applies a specific style to elements",
      "Defines a unique identifier for an element",
      "Groups multiple elements together",
      "Creates a navigation link",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which CSS property is used to change text color?",
    options: ["color", "font-color", "text-color", "background-color"],
    correctAnswer: 0,
  },
  {
    question: "What is the correct syntax for a CSS comment?",
    options: ["// comment", "/* comment */", "<!-- comment -->", "# comment"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is not a JavaScript data type?",
    options: ["Number", "String", "Boolean", "Float"],
    correctAnswer: 3,
  },
  {
    question: "What does DOM stand for in web development?",
    options: [
      "Document Object Model",
      "Data Object Manager",
      "Document Oriented Model",
      "Data Operation Mode",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which method is used to fetch data in JavaScript?",
    options: ["get()", "post()", "fetch()", "retrieve()"],
    correctAnswer: 2,
  },
  {
    question: "What is React primarily used for?",
    options: [
      "Building mobile applications",
      "Designing animations",
      "Developing user interfaces",
      "Managing databases",
    ],
    correctAnswer: 2,
  },
  {
    question: "What is the virtual DOM?",
    options: [
      "A copy of the browser's DOM",
      "An optimized DOM used for faster updates",
      "A part of the DOM that is not visible",
      "A library for manipulating the DOM",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the main purpose of Tailwind CSS?",
    options: [
      "To create responsive layouts",
      "To apply predefined utility classes",
      "To compile JavaScript code",
      "To animate web elements",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which command is used to create a new React app?",
    options: [
      "npx create-react-app my-app",
      "npm install react-app",
      "react new my-app",
      "npm react-init my-app",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does Next.js provide out of the box?",
    options: [
      "Server-side rendering",
      "Database integration",
      "Custom animations",
      "State management",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a JavaScript framework?",
    options: ["Django", "Flask", "React", "Laravel"],
    correctAnswer: 2,
  },
  {
    question: "What does the 'useState' hook in React do?",
    options: [
      "Manages component state",
      "Handles API calls",
      "Executes side effects",
      "Renders a component",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is an example of a CSS framework?",
    options: ["React", "Angular", "Bootstrap", "Express"],
    correctAnswer: 2,
  },
  {
    question: "What is JSX in React?",
    options: [
      "A syntax extension for JavaScript",
      "A database query language",
      "A library for animations",
      "A CSS preprocessor",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which command is used to install a package in Node.js?",
    options: ["node install", "npm install", "npx install", "node add"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is not a part of the MERN stack?",
    options: ["MongoDB", "Express", "React", "Ruby"],
    correctAnswer: 3,
  },
  {
    question: "What does the <head> tag in HTML contain?",
    options: [
      "Content displayed on the webpage",
      "Metadata about the document",
      "Scripts executed by the browser",
      "Server-side logic",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the <canvas> tag in HTML?",
    options: [
      "Creating tables",
      "Embedding videos",
      "Drawing graphics",
      "Defining forms",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which JavaScript method is used to write to the console?",
    options: ["console.log()", "write.log()", "log.console()", "output.log()"],
    correctAnswer: 0,
  },
  {
    question: "What is the role of Node.js?",
    options: [
      "To build server-side applications",
      "To create animations",
      "To design front-end UIs",
      "To compile Java code",
    ],
    correctAnswer: 0,
  },
  {
    question: "What does the <form> tag do in HTML?",
    options: [
      "Groups form controls",
      "Creates a dropdown menu",
      "Defines a form for user input",
      "Adds styling to elements",
    ],
    correctAnswer: 2,
  },
  {
    question: "Which attribute is used to specify the source URL in <img>?",
    options: ["src", "href", "link", "data"],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property controls the stacking order of elements?",
    options: ["float", "z-index", "position", "stack-order"],
    correctAnswer: 1,
  },
  {
    question: "What is the default display property of a <div>?",
    options: ["inline", "inline-block", "block", "none"],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the <script> tag in HTML?",
    options: [
      "Embedding JavaScript code",
      "Adding styles to the webpage",
      "Creating hyperlinks",
      "Defining data structures",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is not a HTTP request method?",
    options: ["GET", "POST", "DELETE", "FETCH"],
    correctAnswer: 3,
  },
  {
    question: "What is the purpose of Git?",
    options: [
      "To compile code",
      "To version control files",
      "To design UIs",
      "To manage databases",
    ],
    correctAnswer: 1,
  },
  {
    question: "What does the 'defer' attribute in a script tag do?",
    options: [
      "Loads the script asynchronously",
      "Delays script execution until the HTML document is fully parsed",
      "Runs the script before the DOM is loaded",
      "Prevents the script from being executed",
    ],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of the <meta> tag in HTML?",
    options: [
      "Provides metadata about the HTML document",
      "Adds external JavaScript to the document",
      "Creates navigation menus",
      "Defines the layout of the document",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which JavaScript function can be used to parse JSON data?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.parseData()",
      "JSON.convert()",
    ],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to make an element invisible?",
    options: [
      "display: none",
      "visibility: hidden",
      "opacity: 0",
      "All of the above",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which of the following is a CSS preprocessor?",
    options: ["SASS", "React", "Vue.js", "Node.js"],
    correctAnswer: 0,
  },
  {
    question: "Which HTTP status code indicates 'Not Found'?",
    options: ["200", "301", "404", "500"],
    correctAnswer: 2,
  },
  {
    question: "What does REST stand for?",
    options: [
      "Representational State Transfer",
      "Reliable Simple Transfer",
      "Remote State Transfer",
      "Representational Simple Technology",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the default method used for form submission?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 0,
  },
  {
    question: "Which HTML element is used to embed a video?",
    options: ["<video>", "<embed>", "<source>", "<iframe>"],
    correctAnswer: 0,
  },
  {
    question: "Which property is used to add space inside an element in CSS?",
    options: ["padding", "margin", "border", "spacing"],
    correctAnswer: 0,
  },
  {
    question: "What is the default port for HTTPS?",
    options: ["21", "80", "443", "8080"],
    correctAnswer: 2,
  },
  {
    question: "Which CSS unit is relative to the size of the root element?",
    options: ["em", "rem", "px", "%"],
    correctAnswer: 1,
  },
  {
    question: "What is a key feature of Progressive Web Apps (PWAs)?",
    options: [
      "Works offline",
      "Requires a browser extension",
      "Depends on server-side rendering",
      "Built only with React",
    ],
    correctAnswer: 0,
  },
  {
    question:
      "Which HTML attribute is used to specify alternative text for images?",
    options: ["alt", "title", "src", "description"],
    correctAnswer: 0,
  },
  {
    question: "Which JavaScript method is used to add an element to an array?",
    options: ["push()", "add()", "insert()", "append()"],
    correctAnswer: 0,
  },
  {
    question: "Which of the following is a NoSQL database?",
    options: ["MongoDB", "MySQL", "PostgreSQL", "Oracle"],
    correctAnswer: 0,
  },
  {
    question: "Which CSS property is used to make text bold?",
    options: ["font-weight", "font-style", "text-decoration", "font-bold"],
    correctAnswer: 0,
  },
  {
    question:
      "What is the default HTTP method for AJAX requests in JavaScript?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: 0,
  },
  {
    question: "Which JavaScript keyword is used to define a constant?",
    options: ["const", "let", "var", "static"],
    correctAnswer: 0,
  },
  {
    question: "What is the main purpose of a web server?",
    options: [
      "To store user data",
      "To manage the backend logic",
      "To serve web pages to clients",
      "To render client-side scripts",
    ],
    correctAnswer: 2,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let timer;
const timeLimit = 10;
let timeLeft = timeLimit;

// DOM Elements
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("time-left");
const startBtn = document.getElementById("start-btn");
const scoreboardEl = document.getElementById("scoreboard");
const scoreEl = document.getElementById("score");
const resetBtn = document.getElementById("reset-btn");

function startQuiz() {
  startBtn.style.display = "none";
  scoreboardEl.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  timeLeft = timeLimit;
  displayQuestion();
  startTimer();
}

function startTimer() {
  timerEl.textContent = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 0) {
      clearInterval(timer);
      handleTimeout();
    }
  }, 2000);
}

function displayQuestion() {
  if (currentQuestionIndex >= questions.length) {
    endQuiz();
    return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";

  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option-btn");
    button.addEventListener("click", () => handleAnswer(index));
    optionsEl.appendChild(button);
  });
}

function handleAnswer(selectedIndex) {
  clearInterval(timer);

  const currentQuestion = questions[currentQuestionIndex];
  if (selectedIndex === currentQuestion.correctAnswer) {
    score += 2;
  } else {
    score -= 1;
  }

  currentQuestionIndex++;
  timeLeft = timeLimit;
  displayQuestion();
  startTimer();
}

function handleTimeout() {
  score -= 1;
  currentQuestionIndex++;
  timeLeft = timeLimit;
  displayQuestion();
  startTimer();
}

function endQuiz() {
  clearInterval(timer);
  questionEl.textContent = "Quiz Over!";
  optionsEl.innerHTML = "";
  scoreboardEl.style.display = "block";
  scoreEl.textContent = `Your score: ${score}`;

  const highScore = localStorage.getItem("highScore") || 0;
  if (score > highScore) {
    localStorage.setItem("highScore", score);
    scoreEl.textContent += " (New High Score!)";
  }
}

function resetQuiz() {
  startBtn.style.display = "block";
  scoreboardEl.style.display = "none";
  questionEl.textContent = "";
  optionsEl.innerHTML = "";
  timerEl.textContent = "";
  timeLeft = timeLimit;
}

startBtn.addEventListener("click", startQuiz);
resetBtn.addEventListener("click", resetQuiz);
