import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";

export class Hat extends Actor {
    constructor() {
        super({
            width: Resources.Tophat.width,
            height: Resources.Tophat.height,
            collisionType: CollisionType.Passive,
            vel: new Vector(0, 0),
        });

        this.graphics.use(Resources.Tophat.toSprite());
    }
}