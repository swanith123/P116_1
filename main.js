noseX=0;
noseY=0;

function preload(){
mustache=loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}

function setup(){
canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoad);
poseNet.on('pose', getPoses);
}

function modelLoad() {
    console.log('PoseNet Is Completely Initialized');
}
function getPoses(results){
if(results.length > 0){
    console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;
}
}
function draw(){
    image(video, 0, 0, 300, 300);
    image(mustache, noseX-30, noseY-10, 65, 50);
}

function takePicture(){
save("filter-web-app-picture.png");
}