const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const canvas_width = canvas.width = 600;
const canvas_length = canvas.length = 600;

const playerimage = new Image();
playerimage.src = 'shadow_dog.png';
const sw = 576;
const sh = 524;
let frameX = 0;
let frameY = 4;
let playerstate = 'dizzy';
let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    { name: 'idle', frames: 7, },
    { name: 'jump', frames: 7, },
    { name: 'fall', frames: 7, },
    { name: 'run', frames: 9, },
    { name: 'dizzy', frames: 11, },
    { name: 'roll', frames: 7, },
    { name: 'sit', frames: 5, },
    { name: 'bite', frames: 7, },
    { name: 'ko', frames: 12, },
    { name: 'gethit', frames: 4, }
]
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * sw;
        let positionY = index * sh;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, canvas_length, canvas_width);
    let position = Math.floor(gameframe / staggerFrames) % (spriteAnimations["idle"].loc.lenght);
    frameX = sw * position;
    ctx.drawImage(playerimage, frameX, frameY * sh, sw, sh, 0, 0, sw, 150);
    gameFrame++;
    requestAnimationFrame(animate);
}
animate();






















/*
const spriteAnimations = [];
const animationStates = [
    { name: 'idle', frames: 7, },
    { name: 'jump', frames: 7, },
    { name: 'fall', frames: 7, },
    { name: 'run', frames: 9, },
    { name: 'dizzy', frames: 11, },
    { name: 'roll', frames: 7, },
    { name: 'sit', frames: 5, },
    { name: 'bite', frames: 7, },
    { name: 'ko', frames: 12, },
    { name: 'gethit', frames: 4, }
]
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * sw;
        let positionY = index * sh;
        frames.loc.push({ x: positionX, y: positionY });
    }
    spriteAnimations[state.name] = frames;
});

function animate() {
    ctx.clearRect(0, 0, canvas_width, canvas_length);
    let position = Math.floor(gameframe / 5) % (spriteAnimations[playerstate].loc.lenght);
    let frameX = sw * position;
    let frameY = spriteAnimations[playerstate].loc[1].y;
    ctx.drawImage(playerimage, frameX, frameY, sw, 4 * sh, 0, 0, 600, 600);

    gameframe++;
    requestAnimationFrame(animate);
};
animate();*/