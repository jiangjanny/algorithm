// Union 聯集
// 給兩個集合，回傳一個包含兩個集合中元素的新集合

const union = (firstSet, otherSet) => {
    return new Set([...firstSet, ...otherSet])
}

let a = new Set([1, 2, 4])
let b = new Set([3, 5, 7])

let qq = union(a, b)

// console.log('qq', qq);

// Intersection 交集
// 給兩個集合，回傳兩個集合中共同有的元素

const intersction = (firstSet, otherSet) => {
    let intersectionSet = new Set();
    firstSet.forEach(element => {
        if (otherSet.has(element) === true) {
            intersectionSet.add(element)
        }
    });
    return intersectionSet
}


let dd = new Set([1, 2, 3])
let ss = new Set([2, 3, 4, 5, 6])

let aa = intersction(dd, ss)

// console.log('aa', aa);

// Symmetric Difference 對稱差
// 給定兩集合，回傳兩個集合的元素但不包含重覆元素

const difference = (firstSet, otherSet) => {
    let differenceSet = union(firstSet, otherSet)
    let intersectionSet = intersction(firstSet, otherSet)
    console.log('intersectionSet', intersectionSet);
    differenceSet.forEach(i => {
        if (intersectionSet.has(i) === true) {
            console.log('i', i);
            differenceSet.delete(i)
        }
    })
    return differenceSet
}

let as = new Set([1, 2, 3])
let bs = new Set([2, 3, 4, 5, 6])
let differenceList = difference(as, bs); // {1, 4, 5, 6}

// console.log('differenceList', differenceList);


// Subtraction 差集
// 給定兩集合，回傳一個包含存在第一個集合元素但不存在於第二集合的集合

const subteacting = (firstSet, otherSet) => {
    let subtractingSet = new Set([...firstSet])
    otherSet.forEach(i => {
        if (subtractingSet.has(i) === true) {
            subtractingSet.delete(i)
        }
    })
    return subtractingSet
}

let ass = new Set([1, 2, 3])
let bss = new Set([2, 3, 4, 5, 6])

let subteactingList = subteacting(ass, bss); // {1, 4, 5, 6}

console.log('subteactingList', subteactingList);