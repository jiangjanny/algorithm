// 要求：
// 使用 map() 方法，將每個學生的分數增加 5 分。
// 返回一個新的數組，包含每個學生的名字和更新後的分數。
// 請確保原始數組 students 不被修改。

let students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 90 },
    { name: 'Charlie', score: 78 },
    { name: 'David', score: 92 },
    { name: 'Eva', score: 88 }
  ];



// function studentsFunc(students){
//     return students.map((item) => {
//         return{
//         ...item,
//         score : item.score + 5
//       }
//     })
//   }

// 這個差不多 只是 這個比較簡潔
// function studentsFunc(students) {
//     return students.map(item => ({
//         ...item,
//         score : item.score + 5
//     }))
//   }

// 這方式會稍微慢一點
  
function studentsFunc(students){
    return students.map(item => Object.assign({}, item, {score: item.score + 10 }))
}

console.log('d', studentsFunc(students));
