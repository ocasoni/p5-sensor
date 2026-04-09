let video;  
let audio;
let mountain;

function preload() {
  mountain = loadImage('blend/mountain.jpg');
}


function setup() {
  createCanvas(500, 400);
  video = createCapture(VIDEO);
  video.size(500, 400);
  video.hide();

  audio = new p5.AudioIn();
  audio.start();

  describe ('A video feed of the user is displayed on the canvas. The video is blended with an image of a mountain using the MULTIPLY blend mode. The resulting image is displayed on the canvas. The audio input from the user is also captured and can be used to affect the visual output.');
}

function draw() {
  background(220);
  let volume = audio.getLevel();
  let mountainAlpha = constrain(map(volume, 0, 0.05, 40, 255), 40, 255);
  //let size = map(volume, 0, 0.2, 10, 200);
  //circle(200, 200, size);

  //let threshold = map(volume, 0, 0.005, 0.4, 1);
  image(video, 0, 0, width, height);
  tint(255, mountainAlpha);
  image(mountain, 0, 0, width, height);
  noTint();
  //filter (THRESHOLD, threshold);

}
