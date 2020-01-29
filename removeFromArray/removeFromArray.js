const removeFromArray = function(inputArray, ...args) {
    let itemsToRemove = Array.from(args);
    for (i = 0; i < inputArray.length; i++) {
        if (itemsToRemove.includes(inputArray[i])) {
            inputArray.splice(i--, 1); // if splice, decrement to check same index again
        }
    }
    return inputArray;
}

module.exports = removeFromArray
