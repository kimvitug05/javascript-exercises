const repeatString = function(userInput, numberRepeat) {
    var newString = "";
    if (numberRepeat > 0) {
        for (i = 0; i < numberRepeat; i++) {
            newString += userInput;
        }
        return newString;
    } else if (numberRepeat < 0) {
        return 'ERROR';
    } return newString;
}

module.exports = repeatString
