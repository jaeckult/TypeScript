import products from './products'
let productName :string = 'fanny pack'
const product = products.filter(product=>product.name === productName)[0];

console.log(product)
if (product.preOrder==='true') console.log("we will ship you the product soon")
else console.log("no preorder for this product")
let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = '575 Broadway, New York City, New York';
Number(product.price) > 25? shipping =0:shipping=5;

if (shippingAddress.match('New York')) {
  taxPercent = 0.1;
}else{
  taxPercent = 0.05;
}
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal +shipping;
console.log(`
Product:  ${product.name}
Address:  ${shippingAddress}
Price:    $${product.price}
Tax:      $${taxTotal.toFixed(2)}
Shipping: $${shipping.toFixed(2)}
Total:    $${total.toFixed(2)}
`);