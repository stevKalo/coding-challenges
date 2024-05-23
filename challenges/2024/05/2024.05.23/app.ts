// Instructions:
// Sort a sequence of numbers by "weight" (sum of their integers) and return it in string form
// Numbers with the same "weight" are sorted alphabetically (ie: 180 45 90)

// Parameters:
// string of weight values

// Return:
// sorted string of weight values

// Examples:
// "56 65 74 100 99 68 86 180 90"
// =>
// "100 180 90 56 65 74 68 86 99"

// Pseudocode:
export function orderWeight(strng: string): string {
  // weight class
  class Weight {
    name: string;
    weight: number;

    constructor(name: string, weight: number) {
      this.name = name;
      this.weight = weight;
    }
  }
  // split to array of obejcts
  const objArr = strng.split(' ').map((item) => {
    const weight = item.split('').reduce((total: number, curr: string) => {
      return (total += +curr);
    }, 0);
    return new Weight(item, weight);
  });
  // sort by weight
  const sorted = objArr.sort((a, b) => {
    if (a.weight === b.weight) {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    }
    return a.weight - b.weight;
  });
  return sorted.map((item) => item.name).join(' ');
}
