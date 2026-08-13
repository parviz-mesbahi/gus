function zeigeNachricht() {
    alert("Hallo! Das ist eine Nachricht aus script.js.");
}

function add() {
    const wert1 = Number(document.getElementById("wert1").value);
    const wert2 = Number(document.getElementById("wert2").value);
    document.getElementById("ergebnis").value = wert1 + wert2;
}

function clearForm() {
    document.getElementById("wert1").value = "";
    document.getElementById("wert2").value = "";
    document.getElementById("ergebnis").value = "";
}
