namespace SpriteKind {
    export const UI = SpriteKind.create()
}
function col5print () {
    outputlist = []
    if (Selections[20] == 1) {
        outputlist.push(20)
    }
    if (Selections[19] == 1) {
        outputlist.push(19)
    }
    if (Selections[18] == 1) {
        outputlist.push(18)
    }
    if (Selections[21] == 1) {
        outputlist.push(21)
    }
    if (Selections[17] == 1) {
        outputlist.push(17)
    }
    if (Selections[22] == 1) {
        outputlist.push(22)
    }
    if (Selections[23] == 1) {
        outputlist.push(23)
    }
    clearScreen()
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(keypadList[outputlist[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    curY = Math.max(0, curY - 1)
    UpdateCursor()
})
function InitKeys () {
    for (let index = 0; index <= keypadList.length - 1; index++) {
        mySprite = sprites.create(keypadList[index], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function UpdateCursor () {
    cursorSprite.left = curX * 23
    cursorSprite.top = curY * 31
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    col1count = 0
    col2count = 0
    col3count = 0
    col4count = 0
    col5count = 0
    col6count = 0
    if (SelectedCount == 4) {
        if (Selections[0] == 1) {
            col1count += 1
            col2count += 1
        }
        if (Selections[1] == 1) {
            col1count += 1
        }
        if (Selections[2] == 1) {
            col1count += 1
            col3count += 1
        }
        if (Selections[3] == 1) {
            col1count += 1
            col3count += 1
        }
        if (Selections[4] == 1) {
            col1count += 1
            col4count += 1
        }
        if (Selections[5] == 1) {
            col1count += 1
            col2count += 1
        }
        if (Selections[6] == 1) {
            col1count += 1
            col2count += 1
        }
        if (Selections[7] == 1) {
            col2count += 1
            col1count += 1
        }
        if (Selections[8] == 1) {
            col2count += 1
        }
        if (Selections[9] == 1) {
            col2count += 1
            col3count += 1
        }
        if (Selections[10] == 1) {
            col2count += 1
            col3count += 1
        }
        if (Selections[11] == 1) {
            col4count += 1
        }
        if (Selections[12] == 1) {
            col3count += 1
        }
        if (Selections[13] == 1) {
            col3count += 1
            col4count += 1
        }
        if (Selections[14] == 1) {
            col3count += 1
        }
        if (Selections[15] == 1) {
            col4count += 1
            col6count += 1
            col3count += 1
        }
        if (Selections[16] == 1) {
            col4count += 1
            col5count += 1
        }
        if (Selections[17] == 1) {
            col4count += 1
            col5count += 1
        }
        if (Selections[18] == 1) {
            col4count += 1
            col5count += 1
        }
        if (Selections[19] == 1) {
            col5count += 1
            col6count += 1
        }
        if (Selections[20] == 1) {
            col5count += 1
        }
        if (Selections[21] == 1) {
            col5count += 1
        }
        if (Selections[22] == 1) {
            col5count += 1
        }
        if (Selections[23] == 1) {
            col6count += 1
        }
        if (Selections[24] == 1) {
            col6count += 1
        }
        if (Selections[25] == 1) {
            col6count += 1
        }
        if (Selections[26] == 1) {
            col6count += 1
        }
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
        if (col1count == 4) {
            col1print()
            game.splash("SUCCESFUL ATTEMPT!")
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        } else if (col2count == 4) {
            col2print()
            game.splash("SUCCESFUL ATTEMPT!")
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        } else if (col3count == 4) {
            col3print()
            game.splash("SUCCESFUL ATTEMPT!")
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        } else if (col4count == 4) {
            col4print()
            game.splash("SUCCESFUL ATTEMPT!")
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        } else if (col5count == 4) {
            col5print()
            game.splash("SUCCESFUL ATTEMPT!")
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        } else if (col6count == 4) {
            col6print()
            game.splash("SUCCESFUL ATTEMPT!")
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        } else {
            music.stopAllSounds()
            music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
            scene.cameraShake(5, 500)
            game.splash("KABOOM!")
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    current = curY * 7 + curX
    Selections[current] = Selections[current] * -1
    if (Selections[current] == 1) {
        if (SelectedCount == 4) {
            Selections[current] = Selections[current] * -1
        } else {
            SelectedCount += 1
            keypadList[current].replace(0, 7)
        }
    } else {
        SelectedCount += -1
        keypadList[current].replace(7, 0)
    }
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    clearScreen()
    InitKeys()
    InitCursor()
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    curX = Math.max(0, curX - 1)
    UpdateCursor()
})
function clearScreen () {
    sprite_list = sprites.allOfKind(SpriteKind.UI)
    for (let value of sprite_list) {
        value.destroy()
    }
}
function InitCursor () {
    cursorSprite = sprites.create(img`
        88888..........88888
        88888..........88888
        88................88
        88................88
        88................88
        88................88
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        88................88
        88................88
        88................88
        88................88
        88................88
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        88................88
        88................88
        88................88
        88888..........88888
        88888..........88888
        `, SpriteKind.UI)
    UpdateCursor()
}
function col6print () {
    outputlist = []
    if (Selections[16] == 1) {
        outputlist.push(16)
    }
    if (Selections[8] == 1) {
        outputlist.push(8)
    }
    if (Selections[24] == 1) {
        outputlist.push(24)
    }
    if (Selections[25] == 1) {
        outputlist.push(25)
    }
    if (Selections[20] == 1) {
        outputlist.push(20)
    }
    if (Selections[26] == 1) {
        outputlist.push(26)
    }
    if (Selections[27] == 1) {
        outputlist.push(27)
    }
    clearScreen()
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(keypadList[outputlist[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function col1print () {
    outputlist = []
    if (Selections[0] == 1) {
        outputlist.push(0)
    }
    if (Selections[1] == 1) {
        outputlist.push(1)
    }
    if (Selections[2] == 1) {
        outputlist.push(2)
    }
    if (Selections[3] == 1) {
        outputlist.push(3)
    }
    if (Selections[4] == 1) {
        outputlist.push(4)
    }
    if (Selections[5] == 1) {
        outputlist.push(5)
    }
    if (Selections[6] == 1) {
        outputlist.push(6)
    }
    if (Selections[7] == 1) {
        outputlist.push(7)
    }
    clearScreen()
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(keypadList[outputlist[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curY < 3) {
        curX = Math.min(6, curX + 1)
    } else {
        curX = Math.min(5, curX + 1)
    }
    UpdateCursor()
})
function col3print () {
    outputlist = []
    if (Selections[12] == 1) {
        outputlist.push(12)
    }
    if (Selections[13] == 1) {
        outputlist.push(13)
    }
    if (Selections[14] == 1) {
        outputlist.push(14)
    }
    if (Selections[15] == 1) {
        outputlist.push(15)
    }
    if (Selections[3] == 1) {
        outputlist.push(3)
    }
    if (Selections[10] == 1) {
        outputlist.push(10)
    }
    clearScreen()
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(keypadList[outputlist[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (curX == 6) {
        curY = Math.min(2, curY + 1)
    } else {
        curY = Math.min(3, curY + 1)
    }
    UpdateCursor()
})
function col2print () {
    outputlist = []
    if (Selections[8] == 1) {
        outputlist.push(8)
    }
    if (Selections[9] == 1) {
        outputlist.push(9)
    }
    if (Selections[10] == 1) {
        outputlist.push(10)
    }
    if (Selections[11] == 1) {
        outputlist.push(11)
    }
    if (Selections[0] == 1) {
        outputlist.push(0)
    }
    if (Selections[7] == 1) {
        outputlist.push(7)
    }
    if (Selections[6] == 1) {
        outputlist.push(6)
    }
    clearScreen()
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(keypadList[outputlist[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7) * 31
    }
}
function InitArray () {
    Selections = [
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1,
    -1
    ]
}
function col4print () {
    outputlist = []
    if (Selections[16] == 1) {
        outputlist.push(16)
    }
    if (Selections[17] == 1) {
        outputlist.push(17)
    }
    if (Selections[18] == 1) {
        outputlist.push(18)
    }
    if (Selections[19] == 1) {
        outputlist.push(19)
    }
    if (Selections[11] == 1) {
        outputlist.push(11)
    }
    if (Selections[14] == 1) {
        outputlist.push(14)
    }
    if (Selections[20] == 1) {
        outputlist.push(20)
    }
    clearScreen()
    for (let index = 0; index <= 3; index++) {
        mySprite = sprites.create(keypadList[outputlist[index]], SpriteKind.UI)
        mySprite.left = index % 7 * 23
        mySprite.top = Math.floor(index / 7)
    }
}
sprites.onCreated(SpriteKind.UI, function (sprite) {
    sprite.setFlag(SpriteFlag.Ghost, true)
})
let sprite_list: Sprite[] = []
let current = 0
let SelectedCount = 0
let col6count = 0
let col5count = 0
let col4count = 0
let col3count = 0
let col2count = 0
let col1count = 0
let cursorSprite: Sprite = null
let mySprite: Sprite = null
let Selections: number[] = []
let outputlist: number[] = []
let curY = 0
let curX = 0
let list: number[] = []
curX = 0
curY = 0
scene.setBackgroundImage(bgImage)
InitArray()
InitKeys()
InitCursor()
forever(function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 120), music.PlaybackMode.UntilDone)
})
