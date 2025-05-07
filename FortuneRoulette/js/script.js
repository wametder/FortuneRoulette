// 1. ADVICE API LADEN
async function loadAdvice() {
    const url = 'https://api.adviceslip.com/advice';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const timetable = await loadAdvice();
console.log(timetable); // gibt die Daten der API oder false in der Konsole aus

// 2. DOM ELEMENTE LADEN
const adviceText = document.querySelector('.randomAdvice');

const text = `<div class="randomAdvice">
            <h2 class="advice">${timetable.slip.advice}</h2>
        </div>`;
adviceText.innerHTML += text;


// 1. INSULT API LADEN
async function loadInsult() {
    const url = 'https://insult.mattbas.org/api/insult.json';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const timetable2 = await loadInsult();
console.log(timetable2); // gibt die Daten der API oder false in der Konsole aus

// 2. DOM ELEMENTE LADEN
const insultText = document.querySelector('.randomInsult');

const beleidigung = `<div class="randomInsult">
            <h2 class="insult">${timetable2.insult}</h2>
        </div>`;
insultText.innerHTML += beleidigung;
