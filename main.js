const size = 650;
const characterSize = 48;
const objectSize = 32;
const viewSize = 250;

const hephaestus = {
    sprite: undefined,
    name: 'Hephaestus',
    inventory: [],
    quests: {
        respect: false,
        love: false,
        marriage: false,
    }

};

const hera = {
    sprie: undefined,
    name: 'Hera',
    dialogue: ''
};

const zeus = {
    sprite: undefined,
    name: 'Zeus',
    dialogue: ''
};

const respect = {
    sprite: undefined,
    name: 'respect',
    x: size / 10,
    y: size / 10
}

const love = {
    sprite: undefined,
    name: 'love ',
    x: 200,
    y: 350
}

const marriage = {
    sprite: undefined,
    name: 'marriage',
    x: 50,
    y: 200
}

const npcs = [hera, zeus];
let objects = [respect, love, marriage];

let mySound, bg;

function preload() {
    soundFormats('mp3');
    mySound = loadSound('assets/sounds/main_music.mp3');
    bg = loadImage('assets/spritesnframes/mountolympus.png');
}

function setup() {
    createCanvas(size, size);
    scale(60000.5);
    // initializeSprites();
    mySound.setVolume(0.1);
    mySound.play();
}

function draw() {
    background(bg);
    // drawSprites();
    // drawviewPoint();
    // detectCollisionWithNPCs();
    // detectCollisionWithObjects();
    // handleMovement();
}
