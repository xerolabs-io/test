// Synchronous

function findSum(n) {
    let ans = 0;
    for (let i = 0; i < n; i++) {
        ans += i
    }

    return ans
}

// console.log(findSum(10000000000))
// console.log("Synchronous")

// Asynchronous

function findSummTill100() {
    return findSum(100)
}

setTimeout(console.log(findSummTill100, 1000))
console.log("Asynchronos")