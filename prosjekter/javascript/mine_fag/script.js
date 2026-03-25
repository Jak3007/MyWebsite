



let mineFag = ["Matematikk", "Engelsk", "Naturfag"]


function opg1() {
    opg1_fagListe.innerHTML = ""
    for (i = 0; i < mineFag.length; i++) {
        opg1_fagListe.innerHTML += (mineFag[i]) + ", "
    }
}

function clear_array() {
    mineFag = ["Matematikk", "Engelsk", "Naturfag"]
    opg1_fagListe.innerHTML = ""
    opg2_fagListe.innerHTML = ""
}

function opg2(nyttFag) {
    opg2_fagListe.innerHTML = ""
    mineFag.push(nyttFag)
    for (i = 0; i < mineFag.length; i++) {
        opg2_fagListe.innerHTML += (mineFag[i]) + ", "
    }
}

function opg3() {
    opg2_fagListe.innerHTML = ""
    mineFag.pop(mineFag)
    for (i = 0; i < mineFag.length; i++) {
        opg2_fagListe.innerHTML += (mineFag[i] + ", ")
    }
}

function opg4(sok) {
    opg4_sok.innerHTML = ""
    if (mineFag.includes(sok)) {
        opg4_sok.innerHTML = "Listen inkluderer " + sok
    } else {
        opg4_sok.innerHTML = sok + " er ikke på lista"
    }
}
