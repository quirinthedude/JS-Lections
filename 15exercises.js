// Aufgabe 1
let string1 = "Max";
let string2 = "Mustermann";
let strings = "";

strings = fullName(string1, string2);
console.log(strings);



function fullName(string1, string2) {
    return string1 + " " + string2;
}

// Aufgabe 2

let word = "BanANe";
console.log(word);
console.log(capitalize(word));

function capitalize(word) {
    return word = word.toLocaleUpperCase();
}

// übung 3
let countChars = 0;

console.log(Length(word));
console.log(word);
console.log(Length(strings));
console.log(word, strings);


function Length (word) {
return countChars = word.length;
}

// Übung 4 --- in Format für Geld umwandeln
let money = 0.5;

console.log("gegebener Wert: ", money);
console.log("In Euro formatiert: ", changeToEuro(money));


function changeToEuro(money) {
    return new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR"
    }).format(money);
    
}
