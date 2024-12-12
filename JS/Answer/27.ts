// 題目：將下列學生資料陣列轉換為只包含姓名和年齡的新陣列

interface type {
  id: number
  name: string
  age: number
  grade: string
}

const students:type[] = [
    { id: 1, name: '小明', age: 22, grade: 'A' },
    { id: 2, name: '小華', age: 20, grade: 'B' },
    { id: 3, name: '小英', age: 21, grade: 'A' }
  ];
  
  // 你的任務：
  // 1. 只保留 name 和 age 屬性
  // 2. 返回轉換後的新陣列

//   解題思路：
// 可以使用 map() 方法
// 對每個元素建立新的物件，只包含需要的屬性
// 返回新陣列

const simplifiedStudents = students.map(({name, age}) => ({name, age}));
console.log(simplifiedStudents);
