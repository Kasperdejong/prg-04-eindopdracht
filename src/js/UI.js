import { Actor, Color, Font, FontUnit, Label, ScreenElement, Vector } from "excalibur"
import { Resources } from "./resources"

export class UI extends ScreenElement {
    scoreText;

    constructor() {
        super();
        this.z = 10;
    }

    onInitialize(engine) {
        this.scoreText = new Label({
            text: `Keys: 0`,
            pos: new Vector(1400, 35),
            font: Resources.PixelFont.toFont({
                unit: FontUnit.Px,
                size: 40,
                color: Color.Black
            })
        })
        for (let i = 0; i < 3; i++) {
            const heart = new Actor()
            heart.graphics.use(Resources.Heart.toSprite())
            heart.scale = new Vector(2, 2)
            heart.pos = new Vector(100 + (i * 40), 35)
            this.addChild(heart)
        }
        this.addChild(this.scoreText)
    }

    updateScore(score) {
        this.scoreText.text = `Keys: ${score}`;
    }
}