# Repetisjon av Arrays (Lister)

## 🎯 Læringsmål:
- Forstå hva arrays (lister) er.
- Kunne lage en array og legge til, fjerne og hente ut verdier.
- Bruke arrays i enkle programmer.


### Hva er en array?
En **array (liste)** brukes til å lagre flere verdier i én variabel.

**Eksempel:**
```javascript
let frukt = ["Eple", "Banan", "Appelsin"];
console.log(frukt[0]); // Skriver ut: Eple
```
- **Verdiene starter på plass 0** (ikke 1)!
- **frukt[0]** gir oss "Eple".
- **frukt[1]** gir oss "Banan".

### Vanlige operasjoner med arrays:
```javascript
let dyr = ["Hund", "Katt", "Fugl"];

dyr.push("Hest"); // Legger til "Hest" sist i listen
dyr.pop(); // Fjerner siste elementet i listen
console.log(dyr.length); // Skriver ut hvor mange elementer som er i listen
```

---

## 🎮 Øvelse 1: Lag din egen liste (10 min)

### Oppgave:
1. Lag en array med 3 av dine favorittdyr.
2. Skriv ut det første dyret i listen til konsollen.
3. Legg til et nytt dyr på slutten av listen.
4. Fjern det siste dyret fra listen.
5. Skriv ut listen.

**Eksempel:**
```javascript
let favorittdyr = ["Hund", "Katt", "Hest"];
console.log(favorittdyr[0]); // Skriver ut: Hund
favorittdyr.push("Fugl");
favorittdyr.pop();
console.log(favorittdyr); // Sjekk hva som er igjen i listen!
```

---

## 💡 Øvelse 2: Jobb med brukervalg (10-15 min)
La brukeren legge til og fjerne elementer fra en array.

```javascript
let handleliste = [];

handleliste.push(prompt("Skriv inn en matvare:"));
handleliste.push(prompt("Skriv inn en matvare til:"));

console.log("Din handleliste: " + handleliste);

handleliste.pop();
console.log("Etter å ha fjernet siste vare: " + handleliste);
```

### Utfordring:
- Kan du legge til 3 varer istedenfor 2?
- Kan du la brukeren fjerne en vare med en spesifikk plass i arrayen?

---

## 🚀 Kodeutfordring: Lag en gjesteliste (15-20 min)
Bruk arrays til å lage en enkel gjesteliste for en fest. Programmet skal:
1. La brukeren skrive inn navnene på 3 personer.
2. Skrive ut listen med alle navnene.
3. La brukeren fjerne én person.
4. Skrive ut den oppdaterte listen.

**Eksempel på kode:**
```javascript
let gjester = [];

for (let i = 0; i < 3; i++) {
  let navn = prompt("Skriv inn et gjestenavn:");
  gjester.push(navn);
}

console.log("Gjestelisten: " + gjester);

let fjernNavn = prompt("Skriv inn et navn du vil fjerne:");
let index = gjester.indexOf(fjernNavn);
if (index !== -1) {
  gjester.splice(index, 1);
}

console.log("Oppdatert gjesteliste: " + gjester);
```

---

## 🎯 Oppsummering og refleksjon (5 min)
- Hva lærte vi om arrays i dag?
    Jeg lærte hvordan man bruker splice, pop & push
- Hva var lett/vanskelig?
    Oppgave 1, 2, & hverfal 3 var enkel
- Hva kan vi bruke arrays til i større programmer?
    For å lage informasjon

---


