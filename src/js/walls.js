import { Actor, Vector, CollisionType, Color, Rectangle } from 'excalibur';

export function createInvisibleWalls(scene, width, height, rightOffset = 150) {
    let topWall = new Actor({
        pos: new Vector((width / 2) + rightOffset, 5),
        width: width,
        height: 10,
        collisionType: CollisionType.Fixed
    });
    // topWall.graphics.use(new Rectangle({ width: topWall.width, height: topWall.height, color: Color.Red }));
    scene.add(topWall);

    let bottomWall = new Actor({
        pos: new Vector((width / 2) + rightOffset, height - 5),
        width: width,
        height: 10,
        collisionType: CollisionType.Fixed
    });
    // bottomWall.graphics.use(new Rectangle({ width: bottomWall.width, height: bottomWall.height, color: Color.Green }));
    scene.add(bottomWall);

    let leftWall = new Actor({
        pos: new Vector(5 + rightOffset, height / 2),
        width: 10,
        height: height,
        collisionType: CollisionType.Fixed
    });
    // leftWall.graphics.use(new Rectangle({ width: leftWall.width, height: leftWall.height, color: Color.Blue }));
    scene.add(leftWall);

    let rightWall = new Actor({
        pos: new Vector((width - 5) + rightOffset, height / 2),
        width: 10,
        height: height,
        collisionType: CollisionType.Fixed
    });
    // rightWall.graphics.use(new Rectangle({ width: rightWall.width, height: rightWall.height, color: Color.Yellow })); 
    scene.add(rightWall);
}
