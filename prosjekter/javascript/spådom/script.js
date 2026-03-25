



function spådom(navn, høyde, alder) {
    if (Number((alder * høyde)-3) > 500) {
        resultat.innerHTML = 'Det vil gå deg godt her i verden ' + navn
        resultat2.innerHTML = 'For at spådommen skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345'
    } else {
        resultat.innerHTML = 'Stakkars deg! Alt kommer til å gå deg galt ' + navn
        resultat2.innerHTML =  "For at spådommen ikke skal gå i oppfyllelse, må du betale inn 100 kr til følgende kontonummer: 1234.12.12345"
    }
}