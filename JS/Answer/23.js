// 原始資料
const students = [
    { name: '小明', scores: [85, 92, 78] },
    { name: '小華', scores: [90, 88, 95] },
    { name: '小李', scores: [75, 80, 85] }
  ];
  
  // 任務：
  // 1. 計算每位學生的平均成績
  // 2. 篩選出平均成績大於85的學生
  // 3. 將結果轉換為 { name, averageScore } 格式


function studentsFunc(params) {
    return params.map(element => ({
        name: element.name,
        averageScore: element.scores.reduce((sum, item)=> sum + item , 0) / params.scores.length
    })).filter(student => student.averageScore > 85)
}

function studentsFunc(students) {
    return students.reduce((acc, student) => {
        
        
        const averageScore = student.scores.reduce((sum, score) => sum + score, 0) / students.scores.length;
        acc.push({ name: student.name, averageScore });
        return acc;
    }, []).filter(student => student.averageScore > 85);
}


console.log(studentsFunc(students))