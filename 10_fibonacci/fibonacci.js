const fibonacci = function(num) {
    if (num <= 0) return 'OOPS'
    let fibSequence = [1]
    let previousValue = 0
    while (fibSequence.length < num) {
        fibSequence.push(previousValue + fibSequence[fibSequence.length - 1])
        previousValue = fibSequence[fibSequence.length - 2]
    }
    
    return fibSequence[num-1]
};

// Do not edit below this line
module.exports = fibonacci;
