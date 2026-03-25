
    



function kast(){
    return Math.floor(Math.random() * 6) + 1;
}

function lett_ti_kast(){
    allekasta = ""
    let sum = 0
    for (let i = 0; i < 10; i++){
        let terning = kast();
        allekasta = allekasta + terning + " "
        sum = sum + terning
        console.log(terning);
    }
    ti_kast_resultat.innerHTML = allekasta + "<br>" + "Summen er: " + sum + "<br>" + "Gjennomsnittet er: " + Number(sum/10) 
}

function middels_ti_kast() {
    
    //lagrer alle verdiene
    let array1 = [0,0,0,0,0,0];

    allekasta = ""
    let partall  = 0
    let oddetall = 0
    let sum      = 0
    let før_fant6 = false
    let tall_før_seks = 1
    let fant6 = false
    let høyeste_kast = 0
    let laveste_kast = 6
     Number(0)
     Number(0)
     Number(0)
     Number(0)
     Number(0)
     Number(0)
    let mest     = 0
    let flest    = 0
    for (let i = 0; i < 10; i++){
        let terning = kast();
        allekasta = allekasta + terning + " "
        sum = sum + terning
        console.log(terning);

        if (terning%2 == 0) {                                   //deler hva terningen ruller og hvis tallet er i 2 gangen så vil den få en verdi på 0, og da vil koden telle tallet som et partall, ellers på blir det telt som et oddetall
            partall = partall + 1
        } else {
            oddetall = oddetall + 1
        }

        if (terning == 6 && før_fant6 == false) {               //Sjekker om terningen = 6, og om 6 har blitt funnet før
            fant6 = true
        } else if (fant6 == true) {                             //hvis 6 har blitt funnet så gjør den ingenting
            
        } else {
            tall_før_seks = tall_før_seks + 1                   //hvis seks ikke har blitt funnet så teller den hvormange ganer det tar
        }

        if (tall_før_seks == 11) {                              //hvis seks aldri blir funnet, endrer den vedien til "før seks" til "ikke funnet"
            tall_før_seks = "Det er ingen seks"
        }

        //teller høyeste og laveste tallet
        if (terning > høyeste_kast) {høyeste_kast = terning}
        if (terning < laveste_kast) {laveste_kast = terning}


        //teller opp hvilket tall som har blitt rullet mest
        if (terning == 1) {
            array1[0]++
        } else if (terning == 2) {
            array1[1]++
        } else if (terning == 3) {
            array1[2]++
        } else if (terning == 4) {
            array1[3]++
        } else if (terning == 5) {
            array1[4]++
        } else if (terning == 6) {
            array1[5]++
        }

        mest = Math.max(...array1)
        flest = array1.indexOf(mest)




    }



    //lagde stringen median som bruker "Math.max" til å skjekke det høyeste tallet som blir rullet



    middels_ti_kast_resultat.innerHTML = allekasta + "<br>" + "Summen er:         "     + sum               + 
                                                     "<br>" + "Gjennomsnittet er: "     + Number(sum/10)    + 
                                                     "<br>" + "Partall:           "     + partall           + 
                                                     "<br>" + "Oddetall:          "     + oddetall          +
                                                     "<br>" + "Første Seks:       "     + tall_før_seks     +
                                                     "<Br>" + "Høyeste Kast:      "     + høyeste_kast      +
                                                     "<br>" + "Laveste Kast:      "     + laveste_kast      +
                                                     "<br>" + "Det er flest:      "     + Number(flest + 1) + "ere" +
                                                     "<br>" + "1: "                     + "*".repeat(array1[0]) +
                                                     "<br>" + "2: "                     + "*".repeat(array1[1]) +
                                                     "<br>" + "3: "                     + "*".repeat(array1[2]) +
                                                     "<br>" + "4: "                     + "*".repeat(array1[3]) +
                                                     "<br>" + "5: "                     + "*".repeat(array1[4]) +
                                                     "<br>" + "6: "                     + "*".repeat(array1[5])                                                    }

