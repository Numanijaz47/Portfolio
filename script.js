let fill = 90;
let intervalId = null;
const fishbowl = document.getElementById('fishbowl');
const fish = document.getElementById('fish');
const tap = document.getElementById('tap');

const emptyingFn = () => setInterval(() => {
    fill = fill - 1;
    fishbowl.style = `--filling: ${fill}`;
    if (fill < 0) {
        clearInterval(intervalId);
    }else if (fill < 20) {
        fish.classList.add(`fishbowl_fish-dead`);
    }else if (fill < 50) {
        fish.classList.add(`fishbowl_fish-dying`)
    }else {
        fish.classList.remove('fishbowl_fish-dyiing');
        fish.classList.remove(`fishbowl_fish-dead`);
    }
}, 200);

intervalId = emptyingFn();

tap.addEventListener('click', () => {
    tap.classList.add('fishbowl_tap-active');
    setTimeout(() => tap.classList.remove('fishbowl_tap-active'), 500);
    if(fill <= 0) {
        intervalId = emptyingFn();
        fish.classList.add('fishbowl_fish-floating');
    }
    fill = Math.min(fill + 20, 90);
});