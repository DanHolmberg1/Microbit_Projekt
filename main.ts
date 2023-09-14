radio.onReceivedNumber(function (receivedNumber) {
    Slutvärde = receivedNumber
    if (receivedNumber <= 999999) {
        Hitta_nummer_från_höger(1)
        basic.showString(Hittad_plats)
    } else {
        while (receivedNumber > 999 * 10 ** index_tiotal_alla_värden) {
            index_tiotal_alla_värden += 1
        }
        if (index_tiotal_alla_värden < 10) {
            sjätte_index = tiopotens_uträkning(1)
            femte_index = "e"
            fjärde_index = uträkning_för(1)
            tredje_index = uträkning_för(1)
            andra_index = uträkning_för(1)
            första_index = uträkning_för(1)
        } else if (index_tiotal_alla_värden >= 10) {
            sjätte_index = tiopotens_uträkning(1)
            femte_index = tiopotens_uträkning(1)
            fjärde_index = "e"
            tredje_index = uträkning_för(1)
            andra_index = uträkning_för(1)
            första_index = uträkning_för(1)
        }
        basic.showString(sjätte_index)
    }
})
/**
 * Baserat på vilken av Mb så ska olika index visas:
 * 
 * Mb1: första index osv osv
 * 
 * =>
 */
// 1 är längst till höger, två ett steg till vänster...
function Hitta_nummer_från_höger (num: number) {
    // För MB 6
    Hittad_plats = convertToText(Math.floor(Slutvärde % (10 ** (num - 1) * 100) / (10 ** (num - 1) * 10)))
}
function uträkning_för (num: number) {
    return convertToText(parseFloat(convertToText(Slutvärde).substr(num, 1)))
}
// För varje MB:
// 
// * Ändra samtliga variabler till rätt term/funkt
// 
// *Ändra radio sänd nummer till rätt variabel samt gällande siffra
input.onButtonPressed(Button.A, function () {
    if (termfunkt1 == 0) {
        termfunkt1 += 0
    } else {
        termfunkt1 += -1
    }
    if (termfunkt1 >= 0 && termfunkt1 <= 9) {
        basic.showNumber(termfunkt1)
    } else if (termfunkt1 == 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (termfunkt1 == 11) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (termfunkt1 == 12) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (termfunkt1 == 13) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (termfunkt1 == 14) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    }
})
input.onButtonPressed(Button.AB, function () {
    let index = 0
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    Numerlista.push("5" + "," + convertToText(termfunkt1))
    Gör_om_till_bättre_lista()
    första_räknesatsen = [0, 5]
    första_räknesatsen_nmr = 0
    upphöjt = 0
    for (let index2 = 0; index2 <= siffror.length; index2++) {
        if (siffror[index2] > 9) {
            operation = siffror[index2]
            första_räknesatsen_nmr += 1
            upphöjt = 0
        } else {
            första_räknesatsen[första_räknesatsen_nmr] = första_räknesatsen[första_räknesatsen_nmr] * 10 ** upphöjt + siffror[index2]
            upphöjt += 1
        }
    }
    if (siffror[index] == 10) {
        radio.sendNumber(första_räknesatsen[0] + första_räknesatsen[1])
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (siffror[index] == 11) {
        radio.sendNumber(första_räknesatsen[0] - första_räknesatsen[1])
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (siffror[index] == 12) {
        radio.sendNumber(första_räknesatsen[0] * första_räknesatsen[1])
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (siffror[index] == 13) {
        radio.sendNumber(första_räknesatsen[0] / första_räknesatsen[1])
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
    if (siffror[index] == 14) {
        radio.sendNumber(första_räknesatsen[0] ** första_räknesatsen[1])
        basic.showLeds(`
            # # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
radio.onReceivedString(function (receivedString) {
    Numerlista.push(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (termfunkt1 == 14) {
        termfunkt1 += 0
    } else {
        termfunkt1 += 1
    }
    if (termfunkt1 >= 0 && termfunkt1 <= 9) {
        basic.showNumber(termfunkt1)
    } else if (termfunkt1 == 10) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (termfunkt1 == 11) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
    } else if (termfunkt1 == 12) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else if (termfunkt1 == 13) {
        basic.showLeds(`
            . . # . .
            . . . . .
            # # # # #
            . . . . .
            . . # . .
            `)
    } else if (termfunkt1 == 14) {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . . . . .
            . . . . .
            `)
    }
})
function Gör_om_till_bättre_lista () {
    // Måste ta -1...
    for (let plats = 0; plats <= Numerlista.length - 1; plats++) {
        Temporär_variabel = Numerlista[plats]
        Temporär_lista = Temporär_variabel.split(",")
        Z = Temporär_lista[1]
        Y = Temporär_lista[0]
        Färdig_lista[parseFloat(Y)] = parseFloat(Z)
    }
}
// begränsning:
// 
// jag har inte avrundat värdet på talet innan e.
// 
// så om talet är 1399
// 
// blir det 139 även fast 140 hade varit "rätt"
function tiopotens_uträkning (num: number) {
    return convertToText(parseFloat(convertToText(index_tiotal_alla_värden).substr(num, 1)))
}
let Temporär_lista: string[] = []
let Temporär_variabel = ""
let operation = 0
let upphöjt = 0
let första_räknesatsen_nmr = 0
let första_räknesatsen: number[] = []
let Numerlista: string[] = []
let termfunkt1 = 0
let första_index = ""
let andra_index = ""
let tredje_index = ""
let fjärde_index = ""
let femte_index = ""
let sjätte_index = ""
let Hittad_plats = ""
let Slutvärde = 0
let Z = ""
let Y = ""
let siffror: number[] = []
let Färdig_lista: number[] = []
let index_tiotal_alla_värden = 0
radio.setGroup(49)
index_tiotal_alla_värden = 1
Färdig_lista = []
let listnummer: number[] = []
let stringen = 0
let list = [0, 5]
siffror = [0, 5]
Y = ""
Z = ""
