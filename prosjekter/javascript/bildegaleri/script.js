



let bilder = ["bilde1.jpg","bilde2.jpg", "bilde3.jpg", "bilde4.jpg", "bilde5.jpg"]
let bildetekstarray = ["Dette er en isbjørn", "Dette er en pelikan", "Dette er et tog", "Dette er voksen oliver", "Dette er en hund"]

let i = 0

function visBilde() {
    i++
    if(i >= bilder.length) {i = 0}
    bildegaleri.innerHTML   =   "<img src=img/" + bilder[i] + "></img>"
    bildetekst.innerHTML    =   bildetekstarray[i]
}


function forrige_bilde() {
    i--
    if(i < 0) {i = bilder.length - 1}
    bildegaleri.innerHTML = "<img src=img/" + bilder[i] + "></img>"
    bildetekst.innerHTML    =   bildetekstarray[i]
}

function neste_bilde() {
    i++
    if(i >= bilder.length) {i = 0}
    bildegaleri.innerHTML = "<img src=img/" + bilder[i] + "></img>"
    bildetekst.innerHTML    =   bildetekstarray[i]
}
 