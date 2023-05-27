
var splashimg
var gameState = "wait"
var rocketImg
var darkStar,iceStar,fireStar,explodeStar,poisonStar,star
var alien
var axe

var storybutton, mutebutton, musicbutton, nextbutton, playbutton,restartbutton


function preload(){
splashimg=loadImage("Star_Stellar.gif")
rocketImg=loadImage("rocket.png")
darkStar=loadImage("darkStar.png")
iceStar=loadImage("iceStar.png")
fireStar=loadImage("fireStar.png")
explodeStar=loadImage("explodeStar.png")
poisonStar=loadImage("poisonStar.png")
star=loadImage("star.png")
alien=loadImage("alien.png")
axe=loadImage("axe.png")
}

function setup(){
createCanvas(windowWidth,windowHeight)

}

function draw(){
background(splashimg)
    
}