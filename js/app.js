'use strict'
var productImages = [];

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    this.clickTotal = 0;
    this.timesDisplayed = 0;
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
// var pen = new Products('Untensil Pens', 'img/pen.jpg');
// var scissors = new Products('Pizza Scissors', 'img/scissors.jpg');
// var shark = new Products('Shark Sleeping Bag', 'img/shark.jpg');
// var sweep = new Products('Baby Broom Onesie', 'img/sweep.png');
// var unicorn = new Products('Unicorn Meat', 'img/unicorn.jpg');
// var usb = new Products('Tentacle USB', 'img/usb.gif');
// var waterCan = new Products('Watering Can', 'img/water-can.jpg');
// var wineGlass = new Products('Wine Glass', 'img/wine-glass.jpg');

var imgRandom = function () {
    return Math.floor(Math.random() * productImages.length);
}

var img1;
var img2;
var img3;

//function that makes images appear
var imageAppear = function(){
    var productImageOne = document.getElementById('imageOne');
    var productImageTwo = document.getElementById('imageTwo');
    var productImageThree = document.getElementById('imageThree');
    img1 = imgRandom();
    productImageOne.src = productImages[img1].filePath;
    productImages[img1].timesDisplayed ++;
    img2 = imgRandom();
    while (img1 === img2) {
        img2 = imgRandom();
    };
    productImageTwo.src = productImages[img2].filePath;
    productImages[img2].timesDisplayed ++;
    img3 = imgRandom();
    while (img1 === img2 || img2 === img3 || img3 === img1) {
        img3 = imgRandom();
    };
    productImageThree.src = productImages[img3].filePath;
    productImages[img3].timesDisplayed ++;

}
imageAppear();

var firstClick = 0;
var secondClick = 0;
var thirdClick = 0;

var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');

function handleClickFirst(){
    firstClick += 1;
    console.log('First was clicked ' + firstClick + ' times');
    productImages[img1].clickTotal += 1;
    imageAppear();
}

function handleClickSecond(){
      secondClick += 1;
      console.log('Second was clicked ' + secondClick + ' times');
      productImages[img2].clickTotal += 1;
      imageAppear();
    }

function handleClickThird(){
        thirdClick += 1;
        console.log('Third was clicked ' + thirdClick + ' times');
        productImages[img3].clickTotal += 1;
        imageAppear();
      }

imageOne.addEventListener('click', handleClickFirst);
imageTwo.addEventListener('click', handleClickSecond);
imageThree.addEventListener('click', handleClickThird);
