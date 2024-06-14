const repeatString = function(str, numTimes) {
    let result = "";
    for (let i = 0; i < numTimes; i++) {
        result += str;
    }
    return result;
};

repeatString('hey', 3)
// Do not edit below this line
module.exports = repeatString;
