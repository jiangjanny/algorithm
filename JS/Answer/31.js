// 題目：從複雜的組織結構中篩選出符合特定條件的員工
const organization = {
    name: '總公司',
    departments: [
      {
        name: '技術部',
        employees: [
          { name: '小王', age: 28, skills: ['JavaScript', 'Python'] },
          { name: '小李', age: 35, skills: ['Java', 'C++'] }
        ]
      },
      {
        name: '行銷部',
        employees: [
          { name: '小張', age: 32, skills: ['社交媒體', 'SEO'] },
          { name: '小陳', age: 26, skills: ['內容行銷', 'JavaScript'] }
        ]
      }
    ]
  };
  
  // 你的任務：
  // 1. 篩選出年齡在25-30歲之間
  // 2. 且具有 JavaScript 技能的員工
  // 3. 輸出包含部門名稱的員工資訊

const filteredEmployees = organization.departments.flatMap(department => 
    department.employees.filter(employee =>  
        employee.age >= 25 && employee.age <= 30 && employee.skills.includes('JavaScript')
    ).map(employee => ({
        ...employee,
        departmentName: department.name
    }))
      
);

console.log(filteredEmployees);

