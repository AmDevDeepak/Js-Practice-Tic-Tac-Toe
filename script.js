let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let messageContainter = document.querySelector(".messageContainer");

let message = document.querySelector("#message");

let turn_O = true;

let winningPatters = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

function showWinner() {
  message.innerText = `Player ${boxes[0].innerText} wins!`;
  messageContainter.classList.remove("hidden");
  for (let box of boxes) {
    box.disabled = true;
  }
}
function checkWinner() {
  for (let pattern of winningPatters) {
    let postn1_value = boxes[pattern[0]].innerText;
    let postn2_value = boxes[pattern[1]].innerText;
    let postn3_value = boxes[pattern[2]].innerText;

    if (postn1_value !== "" && postn2_value !== "" && postn3_value !== "") {
      if (postn1_value === postn2_value && postn2_value === postn3_value) {
        showWinner();
        return;
      }
    }
  }
}

function resetGame() {
  for (let box of boxes) {
    box.innerText = "";
    box.disabled = false;
  }
  messageContainter.classList.add("hidden");
}

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn_O) {
      box.innerText = "O";
      turn_O = false;
    } else {
      box.innerText = "X";

      turn_O = true;
    }
    box.disabled = true; // or box.setAttribute("disabled", "");
    checkWinner();
  });
});

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
