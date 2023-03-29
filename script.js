const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING ="Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = 0;

const country = "RSA";
let customers = 1;
let shipping;
let currency;

let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

let itemsShopped = shoes + toys + batteries;

if (country === "RSA") {
  shipping = 400;
  currency = "R";
} else if (country === "NAM") {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

if (
  (itemsShopped >= 1000 || (itemsShopped >= 60 && currency === "$")) &&
  (country === "NAM" || country === "RSA") &&
  (customers === 1) ){
  shipping = 0;
} else if (shipping == 0 && customers !== 1) {
  console.log(FREE_WARNING);
}


let total = itemsShopped + shipping;

console.log(country === "NK" ? console.log(BANNED_WARNING) : console.log("Price:", currency + total));