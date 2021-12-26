input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        pins.servoWritePin(AnalogPin.P2, 0)
        basic.pause(500)
        pins.servoWritePin(AnalogPin.P2, 40)
        basic.pause(500)
    }
})
music.onEvent(MusicEvent.MelodyEnded, function () {
    pins.digitalWritePin(DigitalPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
})
music.onEvent(MusicEvent.MelodyNotePlayed, function () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    basic.pause(200)
    pins.digitalWritePin(DigitalPin.P1, 1)
    basic.pause(200)
})
pins.digitalWritePin(DigitalPin.P0, 0)
basic.showString("Hello!!! Welcome to Kitten Box Imran")
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.showIcon(IconNames.SmallHeart)
})
