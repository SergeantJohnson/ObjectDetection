img = "";

function preload() {
    img=loadImage('6.1.jpg');
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
    image(img,0,0,600,410);
}