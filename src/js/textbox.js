import { Actor, Color, Label, Vector, GraphicsGroup, Font, Rectangle } from 'excalibur';

export class Textbox extends Actor {
    constructor(text, pos) {
        super({
            pos: pos,
            width: 100,
            height: 100,
            color: Color.Transparent,
            z: 100
        });

        const background = new Actor({
            width: 150,
            height: 12,
            color: Color.White,
            anchor: new Vector(0, 0)
        });
        background.graphics.use(new Rectangle({
            width: 150,
            height: 12,
            color: Color.White
        }));
        background.pos = new Vector(0, 0)
        this.addChild(background);

        const label = new Label({
            text: text,
            pos: new Vector(0, 0),
            font: new Font({
                size: 10,
                color: Color.Black
            }),
            anchor: new Vector(0.5, 0.5)
        });
        this.addChild(label);

        const closeButton = new Actor({
            pos: new Vector(130, -10),
            width: 10,
            height: 10,
            color: Color.Red,
            anchor: new Vector(0.5, 0.5)
        });
        closeButton.graphics.use(new Rectangle({
            width: 20,
            height: 20,
            color: Color.Red
        }));

        closeButton.on('pointerdown', () => {
            this.kill();
        });

        this.addChild(closeButton);
    }
}
