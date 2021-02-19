img = "";
img2=""

function preload() {
    img=loadImage('3.1.jpg');
    img2=loadImage('3.2.jpg');
}

function setup() {
    canvas = createCanvas(600, 410);
    canvas.center();
}

function draw() {
    image(img,0,0,300,410);
    image(img2,300,0,300,410);
}