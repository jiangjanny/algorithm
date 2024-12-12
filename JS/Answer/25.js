const company = {
    departments: {
      engineering: [
        { name: '小王', salary: 60000, level: 'junior' },
        { name: '小李', salary: 80000, level: 'senior' }
      ],
      marketing: [
        { name: '小張', salary: 55000, level: 'junior' },
        { name: '小陳', salary: 75000, level: 'senior' }
      ]
    }
  };
  
  // 任務：
  // 1. 展平所有員工資料
  // 2. 計算不同職級的平均薪資
  // 3. 找出薪資最高的員工  flatEmployees, averageSalaryByLevel, highestPaidEmployee 

function companyAnalysis(company){

    const flatEmployees = Object.values(company.departments).flat()
    .map(employee => ({ 
        ...employee, 
        department: Object.keys(company.departments)
            .find(dept => company.departments[dept].includes(employee)) 
    }));

    const levelStats = flatEmployees.reduce((stats, { level, salary }) => ({
        ...stats,
        [level]: {
            total: (stats[level]?.total || 0) + salary,
            count: (stats[level]?.count || 0) + 1
        }
        
    }
    ), {});

    const averageSalaryByLevel = Object.fromEntries(
        Object.entries(levelStats).map(([level, { total, count }]) => 
            [level, Math.round(total / count)]
        )
    );

    // console.log('flatEmployees', flatEmployees);
    
    const highestPaidEmployee = flatEmployees.reduce((a, b) => a.salary > b.salary ? a : b)
    console.log('highestPaidEmployee', highestPaidEmployee);
    
}

companyAnalysis(company)
  