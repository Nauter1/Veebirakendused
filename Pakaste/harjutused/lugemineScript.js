function tervitus(){
    let vastus = document.getElementById("vastus");
    let nimi = document.getElementById("nimi");

    vastus.innerHTML = "Tere tulemast, palun vasta küsimustele " + nimi.value + "! <br> Sa õpid juba " + aastat.value + " aastat!";
    vastus.style.color="red";
}