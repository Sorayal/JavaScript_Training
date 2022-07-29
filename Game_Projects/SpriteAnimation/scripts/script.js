let playerState = 'run';
const dropdown = document.getElementById('animations');
dropdown.addEventListener('change', function (e){
    playerState = e.target.value;
})

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

// Defining image for player
const playerImage = new Image();
playerImage.src = 'assets/shadow_dog.png';

//let x = 0;
// 6876 px image width, 12 columns => 6876/12 = 573 px
const spriteWidth = 575;

// 5230 px image height, 10 rows => 5230/10 = 523 px
const spriteHeight = 523;

// let frameX = 0;
// let frameY = 1;

let gameFrame = 0;

// For slowing down animation , higher -> slower animation rate , lower -> higher animation rate
// runs the code block every 5 frames
const staggerFrames = 5;

/*
function animate() {
    // Clear out entire canvas
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    //ctx.fillRect(100,50,100,100);
    //x++;

    // draws the image at the top left corner
    // s = source ; d = destination; dw = destination-width; dh = destination-height
    // destination tells where to place it on the canvas
    // source is to cut out the image which should be used, it use a rectangle
    // ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
    // you can cycle through with 2 * spriteWidth for instance


    ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    // Idle Animation
    /!*    if(frameX < 6){
            frameX++;
        }else{
            frameX = 0;
        }*!/

    if (gameFrame % staggerFrames == 0) {
        if (frameX < 6) {
            frameX++;
        } else {
            frameX = 0;
        }
    }
    gameFrame++;

    // creating animation loop
    requestAnimationFrame(animate);
}
*/


// Animation container
const spriteAnimations = [];

// Animation states
const animationStates = [
    {
        // state with index 0
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    }, {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];

animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(animationStates);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // More advanced, Math.floor is to get Integers
    // It cycles between 0 and 5
    // let position = Math.floor(gameFrame/staggerFrames) % 6;
    let position = Math.floor(gameFrame / staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;

    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);

    gameFrame++;
    requestAnimationFrame(animate);
}


animate();