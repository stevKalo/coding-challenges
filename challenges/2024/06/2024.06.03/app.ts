// Instructions:
// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Parameters:
// array of string (directions)

// Return:
// boolean - true if array.length == 10 and directions cancel out

// Examples:
// isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']) => true,

// Pseudocode:
export function isValidWalk(walk: string[]) {
  if (walk.length !== 10) {
    return false;
  }
  let nsValue = 0;
  let ewValue = 0;
  walk.forEach((item: string) => {
    switch (item as 'n' | 's' | 'e' | 'w') {
      case 'n':
        nsValue++;
        break;
      case 's':
        nsValue--;
        break;
      case 'e':
        ewValue++;
        break;
      case 'w':
        ewValue--;
        break;
    }
  });
  return nsValue === 0 && ewValue === 0;
}
