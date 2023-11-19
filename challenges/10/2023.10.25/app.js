// Param: You are given an array(list) strarr of strings and an integer k.

// Return: Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// // Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

// Pseudo:
function longestConsec(strarr, k) {
  if (k == 1) {
    // make a sorted array, find greatest length
    // return first item equal to greatest length
    let sorted = strarr.sort((a, b) => b.length - a.length);
    return strarr.find((item) => item.length == sorted[0].length);
  } else if (k <= 0 || k > strarr.length) {
    return "";
  } else {
    let arr = [];
    for (let i = 0; i < strarr.length - k + 1; i++) {
      arr.push(strarr.slice(i, i + k).join(""));
    }
    let numArr = arr.map((item) => item.length);
    let sort = numArr.sort((a, b) => b - a);
    return arr.find((item) => item.length == sort[0]);
  }
}
