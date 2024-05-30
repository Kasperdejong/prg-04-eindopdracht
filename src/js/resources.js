import { ImageSource, Sound, Resource, Loader, Font, FontSource } from 'excalibur'
import * as tiled from '@excaliburjs/plugin-tiled';

const Resources = {
    TitleScreen: new ImageSource('images/Mushroomplaza.jpg'),
    Victoryscreen: new ImageSource('images/victoryscreen.jpg'),
    Mushroom: new ImageSource('images/Mushroom.png'),
    background: new ImageSource('images/background-game.png'),
    boxingtree: new ImageSource('images/Boxing-tree.png'),
    hamster: new ImageSource('images/hamster.png'),
    Heart: new ImageSource('images/heart.png'),
    Shadeboard: new ImageSource('images/shadeboard-spritesheet.png'),
    deur: new ImageSource('images/deur.png'),
    key: new ImageSource('images/key.png'),
    Tophat: new ImageSource('images/Tophat.png'),
    Basketball: new ImageSource('images/Basketball.png'),
    themeSong: new Sound('sounds/mybeat.mp3'),
    PixelFont: new FontSource('fonts/pixelfont.ttf', 'PressStart'),
}

const ResourceLoader = new Loader()
for (let res of Object.values(Resources)) {
    ResourceLoader.addResource(res)
}

export { Resources, ResourceLoader }