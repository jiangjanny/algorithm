const products = [
    { id: 1, name: '筆記型電腦', category: '電子產品', price: 30000, stock: 50 },
    { id: 2, name: '智能手錶', category: '電子產品', price: 5000, stock: 100 },
    { id: 3, name: '咖啡機', category: '家電', price: 3000, stock: 30 },
    { id: 4, name: '平板電腦', category: '電子產品', price: 15000, stock: 75 }
  ];
  
  // 任務： 
  // 1. 依照類別分組商品
  // 2. 篩選出庫存大於50且價格低於20000的商品
  // 3. 計算每個類別的平均價格

// 1. 依照類別分組商品
const groupedByCategory = products.reduce((groups, product) => {
    const { category } = product;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push(product);
    return groups;
    
}, {});


let filteredProducts = products.filter(item => item.stock > 50 && item.stock < 20000)


let dd = Object.entries(groupedByCategory).map(([category, items]) => ({
    category,
    totalAmount: Math.ceil(items.reduce((total, item) => total + (item.price * item.stock), 0) / items.length)
}));


