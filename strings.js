// strings
let myvariable = "Quirin's Alter ist 52 Jahre!"; //Variable
myvariable = myvariable + " Er ist " + 1973 + " geboren";
console.log(myvariable);
// strings kann man nur addieren
// myvariable = myvariable -2;
// console.log(myvariable);
// bei anderen Operationen kommt immer NaN (Not a Number)

// length
console.log("myvariable ist ",myvariable.length," Zeichen lang.");
myvariable = "    " + myvariable + "   ";
console.log("wir haben vorne und hinten 4 bzw 3 spaces addiert");
console.log("Der Satz :");
console.log(myvariable);
console.log("ist nun", myvariable.length, "Zeichen lang!");
// trim
myvariable = myvariable.trim();
console.log("und nun nach .trim :", myvariable.length);





