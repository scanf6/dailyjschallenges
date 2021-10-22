/*
==================== CHALLENGE 02 ==================================
Date: 22.10.2021

Instructions:
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

Examples:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/


// ================ MY SOLUTION================================//
var moveZeros = function (arr) {
    let zeros = [];
    let zerosIndex = arr.forEach(val => {
      if(val === 0)  zeros.push(val);
    });

    return [...arr.filter(el => el !== 0), ...zeros];
}

// ================ CLEVER SOLUTION ================================//
var moveZerosClever = function (arr) {
    return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}