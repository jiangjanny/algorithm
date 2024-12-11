// 假設你有一組顧客購物清單的數據，每個顧客選擇了不同的商品，並且每個商品有不同的價格。
// 你需要使用 map() 方法來處理這些數據，並根據需求返回新的結果。

// 顧客購物清單：

let customers = [
    { name: 'Alice', cart: [{ item: 'Laptop', price: 1000 }, { item: 'Headphones', price: 200 }] },
    { name: 'Bob', cart: [{ item: 'Smartphone', price: 800 }, { item: 'Charger', price: 50 }] },
    { name: 'Charlie', cart: [{ item: 'Tablet', price: 600 }, { item: 'Keyboard', price: 120 }] },
    { name: 'David', cart: [{ item: 'Smartwatch', price: 250 }, { item: 'Case', price: 40 }] }
  ];

// 任務：
//   使用 map() 方法來計算每個顧客購物車的總金額。
//   返回一個新數組，該數組包含每個顧客的名字和他們購物車的總金額。
//   新數組的格式應該如下所示：

// 額外要求：
// 需要對每位顧客的購物車內的每個商品價格進行求和。
// 不要修改原始數組，應該返回一個新數組。


function customersFunc(customers) {
    // customers.map(customer => {
    //     let totalAmount = customer.cart.reduce((total, item) => total + item.price, 0);

    //     return {
    //         name: customer.name,
    //         totalAmount: totalAmount
    //     }
        
    // })

    for (let customer of customers){
        let totalAmount = 0;
        for(let car of customer.cart){
            totalAmount += car.price
        }
       
        customer.totalAmount = totalAmount
        
    }

   return customers.map(item => ({
    name: item.name,
    totalAmount : item.totalAmount
   }))
    
  }
  
console.log(customersFunc(customers) );
