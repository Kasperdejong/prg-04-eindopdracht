import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";


export class Hamster extends Actor {
    constructor() {
        super({
            pos: new Vector(200, 50),
            width: Resources.hamster.width,
            height: Resources.hamster.height,
            collisionType: CollisionType.Passive,
            vel: new Vector(0, 0),
        });

        this.graphics.use(Resources.hamster.toSprite());
    }
}