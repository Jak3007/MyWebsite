






function alle_tall() {
    let output = '<h3> Teller fra 1 til 100 </h3>'
    for (let i = 1; i <= 100; i++) {            //gjør i =1. i++ legger til 1 hver gang
        output += i + ', '
    }
    tall_resultat.innerHTML = output
}

function alle_partall() {
    let output = '<h3> Teller alle partall fra 1 til 100 </h3>'
    for (let i = 2; i <=100; i+=2) {            //gjør i til 2. i+=2 legger til tallet 2 hver gang
        output += i + ', '
    }
    partall_resultat.innerHTML = output
}

function alle_oddetall() {
    let output = '<h3> Teller alle partall fra 1 til 100 </h3>'
    for (let i=1; i <=100; i+=2) {
        output += i + ', '
    }
    oddetall_resultat.innerHTML = output
}

function fem_gangen() {
    let output = '<h3> Teller alle tall delig på 5 </h3>'
    for (let i=5; i <=100; i+=5) {
        output += i + ', '
    }
    fem_gangen_resultat.innerHTML = output
}

function fem_par() {
    let output = '<h3> Teller alle tall delig på fem og partall </h3>'
    for (let i=2; i <=100; i+=2) {
        output += i + ', '
    }

    for (let i=5; i <=100; i+=5) {
        output += i + ', '
    }
    fem_par_resultat.innerHTML = output
}

function alle_minus_tall() {
    let output = '<h3> Teller alle tall 0 til -100 </h3>'
    for (let i=0; i >= -100; i-=1) {            //put inn > istenfor <, fordi ">" betyr over
        output += i + ', '
    }
    alle_minus_tall_resultat.innerHTML = output
}

function oppgave_g() {
    let output = '<h3> Teller alle tall -10 til 10 med x^2 </h3>'
    for (let i= Number(-10); i <= 10; i++) {
        output += "f(" + i + ")" + ", sum er nå " + i*i + "<br>";
    }
    oppgave_g_resultat.innerHTML = output
}


function stjerne_opg() {
    let stjerne_opg_2 = '<h3> Opg 2) </h3>'
    for (let i= 1; i<=5; i++) {
        stjerne_opg_2 += '*'
    }
    stjerne_resultat2.innerHTML = stjerne_opg_2

    let stjerne_opg_3 = '<h3> Opg 3) </h3>'
    for (let i= 1; i<=5; i++) {
        stjerne_opg_3 += '*'.repeat(5) + '<br>'
    }
    stjerne_resultat3.innerHTML = stjerne_opg_3

    let stjerne_opg_4 = '<h2> Opg 4) </h2>'
    for (let i= 1; i<=5; i++) {

        stjerne_opg_4 += '*'.repeat(i) + '<br>'
    }
    stjerne_resultat4.innerHTML = stjerne_opg_4

    let stjerne_opg_5 = '<h3> Opg 5) </h3>'
    for (let i= 5; i>=1; i-=1) {

        stjerne_opg_5 += '*'.repeat(i) + '<br>'
    }
    stjerne_resultat5.innerHTML = stjerne_opg_5

    let stjerne_opg_6 = '<h3> Opg 6)</h3>'
    for (let i= 5; i>=6; i++) {
        stjerne_opg_6 += '*'.repeat(i) + '<br>'
        i -= 5
    }
    stjerne_resultat6.innerHTML = stjerne_opg_6

}