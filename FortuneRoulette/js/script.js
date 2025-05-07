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


