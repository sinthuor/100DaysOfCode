// let flag = 1;
let basicDetailsVisible = false;
// flag ist kein sprechender Name
// du hast zwei optionen (0, 1) - das ist ein typische Fall für ein boolean (false/true)
// bei einem boolean lässt sich zudem gleich der anfangszustand erkennen: visible = false -> ah! flag = 1 -> häh?
// der Bereich ist am Anfang nicht sichtbar, richtig? Wenn du das aus irgendeinem Grund als Zahl machen willst, wäre das die 0 - das entspricht falsch, 1 entspricht true; 
//    sowas wird in js öfter mal ineinander umgewandelt, dann gibt es da keine Fehler

function toggleVisibility() { // gut!
    // hier sollte keine Leerzeile sein, wobei das das Geschmackssache ist
    let detail = document.getElementById('basic-detail');
    if (flag == 1) { // wir wollen equal-Abfragen (fast) immer mit === machen (gleicher Variablen Typ nötig) (Bzw. !==)
        // detail.style.display = 'none'; // funktioniert, ist aber schlechter Coding-Stil. Da solltest du eine Klasse toggeln (.is-visible oder .is-hidden z.B.) und auf diese Klasse stylen
        // so erzeugst du einen inline style, den du per CSS nicht mehr überschreiben kannst
        detail.classList.add('is-visible');
        flag = 0;
    } // hier sollte kein Umbruch sein (immer noch Geschmackssache, aber weniger als oben)
    else {
        // detail.style.display = 'block'; // vgl. oben
        detail.classList.remove('is-visible');
        flag = 1;
    }
    // das flag benötigst du dann eigentlich nicht, ebenso wenig die if-else-Unterscheidung
    // detail.classList.toggle('is-visible');
}




