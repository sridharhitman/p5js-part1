function setup() {
    canvas = createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}
function draw() {
    
    image(video, 0, 0, 640, 480);
    tint(tintColor);
    fill(0, 0, 128);
    stroke(0, 6, 0);
    rect(0, 0, 640, 20);
    rect(0, 0, 20, 640);
    rect(620, 0, 20, 480);
    rect(0, 460, 640, 20);
    fill(0, 128, 0);
    circle(610, 30, 60);
    circle(30, 450, 60);
    circle(30, 30, 60);
    circle(610, 450, 60);
}
function takeSnapshot() {
    save('selfie.png')
}
function applyFilter() {
    tintColor = document.getElementById('colorName').value;
}