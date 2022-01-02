const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var backgroundImg

var boy
var snowman

function preload(){
  backgroundImg=loadImage("snow1.jpg")
  
  boy=loadImage("boy.png")
  snowman=loadImage("snowman.jpg")
  
  
  
  }




function setup() {
  createCanvas(800,400);

  snowman = new Snowman(700,320,70,70);
 
}

function draw() {
  background(255,255,255);  
  drawSprites();
}