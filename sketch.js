
function preload() {
    //load the images here
    gardenBackgroundImage=loadImage("images/garden.png");
    catImage1=loadImage("images/cat1.png");
    catImage2=loadImage("images/cat2.png");
    catImage3=loadImage("images/cat3.png");
    catImage4=loadImage("images/cat4.png");
    mouseImage1=loadImage("images/mouse1.png");
    mouseImage2=loadImage("images/mouse2.png");
    mouseImage3=loadImage("images/mouse3.png");
    mouseImage4=loadImage("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    gardenBackground=createSprite(500,400,1000,800);
    //create tom and jerry sprites here
    cat=createSprite(750,600,50,50);
    cat.scale=0.2;
    mouse=createSprite(250,600,50,50);
    mouse.scale=0.2;
}

function draw() {
    background(255);
    gardenBackground.addImage(gardenBackgroundImage);
    cat.addImage(catImage1);
    mouse.addImage(mouseImage1);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.x=370;
        cat.velocityX=0;
        cat.addAnimation("catLastImage",catImage4);
        cat.changeAnimation("catLastImage");
        mouse.addAnimation("mouseLastImage",mouseImage4);
        mouse.changeAnimation("mouseLastImage");
    }
    drawSprites();
}

function keyPressed(){
    //For moving and changing animation write code here
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-5;
        cat.addAnimation("catRunningAnimation",catImage2,catImage3);
        cat.changeAnimation("catRunningAnimation");
        mouse.addAnimation("mouseTeasingAnimation",mouseImage2,mouseImage3);
        mouse.changeAnimation("mouseTeasingAnimation");
    }
}
