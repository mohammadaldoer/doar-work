// Define the questions and their choices
const questions = [
    {
      question: "Which letter comes after 'A'?",
      choices: ["B", "C", "D"],
      correctAnswer: "B"
    },
    {
      question: "Which word starts with the letter 'B'?",
      choices: ["Apple", "Ball", "Cat"],
      correctAnswer: "Ball"
    },
    {
      question: "Which word rhymes with 'cat'?",
      choices: ["Dog", "Hat", "Bed"],
      correctAnswer: "Hat"
    },
    {
      question: "How many fingers does a person have?",
      choices: ["Three", "Five", "Seven"],
      correctAnswer: "Five"
    },
    {
      question: "Which animal says 'meow'?",
      choices: ["Cow", "Cat", "Dog"],
      correctAnswer: "Cat"
    },
    {
      question: "Which color is the sun?",
      choices: ["Blue", "Yellow", "Green"],
      correctAnswer: "Yellow"
    },
    {
      question: "What is the opposite of 'hot'?",
      choices: ["Cold", "Big", "Small"],
      correctAnswer: "Cold"
    },
    {
      question: "Which shape is round?",
      choices: ["Square", "Circle", "Triangle"],
      correctAnswer: "Circle"
    },
    {
      question: "Which word starts with the sound 'buh'?",
      choices: ["Dog", "Bird", "Fish"],
      correctAnswer: "Bird"
    },
    {
      question: "How many legs does a cat have?",
      choices: ["Two", "Four", "Eight"],
      correctAnswer: "Four"
    },
    {
      question: "Which word means the opposite of 'happy'?",
      choices: ["Sad", "Angry", "Tired"],
      correctAnswer: "Sad"
    },
    {
      question: "Which word starts with the letter 'S'?",
      choices: ["Fish", "Sun", "Moon"],
      correctAnswer: "Sun"
    },
    {
      question: "Which shape has three sides?",
      choices: ["Square", "Triangle", "Circle"],
      correctAnswer: "Triangle"
    },
    {
      question: "Which animal says 'woof'?",
      choices: ["Cat", "Dog", "Bird"],
      correctAnswer: "Dog"
    },
    {
      question: "How many eyes does a person have?",
      choices: ["One", "Two", "Three"],
      correctAnswer: "Two"
    },
    {
      question: "Which color is the grass?",
      choices: ["Purple", "Green", "Orange"],
      correctAnswer: "Green"
    },
    {
      question: "What is the opposite of 'big'?",
      choices: ["Small", "Tall", "Long"],
      correctAnswer: "Small"
    },
    {
      question: "Which shape has four sides?",
      choices: ["Square", "Circle", "Triangle"],
      correctAnswer: "Square"
    },
    {
      question: "Which word starts with the sound 'cuh'?",
      choices: ["Dog", "Cat", "Fish"],
      correctAnswer: "Cat"
    },
    {
      question: "How many wings does a bird have?",
      choices: ["Two", "Four", "Six"],
      correctAnswer: "Two"
    }
  ];


  let currentUser= JSON.parse(localStorage.getItem("currentUser"))||null

  let selectedQuestions;
  let currentQuestionIndex;
  let remainingTime;
  let timerInterval;
  let answer_array=[]
  // Randomly select 10 questions
  selectedQuestions = getRandomQuestions(questions, 10);
  
  // Initialize the current question index
  currentQuestionIndex = 0;
  
  // Render the current question
  renderQuestion(currentQuestionIndex);
  
  // Add event listener to the submit button
  const submitButton = document.getElementById("checkAnswer");
  submitButton.addEventListener("click", submitAnswer);
  
  // Function to render the question
  function renderQuestion(index) {
    const questionContainer = document.getElementById("question");
    questionContainer.innerHTML = "";
  
    const questionWrapper = document.createElement("div");
    questionWrapper.classList.add("question-wrapper", "active");
  
    const questionElement = document.createElement("div");
    questionElement.innerHTML = `
      <p>${index + 1}. ${selectedQuestions[index].question}</p>
    `;
    questionWrapper.appendChild(questionElement);
  
    const choicesElement = document.createElement("div");
    selectedQuestions[index].choices.forEach((choice) => {
      const choiceLabel = document.createElement("label");
      choiceLabel.classList.add("form-check-label", "choice-label");
      choiceLabel.innerHTML = `
        <input type="radio" name="choice" class="form-check-input" value="${choice}">
        ${choice}<br>
      `;
      choicesElement.appendChild(choiceLabel);
    });
    questionWrapper.appendChild(choicesElement);
  
    questionContainer.appendChild(questionWrapper);
  
    startTimer();
  }
  
  // Function to submit the answer
  function submitAnswer() {
    stopTimer();

    const choices = document.getElementsByName("choice");
    let selectedChoice;
  
    choices.forEach(choice => {
      if (choice.checked) {
        selectedChoice = choice.value;
      }
    });
  
    // Get the correct answer for the current question
    const correctAnswer = selectedQuestions[currentQuestionIndex].correctAnswer;
  
    // Check if the selected choice is correct
    if (selectedChoice === correctAnswer) {
      answer_array.push(`${selectedQuestions[currentQuestionIndex].question} :your answer ${selectedChoice} the correct answer ${correctAnswer}`)
      selectedQuestions[currentQuestionIndex].correct = true;
    } else {
      answer_array.push(`${selectedQuestions[currentQuestionIndex].question} :your answer ${selectedChoice} the correct answer ${correctAnswer}`)
      selectedQuestions[currentQuestionIndex].correct = false;
    }
  
    currentQuestionIndex++;
  
    // Render the next question or show the results
    setTimeout(() => {
      if (currentQuestionIndex < selectedQuestions.length) {
        renderQuestion(currentQuestionIndex);
      } else {
        showResults();
      }
    }, 1000);
  }
  
  // Function to select random questions
  function getRandomQuestions(questions, num) {
    const shuffled = questions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, num);
  }
  
  // Timer variables
  remainingTime = 15;
  
  // Function to start the timer
  function startTimer() {
    remainingTime = 15;
    updateTimerDisplay();
  
    timerInterval = setInterval(() => {
      remainingTime--;
      if (remainingTime <= 0) {
        stopTimer();
        submitAnswer();
      }
      updateTimerDisplay();
    }, 1000);
  }
  
  // Function to stop the timer
  function stopTimer() {
    clearInterval(timerInterval);
  }
  
  // Function to update the timer display
  function updateTimerDisplay() {
    const timerContainer = document.getElementById("timer");
    timerContainer.innerText = ` ${remainingTime}s`;
  }
  let correctCount
  // Function to display the results
  function showResults() {
    const totalQuestions = selectedQuestions.length;
     correctCount = 0;
  
    selectedQuestions.forEach(question => {
      if (question.correct) {
        correctCount++;
      }
    });
  
    const incorrectCount = totalQuestions - correctCount;
    const message = `You answered ${correctCount} out of ${totalQuestions} questions correctly.`;
    alert(message);
    do_theSave()
  }
function do_theSave(){
  let user = {
    userName: currentUser.userName,
    email: currentUser.email,
    password: currentUser.password,
    df: false,
    techFlag: currentUser.techFlag,
    englishFlag:true ,
    userInfo:currentUser.userInfo,
    englishScore: correctCount,
    techScore: currentUser.techScore,
  };
  localStorage.setItem("englishReport",answer_array);
  localStorage.setItem("currentUser", JSON.stringify(user));
  window.location = "/html/reportPage.html";
  }