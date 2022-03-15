const removeFromArray = function(array, ...values) {
    for (let value of values) {
        position = array.indexOf(value)
        if (position < 0) continue
        array.splice(position, 1)
    }
    return array
};

// Do not edit below this line
module.exports = removeFromArray;
