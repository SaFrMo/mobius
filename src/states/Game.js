/* globals __DEV__ */
import Phaser from 'phaser'
import Player from '../sprites/Player.js'
import LootCrate from '../sprites/LootCrate'

export default class extends Phaser.State {
	init () {}

	preload () {}

	create () {
		this.game.physics.startSystem(Phaser.Physics.ARCADE)
		this.game.physics.arcade.gravity.y = 500

		this.crates = this.game.add.group()
		this.crates.enableBody = true
		this.crates.physicsBodyType = Phaser.Physics.ARCADE

        // add a controllable (arrow keys/space bar) Mario-like player character
		this.player = this.game.add.existing(new Player({
			game: this.game,
			key: 'mushroom',
			controls: true,
			health: 100,
			jumps: 2
		}))

        // add a loot crate
		const c = this.crates.add(new LootCrate({
			game: this.game,
			key: 'crate',
			x: 128
		}))
		c.body.allowGravity = false
		c.body.immovable = true
	}

	update () {
		this.game.physics.arcade.collide(this.player, this.crates, this.playerVsCrate, null, this)
	}

	playerVsCrate (player, crate) {
		if (crate.y < player.y) {
			crate.destroy()
			player.body.velocity.y = 0
		}
	}
}
