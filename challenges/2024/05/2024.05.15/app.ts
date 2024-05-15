// Instructions:
// Your task, is to create N×N multiplication table, of size provided in parameter.

// Parameters: single integer

// Return: grid of multiples, in the form of an array of arrays

// Examples:
// multiplicationTable(3) =>
// 1 2 3
// 2 4 6
// 3 6 9

// actual return [[1,2,3],[2,4,6],[3,6,9]]

// Pseudocode:
export function multiplicationTable(size: number): number[][] {
  const tableArr: Array<Array<number>> = [];
  const row1: number[] = [];
  for (let i = 0; i < size; i++) {
    row1.push(i + 1);
  }
  tableArr.push(row1);
  for (let i = 1; i < row1.length; i++) {
    const newRow = row1.map((item) => {
      return item * (i + 1);
    });
    tableArr.push(newRow);
  }
  return tableArr;
}
