const palindromes = function (string) {
    string = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,'')
    string = (string.replace(/ /g, '')).toLowerCase()
    stringA = (Array.from(string)).reverse()
    stringReverse = stringA.join('')
    if (string === stringReverse) return true
    return false
};

// Do not edit below this line
module.exports = palindromes;
