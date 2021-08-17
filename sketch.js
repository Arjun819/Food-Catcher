var score = 0

var garden,rabbit;
var gardenImg,rabbitImg;
var apple,leaves

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  carrotImg = loadImage("carrot.png")
  orangeImg = loadImage("orange.png")
}

function setup(){
  
  createCanvas(400,400);
  
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

foodGroup = new Group();
}


function draw() {
  background(0);

  if(keyDown("left")){
rabbit.x = rabbit.x - 3
  }
  if(keyDown("right")){
    rabbit.x = rabbit.x + 3
      }
  
  edges = createEdgeSprites();
  rabbit.collide(edges);

  if(rabbit.isTouching(foodGroup)){
    foodGroup.destroyEach()
    score += 10
  }
  spawner();
  drawSprites();
}
function spawner(){
  if(frameCount % 50 == 0){
var rand = Math.round(random(1,3))
food = createSprite(Math.round(random(75,325)),5,50,50)
food.scale = 0.08
food.Lifetime = 150
food.velocityY = 4
food.debug = true
     switch(rand){
case 1:food.addImage(appleImg)
food.scale = 0.08  
break;

case 2:food.addImage(carrotImg)
food.scale = 0.2
break;

case 3:food.addImage(orangeImg)
food.scale = 0.24
break;

default: break
     }
  food.depth = rabbit.depth
  foodGroup.add(food)
     }
  }