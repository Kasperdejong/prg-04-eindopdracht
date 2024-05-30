import { Actor, Vector, Input, Keys, clamp, CollisionType } from 'excalibur';
import { Resources } from './resources';
import { Tree } from './boxingtree';
import { Textbox } from './textbox';
import { Hamster } from './hamster';
import { Shadeboard } from './shadeboard';
import { Door } from './door';
import { Key } from './key';
import { Game } from './game';
import { Victoryscreen } from './victoryscreen';
import { Hat } from './tophat';
import { Basketball } from './basketball';

export class Mushroom extends Actor {
    constructor() {
        super({
            pos: new Vector(200, 350),
            width: Resources.Mushroom.width / 2,
            height: Resources.Mushroom.height / 2,
            vel: new Vector(0, 0),
            collisionType: CollisionType.Active
        });

        this.graphics.use(Resources.Mushroom.toSprite());
    }

    onInitialize(engine) {
        this.on('collisionstart', (event) => this.hitSomething(event))
        let hat = new Hat();
        hat.pos = new Vector(-3, -this.height / 2);
        this.addChild(hat);
    }

    onPostUpdate(engine) {
        let xspeed = 0;
        let yspeed = 0;
        if (engine.input.keyboard.isHeld(Keys.W) || (engine.input.keyboard.isHeld(Keys.Up))) {
            yspeed = -200
        }

        if (engine.input.keyboard.isHeld(Keys.S) || (engine.input.keyboard.isHeld(Keys.Down))) {
            yspeed = 200
        }

        if (engine.input.keyboard.isHeld(Keys.D) || (engine.input.keyboard.isHeld(Keys.Right))) {
            xspeed = 200
        }

        if (engine.input.keyboard.isHeld(Keys.A) || (engine.input.keyboard.isHeld(Keys.Left))) {
            xspeed = -200
        }

        this.vel = new Vector(xspeed, yspeed)

        if (engine.input.keyboard.wasPressed(Keys.E)) {
            this.checkInteraction(engine);
        }
    };

    hitSomething(event) {
        if (event.other instanceof Door) {
            console.log('hit door')
        } else {
            console.log('hit something else')
        }
    }

    /**
     * 
     * @param {Game} engine 
     */
    checkInteraction(engine) {
        const key = engine.currentScene.actors.find(actor => actor instanceof Key);
        if (key && this.pos.distance(key.pos) < 10) {
            console.log('sleutel gepakt');
            key.kill();
            engine.addKey();
        }

        const tree = engine.currentScene.actors.find(actor => actor instanceof Tree);
        if (tree && this.pos.distance(tree.pos) < 100) {
            console.log('aan het praten met boom');

            const textbox = new Textbox('Hey shroomy zoek de sleutel!', new Vector(this.pos.x - 30, this.pos.y - 50));
            engine.currentScene.add(textbox);

            setTimeout(() => {
                textbox.kill();
            }, 10000);
        }

        const basketball = engine.currentScene.actors.find(actor => actor instanceof Basketball);
        if (basketball && this.pos.distance(basketball.pos) < 100) {
            console.log('aan het praten met basketball? waarom?');

            const textbox = new Textbox('Boing boioing boem boing boing', new Vector(this.pos.x - 30, this.pos.y - 50));
            engine.currentScene.add(textbox);

            setTimeout(() => {
                textbox.kill();
            }, 10000);
        }

        const hamster = engine.currentScene.actors.find(actor => actor instanceof Hamster);
        if (hamster && this.pos.distance(hamster.pos) < 100) {
            console.log('aan het praten met hamster');

            const textbox = new Textbox('Yo man check de struiken!', new Vector(this.pos.x - 30, this.pos.y - 50));
            engine.currentScene.add(textbox);

            setTimeout(() => {
                textbox.kill();
            }, 10000);
        }
        const shadeboard = engine.currentScene.actors.find(actor => actor instanceof Shadeboard);
        if (shadeboard && this.pos.distance(shadeboard.pos) < 100) {
            console.log('aan het praten met skateboard');

            const textbox = new Textbox('Ga weg ik ben bezig met flips', new Vector(this.pos.x - 30, this.pos.y - 50));
            engine.currentScene.add(textbox);

            setTimeout(() => {
                textbox.kill();
            }, 10000);
        }
    }
}
