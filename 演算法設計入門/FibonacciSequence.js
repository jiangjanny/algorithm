/*

Fibonacci Seqence 公式

F(0) = 0
F(1) = 1
F(n) = F(n - 1) + F(n - 2)

*/


// const Fn = (i) => {
//     if (i === 0) {
//         return 0
//     } else if (i === 1) {
//         return 1
//     } else {
//         return Fn(i - 1) + Fn(i - 2)
//     }
// }

const Fn = (i) => {
    if (i === 0) return 0;
    if (i === 1) return 1;

    let prev = 0, curr = 1;
    for (let j = 2; j <= i; j++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    return curr;
}




for (let j = 0; j < 10; j++) {
    console.log(Fn(j));

}