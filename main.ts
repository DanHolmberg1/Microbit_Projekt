radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= 999999) {
        Hitta_nummer_från_höger(0)
        basic.showString(Hittad_plats)
    } else {
        doSomething()
        basic.showString(Siffra_för_E)
    }
})
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
// 1 är längst till höger, två ett steg till vänster...
function Hitta_nummer_från_höger (num: number) {
    // För MB 6
    Hittad_plats = convertToText(Math.floor(Slutvärde % (10 ** (num - 1) * 100) / (10 ** (num - 1) * 10)))
}
function doSomething () {
    Siffra_för_E = convertToText("" + (Slutvärde - Math.floor(Slutvärde % 10 ** (convertToText(Slutvärde).length - 2))) / 10 ** (convertToText(Slutvärde).length - 2) / 10 + "e" + convertToText(Slutvärde).length)
}
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(50)
    radio.sendNumber(Slutvärde)
})
radio.onReceivedString(function (receivedString) {
	
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
let termfunkt1 = 0
let Siffra_för_E = ""
let Hittad_plats = ""
let Slutvärde = 0
radio.setGroup(49)
Slutvärde = 5235235325235
basic.forever(function () {
    if (Slutvärde <= 999999) {
        Hitta_nummer_från_höger(0)
        basic.showString(Hittad_plats)
    } else {
        doSomething()
        basic.showString(Siffra_för_E)
    }
})
