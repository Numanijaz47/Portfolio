let teamAscore = document.getElementById('team_a_score');
let teamBscore = document.getElementById('team_b_score');

let scoreA = 0;
let scoreB = 0;



function team_a() {
    scoreA += 1;
    teamAscore.textContent = scoreA;
}