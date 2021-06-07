const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,background

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    backgroundImg = loadImage("sunrise1.png");

}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

    //background = createSprite(200,200,20,20)
    background.addImage(backgroundImg)


    
}

function draw(){

    // add condition to check if any background image is there to add

    if(hour>=04 && hour<=06){
        bg = "sunrise1.png"
    }else if(hour>06 && hour<08){
        bg = "sunrise2.png"
    }else if(hour>=23 && hour==0){
        bg = "sunrise10.png"
    }else if(hour==0 && hour<=03){
        bg = "sunrise11.png"
    }else{
        bg = "sunrise12.png"
    }


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")

    //change the data in JSON format
    var responseJSON = await response.json();
    var datetime = responceJSON.datetime;


    // write code slice the datetime
    hour = dateTime.slice(11,13)

    // add conditions to change the background images from sunrise to sunset


    

    //load the image in backgroundImg variable here
    

}
