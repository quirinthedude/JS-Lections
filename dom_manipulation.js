let title = document.getElementById("website_title");
let valueJS = "Quirin Pflaum";
let klickon = true;
title.innerHTML = "JS-Pickles";



// Button
// document.getElementById('test_div').innerHTML = '<button id="klick">Klick Mich</button>';
// document.getElementById('test_div').classList.add('bg_green');
// document.getElementById('test_div').classList.remove('bg_green');
// document.getElementById('test_div').classList.toggle('bg_green');

function klick() {
        document.getElementById("test_div").classList.toggle("bg_green");
    }   


// Attribute
document.getElementById("input").setAttribute('value', valueJS);
document.getElementById("input").value = "Quirin P";
//  beides funktioniert, letzeres ist einfacher und schneller in diesem Fall
// verändert werte je nach eingabe des elements
// const input = document.getElementById("input");
// input.addEventListener("change", () => { // = input.addEventListener("input", function () {
    // valueJS = input.value; 
    // console.log("Neuer Wert", valueJS);  
// })
// dem Absatz einen Titel geben //
document.getElementById("Absatz").title = "Mein Fortschritte bis dato";
// über DOM den Hintergrund ändern class="bellevue" //
document.getElementsByClassName("bellevue")[0].setAttribute("style", "background-color: aquamarine;");
// bellvue als Klasse hinzufügen //
document.getElementById("Absatz").classList.add("bellvue");
document.getElementById("Absatz").setAttribute("class", "bellvue");

// mit h4 ein- und ausblenden //
let elementTag = "h4";
let element = document.querySelector(elementTag)
DNone (element);
console.log(elementTag,"wurde getoggelt");
input.addEventListener("change", () => {
    elementTag = input.value;
    element = document.querySelector(elementTag);
})

// mit pulldown menu elemente ein- und ausblenden //
const select = document.getElementById("elementSelect");
select.addEventListener("change", () =>{
    const elementTag = select.value;
    const element = document.querySelector(elementTag);
    if (element) {
        element.classList.toggle("d_none");
        console.log(`${elementTag} wurde getoggelt`);    
    } else {
        console.log("Element nicht gefunden");        
    }
    select.value ="";
});
// funktion bestimmtes element (button, hier) ein-/ausblenden //
function DNone (el) {
    el.classList.toggle("d_none");
}
