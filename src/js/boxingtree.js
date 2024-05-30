import { Actor, CollisionType, Vector } from "excalibur";
import { Resources } from "./resources";


export class Tree extends Actor {
    constructor(x, y) {
        super({
            pos: new Vector(x, y),
            width: Resources.boxingtree.width,
            height: Resources.boxingtree.height,
            collisionType: CollisionType.Passive,
            vel: new Vector(0, 0),
        });

        this.graphics.use(Resources.boxingtree.toSprite());
    }
}