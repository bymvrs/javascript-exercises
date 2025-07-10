const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0 || !Number.isInteger(num1) || !Number.isInteger(num2)) return "ERROR";

    let largerNumber;
    let lowerNumber;
    
    if (num1 > num2){
        largerNumber = num1;
        lowerNumber = num2;
    }else{
        largerNumber = num2;
        lowerNumber = num1;
    }

    let sum = 0;

    for (let i = lowerNumber; i <= largerNumber; i++){
        sum += i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
