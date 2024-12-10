// 1. 手寫實現 Object.create()
// 要求：手寫實現 Object.create()，該方法接受一個物件作為參數，並創建一個新的物件，該物件的 __proto__ 屬性指向傳入的物件。

function myCreate(proto) {
    // 你的代碼

  
    
  }
  
  const obj = myCreate({ greet: function() { console.log('Hello!'); } });
  obj.greet();  // "Hello!"
  console.log(obj.__proto__);  // { greet: function() { console.log('Hello!'); } }
  