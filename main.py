sended_number = 0
received_number = 0

def on_button_pressed_a():
    radio.send_string("Hello")

input.on_button_pressed(Button.A, on_button_pressed_a)

def on_received_string(receivedString):
    basic.show_string(receivedString)

radio.on_received_string(on_received_string)

def on_button_pressed_b():
    global sended_number
    sended_number = randint(1, 16)
    radio.send_number(sended_number)

def on_received_number(receivedNumber):
    global sended_number

    if receivedNumber > sended_number:
        basic.show_icon(IconNames.SAD)
    elif receivedNumber < sended_number:
        basic.show_icon(IconNames.HAPPY)
