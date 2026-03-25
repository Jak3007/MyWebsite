function opp1(navn) {
    console.log(navn);
    navn_utskrift.innerHTML = "Hei, " + navn;
}

function opp2(tid, navn) {
    console.log(tid);
    tid_utskrift.innerHTML = navn + " du er " + (2024-tid) + " år";
}

function opp3(num1, num2) {
    var num3 = Number(num1) + Number(num2);
    console.log(num3);
    add_utskrift.innerHTML = num3
}

function opp4(celcius) {
    var fahrenheit = Number((celcius*1.8)+32)
    console.log(fahrenheit)
    fahrenheit_utskrift.innerHTML = fahrenheit
}

function opp5(lengde, bredde) {
    var rektangel_omkrets = Number((lengde * 2)) + ((bredde * 2))
    console.log("Omkretsen er " + rektangel_omkrets + " cm")
    rektangel_utskrift.innerHTML ="Omkretsen er " + rektangel_omkrets + "  cm"
}

function opp6(hilsen_navn) {
    const hilsen = ["Hei", "Hallo", "God dag"] //lager en liste med objekter med const (array)
    const randomIndex = Math.floor(Math.random() * hilsen.length); //Math.floor gjør koden tilfeldig med hjelp av å vite lengden
    const hilsen_utskrift = hilsen[randomIndex] //Lager de tilfeldige hilsene i en ny string (som jeg bruker på p taggen)

    document.getElementById("hilsen_utskrift").innerText = hilsen_utskrift + " " + hilsen_navn; // Dette viser hilsenene i <p> taggen
    console.log(hilsen_utskrift + " " + hilsen_navn); // Log the greeting to the console
}

function opp7(radius) {
    var omkrets = Number(2 * 3.14 * radius)
    console.log(omkrets)
    omkrets_utskrift.innerHTML = omkrets
}

function opp8(pris, prosent) {
    var rabbat = Number(pris * ( (100 - prosent) / 100) )
    console.log("Den nye prisen er " + rabbat + "kr")
    rabbat_utregning.innerHTML = "Den nye prisen er " + rabbat + "kr"
}

function prosent() {
    value = value.replace('%', '').replace(/[^0-9.]/g, '');
}