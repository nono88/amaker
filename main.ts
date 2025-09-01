input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P16, 100)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P16, 80)
})
basic.showIcon(IconNames.Asleep)
huskylens.initI2c()
huskylens.initMode(protocolAlgorithm.ALGORITHM_OBJECT_TRACKING)
pins.setAudioPinEnabled(false)
pins.servoWritePin(AnalogPin.P16, 90)
basic.forever(function () {
    huskylens.request()
    if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
        pins.servoWritePin(AnalogPin.P0, 74)
        pins.servoWritePin(AnalogPin.P1, 70)
    }
})
