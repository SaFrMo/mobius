# Deprecated
Incomplete game jam project. Notes:

* Lots of Phaser-specific code here. Phaser and ES6 work together very well.
* Important to have some kind of master State access (ie `this.state` in `Actor.js`) to keep the game organized. Spent a lot of time passing around sprite groups until I switched to this workflow, which took up too much organizational time.

Notes from project below:

# Mobius
Race your opponent to build a ship to take you off the prison planet Mobius! LD38 jam entry.

## Notes
In Mobius, the player faces off against an AI opponent. You can win by building a shuttle to take you off the planet, or by surviving when your opponent dies.

Players can spend their time building a ship, trying to kill their opponent, or trying to steal their opponent's ship.

Actors can switch between Health Regeneration and Health Stasis at will. The lower an actor's health, the faster they can move. Actors can use this for a speed boost, although doing so puts their survival at risk. There is a slight delay between being hurt and regenerating health, as well as toggling into Health Regeneration mode and the actual health regeneration.

Players will need to acquire materials and use them in simple Minecraft-style recipes to build shuttle components, weapons, armor, and defenses.

## Roadmap
1. ~~Platforming physics~~
1. ~~Info presentation~~
    1. ~~Health system and health bar~~
    1. ~~Arbitrary text display~~
1. ~~Basic Combat~~
1. ~~Regroup~~
1. ~~Currency Pickups~~
1. ~~Mook AI~~
1. ~~Basic Plot~~
1. ~~Regroup~~
1. ~~Increase game area width past screen~~
1. Flip player (and gravity) when looping around screen
1. Single slow enemy
    1. Not affected by gravity
    1. Moves slowly toward closest pickup
1. Collect scrap and bring to location
