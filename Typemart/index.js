"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var products_1 = require("./products");
var productName = 'fanny pack';
var product = products_1.default.filter(function (product) { return product.name === productName; })[0];
console.log(product);
if (product.preOrder === 'true')
    console.log("we will ship you the product soon");
else
    console.log("no preorder for this product");
var shipping;
var taxPercent;
var taxTotal;
var total;
var shippingAddress = '575 Broadway, New York City, New York';
Number(product.price) > 25 ? shipping = 0 : shipping = 5;
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
else {
    taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
console.log("\nProduct:  ".concat(product.name, "\nAddress:  ").concat(shippingAddress, "\nPrice:    $").concat(product.price, "\nTax:      $").concat(taxTotal.toFixed(2), "\nShipping: $").concat(shipping.toFixed(2), "\nTotal:    $").concat(total.toFixed(2), "\n"));
