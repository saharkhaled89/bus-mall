'use strict'
var productImages = [];
var percentChart = [];
var globalClicks = 0;

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    this.clickTotal = 0;
    this.timesDisplayed = 0;
    this.percentClick = 0;
    productImages.push(this);
  }

Products.prototype.percent = function() {
  this.percentClick = (this.clickTotal/this.timesDisplayed).toFixed(2) * 100;
  console.log('this.percent click works')
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

var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');



function handleClick(image){
        image.clickTotal += 1;
        globalClicks += 1;
        image.percent();
        button();
        dataSet1();
        imageAppear();
      }

imageOne.addEventListener('click', function(){
  handleClick(productImages[img1]);
});


imageTwo.addEventListener('click', function(){
  handleClick(productImages[img2]);
});
imageThree.addEventListener('click', function(){
  handleClick(productImages[img3]);
});

function button() {
    if(globalClicks < 5) {
        document.getElementById('resultsButton').style.visibility = 'hidden';
    } else {
        document.getElementById('resultsButton').style.visibility = 'visible';
    }
}
button();

function dataSet1() {
  for (var i = 0; i < productImages.length; i++) {
    percentChart[i] = productImages[i].percentClick;
  }
}

function chartOne() {
  var data = {
    labels : ['bag', 'banana','chair', 'cthulu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water can', 'wine glass'],
    datasets : [
        {
        label: 'Percent Chart',
        fillColor : "#152874",
  			strokeColor : "#48A4D1",
  			data : percentChart
        }
    ]
  }
  var chartHere = document.getElementById('chartHere').getContext('2d');
  var myBarChart = new Chart(chartHere).Bar(data)
}

var resultsButton = document.getElementById('resultsButton');

function handleButtonClick(){
      chartOne();
      // for (var i = 0; i < productImages.length; i++) {
        // data.labels[i] = productImages[i].productName;
        // data.datasets[0].data[i] = productImages[i].clickTotal;
      // data.datasets[0].data[i] = productImages[i].timesDisplayed;
      // // data.datasets[i].data[i] = productImages[i].percent();
      // }
    console.log('the handler met the listener');
    // var chartHere = document.getElementById('chartHere').getContext('2d');
    // new Chart(chartHere).Bar(data);
}
 resultsButton.addEventListener('click', handleButtonClick);
