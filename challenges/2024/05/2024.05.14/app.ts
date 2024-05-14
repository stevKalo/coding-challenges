// Instructions:
// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// Parameters: number of floors as integer

// Return: Array with a floors

// Examples:
// towerBuilder(3) =
// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]

// Pseudocode:
// make largest floor, push to Array
// duplicate largest floor and change index number of asteriks on either end to ' '
export const towerBuilder = (nFloors: number): string[] => {
  const arr: Array<string> = [];
  const firstFloor: string = '*'.repeat(nFloors + (nFloors - 1));
  arr.push(firstFloor);
  if (nFloors === 1) {
    return arr;
  }
  for (let i = 1; i < nFloors; i++) {
    const newFloor: string =
      ' '.repeat(i) + firstFloor.slice(i, -i) + ' '.repeat(i);
    arr.push(newFloor);
  }
  return arr.reverse();
};
