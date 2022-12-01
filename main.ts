let list: number[][] = []
basic.forever(function () {
    basic.pause(100)
    basic.clearScreen()
    basic.pause(100)
    list = [
    [
    0,
    1,
    1,
    1,
    0
    ],
    [
    1,
    0,
    0,
    0,
    1
    ],
    [
    1,
    0,
    0,
    0,
    1
    ],
    [
    1,
    0,
    0,
    0,
    1
    ],
    [
    0,
    1,
    1,
    1,
    0
    ]
    ]
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= 4; y++) {
            if (list[x][y] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
})
