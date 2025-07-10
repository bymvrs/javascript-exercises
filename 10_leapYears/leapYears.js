const leapYears = function(year) {
    // Un año es bisiesto si es divisible por 4, a menos que también sea divisible por 100, en cuyo caso solo es bisiesto si también es divisible por 400. 
    let divisibleByFour = year % 4 === 0;
    let centuryYear = year % 100 === 0;
    let divisibleByFourHundred = year % 400 === 0;
    return (divisibleByFour && !centuryYear || centuryYear && divisibleByFourHundred);
};

// Do not edit below this line
module.exports = leapYears;
