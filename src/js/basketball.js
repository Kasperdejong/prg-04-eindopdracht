import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";


export class Basketball extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.Basketball.width,
            height: Resources.Basketball.height,
            collisionType: CollisionType.Active,
            vel: new Vector(0, 0),

        });
        this.angularVelocity = 5;
        this.graphics.use(Resources.Basketball.toSprite());
    }
}