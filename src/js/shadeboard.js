import { Actor, SpriteSheet, Vector, Animation, range, CollisionType } from "excalibur";
import { Resources } from "./resources";



export class Shadeboard extends Actor {
    constructor() {
        super({
            pos: new Vector(620, 50),
            width: Resources.Shadeboard.width / 10,
            height: Resources.Shadeboard.height,
            collisionType: CollisionType.Fixed,
        });

        const shadeboard = SpriteSheet.fromImageSource({
            image: Resources.Shadeboard,
            grid: { rows: 1, columns: 10, spriteWidth: 100, spriteHeight: 100 }
        });

        const animation = Animation.fromSpriteSheet(
            shadeboard,
            range(0, 9),
            100
        );
        this.graphics.use(animation);
        animation.play();
    }
}