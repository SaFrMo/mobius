import Phaser from 'phaser'
import Mario from 'phaser-mario'
import HealthBar from './HealthBar'

export default opts => {
    const mario = new Mario(opts)

    mario.healthBar = new HealthBar({
        game: opts.game,
        host: mario
    })

    return mario
}
