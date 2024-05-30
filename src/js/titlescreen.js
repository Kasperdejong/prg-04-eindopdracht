import { Scene, Actor, Vector, Input, Keys } from 'excalibur';
import { Resources } from './resources';

export class TitleScreen extends Scene {
    onInitialize(engine) {
        const titlescreen = new Actor({
            pos: new Vector(engine.drawWidth / 2, engine.drawHeight / 2),
            width: engine.drawWidth,
            height: engine.drawHeight
        });
        const titleSprite = Resources.TitleScreen.toSprite();
        titleSprite.width = engine.drawWidth;
        titleSprite.height = engine.drawHeight;
        titlescreen.graphics.use(titleSprite);

        this.add(titlescreen);

        engine.input.keyboard.on('press', (evt) => {
            if (evt.key === Keys.Space) {
                console.log('Space key pressed');
                engine.goToScene('game');
            }
        });
    }
}
