let project = [
    {
        item: 'AA',
        leve: 0,
        children: [
            {
                item: 'AA-01',
                leve: 1,
                children:[
                    {
                        item: 'AA-01-01',
                        leve: 2,
                        children: []
                    },
                    {
                        item: 'AA-01-02',
                        leve: 2,
                        children: []
                    }
                ]
            },
            {
                item: 'AA-02',
                leve: 1,
                children: [
                    {
                        item: 'AA-02-01',
                        leve: 2,
                        children: []
                    },
                    {
                        item: 'AA-02-02',
                        leve: 2,
                        children: []
                    },
                    {
                        item: 'AA-02-03',
                        leve: 2,
                        children: []
                    }
                ]
            }
        ]
    }
]

let key = 'AA-02-02'
let leve = 0
// 1. 查詢祖先

function findAncestors(item, key, ancestors = []) {
    // 遍歷當前層級的所有子項
    for (let element of item) {
        // 把當前元素加入到 ancestors 中
        const newAncestors = [...ancestors, element];

        // 如果找到目標項目
        if (element.item === key) {
            console.log('祖先:', newAncestors); // 輸出祖先列表
            leve = element.leve
            return newAncestors; // 找到後返回祖先
        }

        // 如果有子項，繼續向下遍歷
        if (element.children.length > 0) {
            const result = findAncestors(element.children, key, newAncestors);
            
            if (result) {
                return result; // 若子項找到，則直接返回
            }
        }
    }

    return null; // 如果沒有找到
}

function findProjectAncestors(project, key) {
    return findAncestors(project, key);
}

findProjectAncestors(project, key)
