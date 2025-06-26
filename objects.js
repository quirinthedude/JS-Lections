let myfancyobject = {
    Surname : "Quirin",
    Familyname : "Pflaum",
    bornIn : 1973,
    actualYear : new Date().getFullYear(),
    Age : function () {
        return this.actualYear - this.bornIn;
    }
}

console.log(myfancyobject.actualYear);
console.log(myfancyobject.Age());
