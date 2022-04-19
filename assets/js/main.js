let year = document.getElementById('year');
let ergebnis = document.getElementById('mein_alter');

function meinAlter() {
    ergebnis.innerHTML = 2022 - year.value;
}

