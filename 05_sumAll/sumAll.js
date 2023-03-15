const sumAll = function(num1, num2) {
    const numsmall = 0;
    const numhigh = 0;
    let result = 0;
    if (num1 < 0 || num2 < 0 || isNaN(num1) || isNaN(num2) ||
        typeof(num1) === "string" || typeof(num2) === "string") {
        return "ERROR";
    }
    // if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";

    if (num1 > num2) {
        numsmall = num2
        numhigh = num1
    } else {
        numsmall = num1
        numhigh = num2
    };
    
    for (let i = numsmall; i <= numhigh; i++) {
        result += i;
    };
    return result;
};
// Do not edit below this line
module.exports = sumAll;
