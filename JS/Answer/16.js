// 題目 1: 計算商品折扣後的價格
// 題目描述：
// 假設您有一個商品數組，每個商品都有名稱和原價。您需要根據給定的折扣百分比計算每個商品的折扣後價格，
// 並返回一個新的數組，包含每個商品的名稱和折扣後的價格。

// 商品數據格式：

let products = [
    { name: 'Laptop', price: 1000 },
    { name: 'Smartphone', price: 800 },
    { name: 'Headphones', price: 150 },
    { name: 'Keyboard', price: 120 }
  ];
  
//   折扣百分比：20%

function customersFunc(products) {
    return products.map(item => ({
        name: item.name,
        price: item.price * 0.8
    }))
    
}

console.log(customersFunc(products) );


// function calculateDiscount(price, discount = 0.8) {
//     return price * discount;
// }

// function customersFunc(products) {
//     return products.map(item => ({
//         name: item.name,
//         price: calculateDiscount(item.price)
//     }));
// }

