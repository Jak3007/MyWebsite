function bensin_mengde(pumpe, bensin_pris) {
    var mengde = Number(pumpe)

    if (pumpe > 80) {
        console.log('Tanken er ikke så stor')
        pumpe_resultat.innerHTML = "Tanken er ikke så stor"
    } else if (pumpe >= 50) {
        var kostnad = Number((bensin_pris * mengde) * 0.9)
        console.log('Du får 10% tilbud, ' + 'det koster ' + Number(bensin_pris * mengde) + 'kr' + ' med tilbud')
        pumpe_resultat.innerHTML = 'Du får 10% tilbud, ' + 'det koster ' + Number(bensin_pris * mengde) + 'kr' + ' med tilbud'
        rabatt.innerHTML = -Number((bensin_pris * mengde) * 0.1) + 'kr'
    } else if (pumpe > 5) {
        var kostnad = Number(bensin_pris * mengde)
        console.log('Suksess' + ', det koster ' + Number(bensin_pris * mengde) + 'kr')
        pumpe_resultat.innerHTML = 'Suksess' + ', det koster ' + Number(bensin_pris * mengde) + 'kr'
        rabatt.innerHTML = '-'
    } else if (pumpe > 0) {
        console.log('Det er for lite')
        pumpe_resultat.innerHTML = 'Det er for lite'
                rabatt.innerHTML = '-'
    } else {
        console.log('Vi tar ikke bensin i retur')
        pumpe_resultat.innerHTML = "Vi tar ikke bensin i retur"
        rabatt.innerHTML = '-'
    }

    liter.innerHTML = mengde + 'L'
    pris.innerHTML = bensin_pris + 'kr' + ' * ' + mengde + 'L' + ' = ' + Number(bensin_pris * mengde) + 'kr'
    sum.innerHTML = Number(kostnad) + 'kr'
    mva.innerHTML = Number(kostnad*0.25) + 'kr' + ' (25%)'

}