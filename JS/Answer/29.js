// 題目：將巢狀的部門員工資料攤平成一維陣列
const departments = [
    { 
      name: '技術部', 
      employees: [
        { id: 1, name: '小王', salary: 50000 },
        { id: 2, name: '小李', salary: 60000 }
      ]
    },
    { 
      name: '行銷部', 
      employees: [
        { id: 3, name: '小張', salary: 45000 },
        { id: 4, name: '小陳', salary: 55000 }
      ]
    }
  ];
  
  // 你的任務：
  // 1. 將所有員工資料攤平成一維陣列
  // 2. 每個員工物件額外增加部門名稱屬性 departmentName flatMap


 let dd = departments.flatMap(dept => 
    dept.employees.map((item) => ({
        ...item,
        departmentName: dept.name
    }))
  )

  console.log(dd); 
  