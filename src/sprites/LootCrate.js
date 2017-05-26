import Phaser from 'phaser'

export default class extends Phaser.Sprite {
	constructor (opts) {
		super(opts.game, opts.x || 0, opts.y || 192, opts.key || '', opts.frame || '')

		this.width = 64
		this.height = 64
	}
}
