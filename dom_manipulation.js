let title = document.getElementById("website_title");
let valueJS = "Quirin Pflaum";
title.innerHTML = "neuer  Titel";



// Button
document.getElementById('test_div').innerHTML = '<button id="klick">Klick Mich</button>';
document.getElementById('test_div').classList.add('bg_green');
document.getElementById('test_div').classList.remove('bg_green');
document.getElementById('test_div').classList.toggle('bg_green');

// Attribute
document.getElementById("input").setAttribute('value', valueJS);
document.getElementById("input").value = "Quirin P";
//  beides funktioniert, letzeres ist einfacher und schneller in diesem Fall
const input = document.getElementById("input");
input.addEventListener("change", () => { // = input.addEventListener("input", function () {
    valueJS = input.value; 
    console.log("Neuer Wert", valueJS);  
})
document.getElementById("Absatz").title = "Mein Fortschritte bis dato";
document.getElementsByClassName("bellevue")[0].setAttribute("style", "background-color: aquamarine;");
document.getElementById("Absatz").classList.add("bellvue");
document.getElementById("Absatz").setAttribute("class", "bellvue");