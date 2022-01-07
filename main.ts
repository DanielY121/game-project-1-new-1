input.onGesture(Gesture.TiltLeft, function () {
    basic.showString("Merry Christmas and Happy New Year")
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showString("Thank you for supporting this game ")
    basic.showString("Made by DanielY121")
})
input.onButtonPressed(Button.A, function () {
    Player.change(LedSpriteProperty.X, -1)
    music.playMelody("C5 - - - - - - - ", 500)
})
input.onGesture(Gesture.Shake, function () {
    Enemy.delete()
    Player.delete()
    music.playMelody("A B C5 D C F A F ", 500)
    music.playMelody("C5 B A G A B C5 D ", 500)
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # # . # #
            # . . . #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # # . # #
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # # . # #
            . # # # .
            `)
    }
    Enemy = game.createSprite(0, 0)
    Player = game.createSprite(2, 4)
})
input.onButtonPressed(Button.AB, function () {
    Bullet = game.createSprite(Player.get(LedSpriteProperty.X), 3)
    basic.pause(250)
    for (let index = 0; index < 5; index++) {
        if (Bullet.isTouching(Enemy)) {
            Enemy.delete()
            Bullet_from_enemy.delete()
            game.pause()
            music.playMelody("E G F G A F A G ", 296)
            game.resume()
            game.addScore(1)
            game.pause()
            Enemy = game.createSprite(0, 0)
            Player.delete()
            Bullet.delete()
            Player = game.createSprite(2, 4)
            game.resume()
        } else if (Bullet.isTouching(Bullet_from_enemy)) {
            Bullet_from_enemy.delete()
            Bullet.delete()
        } else {
            Bullet.change(LedSpriteProperty.Y, -1)
            basic.pause(250)
        }
    }
    Bullet.delete()
})
input.onButtonPressed(Button.B, function () {
    Player.change(LedSpriteProperty.X, 1)
    music.playMelody("C5 - - - - - - - ", 500)
})
let Enemy_speed = 0
let sprite = 0
let EF1 = 0
let Enemy_fever_1: game.LedSprite = null
let Bullet_from_enemy: game.LedSprite = null
let Bullet: game.LedSprite = null
let Enemy: game.LedSprite = null
let Player: game.LedSprite = null
music.playMelody("B A G B E C5 E C5 ", 500)
Player = game.createSprite(2, 4)
Enemy = game.createSprite(0, 0)
loops.everyInterval(60000, function () {
    game.addScore(1)
})
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        if (game.score() == 10) {
            for (let index = 0; index < 5; index++) {
                Enemy_fever_1 = game.createSprite(4, 0)
                basic.pause(250)
                EF1 = randint(0, 4)
                if (EF1 == 0) {
                    Enemy_fever_1.delete()
                    Enemy_fever_1 = game.createSprite(0, 0)
                    basic.pause(250)
                    if (Bullet.isTouching(Enemy_fever_1)) {
                        Enemy_fever_1.delete()
                        game.addScore(1)
                    }
                } else if (EF1 == 1) {
                    Enemy_fever_1.delete()
                    Enemy_fever_1 = game.createSprite(1, 0)
                    basic.pause(250)
                    if (Bullet.isTouching(Enemy_fever_1)) {
                        Enemy_fever_1.delete()
                        game.addScore(1)
                    }
                } else if (EF1 == 2) {
                    Enemy_fever_1.delete()
                    Enemy_fever_1 = game.createSprite(2, 0)
                    basic.pause(250)
                    if (Bullet.isTouching(Enemy_fever_1)) {
                        Enemy_fever_1.delete()
                        game.addScore(1)
                    }
                } else if (EF1 == 3) {
                    Enemy_fever_1.delete()
                    Enemy_fever_1 = game.createSprite(3, 0)
                    basic.pause(250)
                    if (Bullet.isTouching(Enemy_fever_1)) {
                        Enemy_fever_1.delete()
                        game.addScore(1)
                    }
                } else {
                    Enemy_fever_1.delete()
                    Enemy_fever_1 = game.createSprite(4, 0)
                    basic.pause(250)
                    if (Bullet.isTouching(Enemy_fever_1)) {
                        Enemy_fever_1.delete()
                        game.addScore(1)
                    }
                }
            }
        }
        sprite = randint(0, 1)
        if (sprite == 0) {
            Enemy.change(LedSpriteProperty.X, 1)
            Enemy_speed = randint(0, 2)
            if (Enemy_speed == 0) {
                basic.pause(100)
            } else if (Enemy_speed == 1) {
                basic.pause(250)
            } else {
                basic.pause(500)
            }
        } else {
            Bullet_from_enemy = game.createSprite(Enemy.get(LedSpriteProperty.X), 1)
            basic.pause(500)
            Enemy.change(LedSpriteProperty.X, 1)
            for (let index = 0; index < 4; index++) {
                Bullet_from_enemy.change(LedSpriteProperty.Y, 1)
                basic.pause(250)
                if (Bullet_from_enemy.isTouching(Player)) {
                    Player.delete()
                    Enemy.delete()
                    music.playMelody("E B C5 A B G A F ", 300)
                    music.playMelody("E - - - - - - - ", 103)
                    basic.showIcon(IconNames.SmallHeart)
                    basic.showIcon(IconNames.Heart)
                    basic.showIcon(IconNames.SmallHeart)
                    basic.showString("Thank you for supporting this game.")
                    basic.showIcon(IconNames.Happy)
                    basic.showString("Made by DanielY121")
                    basic.pause(250)
                    game.gameOver()
                }
            }
            Bullet_from_enemy.delete()
        }
    }
    for (let index = 0; index < 4; index++) {
        if (game.score() == 10) {
            Enemy_fever_1 = game.createSprite(4, 0)
            basic.pause(250)
            EF1 = randint(0, 4)
            if (EF1 == 0) {
                Enemy_fever_1.delete()
                Enemy_fever_1 = game.createSprite(0, 0)
                basic.pause(250)
                if (Bullet.isTouching(Enemy_fever_1)) {
                    Enemy_fever_1.delete()
                    game.addScore(1)
                }
            } else if (EF1 == 1) {
                Enemy_fever_1.delete()
                Enemy_fever_1 = game.createSprite(1, 0)
                basic.pause(250)
                if (Bullet.isTouching(Enemy_fever_1)) {
                    Enemy_fever_1.delete()
                    game.addScore(1)
                }
            } else if (EF1 == 2) {
                Enemy_fever_1.delete()
                Enemy_fever_1 = game.createSprite(2, 0)
                basic.pause(250)
                if (Bullet.isTouching(Enemy_fever_1)) {
                    Enemy_fever_1.delete()
                    game.addScore(1)
                }
            } else if (EF1 == 3) {
                Enemy_fever_1.delete()
                Enemy_fever_1 = game.createSprite(3, 0)
                basic.pause(250)
                if (Bullet.isTouching(Enemy_fever_1)) {
                    Enemy_fever_1.delete()
                    game.addScore(1)
                }
            } else {
                Enemy_fever_1.delete()
                Enemy_fever_1 = game.createSprite(4, 0)
                basic.pause(250)
                if (Bullet.isTouching(Enemy_fever_1)) {
                    Enemy_fever_1.delete()
                    game.addScore(1)
                }
            }
        }
        sprite = randint(0, 1)
        if (sprite == 0) {
            Enemy.change(LedSpriteProperty.X, -1)
            Enemy_speed = randint(0, 2)
            if (Enemy_speed == 0) {
                basic.pause(100)
            } else if (Enemy_speed == 1) {
                basic.pause(250)
            } else {
                basic.pause(500)
            }
        } else {
            Bullet_from_enemy = game.createSprite(Enemy.get(LedSpriteProperty.X), 1)
            basic.pause(500)
            Enemy.change(LedSpriteProperty.X, -1)
            for (let index = 0; index < 4; index++) {
                Bullet_from_enemy.change(LedSpriteProperty.Y, 1)
                basic.pause(250)
                if (Bullet_from_enemy.isTouching(Player)) {
                    Player.delete()
                    Enemy.delete()
                    music.playMelody("E B C5 A B G A F ", 300)
                    music.playMelody("E - - - - - - - ", 103)
                    basic.showIcon(IconNames.SmallHeart)
                    basic.showIcon(IconNames.Heart)
                    basic.showIcon(IconNames.SmallHeart)
                    basic.showString("Thank you for supporting this game.")
                    basic.showIcon(IconNames.Happy)
                    basic.showString("Made by DanielY121")
                    basic.pause(250)
                    game.gameOver()
                }
            }
            Bullet_from_enemy.delete()
        }
    }
})
