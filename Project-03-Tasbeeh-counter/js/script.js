let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

function incFunc() {
    count = count + 1;
    countEl.innerHTML = count;
}

function resetFunc() {
    count = 0;
    countEl.innerHTML = count;
    // saveEl.innerHTML = saveEl.dataset.original;
}

function saveFunc() {
    saveEl.innerHTML += count + " - ";
}

function clrRecFunc() {
    saveEl.innerHTML = saveEl.dataset.original;
}