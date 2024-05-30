import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";


export class Key extends Actor {
    constructor() {
        super({
            pos: new Vector(550, 150),
            width: Resources.key.width,
            height: Resources.key.height,
            collisionType: CollisionType.Passive,
            vel: new Vector(0, 0),
        });

        this.graphics.use(Resources.key.toSprite());
    }
}