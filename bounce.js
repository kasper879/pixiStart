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
module.exports = {
    startBounce: startBounce
}