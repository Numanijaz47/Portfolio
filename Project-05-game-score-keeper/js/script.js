let teamAscore = document.getElementById('team_a_score');
let teamBscore = document.getElementById('team_b_score');

let scoreA = 0;
let scoreB = 0;

let roundsA = 0;
let roundsB = 0;
let bestOf = 3; // default

function team_a() {
    scoreA += 1;
    teamAscore.textContent = scoreA;
    twelve_goal_limit();
}

function team_b() {
    scoreB += 1;
    teamBscore.textContent = scoreB;
    twelve_goal_limit();
}

function rst_btn() {
    scoreA = 0;
    scoreB = 0;
    teamAscore.textContent = scoreA;
    teamBscore.textContent = scoreB;
}

// Set the "best of" value
function setBestOf() {
    const inputVal = parseInt(document.getElementById('best-of').value);
    if (inputVal % 2 === 0) {
        alert("Please enter an odd number (like 3, 5, 7).");
        return;
    }
    bestOf = inputVal;
    roundsA = 0;
    roundsB = 0;
    rst_btn();

    // clear history when starting a new game
    document.getElementById("score-history").innerHTML = "";

    alert(`Game set to Best of ${bestOf}. First to ${Math.ceil(bestOf / 2)} rounds wins!`);
}

// Check round winner when someone reaches 12 goals
function twelve_goal_limit() {
    if (scoreA === 12 || scoreB === 12) {
        let roundWinner = "";
        if (scoreA === 12) {
            roundsA++;
            roundWinner = `Team A won this round! (Rounds: A=${roundsA}, B=${roundsB})`;
            alert(roundWinner);
        } else {
            roundsB++;
            roundWinner = `Team B won this round! (Rounds: A=${roundsA}, B=${roundsB})`;
            alert(roundWinner);
        }

        // Append to history list
        const historyList = document.getElementById("score-history");
        const li = document.createElement("li");
        li.textContent = roundWinner;
        historyList.appendChild(li);

        rst_btn();
        checkGameWinner();
    }
}

// Check if the match is over
function checkGameWinner() {
    const needed = Math.ceil(bestOf / 2);
    if (roundsA === needed) {
        alert(`🏆 Team A wins the Best of ${bestOf} game!`);
        roundsA = roundsB = 0;
        document.getElementById("score-history").innerHTML = ""; // clear after match
    } else if (roundsB === needed) {
        alert(`🏆 Team B wins the Best of ${bestOf} game!`);
        roundsA = roundsB = 0;
        document.getElementById("score-history").innerHTML = ""; // clear after match
    }
}
