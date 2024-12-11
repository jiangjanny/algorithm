let sign = [
    {
        "order_id": "3001",
        "customer_name": "蔡依林",
        "items": [
          {
            "product_name": "電視",
            "quantity": 1,
            "unit_price": 5000,
            "total_price": 5000
          }
        ]
      },
      {
        "order_id": "3002",
        "customer_name": "王俊凱",
        "items": [
          {
            "product_name": "手機",
            "quantity": 2,
            "unit_price": 2000,
            "total_price": 4000
          }
        ]
      },
      {
        "order_id": "3003",
        "customer_name": "張藝興",
        "items": [
          {
            "product_name": "筆記型電腦",
            "quantity": 1,
            "unit_price": 8000,
            "total_price": 8000
          },
          {
            "product_name": "筆記型電腦",
            "quantity": 1,
            "unit_price": 6000,
            "total_price": 6000
          },
          {
            "product_name": "筆記型電腦",
            "quantity": 1,
            "unit_price": 2000,
            "total_price": 6000
          },
          {
            "product_name": "筆記型電腦",
            "quantity": 1,
            "unit_price": 16000,
            "total_price": 6000
          }
        ]
      },
      {
        "order_id": "3004",
        "customer_name": "李聖傑",
        "items": [
          {
            "product_name": "音響",
            "quantity": 3,
            "unit_price": 1500,
            "total_price": 4500
          }
        ]
      }
]

let keys = '藝'
let unitPrice = 0

function dd (item){
  let mon = 0
  let dd = 0
  for (let i = 0; i < item.length; i++) {
    const element = item[i];
    dd = item[0].unit_price
    mon = Math.max(dd, element.unit_price)
    if(dd < element.unit_price){
      dd = element.unit_price
    }
    
  }

  console.log('mon', mon);
  
  
}

for (let i = 0; i < sign.length; i++) {
    const element = sign[i];
   if(element.customer_name.indexOf(keys) > 0){
      dd(element.items)
   }
    
}

console.log('unit_price', unitPrice);
