
function spiele(wahl) {
    const ergebnisse = ['gewonnen', 'unentschieden', 'verloren'];
    const zufall = Math.floor(Math.random() * ergebnisse.length);
    const ergebnis = ergebnisse[zufall];
        
    // Seitenname z. B. schere_gewonnen.html
    const zielseite = `${wahl}/${wahl}_${ergebnis}.html`;

    window.location.href = zielseite;
}
     window.spiele = spiele;