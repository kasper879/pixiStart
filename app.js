

var renderer, stage;
//The WebGLRenderer creates a scene for content
renderer = new PIXI.WebGLRenderer(600, 600, {
    transparent: true,
    resolution: 1,
});
document.body.appendChild(renderer.view);
//Creates PIXI.Container for all objects ex. images. 
stage = new PIXI.Container();

//img 
var ball;
var slowSpeedIcon;
var fastSpeedIcon

//Loader images and setup function
PIXI.loader
    .add("img/ball.png")
    .add("img/slowSpeed2.jpg")
    .add("img/fastSpeed.jpg")
    .load(setup);

//Setup function Loads all images and configurations
function setup() {
    ball = new PIXI.Sprite(
        PIXI.loader.resources["img/ball.png"].texture
    );
    ball.interactive = true;
    ball.scale.set(0.2, 0.2);
    ball.anchor.set(0.5, 0.5);
    ball.x = 300;
    ball.y = 100;
    //add Image to the Container 
    stage.addChild(ball);

    slowSpeedIcon = new PIXI.Sprite(
        PIXI.loader.resources["img/slowSpeed2.jpg"].texture
    );
    slowSpeedIcon.interactive = true;
    slowSpeedIcon.scale.set(0.1, 0.1);
    slowSpeedIcon.anchor.set(0.5, 0.5);
    slowSpeedIcon.x = renderer.width / 5;
    slowSpeedIcon.y = (renderer.height / 8) * 7;
    stage.addChild(slowSpeedIcon);

    fastSpeedIcon = new PIXI.Sprite(
        PIXI.loader.resources["img/fastSpeed.jpg"].texture
    );
    fastSpeedIcon.interactive = true;
    fastSpeedIcon.scale.set(0.1, 0.1);
    fastSpeedIcon.anchor.set(0.5, 0.5);
    fastSpeedIcon.x = (renderer.width / 5) * 4;
    fastSpeedIcon.y = (renderer.height / 8) * 7;
    stage.addChild(fastSpeedIcon);

    startBounce();
    render();
}

var yAxis = 1;
var speed = 5;
//StartBounce function Runs Pixi.Ticker() that runs an update loop, until it hit the requirements 
startBounce = () => {
    const ticker = new PIXI.ticker.Ticker();
    ticker.add(() => {
        ball.y += yAxis + speed;
        if (ball.y >= 430) {
            ticker.stop();
            reverseBounce();
        }
    });
    ticker.start();
}

reverseBounce = () => {
    const ticker = new PIXI.ticker.Ticker();
    ticker.add(() => {
        ball.y -= yAxis + speed;
        if (ball.y <= 100) {
            ticker.stop();
            startBounce();
        }
    });
    ticker.start();
}

render = () => {
    requestAnimationFrame(render);
    renderer.render(stage);
}

/*slider takes value from the html element, 
and asign that value with the speed attribut of the bouncing ball*/
var slider = document.getElementById("myRange");
slider.oninput = function () {
    var converNumber = Number(this.value);
    console.log(converNumber)
    speed = converNumber;
}




