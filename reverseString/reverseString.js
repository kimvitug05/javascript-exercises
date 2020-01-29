const reverseString = function(userInput) {
    var reversedString = "";
    for (i = userInput.length - 1; i >= 0; i--) {
        inputArray = userInput.split("");
        reversedString += inputArray[i];
    }
    return reversedString;
}

module.exports = reverseString
