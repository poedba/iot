OLED.init(128, 64)
basic.forever(function () {
    OLED.clear()
    OLED.writeStringNewLine("dust (ug/m3):")
    OLED.writeNumNewLine(Environment.ReadDust(DigitalPin.P13, AnalogPin.P1))
    basic.pause(2000)
})
