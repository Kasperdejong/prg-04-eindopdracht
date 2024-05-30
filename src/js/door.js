import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";
import { Mushroom } from "./mushroom";

export class Door extends Actor {
    constructor() {
        super({
            pos: new Vector(396, 30),
            width: Resources.deur.width,
            height: Resources.deur.height,
            collisionType: CollisionType.Passive,
            vel: new Vector(0, 0),
        });
        this.graphics.use(Resources.deur.toSprite());
    }

    onInitialize(engine) {
        this.on('precollision', (evt) => {
            if (evt.other instanceof Mushroom && engine.score >= 1) {
                engine.goToScene('victory');
            }
        })
    };
}

