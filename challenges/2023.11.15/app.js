// Instructions:
// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// Parameters: number (kilometers per hour)

// Return: number (centimeteer per second)

// Examples:
// 1.08 --> 30

// Pseudocode:
function cockroachSpeed(kph) {
  let cps = kph * 27.777778;
  return Math.floor(cps);
}
