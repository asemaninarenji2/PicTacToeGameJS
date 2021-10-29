"use strict";

const overlay = document.getElementById("overlayId");

const modal = document.getElementById("modalId");
const noWinnerModal = document.getElementById("noWinnerModalId");
const winnerModal = document.getElementById("winnerModalId");

const player0NameLable = document.getElementById("name--0");
const player1NameLable = document.getElementById("name--1");
const player0 = document.getElementById("player0Id");
const player1 = document.getElementById("player1Id");

const btnStart = document.getElementById("btnStart");
const registerBtn = document.getElementById("registerBtn");
const noWinnerTryAgainBtn = document.getElementById("noWinnerTryAgainBtnId");
const winnerTryAgainBtn = document.getElementById("winnerTryAgainBtnId");
const closeModalBtn = document.getElementById("closeModalId");

const winnerTag = document.getElementById("winnerTagId");

//table squars
const sq00 = document.getElementById("sq00");
const sq01 = document.getElementById("sq01");
const sq02 = document.getElementById("sq02");
const sq10 = document.getElementById("sq10");
const sq11 = document.getElementById("sq11");
const sq12 = document.getElementById("sq12");
const sq20 = document.getElementById("sq20");
const sq21 = document.getElementById("sq21");
const sq22 = document.getElementById("sq22");

let activeGame = false;
let activePlayer = 0;
let gameCounter = 1;

//FUNCTIONS EXPRESSION
function reset() {
  sq00.textContent = "X-O";
  sq01.textContent = "X-O";
  sq02.textContent = "X-O";
  sq10.textContent = "X-O";
  sq11.textContent = "X-O";
  sq12.textContent = "X-O";
  sq20.textContent = "X-O";
  sq21.textContent = "X-O";
  sq22.textContent = "X-O";
  player0.classList.remove("player--inactive");
  player1.classList.remove("player--inactive");
  player0NameLable.textContent = "player 1";
  player1NameLable.textContent = "player 2";
  activeGame = false;
  gameCounter = 0;
  activePlayer = 0;
}

const checkWinner = () => {
  //ROWS
  const firstRow =
    sq00.textContent === sq01.textContent &&
    sq01.textContent === sq02.textContent &&
    sq00.textContent !== "X-O";
  const secondRow =
    sq10.textContent === sq11.textContent &&
    sq11.textContent === sq12.textContent &&
    sq10.textContent !== "X-O";
  const thirdRow =
    sq20.textContent === sq21.textContent &&
    sq21.textContent === sq22.textContent &&
    sq20.textContent !== "X-O";
  //COLUMNS
  const firstColumn =
    sq00.textContent === sq10.textContent &&
    sq10.textContent === sq20.textContent &&
    sq00.textContent !== "X-O";
  const secondColumn =
    sq01.textContent === sq11.textContent &&
    sq11.textContent === sq21.textContent &&
    sq01.textContent !== "X-O";
  const thirdColumn =
    sq02.textContent === sq12.textContent &&
    sq12.textContent === sq22.textContent &&
    sq02.textContent !== "X-O";
  //DIAGONALS
  const mainDiag =
    sq00.textContent === sq11.textContent &&
    sq11.textContent === sq22.textContent &&
    sq00.textContent !== "X-O";
  const secondDiag =
    sq02.textContent === sq11.textContent &&
    sq11.textContent === sq20.textContent &&
    sq02.textContent !== "X-O";

  if (
    firstRow ||
    secondRow ||
    thirdRow ||
    firstColumn ||
    secondColumn ||
    thirdColumn ||
    mainDiag ||
    secondDiag
  ) {
    // console.log(sq00.textContent, sq01.textContent, sq02.textContent);
    // console.log(sq10.textContent, sq11.textContent, sq12.textContent);
    // console.log(sq20.textContent, sq21.textContent, sq22.textContent);
    // console.log(firstRow, secondRow, thirdRow);
    // console.log(firstColumn, secondColumn, thirdColumn);
    // console.log(mainDiag, secondDiag);
    // console.log("------------------------------------------");

    let winner;
    if (firstRow) {
      winner = sq00.textContent;
    } else if (secondRow) {
      winner = sq10.textContent;
    } else if (thirdRow) {
      winner = sq20.textContent;
    } else if (firstColumn) {
      winner = sq00.textContent;
    } else if (secondColumn) {
      winner = sq01.textContent;
    } else if (thirdColumn) {
      winner = sq02.textContent;
    } else if (mainDiag) {
      winner = sq00.textContent;
    } else if (secondDiag) {
      winner = sq02.textContent;
    }

    const msg = `${winner}  wins the round🏆🥇`;
    winnerTag.textContent = msg;
    winnerModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  } else if (gameCounter > 8) {
    noWinnerModal.classList.remove("hidden");
  } else {
    changeActivePlayer();
    console.log(gameCounter);
  }
};

