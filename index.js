// Generates a value between 1 and 6 for each player
let valLeft = Math.floor(Math.random() * 6) + 1;
let valRight = Math.floor(Math.random() * 6) + 1;

// Update Player 1's dice image
document.getElementById("val1").setAttribute("src", `./images/dice${valLeft}.png`);

// Update Player 2's dice image
document.getElementById("val2").setAttribute("src", `./images/dice${valRight}.png`);

// Determine the winner
let winner;
if (valLeft > valRight) {
    winner = "Player 1 wins!";
} else if (valLeft < valRight) {
    winner = "Player 2 wins!";
} else {
    winner = "It's a tie!";
}

// Function to display the winner in the custom dialog box
function showWinnerDialog() {
    document.getElementById("winnerText").textContent = winner;
    document.getElementById("winnerDialog").style.display = "block";
}

// Delay showing the dialog box by 1 second
setTimeout(showWinnerDialog, 500);

// Function to close the dialog
function closeDialog() {
    document.getElementById("winnerDialog").style.display = "none";
}
