let x = 0
let y = 0
let a = 0
basic.forever(function () {
    x = x + a
    a += 1
    led.plot(x, y)
    basic.pause(100)
    led.unplot(x, y)
    x = 0
})
