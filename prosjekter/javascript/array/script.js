

let hoyde = [156, 178, 187, 182, 177, 165, 172]
let vhn = 0                                         //vhn står for vis høde number
vis_hoyde.innerHTML = hoyde[vhn] + "cm"

function opg1() {
    console.log(hoyde[0])
    forse_hoyde.innerHTML   =   "Førse Verdi: "     +   hoyde[0]
    console.log(hoyde[6])
    siste_hoyde.innerHTML   =   "Siste Verdi: "     +   hoyde[6]

    let sum = hoyde[0] + hoyde[1] + hoyde[2] + hoyde[3] + hoyde[4] + hoyde[5] + hoyde[6]
    console.log(sum)
    til_sammen.innerHTML    =   "Sum: "         + sum

    console.log( (sum/6).toFixed(2)  )
    gjennomsnitt.innerHTML =    "Gjennomsnitt: "    +   (sum/6).toFixed(2)
}

function neste_hoyde() {
    if (vhn == 6) {
        vhn == Number(0)
    } else if (vhn > -1 && vhn < 6) {
        vhn += 1
    }
    vis_hoyde.innerHTML = hoyde[vhn] + "cm"
}

function forrige_hoyde() {
    if (vhn == 0) {
        vhn == 6
    } else if (vhn <= 6 && vhn > 0) {
        vhn -= 1
    }
    vis_hoyde.innerHTML = hoyde[vhn] + "cm"
}

vis_hoyde.innerHTML = hoyde[vhn] + "cm"