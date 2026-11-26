let sended_number = 0
let received_number = 0
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    radio.sendString("Hello")
})
radio.onReceivedString(function on_received_string(receivedString: string) {
    basic.showString(receivedString)
})
function on_button_pressed_b() {
    
    sended_number = randint(1, 16)
    radio.sendNumber(sended_number)
}

function on_received_number(receivedNumber: any) {
    
    if (receivedNumber > sended_number) {
        basic.showIcon(IconNames.Sad)
    } else if (receivedNumber < sended_number) {
        basic.showIcon(IconNames.Happy)
    }
    
}

