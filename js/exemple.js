/*
mes
commentaires
*/

// mes commentaires

// variables
let a = 0;

// fonction pure
function myFunc(value) {
  return value + 1;
}

function myFunc2(value) {
  return value + 2;
}

const func = () => {
  console.log("my lambda function");
};

const newa = myFunc(a);
const a = myFunc2(newa);
a = newa2;

class Article {
  title = "";
  price = 0;
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }
  getPrice() {
    return `${this.price} euro(s)`;
  }
  getTitle() {
    return this.title;
  }
}

const sofa = new Article("sofa", 1000);
const price = sofa.getPrice();
console.log(price);

/*
-map
-forEach
-reduce
*/

const values = [1, 2, 3];

const mutlValues = values.map((value) => {
  value * 2;
});
//[2, 4, 6]

let result = 0;
values.forEach((value) => {
  result = result + value;
});

const result2 = values.reduce((acc, value) => {
  return acc + value;
});
