import { Scene, Actor, Vector, Input, Keys } from 'excalibur';
import { Resources } from './resources';

export class Victoryscreen extends Scene {
    onInitialize(engine) {
        const victoryscreen = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight
        });
        const titleSprite = Resources.Victoryscreen.toSprite();
        titleSprite.width = engine.drawWidth;
        titleSprite.height = engine.drawHeight;
        victoryscreen.graphics.use(titleSprite);

        this.add(victoryscreen);

        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                console.log('Space key pressed');
                engine.goToScene('title');
            }
        });
    }
}
