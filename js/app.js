'use strict'
var productImages = [];

function Products (productName, filePath) {
this.productName = productName;
this.filePath = filePath;
productImages.push(this);
}

var productRandomizer = function () {
     return Math.floor(Math.random() * productImages.length);
}

var imageAppear = function(){
  var productImageOne = document.getElementById('imageOne');
    var x = productRandomizer();
    productImageOne.src = productImages[x].filePath;

  var productImageTwo = document.getElementById('imageTwo');
    var y = productRandomizer();
    while (x === y) {
      y = productRandomizer();
    };
    productImageTwo.src = productImages[y].filePath;

    var productImageThree = document.getElementById('imageThree');
    var z = productRandomizer();
    while (x === y || y === z || z === x) {
      z = productRandomizer();
    };
    productImageThree.src = productImages[z].filePath;
}

// var productClickOne = 0;
// var productClickTwo = 0;
// var productClickThree = 0;
// function handleClickOne() {
//   productClickOne += 1;
//   imageAppear();
//   console.log(productImageOne + ' was clicked ' + productClickOne + ' times');
// }
// function handleClickTwo() {
//   productClickTwo += 1;
//   imageAppear();
//   console.log(productImageTwo + ' was clicked' + productClickTwo + ' times');
// }
// function handleClickThree() {
//   productClickThree += 1;
//   imageAppear();
//   console.log(productImageThree + ' was clicked' + productTwo + ' times');
// }
//
// productImageOne.addEventListener('click', handleClickOne);
// productImageTwo.addEventListener('click', handleClickTwo);
// productImageThree.addEventListener('click', handleClickThree);


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

imageAppear();
