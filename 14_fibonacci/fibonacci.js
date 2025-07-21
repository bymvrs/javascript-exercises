const fibonacci = function(fibonacciMember) {
    if (fibonacciMember == 0) return 0;
    if (fibonacciMember < 0) return "OOPS";

    let arr = [1, 1];

    for (let i = 2; i < fibonacciMember; i++){
        let sum = arr[arr.length - 1] + arr[arr.length - 2]
        arr.push(sum);
    };

    return arr[fibonacciMember - 1];
};

// Do not edit below this line
module.exports = fibonacci;
