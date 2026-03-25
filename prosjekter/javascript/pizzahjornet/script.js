// Skrevet av Jakob Skreosen Mandelid
//Laget
// Sist oppdatert 10.05.2021

let visPizzaPris    ;
let visDrikkePris   ;
let visAntallPizza  ;
let visAntallDrikke ;
let tilSammen       ;
let ingenbestilling ;
let bestiltPizza      ;
let bestiltDrikke     ;

let pizzaTyper =     ["Pepperoni", "Hawaii", "Kebab", "Kylling", "Taco", "Biff"];                       // Array med pizza typer

let pizzaPris =     [200, 220, 230, 240, 250, 260];                                                     // Array med pizza priser               

let drikke =        ["Cola", "Sprite", "Pepsi", "Sprite", "Fanta", "Vann"];                             // Array med drikke typer

let drikkePris =    [35, 35, 35, 35, 35, 20];                                                           // Array med drikke priser

let alerneger  =    ["Gluten, Melk", "Gluten, Melk", "Gluten, Melk", "Gluten, Melk", "Gluten, Melk", "Gluten, Melk"]; // Array med allergener


function visPizza() {                                                                                   // Funksjon for dropdown meny for pizza             
    let pizzaDropDown = "<select id='pizzaer'>"                                                         // Starter loopen for dropdown menyen                                                                          
    for (let i = 0; i < pizzaTyper.length; i++) {                                                       // Går gjennom pizzaTyper arrayen
        pizzaDropDown += "<option value="+Number(pizzaPris[i])+">" + pizzaTyper[i] + "*" +"</option>"   // Legger til en option i dropdown menyen

    }
    pizzaDropDown += "</select>"                                                                        // Lukker dropdown menyen
    pizzaerHTML.innerHTML = pizzaDropDown                                                               // Legger til dropdown menyen i HTML           
}




function visDrikke() {                                                                                  // Funksjon for å vise drikke typer               
    let drikkeDropDown = "<select id='drikker'>";                                                       // Lager en dropdown meny for drikke
    for (let i = 0; i < drikke.length; i++) {                                                           // For loop som går gjennom drikke arrayen
        drikkeDropDown += "<option value="+Number(drikkePris[i])+">" + drikke[i] + "</option>";         // Legger til en option i dropdown menyen
    }
    drikkeDropDown += "</select>";                                                                      // Lukker dropdown menyen 
    drikkerHTML.innerHTML = drikkeDropDown;                                                             // Legger til dropdown menyen i HTML
}

function antallPizza() {                                                                                // Funksjon for å velge antall pizzaer
    let antallPizzaDropDown = "<select id='dropdownpizza'>"                                             // Lager en dropdown meny for antall pizzaer
    for (let i = 0; i < 21; i++) {                                                                      // For loop som lager 50 valgmuligheter
        antallPizzaDropDown += "<option value="+Number([i])+">" + [i] + "</option>"                     // Legger til en option i dropdown menyen
    }
    antallPizzaDropDown += "</select>"                                                                  // Lukker dropdown menyen
    antallPizzaerHTML.innerHTML = antallPizzaDropDown                                                   // Legger til dropdown menyen i HTML
}

function antallDrikke() {                                                                               // Funksjon for å velge antall drikke
    let antallDrikkeDropDown = "<select id='dropdowndrikke'>"                                           // Lager en dropdown meny for antall drikke
    for (let i = 0; i < 51; i++) {                                                                      // For loop som lager 50 valgmuligheter   
        antallDrikkeDropDown += "<option value="+Number([i])+">" + [i] + "</option>"                    // Legger til en option i dropdown menyen
    }
    antallDrikkeDropDown += "</select>"                                                                 // Lukker dropdown menyen
    antallDrikkerHTML.innerHTML = antallDrikkeDropDown                                                  // Legger til dropdown menyen i HTML
}

function sjekkPris() {
    visPizzaPris    = document.getElementById("pizzaer").value;                                         // Henter verdien til pizzaer dropdown menyen
    visDrikkePris   = document.getElementById("drikker").value;                                         // Henter verdien til drikker dropdown menyen
    visAntallPizza  = document.getElementById("dropdownpizza").value;                                   // Henter verdien til dropdownpizza dropdown menyen
    visAntallDrikke = document.getElementById("dropdowndrikke").value;                                  // Henter verdien til dropdowndrikke dropdown menyen
    tilSammen       = Number(visPizzaPris) * Number(visAntallPizza) + Number(visDrikkePris) * Number(visAntallDrikke);  // Regner ut totalprisen
}

