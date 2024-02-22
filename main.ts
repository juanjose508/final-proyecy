controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 4 7 7 7 7 7 . . . . 
        . . . . . 4 7 7 d 7 7 7 7 . . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . c c 5 5 4 7 7 7 7 7 4 . . 
        . . . c b 5 5 5 5 4 7 7 4 4 . . 
        . . . c f 5 5 5 b 7 4 5 4 4 4 . 
        . . . c b 1 1 1 1 7 5 f 7 7 4 4 
        . . . . . c c c 4 4 5 f 7 7 4 4 
        . . . . . . c 4 4 7 7 4 f 1 1 b 
        . . . . . . . 4 7 7 7 7 4 5 5 . 
        . . . . f f 5 5 7 7 f f 5 5 . . 
        . . . . f f 5 5 4 4 f f 5 5 . . 
        . . . . . . . . . 5 5 5 5 . . . 
        . . . . . . . . 5 5 5 4 4 4 . . 
        . . . . . . . 5 5 5 4 4 4 4 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 7 7 7 7 7 . . . . . . 
        . . . 4 7 7 d 7 7 7 7 . . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . c c 5 5 4 7 7 7 7 7 4 . . . . 
        . c b 5 5 5 5 4 7 7 4 4 . . . . 
        . c f 5 5 5 b 7 4 5 4 4 4 . . . 
        . c b 1 1 1 1 7 5 f 7 7 4 4 . . 
        . . . c c c 4 4 5 f 7 7 4 4 . . 
        . . . . . c 4 4 7 4 f 1 1 b . . 
        . . . . . . . 5 f f 5 5 5 5 . . 
        . . . . . . . . f f 5 5 5 5 5 5 
        . . . . . . . . 4 5 5 5 . 5 5 5 
        . . . . . . . 4 4 4 . . . . 5 5 
        . . . . . . 4 4 4 4 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 7 7 7 7 7 . . . . . . 
        . . . 4 7 7 d 7 7 7 7 . . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . c c 5 5 4 7 7 7 7 7 4 . . . . 
        . c b 5 5 5 5 4 7 7 4 4 . . . . 
        . c f 5 5 5 b 7 7 4 5 4 4 4 . . 
        . c b 1 1 1 1 7 4 5 f 7 7 4 4 . 
        . . . c c c 4 4 4 5 f 7 7 4 4 . 
        . . . . . c 4 4 7 7 4 4 1 1 b . 
        . . . f f 5 5 5 7 7 7 f f 5 . . 
        . . . f f 5 5 . 4 4 4 f f 5 4 4 
        . . . . . . . . 5 5 5 5 5 4 4 4 
        . . . . . . . 5 5 5 . . . . 4 4 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . 4 7 7 7 7 7 . . . . . . . 
        . . 4 7 7 d 7 7 7 7 . . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        c c 5 5 4 7 7 7 7 7 4 . . . . . 
        c b 5 5 5 5 4 7 7 4 4 . . . . . 
        c f 5 5 5 b 7 7 4 5 4 4 4 . . . 
        c b 1 1 1 1 7 4 5 f 7 7 4 4 . . 
        . . c c c 4 4 4 5 f 7 7 4 4 . . 
        . . . . c 4 4 7 7 4 f 1 1 b . . 
        . . . f f 5 7 7 f f 5 5 5 . . . 
        . . . f f 5 4 4 f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 4 4 4 . . . . 
        . . . . . . 5 5 4 4 4 4 . . . . 
        `],
    500,
    false
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 7 7 7 7 7 4 . . . . . . 
        . . . 7 7 7 7 d 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 4 5 5 c c . . . 
        . . 4 4 7 7 4 5 5 5 5 b c . . . 
        . 4 4 4 5 4 7 b 5 5 5 f c . . . 
        4 4 7 7 f 5 7 1 1 1 1 b c . . . 
        4 4 7 7 f 5 4 4 c c c . . . . . 
        b 1 1 f 4 7 7 4 4 c . . . . . . 
        . 5 5 4 7 7 7 7 4 . . . . . . . 
        . . 5 5 f f 7 7 5 5 f f . . . . 
        . . 5 5 f f 4 4 5 5 f f . . . . 
        . . . 5 5 5 5 . . . . . . . . . 
        . . 4 4 4 5 5 5 . . . . . . . . 
        . . 4 4 4 4 5 5 5 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 4 . . . . 
        . . . . . 7 7 7 7 d 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 4 5 5 c c . 
        . . . . 4 4 7 7 4 5 5 5 5 b c . 
        . . . 4 4 4 5 4 7 b 5 5 5 f c . 
        . . 4 4 7 7 f 5 7 1 1 1 1 b c . 
        . . 4 4 7 7 f 5 4 4 c c c . . . 
        . . b 1 1 f 4 7 4 4 c . . . . . 
        . . 5 5 5 5 f f 5 . . . . . . . 
        5 5 5 5 5 5 f f . . . . . . . . 
        5 5 5 . 5 5 5 4 . . . . . . . . 
        5 5 . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 4 . . . . 
        . . . . . 7 7 7 7 d 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 4 5 5 c c . 
        . . . . 4 4 7 7 4 5 5 5 5 b c . 
        . . 4 4 4 5 4 7 7 b 5 5 5 f c . 
        . 4 4 7 7 f 5 4 7 1 1 1 1 b c . 
        . 4 4 7 7 f 5 4 4 4 c c c . . . 
        . b 1 1 4 4 7 7 4 4 c . . . . . 
        . . 5 f f 7 7 7 5 5 5 f f . . . 
        4 4 5 f f 4 4 4 . 5 5 f f . . . 
        4 4 4 5 5 5 5 5 . . . . . . . . 
        4 4 . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 7 7 4 . . . 
        . . . . . . 7 7 7 7 d 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 4 5 5 c c 
        . . . . . 4 4 7 7 4 5 5 5 5 b c 
        . . . 4 4 4 5 4 7 7 b 5 5 5 f c 
        . . 4 4 7 7 f 5 4 7 1 1 1 1 b c 
        . . 4 4 7 7 f 5 4 4 4 c c c . . 
        . . b 1 1 f 4 7 7 4 4 c . . . . 
        . . . 5 5 5 f f 7 7 5 f f . . . 
        . . . . 5 5 f f 4 4 5 f f . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 4 4 4 5 5 . . . . . . . 
        . . . . 4 4 4 4 5 5 . . . . . . 
        `],
    500,
    false
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . 4 7 7 7 7 7 . . . . 
        . . . . . 4 7 7 d 7 7 7 7 . . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . c c 5 5 4 7 7 7 7 7 4 . . 
        . . . c b 5 5 5 5 4 7 7 4 4 . . 
        . . . c f 5 5 5 b 7 4 5 4 4 4 . 
        . . . c b 1 1 1 1 7 5 f 7 7 4 4 
        . . . . . c c c 4 4 5 f 7 7 4 4 
        . . . . . . c 4 4 7 7 4 f 1 1 b 
        . . . . . . . 4 7 7 7 7 4 5 5 . 
        . . . . f f 5 5 7 7 f f 5 5 . . 
        . . . . f f 5 5 4 4 f f 5 5 . . 
        . . . . . . . . . 5 5 5 5 . . . 
        . . . . . . . . 5 5 5 4 4 4 . . 
        . . . . . . . 5 5 5 4 4 4 4 . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 7 7 7 7 7 . . . . . . 
        . . . 4 7 7 d 7 7 7 7 . . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . c c 5 5 4 7 7 7 7 7 4 . . . . 
        . c b 5 5 5 5 4 7 7 4 4 . . . . 
        . c f 5 5 5 b 7 4 5 4 4 4 . . . 
        . c b 1 1 1 1 7 5 f 7 7 4 4 . . 
        . . . c c c 4 4 5 f 7 7 4 4 . . 
        . . . . . c 4 4 7 4 f 1 1 b . . 
        . . . . . . . 5 f f 5 5 5 5 . . 
        . . . . . . . . f f 5 5 5 5 5 5 
        . . . . . . . . 4 5 5 5 . 5 5 5 
        . . . . . . . 4 4 4 . . . . 5 5 
        . . . . . . 4 4 4 4 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . 4 7 7 7 7 7 . . . . . . 
        . . . 4 7 7 d 7 7 7 7 . . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . . . 4 7 7 7 7 7 7 7 4 . . . . 
        . c c 5 5 4 7 7 7 7 7 4 . . . . 
        . c b 5 5 5 5 4 7 7 4 4 . . . . 
        . c f 5 5 5 b 7 7 4 5 4 4 4 . . 
        . c b 1 1 1 1 7 4 5 f 7 7 4 4 . 
        . . . c c c 4 4 4 5 f 7 7 4 4 . 
        . . . . . c 4 4 7 7 4 4 1 1 b . 
        . . . f f 5 5 5 7 7 7 f f 5 . . 
        . . . f f 5 5 . 4 4 4 f f 5 4 4 
        . . . . . . . . 5 5 5 5 5 4 4 4 
        . . . . . . . 5 5 5 . . . . 4 4 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . 4 7 7 7 7 7 . . . . . . . 
        . . 4 7 7 d 7 7 7 7 . . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        c c 5 5 4 7 7 7 7 7 4 . . . . . 
        c b 5 5 5 5 4 7 7 4 4 . . . . . 
        c f 5 5 5 b 7 7 4 5 4 4 4 . . . 
        c b 1 1 1 1 7 4 5 f 7 7 4 4 . . 
        . . c c c 4 4 4 5 f 7 7 4 4 . . 
        . . . . c 4 4 7 7 4 f 1 1 b . . 
        . . . f f 5 7 7 f f 5 5 5 . . . 
        . . . f f 5 4 4 f f 5 5 . . . . 
        . . . . . . 5 5 5 5 5 . . . . . 
        . . . . . . . 5 5 4 4 4 . . . . 
        . . . . . . 5 5 4 4 4 4 . . . . 
        `],
    500,
    false
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    multilights.bandWidthOf(mySprite, 0)
    sprites.destroy(mySprite)
    story.queueStoryPart(function () {
        story.printDialog("y asi fue como nuestro protagonista desperto de su sueño", 80, 90, 50, 150, 1, 15)
    })
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . 7 7 7 7 7 4 . . . . . . 
        . . . 7 7 7 7 d 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 7 7 4 . . . . . 
        . . 4 7 7 7 7 7 4 5 5 c c . . . 
        . . 4 4 7 7 4 5 5 5 5 b c . . . 
        . 4 4 4 5 4 7 b 5 5 5 f c . . . 
        4 4 7 7 f 5 7 1 1 1 1 b c . . . 
        4 4 7 7 f 5 4 4 c c c . . . . . 
        b 1 1 f 4 7 7 4 4 c . . . . . . 
        . 5 5 4 7 7 7 7 4 . . . . . . . 
        . . 5 5 f f 7 7 5 5 f f . . . . 
        . . 5 5 f f 4 4 5 5 f f . . . . 
        . . . 5 5 5 5 . . . . . . . . . 
        . . 4 4 4 5 5 5 . . . . . . . . 
        . . 4 4 4 4 5 5 5 . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 4 . . . . 
        . . . . . 7 7 7 7 d 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 4 5 5 c c . 
        . . . . 4 4 7 7 4 5 5 5 5 b c . 
        . . . 4 4 4 5 4 7 b 5 5 5 f c . 
        . . 4 4 7 7 f 5 7 1 1 1 1 b c . 
        . . 4 4 7 7 f 5 4 4 c c c . . . 
        . . b 1 1 f 4 7 4 4 c . . . . . 
        . . 5 5 5 5 f f 5 . . . . . . . 
        5 5 5 5 5 5 f f . . . . . . . . 
        5 5 5 . 5 5 5 4 . . . . . . . . 
        5 5 . . . . 4 4 4 . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 4 . . . . 
        . . . . . 7 7 7 7 d 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 7 7 4 . . . 
        . . . . 4 7 7 7 7 7 4 5 5 c c . 
        . . . . 4 4 7 7 4 5 5 5 5 b c . 
        . . 4 4 4 5 4 7 7 b 5 5 5 f c . 
        . 4 4 7 7 f 5 4 7 1 1 1 1 b c . 
        . 4 4 7 7 f 5 4 4 4 c c c . . . 
        . b 1 1 4 4 7 7 4 4 c . . . . . 
        . . 5 f f 7 7 7 5 5 5 f f . . . 
        4 4 5 f f 4 4 4 . 5 5 f f . . . 
        4 4 4 5 5 5 5 5 . . . . . . . . 
        4 4 . . . . 5 5 5 . . . . . . . 
        . . . . . . 5 5 5 5 . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 7 7 7 7 7 4 . . . 
        . . . . . . 7 7 7 7 d 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 7 7 4 . . 
        . . . . . 4 7 7 7 7 7 4 5 5 c c 
        . . . . . 4 4 7 7 4 5 5 5 5 b c 
        . . . 4 4 4 5 4 7 7 b 5 5 5 f c 
        . . 4 4 7 7 f 5 4 7 1 1 1 1 b c 
        . . 4 4 7 7 f 5 4 4 4 c c c . . 
        . . b 1 1 f 4 7 7 4 4 c . . . . 
        . . . 5 5 5 f f 7 7 5 f f . . . 
        . . . . 5 5 f f 4 4 5 f f . . . 
        . . . . . 5 5 5 5 5 . . . . . . 
        . . . . 4 4 4 5 5 . . . . . . . 
        . . . . 4 4 4 4 5 5 . . . . . . 
        `],
    500,
    false
    )
})
let mySprite: Sprite = null
story.queueStoryPart(function () {
    story.printDialog("hace tiempo nuestro protagonista fue encerrado en los calavosos de Shawshank  ", 80, 90, 50, 150, 1, 15)
})
tiles.setCurrentTilemap(tilemap`nivel1`)
mySprite = sprites.create(img`
    . . . . 7 7 7 7 7 4 . . . . . . 
    . . . 7 7 7 7 d 7 7 4 . . . . . 
    . . 4 7 7 7 7 7 7 7 4 . . . . . 
    . . 4 7 7 7 7 7 7 7 4 . . . . . 
    . . 4 7 7 7 7 7 4 5 5 c c . . . 
    . . 4 4 7 7 4 5 5 5 5 b c . . . 
    . 4 4 4 5 4 7 b 5 5 5 f c . . . 
    4 4 7 7 f 5 7 1 1 1 1 b c . . . 
    4 4 7 7 f 5 4 4 c c c . . . . . 
    b 1 1 f 4 7 7 4 4 c . . . . . . 
    . 5 5 4 7 7 7 7 4 . . . . . . . 
    . . 5 5 d d 7 7 5 5 f f . . . . 
    . . 5 5 d d f f 5 5 f f . . . . 
    . . . 5 5 5 5 . . . . . . . . . 
    . . 4 4 4 5 5 5 . . . . . . . . 
    . . 4 4 4 4 5 5 5 . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(28, 22)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 100)
multilights.toggleLighting(true)
pause(7200)
scene.cameraShake(8, 1000)
multilights.addLightSource(mySprite)
multilights.bandWidthOf(mySprite, 12)
mySprite.sayText("¡que paso", 1000, true)