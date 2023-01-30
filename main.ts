input.onGesture(Gesture.Shake, function () {
    reset()
})
function reset () {
    OLED.init(128, 64)
    PLayer_1 = 0
    Player_2 = 0
    Ties = 0
    rounds = 0
    OLED.writeStringNewLine("Shall we play a game")
    basic.pause(2000)
    OLED.clear()
    OLED.writeStringNewLine("player 1 score:" + PLayer_1)
    OLED.newLine()
    OLED.writeStringNewLine("player 2 score:" + Player_2)
    OLED.newLine()
    OLED.writeStringNewLine("ties:" + Ties)
    OLED.newLine()
    OLED.writeStringNewLine("Rounds:" + rounds)
}
let rounds = 0
let Ties = 0
let Player_2 = 0
let PLayer_1 = 0
reset()
basic.forever(function () {
	
})
