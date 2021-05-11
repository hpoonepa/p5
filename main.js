function preload(){

}
function setup(){
    canvas=createCanvas(600,600);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 70, 70, 300, 300);
 
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);
    rect(50,390,20,20);
    fill(0,255,0);
    stroke(0,255,0)
    rect(40,40,20,20);
  circle(50,400,80);
  fill(0,0,255);
  stroke(0,0,255)
circle(400,50,80);
fill(50,50,50);
stroke(50,50,50);
circle(400,400,80);
fill(255,255,255);
stroke(255,255,255);

}