let computerNum = 0;
// document : 웹페이지 그 자체
// id가 play-button인 것을 들고온다.
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");
let chances = 10;
let gameOver = false;
let chanceArea = document.getElementById("chance-area");
let history = [];



// playButton에 클릭 이벤트를 더해줘라.
// 클릭 이벤트가 발생하면 play 함수를 실행시켜라.
// 함수도 매개변수처럼 넘길 수 있다!!
playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", erase);


function pickRandomNum() {
  computerNum = Math.floor(Math.random() * 10) + 1;
}

function play() {
  let userValue = userInput.value;

  // 게임 시작하기 전에 숫자가 유효한 숫자인지 검사한다.
  if(userValue < 1 || userValue > 100) {
      resultArea.textContent="1과 100 사이 숫자를 입력해 주세요.";
      return;
    } 
  if(history.includes(userValue)){
      resultArea.textContent="이미 입력한 숫자입니다. 다른 숫자를 입력해 주세요.";
      return;
  }

  chances--;
  chanceArea.textContent = `남은기회 : ${chances}번`;
  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!!";
  } else {
    resultArea.textContent = "맞췄습니다!!!";
    gameOver=true;
  }
  if (chances < 1) {
    gameOver = true;
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
  
  history.push(userValue);

}

function reset() {
  //user input 창이 깨끗하게 정리되고
  userInput.value = "";
  // 새로운 번호가 생성되고
  pickRandomNum();
  resultArea.textContent = "결과가 나온다.";
  gameOver=false;
  playButton.disabled=false;
  chances=10;
  chanceArea.innerHTML = `남은 기회 : ${chances}`;
  userValueList = [];
}

function erase(){
    userInput.value = "";
}
pickRandomNum();
