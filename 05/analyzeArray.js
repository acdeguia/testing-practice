function analyzeArray(array) {
    const length = array.length;
    const sum = array.reduce((acc, val) => acc + val, 0);
    const average = length > 0 ? sum / length : NaN;
    const min = length > 0 ? Math.min(...array) : undefined;
    const max = length > 0 ? Math.max(...array) : undefined;
    return { average, min, max, length };
  }

module.exports = analyzeArray;