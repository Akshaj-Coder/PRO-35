var ballon, ballonanimation;
var bgimg;
var ballonimg2;


function preload() {
      bgimg = loadImage("Hot Air Ballon-01.png")
      ballonanimation = loadAnimation("Hot Air Ballon-02.png","Hot Air Ballon-03.png","Hot Air Ballon-04.png");
      //ballonimg2 = loadImage("")
      ballon.scale -= 0.01; 
}

function setup() {
  createCanvas(1200,700);

  database = firebase.database();

  ballon = createSprite(250, 350, 50, 50);
  ballon.addAnimation("balon",ballonanimation);

  var ballonPosition =database.ref('balloon/position');
  ballonPosition.on("value",readPosition,showError);
}

function draw() {
  background(bgimg);  

  if(keyDown(LEFT_ARROW)) {
    ballon.x -= 10;
  }

  if (keyDown(RIGHT_ARROW)) {
    ballon.x += 10;
  }

  if (keyDown(UP_ARROW)) {
    updateHeight(0,-10);
        ballon.addAnimation("hotAirBallon",ball)
  }

  else if(keyDown(DOWN_ARROW)) {
    ballon.y = ballon.y + 10;l
  }
     

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
