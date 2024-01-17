// Instructions:
// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Parameters: url as string

// Return: url without anchor and anything after

// Examples:
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

// Pseudocode:
function removeUrlAnchor(url) {
  if (url.includes('#')) {
    return url.slice(0, url.indexOf('#'));
  }
  return url;
}

const test1 = 'www.codewars.com#about';
const test2 = 'www.codewars.com?page=1';

console.log(removeUrlAnchor(test1));
console.log(removeUrlAnchor(test2));