function changeActivePlayer() {
  gameCounter++;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle("player--inactive");
  player1.classList.toggle("player--inactive");
}

//GAME BOARD SQUARS CLICK LISTENER

//FIRST ROW
sq00.addEventListener("click", function () {
  if (sq00.textContent === "X" || sq00.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq00.textContent = txt;
  checkWinner();
});
sq01.addEventListener("click", function () {
  if (sq01.textContent === "X" || sq01.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq01.textContent = txt;
  checkWinner();
});
sq02.addEventListener("click", function () {
  if (sq02.textContent === "X" || sq02.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq02.textContent = txt;
  checkWinner();
});

//SECOND ROW
sq10.addEventListener("click", function () {
  if (sq10.textContent === "X" || sq10.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq10.textContent = txt;
  checkWinner();
});
sq11.addEventListener("click", function () {
  if (sq11.textContent === "X" || sq11.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq11.textContent = txt;
  checkWinner();
});
sq12.addEventListener("click", function () {
  if (sq12.textContent === "X" || sq12.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq12.textContent = txt;
  checkWinner();
});

//THIRD ROW
sq20.addEventListener("click", function () {
  if (sq20.textContent === "X" || sq20.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq20.textContent = txt;
  checkWinner();
});
sq21.addEventListener("click", function () {
  if (sq21.textContent === "X" || sq21.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq21.textContent = txt;

  checkWinner();
});
sq22.addEventListener("click", function () {
  if (sq22.textContent === "X" || sq22.textContent === "O" || !activeGame)
    return;
  const txt = activePlayer === 0 ? "X" : "O";
  sq22.textContent = txt;

  checkWinner();
});

//BTNS BEHAVIOuR🔻🔻🔻

//MAIN START BUTTON SHOWS THE REGISTERATION MODAL
btnStart.addEventListener("click", function () {
  player1.classList.add("player--inactive");
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});

//REGISTERATION MODAL'S BUTTONS
//1.
registerBtn.addEventListener("click", function () {
  activeGame = true;

  //playersName labels update
  player0NameLable.textContent =
    document.getElementById("register-input0").value;
  player1NameLable.textContent =
    document.getElementById("register-input1").value;

  overlay.classList.add("hidden");
  modal.classList.add("hidden");
  player1.classList.add("player--inactive");
});

//CLOSES THE NAME REGISTERATION MODAL
//2.
closeModalBtn.addEventListener("click", function () {
  overlay.classList.toggle("hidden");
  modal.classList.toggle("hidden");
});

//IF THERE IS NO WINNER FOR THE GAME
noWinnerTryAgainBtn.addEventListener("click", function () {
  noWinnerModal.classList.add("hidden");
  reset();
});

//SB WINNING CASE
winnerTryAgainBtn.addEventListener("click", function () {
  winnerModal.classList.add("hidden");
  overlay.classList.add("hidden");
  reset();
});
