'use strict'
var productImages = [];
var percentChart = [];
var globalClicks = 0;
var img1;
var img2;
var img3;
var productImageOne = document.getElementById('imageOne');
var productImageTwo = document.getElementById('imageTwo');
var productImageThree = document.getElementById('imageThree');
var imageSection = document.getElementById('hide');
var resultsButton = document.getElementById('resultsButton');

function Products (productName, filePath) {
    this.productName = productName;
    this.filePath = filePath;
    this.clickTotal = 0;
    this.timesDisplayed = 0;
    this.percentClick = 0;
    productImages.push(this);
  }

function percent() {
    for(var i = 0; i < productImages.length; i++) {
      productImages[i].percentClick = (productImages[i].clickTotal/globalClicks).toFixed(2) * 100;
   }
 }

var bag = new Products('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products('Banana Slicer', 'img/banana.jpg');
var boots = new Products('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products('Chair', 'img/chair.jpg');
var cthulu = new Products('Cthulhu Toy', 'img/cthulhu.jpg');
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


function handleClick(image){
        image.clickTotal += 1;
        globalClicks += 1;
        percent();
        hideSection();
        localStorage.setItem('chartPersist', JSON.stringify(productImages));
        button();
        thanksText();
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
    if(globalClicks < productImages.length) {
        document.getElementById('resultsButton').style.visibility = 'hidden';
    } else {
        document.getElementById('resultsButton').style.visibility = 'visible';
    }
}
button();

function hideSection() {
    if (globalClicks < productImages.length){
        document.getElementById('hide').style.display = 'block';
    } else {
        document.getElementById('hide').style.display = 'none';
    }
}
hideSection();

var thankYou = document.getElementById('appear');
function thanksText(){
  if (globalClicks < productImages.length){
    document.getElementById('appear').style.display = 'none';
  } else {
    document.getElementById('appear').style.display = 'block';
  }
}
thanksText();

function dataSet1() {
  for (var i = 0; i < productImages.length; i++) {
    percentChart[i] = productImages[i].percentClick;
  }
}

var chartData = localStorage.getItem('chartPersist');
if(chartData) {
  productImages = JSON.parse(chartData);
} else {
  localStorage.setItem('chartPersist', JSON.stringify(productImages));
}

function chartOne() {
  var data = {
    labels : ['bag', 'banana', 'boots', 'chair', 'cthulhu', 'dragon', 'pen', 'scissors', 'shark', 'sweep', 'unicorn', 'usb', 'water can', 'wine glass'],
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

function handleButtonClick(){
      chartOne();
    console.log('the handler met the listener');
  }
 resultsButton.addEventListener('click', handleButtonClick);

var clearLS = document.getElementById('lsClear');

var handleLSClear = function() {
  console.log('Clearing Local Storage');
  localStorage.clear();
};

clearLS.addEventListener('click', handleLSClear);
