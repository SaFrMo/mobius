/* globals __DEV__ */
import Phaser from 'phaser'
import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {

        this.game.add.existing(this.mushroom)
    }

    render () {
        if (__DEV__) {
            this.game.debug.spriteInfo(this.mushroom, 32, 32)
        }
    }
}
