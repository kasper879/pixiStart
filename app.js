var {startBounce}= require('./bounce.js'); 

const app = new PIXI.Application(600, 600, {
    transparent: true,
    resolution: 1,
    backgroundColor: 666666
});


//document.body.appendChild(app.view);
document.getElementById('display').appendChild(app.view);

var ball

PIXI.loader
    .add("img/ball.png")
    .load(setup);

function setup() {
    ball = new PIXI.Sprite(
        PIXI.loader.resources["img/ball.png"].texture
    );
    ball.interactive = true;
    ball.scale.set(0.3, 0.3);
    //ball.pivot.set(200,0);
    ball.anchor.set(0.5, 0.5);

    /*ball.click = function() {
        ball.scale.x -= 0.1;
        ball.scale.y -= 0.1;
    }; */

    // stage.addChild(ball); 

    // anitmationloop();
    ball.x = 300;
    ball.y = 100;

    app.stage.addChild(ball);
    startBounce();
}

let yVelo = 1;
let count = 0;
startBounce = () => {
    const ticker = new PIXI.ticker.Ticker();
    ticker.stop();
    ticker.add((deltaTime) => {

        var speed = ticker.speed = 2;
        //  console.log('ball' + ball.y);
        ball.y += yVelo + speed;
        if (ball.y == 430) {
            ticker.stop();
            reverse();
        }
    });
    ticker.start();
}

reverse = () => {
    const ticker = new PIXI.ticker.Ticker();
    ticker.stop();
    ticker.add((deltaTime) => {
        var speed = ticker.speed = 2;
        ball.y -= yVelo + speed;
        if (ball.y == 100) {
            ticker.stop();
            startBounce();
        }
    });
    ticker.start();
}


