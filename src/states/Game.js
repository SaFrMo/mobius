/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player.js'
import Mario from 'phaser-mario'

export default class extends Phaser.State {
    init () {}

    preload () {}

    create () {
        this.game.physics.startSystem( Phaser.Physics.ARCADE )
        this.game.physics.arcade.gravity.y = 500

        // add a controllable (arrow keys/space bar) Mario-like player character
        this.player = this.game.add.existing( new Player({
            game: this.game,
            key: 'mushroom',
            controls: true,
            health: 100
        }))
    }

    render () {

    }
}
