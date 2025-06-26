let price = 295;
let discount = 35;
let tax = 1.19;
let value = 0;


Calculate (price , discount , tax);
price = 342.40;
discount = 43;
Calculate (price , discount , tax);

value = CalculateValue(price , discount , tax)
console.log(value);

price = 8.99;
discount = 2.50;

value = CalculateValue(price , discount , tax)
console.log(value);

//funktion Calculate schreibt einfach den errechneten Wert
function Calculate(price, discount , tax) {
    console.log((price - discount) * tax);
}
//Funktion CalculateValue gibt den errechneten Wert in value zurück
function CalculateValue (price , discount , tax) {
    console.log("return-Wert value");
    
    return value = (price-discount)*tax;
}