const sumAll = function(num1, num2) {
    let finalResult = 0;
    if (Number.isInteger(num1) && Number.isInteger(num2) &&
    num1 > 0 && num2 > 0) {

        let x = Math.max(num1, num2)
        let y = Math.min(num1, num2)

        for (let i = y; i <= x; i++) {
            finalResult += i
        }
    } else {
        return 'ERROR'
    }

    return finalResult
};

// Do not edit below this line
module.exports = sumAll;
