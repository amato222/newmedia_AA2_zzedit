var nums = [100, 25, 46, 72];
var song;
var amp;

function preload() {
    song = loadSound("assets/BlueRidgeMountains.mp3");
}

function setup() {
    song.loop();
    //    var myCanvas = createCanvas(1000, 500);
    //    createCanvas(1000, 500)
    createCanvas(window.innerWidth, window.innerHeight);
    //    myCanvas.parent('p5sketch2');
    background(70, 0, 90);
    amp = new p5.Amplitude();
}

function draw() {
    var vol = amp.getLevel();
    var diam = map(vol, 0, 0.3, 10, 500);
    var side = map(vol, 0,.3,10,500);
    fill((diam / 4), (diam / 2), (diam / 2), diam)
    noStroke()
    ellipse(window.innerWidth/2, window.innerHeight/2, diam, diam);
    rect(window.innerWidth/2, window.innerHeight/2,side, side);
}
//for (var x = 0; x < 1000; x = x + 50) {
//stroke(random(255), 0, 75, 100);
//line(x, 5, 1000, 500);
//  }
// for (var y = 0; y < 500; y = y + 20) {
// stroke(random(150));
//line(5, y, 1000, 0);
//}