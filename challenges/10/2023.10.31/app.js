// Instructions:
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

// Parameters:
// array of strings

// Return:
// array of string where string.length == 4

// Examples:
// friend[("Ryan", "Kieran", "Mark")]`shouldBe`[("Ryan", "Mark")];

// Pseudocode:
function friend(friends) {
  // filter through arr
  // if friend.length == 4
  return friends.filter((item) => item.length == 4);
}

let people = ["Ryan", "Kieran", "Mark"];

console.log(friend(people));
