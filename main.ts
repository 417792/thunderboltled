let y = 0
let x = 2
let dx = 1
basic.forever(function () {
	
})
basic.forever(function () {
    y = 0
    if (x == 4) {
        dx = -1
    } else if (x == 0) {
        dx = 1
    }
    for (let index = 0; index < 5; index++) {
        led.plotBrightness(dx - 0, y, 20)
        led.plotBrightness(dx - 1, y, 60)
        led.plotBrightness(dx + 1, y, 225)
        y += 1
    }
    basic.pause(100)
    basic.clearScreen()
})
