let question_cnt = 0;
let wrong_count = 0;
let answer;
let score = 0;
let totalTime = 10;
let timer;
let currentUser= JSON.parse(localStorage.getItem("currentUser"))||null
let tech_score
let falg=false
let answer_array=[]
let n1, n2
function startTimer() {
  const timerElement = document.getElementById('timer');
  let timeLeft = totalTime;

  timer = setInterval(function () {
    timerElement.innerText = timeLeft;
    timeLeft--;

    if (timeLeft == 0) {
      question_cnt++;
      wrong_count++;
      answer_array.push(`${n1}+${n2}= : correct: ${answer}, your Answer: F`)
      console.log("first")
      if (question_cnt >= 10) {
        // if (wrong_count === 3) {
        //   alert('Sorry, but you failed in this exam!but continue to gain experience');
        //   tech_score="f"
        //   wrong_count = 0;
        //   flag=true
        //   do_theSave()

        // } else {
          tech_score= score;
          question_cnt = 0;
          score = 0;
          alert("Congratulations! You have finished your exam.");
          do_theSave()

        }
      // } else {
      //   // if (wrong_count === 3) {
      //   //   flag=true
      //   //   alert('Sorry, but you failed in this exam!but continue to gain experience');
      //   //   tech_score="f"
      //   //   wrong_count = 0;
      //   //   do_theSave()

      //   // } else {
      //   //   nextQuestion();
      //   //   resetTimer();
      //   // }
      // }
      nextQuestion();
      resetTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function resetTimer() {
  stopTimer();
  startTimer();
}

function nextQuestion() {
  if (question_cnt == 10){
   
    tech_score= score;
    question_cnt = 0;
  score = 0;
  flag=true
  alert("Congratulations! You have finished your exam.");
  do_theSave()
}
  
   n1 = Math.floor(Math.random() * 5);
  document.getElementById('n1').innerHTML = n1;

   n2 = Math.floor(Math.random() * 6);
  document.getElementById('n2').innerHTML = n2;
  answer = n1 + n2;
  const r =10-question_cnt
  const paragraph=document.querySelector("p");

  paragraph.innerText=`write the correct number in the square and earn your star you still have ${r} questions`

}

function checkAnswer() {
  // if (question_cnt < 10) {
    stopTimer();
    question_cnt++;
    const prediction = predictImage();
    console.log(`Answer: ${answer}, prediction: ${prediction}`);
    answer_array.push(`${n1}+${n2}= :correct: ${answer}, your Answer: ${prediction}`)
    if (prediction == answer) {
      score++;
      console.log(score);
    } else {
      wrong_count++;

      // if (wrong_count === 3) {
      //   flag=true
      //   alert('Sorry, but you failed in this exam but continue to gain experience!');
      //   tech_score="f"
      //   do_theSave()

      // }
    }

    nextQuestion();
    resetTimer();
//  } 
}

function do_theSave(){
let user = {
  userName: currentUser.userName,
  email: currentUser.email,
  password: currentUser.password,
  df: false,
  techFlag: true,
  englishFlag: currentUser.englishFlag,
  userInfo:currentUser.userInfo,
  englishScore: currentUser.englishScore,
  techScore: tech_score,
};
localStorage.setItem("MathReport",answer_array)
localStorage.setItem("currentUser", JSON.stringify(user));
window.location = "/html/EnglishTest.html";
}