// Instructions:
// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Parameters: 1 operator and 2 numbers

// Return: the result of both numbers operating against eachother

// Examples:
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

// Pseudocode:
function basicOp(operation, value1, value2)
{
    const operations = {
        '+': (a,b) => a + b,
        '-': (a,b)=> a-b,
        '*': (a,b)=> a*b,
        '/': (a,b)=> a/b
    }
    return operations[operation](value1, value2)
}
