const orders = [
    { 
      id: 'A001', 
      customer: '王小姐', 
      items: [
        { product: '蘋果', price: 5, quantity: 3 },
        { product: '麵包', price: 10, quantity: 2 }
      ]
    },
    { 
      id: 'A002', 
      customer: '李先生', 
      items: [
        { product: '牛奶', price: 8, quantity: 1 },
        { product: '蘋果', price: 5, quantity: 5 }
      ]
    }
  ];
  
  // 任務：
  // 1. 計算每個訂單的總金額 totalAmount
  // 2. 統計商品銷售情況（總量、總金額）
  // 3. 依照商品名稱重組資料

  function ordersFunc(orders) {
    // 第1步：计算订单总金额 ordersWithTotal totalQuantity
    const ordersWithTotal = orders.map(order => ({
        ...order,
        totalAmount: order.items.reduce((total, item) => total + item.price * item.quantity, 0)
    }))

    
   
    // 第2步：统计商品销售情况 productSales

    const productSales = orders.flatMap(order => order.items).reduce((stats, { product, quantity, price }) => {
        stats[product] = stats[product] || { totalQuantity: 0, totalAmount: 0 };
        stats[product].totalQuantity += quantity;
        stats[product].totalAmount += price * quantity;
        return stats;
    }, {});

    
    


    // 第3步：按商品名称重组数据 productOrganizedData
    const productOrganizedData = Object.entries(productSales).map(([product, data]) => ({
        product,
        ...data
    }));
    

    return {
        ordersWithTotal,
        productSales: productOrganizedData
    };
    
}

// 使用示例
ordersFunc(orders);
 