// hallo Welt
console.log("Hello world!");

// Variablen
let quirinsAlter = 52;
console.log(quirinsAlter);
const quirinsGeburtsjahr =1973;
console.log(quirinsGeburtsjahr);
let myint = 12; //Integer
let myfloat = 3.14; //Gleitzahl
let mybool = true; //Bool'sche Variable (true/false)
let myarray = ["Geburtsjahr","aktuelles Alter",1973,52]; //Feld
let myObject = {Geburtsjahr : 1973, Alter : 52}; //Objekt, liste mit key/value paaren

// weitere Versuche
myint = myint + myfloat; //int wird zu float
myfloat = myfloat + myint; //float bleibt
myint = myint +"3w"; //my int wird zur variable
myint = myint + 3; //my int bleibt variable
myint = myint **3; //NaN

console.log(myint);
console.log(myfloat);

// Bool'sche Experimente:
mybool = !mybool; //true wird false und umgekehrt
mybool = true || false || false; //wenn einer true dann true
mybool = true && false && false; //nur wenn alle true
mybool = true && true; //dann true

console.log (mybool)

// vergleiche und Operatoren in Bool
mybool = 5=="5"; // ist gleich egal welcher typ true
mybool = 5==="5";// auch typ, also false
mybool = 5!="5";// false weil typ egal
mybool = 5!=="5";// true weil typ auch gefragt
mybool = 5<=5;// <> und =, wie in anderen Sprachen

console.log (mybool)

//if else
mybool = false;
mybool = true;

if (mybool) {
    console.log ("Bedingung erfüllt!")
}
else {console.log ("Bedingung nicht erfüllt")}

