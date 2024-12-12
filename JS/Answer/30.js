// 題目：從訂單資料中篩選出特定條件的訂單，並轉換資料格式
const orders = [
    { id: 1, customer: '小明', total: 500, status: 'completed' },
    { id: 2, customer: '小華', total: 1200, status: 'pending' },
    { id: 3, customer: '小英', total: 800, status: 'completed' },
    { id: 4, customer: '小李', total: 300, status: 'cancelled' }
  ];
  
  // 你的任務：
  // 1. 篩選出已完成（completed）的訂單
  // 2. 轉換為只包含 customer 和 total 的新陣列
  // 3. 計算這些訂單的總金額

  const statusOrders = orders.filter(item => item.status === 'completed')
  console.log(statusOrders);
  
  const totalRevenue = orders.map(({customer, total}) => ({customer, total}))

  console.log('totalRevenue', totalRevenue);
  