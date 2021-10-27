/*
==================== CHALLENGE 05 ==================================
Date: 27.10.2021

Instructions:
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

    apples, pears # and bananas
    grapes
    bananas !apples

The output expected would be:

    apples, pears
    grapes
    bananas


The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"
*/

// ================ MY SOLUTION================================//
// The slice() method will take a part of an array, but will not modify that array
// splice() method will take a part of an array an modify the original array
function solution(input, markers) {
    let arrInput = input.split('\n');
    let result = [];
    for(let i=0; i < arrInput.length; i++) {
      let substring = arrInput[i].split('');
      let currentMarker = null;

      markers.forEach(marker => {
        if(substring.includes(marker)) {
          currentMarker = marker;
        }
      })

      let markerIndex = substring.indexOf(currentMarker) > 0 ? substring.indexOf(currentMarker) : substring.length;
      substring.splice(markerIndex)
      result.push(substring.join('').trim());
    }
    return result.join('\n');
};


// ================ CLEVER SOLUTION ================================//
function solution(input, markers) {
    return input.split('\n').map(
        line => markers.reduce(
        (line, marker) => line.split(marker)[0].trim(), line
        )
    ).join('\n')
}