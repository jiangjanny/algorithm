// 題目：將商品陣列按照分類進行分組
const products = [
    { id: 1, name: '蘋果', category: '水果' },
    { id: 2, name: '麵包', category: '麵包類' },
    { id: 3, name: '香蕉', category: '水果' },
    { id: 4, name: '蛋糕', category: '麵包類' }
  ];
  
  // 你的任務：
  // 1. 將商品按 category 分組
  // 2. 輸出格式如：
  // {
  //   '水果': [{ id: 1, name: '蘋果' }, { id: 3, name: '香蕉' }],
  //   '麵包類': [{ id: 2, name: '麵包' }, { id: 4, name: '蛋糕' }]
  // }

 let product = products.reduce((groups, product) => {
    const { id, name,category } = product;
    if (!groups[category]) {
        groups[category] = [];
    }
    groups[category].push({id, name });
    return groups
  }, {})

  console.log(product);
  