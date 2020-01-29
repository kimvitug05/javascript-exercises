const sumAll = function(startNum, endNum) {
    if (Number.isInteger(startNum) && startNum > 0 && Number.isInteger(endNum) && endNum > 0) { // Positive Integers Only
        let min = Math.min(startNum, endNum);
        let max = Math.max(startNum, endNum);
        let sum = (max * (max + 1) / 2) - ((min - 1) * min / 2); // Gauss Formula Sum of Arithmetic Series
        return sum;
    }
    return 'ERROR';
}

module.exports = sumAll
