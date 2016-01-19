
var productImages = [];

function Products (productName, filePath) {
this.productName = productName;
this.filePath = filePath;
productImages.push(this);
}

productRandomizer = function () {
     return Math.floor(Math.random() * productImages.length);
}

var imageAppearOne = function(){
    var x = productRandomizer();
    var productImageOne = document.getElementById('imageOne');
    productImageOne.src = productImages[x].filePath;
}
var imageAppearTwo = function() {
    var y = productRandomizer();
    var productImageTwo = document.getElementById('imageTwo');
    productImageTwo.src = productImages[y].filePath;
}
var imageAppearThree = function() {
    var z = productRandomizer();
    var productImageThree = document.getElementById('imageThree');
    productImageThree.src = productImages[z].filePath;
}

// var productClickOne = 0;
// productImageOne.addEventListener('click', handleClickonOne);
//
// function handleClickonOne() {
//   productClickOne += 1;
//   console.log(this.Product + ' was clicked ' + productClickOne + ' times');
// }

var bag = new Products ('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products ('Banana Slicer', 'img/banana.jpg');
var boots = new Products ('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products ('Chair', 'img/chair.jpg');
var cthulu = new Products ('Cthulu Toy', 'img/cthulhu.jpg');
var dragon = new Products ('Dragon Meat', 'img/dragon.jpg');
var pen = new Products ('Untensil Pens', 'img/pen.jpg');
var scissors = new Products ('Pizza Scissors', 'img/scissors.jpg');

// handleClickonOne();
imageAppearOne();
imageAppearTwo();
imageAppearThree();
