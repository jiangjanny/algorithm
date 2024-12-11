// 題目：計算每個顧客的購物車總價並添加運費
// 題目描述：
// 假設您有一個顧客數組，每位顧客有一個購物車，購物車內有若干商品，每個商品都有 price 和 quantity 屬性。
//每位顧客有一個總購物金額，並且運費是根據顧客總金額來決定的。

// 如果總金額大於等於 1000 元，運費為 0 元。
// 如果總金額小於 1000 元，運費為 50 元。
// 您需要計算每位顧客的總金額（商品總價 + 運費），並返回一個新的數組，其中包含顧客的姓名、購物車的商品清單
//（包括每個商品的數量、單價及總價）、顧客的總金額（含運費）以及運費。

// 顧客數據格式：
let customers = [
    {
      name: "Alice",
      cart: [
        { product: "Laptop", price: 800, quantity: 1 },
        { product: "Mouse", price: 50, quantity: 2 }
      ]
    },
    {
      name: "Bob",
      cart: [
        { product: "Smartphone", price: 400, quantity: 1 },
        { product: "Headphones", price: 150, quantity: 1 }
      ]
    },
    {
      name: "Charlie",
      cart: [
        { product: "Keyboard", price: 120, quantity: 2 }
      ]
    }
  ];

//   要求：
//   使用 map() 方法來處理顧客數組。
//   顧客的購物車中每個商品的總價計算公式為：商品總價 = 商品單價 * 商品數量。
//   顧客的總金額應包括所有商品的總價加上運費。
//   根據顧客的總金額，決定是否需要支付運費（大於等於 1000 元免運費，小於 1000 元則需支付 50 元運費）。
//   返回包含顧客姓名、更新後購物車（每個商品都包含其總價）、顧客總金額以及運費的新數組。
  
//   解題提示：
//   可以使用 map() 來遍歷顧客數組，並在每位顧客的購物車中使用 map() 計算每個商品的總價。
//   計算每位顧客的總金額時，使用 reduce() 來計算商品的總價。
//   根據顧客的總金額決定運費。


// function customersFunc(customers){
//     for(let customer of customers){
//         let totalAmount = 0
//         let map = 0
//         for(let car of customer.cart){
//             totalAmount += car.price * car.quantity
//         }
//         map = totalAmount > 1000 ? 0 : 50
//         customer.totalAmount = totalAmount
//         customer.map = map
//     }
    
//     return customers
// }

function customersFunc(customers) {
    return customers.map(customer => {
        // 計算每位顧客的購物車總金額
        let totalAmount = customer.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        // 根據總金額決定運費
        let shippingFee = totalAmount >= 1000 ? 0 : 50;

        // 更新顧客對象
        return {
            ...customer,
            totalAmount: totalAmount + shippingFee,  // 顧客的總金額包括商品總金額和運費
            shippingFee: shippingFee  // 顧客的運費
        };
    });
}


console.log(customersFunc(customers));

  