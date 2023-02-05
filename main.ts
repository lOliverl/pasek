led.enable(false)
let strip2 = neopixel.create(DigitalPin.P2, 10, NeoPixelMode.RGB)
basic.forever(function () {
    strip2.showColor(neopixel.rgb(255, 0, 50))
    strip2.show()
    for (let index = 0; index <= 18; index++) {
        strip2.rotate(1)
        strip2.setPixelColor(index - 1, neopixel.rgb(255, 0, 50))
        strip2.setPixelColor(index + 1, neopixel.rgb(255, 0, 50))
        basic.pause(100)
        strip2.show()
    }
})
