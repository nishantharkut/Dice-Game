function rollDice() {
    // Get player names
    const player1Name = document.getElementById("player1").value || "Player 1";
    const player2Name = document.getElementById("player2").value || "Player 2";

    // Update player names in the UI
    document.getElementById("player1Name").textContent = player1Name;
    document.getElementById("player2Name").textContent = player2Name;

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
        winner = `${player1Name} wins!`;
    } else if (valLeft < valRight) {
        winner = `${player2Name} wins!`;
    } else {
        winner = "It's a tie!";
    }

    // Display the winner in the dialog box
    document.getElementById("winnerText").textContent = winner;
    document.getElementById("winnerDialog").style.display = "block";
}

// Function to close the dialog
function closeDialog() {
    document.getElementById("winnerDialog").style.display = "none";
}
