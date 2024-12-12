const salesData = [
  { product: '筆記型電腦', category: '電子產品', price: 30000, sales: 50 },
  { product: '智能手機', category: '電子產品', price: 25000, sales: 80 },
  { product: '咖啡', category: '食品', price: 200, sales: 500 },
  { product: '耳機', category: '電子產品', price: 3000, sales: 120 }
];

// 1. 按照 category 分組
const categorys = salesData.reduce((groups, item) => {
  const { category } = item;

  if (!groups[category]) {
      groups[category] = [];
  }
  groups[category].push(item);
  return groups;
}, {});

// 2. 計算每個分類的統計數據
const categoryStats = Object.keys(categorys).map(category => {
  const items = categorys[category];

  // 總銷售量
  const totalSales = items.reduce((sum, item) => sum + (item.price * item.sales), 0);
  // 總數
  const totalQuantity = items.reduce((sum, item) => sum + item.sales, 0);
  //  平均價格
  const avgPrice = totalSales / totalQuantity;
  
  
  // 找出銷售額最高的商品
  const highestSalesItem = items.reduce((max, item) => {
      const itemSales = item.price * item.sales;
      return itemSales > max.sales ? { ...item, sales: itemSales } : max;
  }, { sales: 0 });

  console.log('highestSalesItem', highestSalesItem);
  

  

  return {
      category,
      totalSales,
      avgPrice,
      totalQuantity,
      highestSalesItem
  };
});

// console.log(categoryStats);
