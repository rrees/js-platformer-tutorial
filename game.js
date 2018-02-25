
let lastFrame = performance.now();
let frameId;

let FPS = 1;
let alpha = 0.1;

function stopGameLoop() {
    window.cancelAnimationFrame(frameId);
}

function gameLoop(timestamp) {
    //console.log(timestamp);
    frameId = window.requestAnimationFrame(gameLoop);

    if(timestamp < lastFrame + (1000 / 60)) {
        return;
    }

    const dt = (timestamp - lastFrame) / 1000;
    lastFrame = timestamp;

    FPS = FPS + (1 - alpha) * (1/dt - FPS);
    //console.log(dt);
    console.log('FPS', FPS);

}

frameId = window.requestAnimationFrame(gameLoop);