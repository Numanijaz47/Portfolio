let teamAscore = document.getElementById('team_a_score');
let teamBscore = document.getElementById('team_b_score');

let scoreA = 0;
let scoreB = 0;

function team_a() {
    scoreA += 1;
    teamAscore.textContent = scoreA;
}

function team_b() {
    scoreB += 1;
    teamBscore.textContent = scoreB;
}

function rst_btn() {
    scoreA = 0;
    scoreB = 0;
    teamAscore.textContent = scoreA;
    teamBscore.textContent = scoreB;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
    .then(() => console.log('Service Worker Registered'));
}
