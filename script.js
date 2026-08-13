function zeigeNachricht() {
    alert("Hallo! Das ist eine Nachricht aus script.js.");
}

function berechne() {
    const wert1 = Number(document.getElementById("wert1").value);
    const wert2 = Number(document.getElementById("wert2").value);
    const operation = document.getElementById("operation").value;

    let ergebnis;
    switch (operation) {
        case "plus":
            ergebnis = wert1 + wert2;
            break;
        case "minus":
            ergebnis = wert1 - wert2;
            break;
        case "mal":
            ergebnis = wert1 * wert2;
            break;
        case "geteilt":
            ergebnis = wert1 / wert2;
            break;
    }

    document.getElementById("ergebnis").value = ergebnis;
}

function clearForm() {
    document.getElementById("wert1").value = "";
    document.getElementById("wert2").value = "";
    document.getElementById("ergebnis").value = "";
}
