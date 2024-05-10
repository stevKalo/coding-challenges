// Instructions:
// You will be given a number and you will need to return it as a string in Expanded Form.

// Parameters: integer

// Return: expanded notation of integer (string)

// Examples:
// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// Pseudocode:
// make array of number entries
// map over array
// for each item
// get array length
// push item + '0*number of items behind it in array
const expandedForm = (num) => {
  const arr = num.toString().split('');
  return arr.reduce((answer, item, index) => {
    if (item === '0') {
      return answer;
    }
    if (index > 0) {
      answer += ' + ';
    }
    const zeroCount = arr.length - 1 - index;
    let zeroString = '';
    if (zeroCount > 0) {
      zeroString = '0'.repeat(zeroCount);
    }
    answer += item + zeroString;
    return answer;
  }, '');
};

console.log(expandedForm(9000));
