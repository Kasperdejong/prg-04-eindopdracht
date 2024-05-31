import '../css/style.css';
import { Engine, Vector, Scene, Actor } from 'excalibur';
import { Resources, ResourceLoader } from './resources.js';
import { Mushroom } from './mushroom';
import { Tree } from './boxingtree';
import { createInvisibleWalls } from './walls';
import { Hamster } from './hamster';
import { UI } from './UI';
import { Shadeboard } from './shadeboard';
import { Door } from './door';
import { TitleScreen } from './titlescreen';
import { Key } from './key';
import { Victoryscreen } from './victoryscreen';
import { Basketball } from './basketball';

export class Game extends Engine {
    score;
    ui;

    constructor() {
        super({
            width: 1600,
            height: 900,
            maxFps: 60,
            antialiasing: false
        });
        this.score = 0;

        this.start(ResourceLoader).then(() => {
            this.addScenes();
            this.goToScene('title');
        });
    }

    onActivate() {
        this.goToScene('title');
    }

    addScenes() {
        this.add('title', new TitleScreen());
        this.add('game', this.createGameScene());
        this.add('victory', new Victoryscreen());

    }

    createGameScene() {
        const gameScene = new Scene();

        //Resources.themeSong.play();


        gameScene.on('activate', () => {
            console.log('start de game!');

            this.ui = new UI();
            this.add(this.ui);

            let bg = new Actor();
            bg.graphics.use(Resources.background.toSprite());
            bg.pos = new Vector(400, 300);
            gameScene.add(bg);

            let mushroom = new Mushroom();
            gameScene.add(mushroom);

            gameScene.camera.strategy.lockToActor(mushroom);
            gameScene.camera.zoom = 2;

            let trees = [
                new Tree(600, 330),
                new Tree(600, 280),
            ]
            trees.forEach(Tree => this.add(Tree));

            let hamster = new Hamster();
            gameScene.add(hamster);

            let shadeboard = new Shadeboard();
            gameScene.add(shadeboard);

            let basketballs = [
                new Basketball(500, 330),
                new Basketball(300, 280),
                new Basketball(400, 210),
                new Basketball(300, 150),
                new Basketball(600, 200),
                new Basketball(550, 100),
                new Basketball(430, 300),
                new Basketball(330, 220),
                new Basketball(370, 130),
            ]
            basketballs.forEach(Basketball => this.add(Basketball));

            let deur = new Door();
            gameScene.add(deur);

            let key = new Key();
            gameScene.add(key)

            createInvisibleWalls(gameScene, 500, 380);
            console.log(createInvisibleWalls, 'wall made');
        });

        return gameScene;
    }

    addKey() {
        this.score++;
        this.ui.updateScore(this.score);
    }
}

const game = new Game();
