//var {startBounce}= require('./bounce.js'); 

const app = new PIXI.Application( {
    width:600,
    height: 600,
    transparent: true,
    resolution: 1,
    backgroundColor: 666666
});

document.getElementById('display').appendChild(app.view);
let container = new PIXI.Container();
//container.addChild(ball);

var ball

PIXI.loader
    .add("img/ball.png")
    .load(setup);

function setup() {
    ball = new PIXI.Sprite(
        PIXI.loader.resources["img/ball.png"].texture
    );
    ball.interactive = true;
    ball.scale.set(0.2, 0.2);
    ball.anchor.set(0.5, 0.5);
    ball.x = 300;
    ball.y = 100;

    app.stage.addChild(ball);
    //  setSpeed();
    startBounce();

}

let yVelo = 1;
let count = 0;
var speed2 = 3;

startBounce = () => {
    const ticker = new PIXI.ticker.Ticker();
    ticker.stop();
    ticker.add(() => {

        //speed2 = slider.value;

        // ticker.speed = speed2;
        //console.log("tickerSpeed"+ speed2) ;
        ball.y += yVelo + speed2;
        //console.log("ball.y" +  ball.y);
        if (ball.y >= 430) {
            ticker.stop();
            reverse();
        }

    });
    ticker.start();
}

reverse = () => {
    const ticker = new PIXI.ticker.Ticker();
    ticker.stop();
    ticker.add(() => {

        //speed2 = slider.value;

        // ticker.speed = speed2;
        // console.log("tickerSpeed"+ speed2) ;
        ball.y -= yVelo + speed2;
        //  console.log("ball.y" + ball.y);
        if (ball.y <= 100) {
            ticker.stop();
            startBounce();
        }
    });
    ticker.start();
}

var slider = document.getElementById("myRange");
slider.oninput = function () {
    var converNumber = Number(this.value);
    console.log(converNumber)
    speed2 = converNumber;

}




