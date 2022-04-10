// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

//////////////////// Opdracht 1 //////////////////// 

// 1.a
const names = inventory.map( (product) => {
  return product.name;
});

console.log(names);

// 1.b
const soldOut = inventory.filter((product) => {
    return (product.originalStock - product.sold) === 0;
  });

console.log(soldOut);

// 1.c
const withAmbiLight = inventory.filter((product) => {
  return product.options.ambiLight;
});

console.log(withAmbiLight);

// 1.d
const sortPrice = inventory.concat().sort((a, b) => {
    if (a.price > b.price) {
      return 1;
    } else if (a.price < b.price) {
      return -1;
    } else {
      return 0;
    }
  });

console.log(sortPrice);

//////////////////// Opdracht 2 ////////////////////

// 2.a
const totalProductsSold = inventory.map((tv) => {
  return tv.sold;
});

const totalSumOfArray = function(arr) {
  let sum = arr[0];

  for (let i = 1; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

console.log(totalSumOfArray(totalProductsSold));

// 2.b
const totalSold = document.querySelector(".total-sold");
totalSold.textContent = totalSumOfArray(totalProductsSold);

// 2.c
const totalTvsStock = inventory.map((tv) => {
  return tv.originalStock;
});

console.log(totalSumOfArray(totalTvsStock));

// 2.d
const totalStock = document.querySelector(".total-stock");
totalStock.textContent = totalSumOfArray(totalTvsStock);

// 2.e
const totalToSell = document.querySelector(".total-to-sell");
totalToSell.textContent = totalSumOfArray(totalTvsStock) - totalSumOfArray(totalProductsSold);

//////////////////// Opdracht 3 ////////////////////

// 3.a
const tvBrands = inventory.map((tv) => {
  return tv.brand;
});

// 3.b
const productBrands = document.querySelector(".product-brands");

const createElementFromArray = function(arr, list) {
  for (let i = 0; i < arr.length; i++) {
    let tvInfo = document.createElement("p");
    tvInfo.textContent = arr[i];
    tvInfo.classList.add("inventory-style");
    list.appendChild(tvInfo);
  }
}
createElementFromArray(tvBrands, productBrands);

//////////////////// Opdracht 4 ////////////////////

// 4.a
const productInfo = function(product) {
  return `${product.brand} ${product.type} - ${product.name}`
}

console.log(productInfo(inventory[0]));
console.log(productInfo(inventory[1]));

// 4.b
const productPrice = function(product) {
  return `€${product.price},-`;
}

console.log(productPrice(inventory[0]));
console.log(productPrice(inventory[1]));

// 4.c
const productScreenSizes = function(product) {
  let newString = "";

  for (let i = 0; i < product.length; i++) {
    newString += `${product[i]} inch (${product[i] * 2.5}cm) ${product.length > 1 ? "| " : " "}`;
  }
  return newString.slice(0, -2);
}

console.log(productScreenSizes(inventory[1].availableSizes));
console.log(productScreenSizes(inventory[3].availableSizes));

// 4.d
const inventoryExample = document.querySelector(".tv-info");
inventoryExample.textContent = `${productInfo(inventory[0])} \n${productPrice(inventory[0])} \n${productScreenSizes(inventory[0].availableSizes)}`;

// 4.e
const inventoryList = document.querySelector(".inventory");

const inventoryContent = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(productInfo(arr[i]) + "\n" + productPrice(arr[i]) + "\n" + productScreenSizes(arr[i].availableSizes) + "\n");
  }
  return newArr;
}
createElementFromArray(inventoryContent(inventory), inventoryList);

//////////////////// Bonusopdrachten ////////////////////

// 1
const allProductsBtn = document.querySelector(".all-products-btn");
const sortBtn = document.querySelector(".sort-btn");
const ambilightBtn = document.querySelector(".ambilight-btn");
const soldOutBtn = document.querySelector(".sold-out-btn");

const sortPriceFunction = function () {
  return sortPrice;
}

const ambilightTvFunction = function() {
  return withAmbiLight;
}

const soldOutFunction = function () {
  return soldOut;
}

// 2
const allProducts = document.querySelector(".inventory");

const generateTv = function(arr) {
  const generateProduct = inventoryContent(arr);
  createElementFromArray(generateProduct, allProducts);
}

allProductsBtn.addEventListener("click", function() {
  allProducts.textContent = "";
  generateTv(inventory);
})

sortBtn.addEventListener("click", function() {
  allProducts.textContent = "";
  generateTv(sortPriceFunction());
})

soldOutBtn.addEventListener("click", function() {
  allProducts.textContent = "";
  generateTv(soldOutFunction());
});

ambilightBtn.addEventListener("click", function() {
  allProducts.textContent = "";
  generateTv(ambilightTvFunction());
});