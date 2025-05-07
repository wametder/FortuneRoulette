// 1. API LADEN
async function loadTimetable() {
    const url = 'https://api.adviceslip.com/advice';
    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.error(error);
        return false;
    }
}
const timetable = await loadTimetable();
console.log(timetable); // gibt die Daten der API oder false in der Konsole aus

// 2. DOM ELEMENTE LADEN
const adviceText = document.querySelector('#randomAdvice');

const Text 


const cards_container = document.querySelector('#cards');
all_pokemon_with_details.forEach(pokemon => {
    const card = `<div class="card">
                <h2 class="pokemon_name">${pokemon.name}</h2>
                <img class="pokemon_image" src="${pokemon.image}" alt="">
                <p class="pokemon_hp">Lebenskraft: <span class="value_hp">${pokemon.hp}</span></p>
            </div>`
    cards_container.innerHTML += card;
})

