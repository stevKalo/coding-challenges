// Instructions:
// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?

// Parameters: current pop, percent over year increase, addition gains or losses, target pop

// Return: n years until pop == p

// Examples:
// At the end of the first year there will be:
// 1000 + 1000 * 0.02 + 50 => 1070 inhabitants

// Pseudocode:
function nbYear(p0, percent, aug, p) {
  let per = percent / 100;
  let currPop = p0;
  let index = 0;
  while (currPop < p) {
    currPop = Math.floor(currPop + currPop * per + aug);
    index++;
  }
  return index;
}
