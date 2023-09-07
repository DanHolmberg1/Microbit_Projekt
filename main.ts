input.onButtonPressed(Button.AB, function () {
    radio.setGroup(50)
    radio.sendNumber(Slutvärde)
})
radio.onReceivedString(function (receivedString) {
	
})
let Slutvärde = 0
radio.setGroup(49)
Slutvärde = 12624651285
basic.forever(function () {
    if (Slutvärde <= 999999) {
    	
    } else {
        basic.showString(convertToText("" + (Math.round(1) + Math.trunc(2) / 10) + "e" + convertToText(Slutvärde).length))
    }
})
