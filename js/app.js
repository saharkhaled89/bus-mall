
var productImages = [];

function Products (productName, filePath) {
this.productName = productName;
this.filePath = filePath;
productImages.push(this);

}

productRandomizer = function () {
     return Math.floor(Math.random() * productImages.length);
}

var imageAppear = function(){
  var x = productRandomizer();
  var productImageOne = document.getElementById('imageOne');
  productImageOne.src = productImages[x].filePath;
}

//productImageOne.addEventListener('click', handleClickonProduct);

/*function handleClickonProduct() {
  productClick += 1;
  console.log('This product was clicked ' + productClick + ' times');
}*/

var bag = new Products ('Star Wars Luggage', 'img/bag.jpg');
var banana = new Products ('Banana Slicer', 'img/banana.jpg');
var boots = new Products ('Toe-less Rain Boots', 'img/boots.jpg');
var chair = new Products ('Chair', 'img/chair.jpg');

//handleClickonProduct();
imageAppear();
