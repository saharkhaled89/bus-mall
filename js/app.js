'use strict'
var productImages = [];

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    // timesClicked = 0;
    // timesDisplayed = 0;
    // percentClicked = 0;
    // this.findPercentClick = function (){
    //   ((this.timesClicked/this.timesDisplayed)/ this.TotalClicks);
    // }
    productImages.push(this);
    // this.findPercentClick();
}
var bag = new Products('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products('Banana Slicer', 'img/banana.jpg');
var boots = new Products('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulu = new Products('Cthulu Toy', 'img/cthulhu.jpg');
var dragon = new Products('Dragon Meat', 'img/dragon.jpg');
var pen = new Products('Untensil Pens', 'img/pen.jpg');
var scissors = new Products('Pizza Scissors', 'img/scissors.jpg');
var shark = new Products('Shark Sleeping Bag', 'img/shark.jpg');
var sweep = new Products('Baby Broom Onesie', 'img/sweep.png');
var unicorn = new Products('Unicorn Meat', 'img/unicorn.jpg');
var usb = new Products('Tentacle USB', 'img/usb.gif');
var waterCan = new Products('Watering Can', 'img/water-can.jpg');
var wineGlass = new Products('Wine Glass', 'img/wine-glass.jpg');

var imgRandom = function () {
    return Math.floor(Math.random() * productImages.length);
}

// var alreadyShown = [];
// var img1 = 0;
// var img2 =0;
// var img3 = 0;
var imageAppear = function(){
    var productImageOne = document.getElementById('imageOne');
    var productImageTwo = document.getElementById('imageTwo');
    var productImageThree = document.getElementById('imageThree');
    var img1 = imgRandom();
    productImageOne.src = productImages[img1].filePath;
    var img2 = imgRandom();
    while (img1 === img2) {
        img2 = imgRandom();
    };
    productImageTwo.src = productImages[img2].filePath;
    var img3 = imgRandom();
    while (img1 === img2 || img2 === img3 || img3 === img1) {
        img3 = imgRandom();
    };
    productImageThree.src = productImages[img3].filePath;

}
imageAppear();
var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');

var firstClick = 0;
var secondClick = 0;
var thirdClick = 0;
// var totalClicks = 0;

function handleClickFirst(){
    imageAppear();
    firstClick++;
    console.log('First was clicked ' + firstClick + ' times');
  }

function handleClickSecond(){
      imageAppear();
      secondClick++;
      console.log('Second was clicked ' + secondClick + ' times');
    }

function handleClickThird(){
        imageAppear();
        thirdClick++;
        console.log('Third was clicked ' + thirdClick + ' times');
      }


imageOne.addEventListener('click', handleClickFirst);
imageTwo.addEventListener('click', handleClickSecond);
imageThree.addEventListener('click', handleClickThird);
