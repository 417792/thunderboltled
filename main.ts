input.onButtonPressed(Button.A, function () {
    if (x == 4) {
        a = -1
    } else if (x == 4) {
        a = -1
    }
    dx += a
    dx2 += a
    dx3 += a
    dx4 += a
    led.plotBrightness(dx, 0, 255)
    led.plotBrightness(dx2, 0, 193)
    led.plotBrightness(dx3, 0, 146)
    led.plotBrightness(dx4, 0, 23)
})
let dx3 = 0
let dx4 = 0
let dx2 = 0
let dx = 0
let a = 0
let x = 0
x = 0
let y = 0
a = 0
dx = 0
dx2 = 1
dx2 = 2
dx4 = 3
basic.forever(function () {
    if (x == 4) {
        a = -1
    } else if (x == 0) {
        a = 1
    }
    x += a
    led.plot(x, 0)
    led.plot(x, 1)
    led.plot(x, 2)
    led.plot(x, 3)
    led.plot(x, 4)
    basic.pause(100)
    basic.clearScreen()
})
