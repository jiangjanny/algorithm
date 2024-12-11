// 題目：基於訂單計算優惠與總價
// 題目描述：
// 給定一個包含多個訂單的陣列，每個訂單包含以下結構：

const orders = [
    {
        orderId: 'ORD123',
        customerId: 'CUST001',
        items: [
            { itemId: 'ITEM001', price: 1000, quantity: 2, discount: 0.1 },
            { itemId: 'ITEM002', price: 300, quantity: 1, discount: 0.05 }
        ],
        orderDate: '2024-12-01'
    },
    {
        orderId: 'ORD124',
        customerId: 'CUST002',
        items: [
            { itemId: 'ITEM003', price: 500, quantity: 1, discount: 0.2 },
            { itemId: 'ITEM004', price: 100, quantity: 5, discount: 0.0 }
        ],
        orderDate: '2024-12-02'
    }
];

// 題目要求：
    // 使用 forEach 方法遍歷所有訂單。
    // 為每個訂單計算商品的總價，並考慮折扣。
    // 計算訂單總價，如果超過 1000，則提供額外的 10% 優惠。
    // 返回包含每個訂單的詳細資料，包括：
    // orderId：訂單ID
    // totalPrice：訂單的總價（計算後）
    // discountedPrice：若符合條件，則計算並返回額外折扣後的最終價格


    function calculateOrderPrices(orders) {
        // 使用 map 來創建一個新的陣列
        return orders.map(element => {
            let totalPrice = element.items.reduce((total, item) => {
                // 這裡計算每個商品的總價
                return total + item.price * item.quantity * (1 - item.discount);
            }, 0);
    
            // 如果總價大於 1000，則提供 10% 折扣
            let discountedPrice = totalPrice > 1000 ? totalPrice * 0.9 : totalPrice;
    
            // 更新原始元素的屬性
            return {
                ...element,
                totalPrice: totalPrice,
                discountedPrice: discountedPrice
            };
        });
    }
    
calculateOrderPrices(orders)