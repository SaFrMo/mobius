import Phaser from 'phaser'
import uri from 'data-uri-snippets'

export default class extends Phaser.Sprite {

    constructor(opts){
        super( opts.game, opts.x || 0, opts.y || 0, opts.key || '', opts.frame || '' )

        // add 1x1 white pixel to cache if necessary
        if( ! opts.game.cache.checkImageKey( 'white1x1pixel' ) ){
            opts.game.load.image('white1x1pixel', uri.white1x1)
            opts.game.load.onLoadComplete.add(() => this.runCreation(opts))
            opts.game.load.start()
        } else {
            this.runCreation(opts)
        }

    }

    runCreation( opts ){
        // Health UI
        this.bg = opts.host.addChild( this.game.make.sprite( 0, -25, 'white1x1pixel' ) )
        this.bg.width = opts.width || opts.host.width
        this.bg.height = opts.height || 10
        this.bg.tint = opts.hasOwnProperty('bgTint') ? opts.tint : 0x333333

        this.bar = opts.host.addChild( this.game.make.sprite( 0, -25, 'white1x1pixel' ) )
        this.bar.width = (opts.width || opts.host.width) * .5
        this.bar.height = opts.height || 10
        this.bar.tint = opts.hasOwnProperty('barTint') ? opts.tint : 0x00cc00
    }

}
