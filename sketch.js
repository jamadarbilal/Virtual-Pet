//Create variables here
var dog,dogIMG;

function preload()
{
  dogIMG = loadImage("images/dogImg.png");
  dogimg = loadImage("images/dogImg1.png");
	//load images here
}
var database;
function setup() {
  createCanvas(800, 700);
database = firebase.database()
  dog = createSprite(400,350); 
  dog.addImage(dogIMG);
  dogIMG.scale = 1.0

  foodStock = database.ref('Food');
  foodStock.on("value", readStock)
    
 
}
function draw() {  
background("green");

fill("pink")
imageMode(CENTER);
image(dogIMG,dog.position.x,dog.position.y);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);  
  dog.addImage(dogimg);
}
text("Note: press UP_ARROW Key To Feed Drago Milk",300,100);

  drawSprites();
  textSize(20)
  fill("white")
  stroke("white");

  //add styles here

}
function readStock(data){
  foodS = data.val();
}

function writeStock(x){
database.ref('/').update({
  Food:x
})
}

