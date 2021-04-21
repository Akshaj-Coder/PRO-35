var ballon, ballonanimation;
var bgimg;
var height;
function preload() {
      bgimg = loadImage("Hot Air Ballon-01.png")
      ballonanimation = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
}

function setup() {
  createCanvas(1200,700);

  database = firebase.database();

  ballon = createSprite(250, 350, 50, 50);
  ballon.addAnimation("balon",ballonanimation);
                                                                                                                                                                                                                                                                                                                                                                                  
  var ballonPosition =database.ref('balloon/height');
  ballonPosition.on("value",readPosition,showError);
}

function draw() {
  background(bgimg);  

 

  if (keyDown(UP_ARROW)) {
    updateHeight(0,-10);
    ballon.scale(-5);
  }

  else if(keyDown(DOWN_ARROW)) {
    updateHeight(0,10);
  }

  textSize(30);
  text("Use Arrow keys to move the balloon!!",100,50);

  drawSprites();
}

function updateHeight(x,y) {
  database.ref('balloon/position').set({
    'x':height.x + x,
    'y':height.y + y
  })
}

function readPosition(data){
  height = data.val();
  ballon.x = height.x;
  ballon.y = height.y;
}


function showError() {
  console.log("Opps!, Something went wrong check your code again!");
}
