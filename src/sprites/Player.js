import Mario from 'phaser-mario'
import HealthBar from './HealthBar'

export default opts => {
	const mario = new Mario(opts)

	mario.healthBar = opts.game.add.existing(new HealthBar({
		game: opts.game,
		host: mario,
		watch: {
			host: mario,
			value: 'health',
			max: 100
		}
	}))

	return mario
}
