let favorittDyr = ["Spekkhogger", "Otter", "Hai"]

function skrivUtDyr() {
    dyrArray.innerHTML = "";
    for (let i = 0; i < favorittDyr.length; i++) {
        dyrArray.innerHTML += i+1 + ".  " + favorittDyr[i] + "<br>";
    }
    console.log(favorittDyr)
}

skrivUtDyr()

console.log(favorittDyr);                                  // Skriv ut listen før modifikasjoner er gjort.
console.log(favorittDyr[0]);                               // Skriv ut det første dyret i listen til konsollen.
favorittDyr.push("And")    ;                               // Legg til et nytt dyr på slutten av listen.
favorittDyr.pop();                                         // Fjern det siste dyret fra listen.
console.log(favorittDyr);                                  // Skriv ut listen etter modifikasjoner er gjort.

function leggTilDyr(DyrInput) {
    favorittDyr.push(DyrInput)
    skrivUtDyr()
}

function fjernDyr() {
    favorittDyr.pop()
    skrivUtDyr()
}

let handleliste = [];


function skrivUtHandeliste() {
    handleListeArray.innerHTML = "";
    for (let i = 0; i < handleliste.length; i++) {
        handleListeArray.innerHTML += i+1 + ".  " + handleliste[i] + "<br>";
    }
}


function leggtilMatvare() {
    let antall = prompt("Hvor Mange Matvarer Skal du ha?")
    for (i = 0; i < antall; i++) {
        handleliste.push(prompt("Skriv inn en matvare:"));
    }
    skrivUtHandeliste()
}

function fjernMatvare() {
    let antall = prompt("Hvor Mange Matvarer Skal du fjerne?")
    for (i = 0; i < antall; i++) {
        let posisjon  = prompt("Hvilken Posisjon er Matvaren")
        handleliste.splice(posisjon-1, 1);
    }
    skrivUtHandeliste()
}

let gjesteliste = [];


function skrivUtGjester() {
    gjestelisteArray.innerHTML = "";
    for (let i = 0; i < gjesteliste.length; i++) {
        gjestelisteArray.innerHTML += i+1 + ".  " + gjesteliste[i] + "<br>";
    }
}


function leggtilgjest() {
    let antall = prompt("Hvor Mange Gjester Skal du Legge til?")
    for (i = 0; i < antall; i++) {
        gjesteliste.push(prompt("Skriv inn en Gjest:"));
    }
    skrivUtGjester()
}

function fjernGjest() {
    let antall = prompt("Hvor Mange Gjester Skal du fjerne?")
    for (i = 0; i < antall; i++) {
        let posisjon  = prompt("Hvilken Posisjon er på lisa er Gjesten")
        gjesteliste.splice(posisjon-1, 1);
    }
    skrivUtGjester()
}

function resetAll() {
    favorittDyr = ["Spekkhogger", "Otter", "Hai"];
    gjesteliste = [];
    handleliste = [];
    skrivUtDyr()
    skrivUtGjester()
    skrivUtHandeliste()
}


let gjesteliste1 = "<ol>";
let gjestelisteI = 0

function leggtilgjest1(gjestNavn) {
    if (gjestNavn == "") {
        alert("Du må skrive inn et navn")
        return
    }
    gjestelisteI++
    gjesteliste1 += gjestelisteI + ". " + gjestNavn + "<br>"
    gjestelisteArray1.innerHTML = gjesteliste1
}