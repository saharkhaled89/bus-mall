'use strict'
var productImages = [];
var globalClicks = 0;

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    this.clickTotal = 0;
    this.timesDisplayed = 0;
    productImages.push(this);
}

Products.prototype.percent = function() {
  return (this.clickTotal/this.timesDisplayed).toFixed(2) * 100;

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
    globalClicks += 1;
    console.log('First was clicked ' + firstClick + ' times');
    productImages[img1].clickTotal += 1;
    imageAppear();
    button();
}

function handleClickSecond(){
      secondClick += 1;
      globalClicks += 1;
      console.log('Second was clicked ' + secondClick + ' times');
      productImages[img2].clickTotal += 1;
      imageAppear();
      button();
    }

function handleClickThird(){
        thirdClick += 1;
        globalClicks += 1;
        console.log('Third was clicked ' + thirdClick + ' times');
        productImages[img3].clickTotal += 1;
        imageAppear();
        button();
      }

imageOne.addEventListener('click', handleClickFirst);
imageTwo.addEventListener('click', handleClickSecond);
imageThree.addEventListener('click', handleClickThird);

//this function hides the results button until it goes through 5 clicks
function button() {
    if(globalClicks < 5) {
        document.getElementById('resultsButton').style.visibility = 'hidden';
    } else {
        document.getElementById('resultsButton').style.visibility = 'visible';
    }
}
button();

//Chart psuedocode
//var productValues = [];
// var survey = [ { productValues[i] and labels} ]
//var context= documet.getElementById('results').getContext('2d');
// var resultsChart = new Chart(context).stuff here(survey, {
//animation,
// });


var resultsButton = document.getElementById('resultsButton');
function handleButtonClick(){
    for (var i = 0; i < productImages.length; i++) {
      // having handler send the data to a <section> for now, needed to test the button functionality / test the percent method
    document.getElementById('showData').innerHTML = productImages[i].percent();

console.log('this point works');
    }
}
 resultsButton.addEventListener('click', handleButtonClick);