visPizza();
visDrikke();
antallPizza();
antallDrikke();

function skrivUtPris() {                                                                                // Funksjon for å skrive ut prisen
    sjekkPris();                                                                                        // Kjører sjekkPris funksjonen
    pizzaPrisHTML.innerHTML  = "Pizza:  " + Number(visPizzaPris)  + "x" + Number(visAntallPizza)  + " " // Skriver ut prisen for pizza
    drikkePrisHTML.innerHTML = "Drikke: " + Number(visDrikkePris) + "x" + Number(visAntallDrikke) + " " // Skriver ut prisen for drikke
    tilSammenHTML.innerHTML  = "Totalt: " + tilSammen;                                                  // Skriver ut totalprisen              
}

function sjekkAntall() {                                                                                // Funksjon for å sjekke antall pizzaer og drikke
    ingenbestilling = false;                                                                            // Setter ingenbestilling til false
    bestiltPizza    = true;                                                                            // Setter bestiltPizza til true
    bestiltDrikke   = true;                                                                            // Setter bestiltDrikke til true
    if     (document.getElementById("dropdownpizza") .value == 0) {                                     // Sjekker om antall pizzaer er 0
        bestiltPizza = false;                                                                              // Setter bestiltPizza til true
        if (document.getElementById("dropdowndrikke").value == 0) {                                     // Sjekker om antall drikke er 0
            ingenbestilling = true;                                                                     // Setter ingenbestilling til true
            alert("Du må bestille minst en pizza eller drikke!");                                       // Gir en alert om at
        }
    }   
    if (document.getElementById("dropdowndrikke").value == 0) {                                         // Sjekker om antall drikke er 0
        bestiltDrikke = false;                                                                             // Setter bestiltDrikke til true
    }
}



function bestill() {
    kvitteringHTML.innerHTML = "";                                                                                          // Tømmer kvitteringHTML
    sjekkPris()                                                                                                             // Kjører sjekkPris funksjonen                       
    sjekkAntall()                                                                                                           // Kjører sjekkAntall funksjonen       
    if (ingenbestilling == true) {                                                                                          // Sjekker om ingenbestilling er true
        return;                                                                                                             // Avslutter funksjonen
    }
    kvitteringHTML.innerHTML    += "<h1> Takk for bestillingen! </h1>"
    if (bestiltPizza == true) {                                                                                               // Sjekker om bestiltPizza er true
        kvitteringHTML.innerHTML+= "<h2> Pizza: " + pizzaTyper[document.getElementById("pizzaer").selectedIndex] +"</h2>"    // Skriver ut hvilken pizza som er bestilt
                                + "<table> <td> <p> Pris:   " + visPizzaPris                   + " kr   </p>   </td>    "    // Skriver ut prisen for pizza
                                + "        <td> <p> Antall: " + visAntallPizza                 + "      </p>   </td>    "    // Skriver ut antall pizzaer
                                + "        <td> <p> Toltalt:" + visPizzaPris*visAntallPizza    + "kr </p> </td>  </table> "
    }
    if (bestiltDrikke == true) {                                                                                              // Sjekker om bestiltDrikke er true
        kvitteringHTML.innerHTML+= "<h2> Drikke: "+ drikke[document.getElementById("drikker").selectedIndex] +"</h2>"        // Skriver ut hvilken pizza som er bestilt
                                + "<table> <td> <p> Pris:   " + visDrikkePris                   + " kr   </p>   </td>    "   // Skriver ut prisen for pizza
                                + "        <td> <p> Antall: " + visAntallDrikke                 + "      </p>   </td>    "   // Skriver ut antall pizzaer
                                + "        <td> <p> Toltalt:" + visDrikkePris*visAntallDrikke   + "kr </p> </td>  </table> "
    }
    kvitteringHTML.innerHTML    += "<h2> Total: " + tilSammen + "kr (" + tilSammen*0.75 + "kr uten 25% mva)</h2>";                                                // Skriver ut totalprisen
                             
}

