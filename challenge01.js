/*
==================== CHALLENGE 01 ==================================
Date: 11.10.2021

Instructions:
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.


Examples

    " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
    "    Hello     World   "                  =>  "#HelloWorld"
    ""                                        =>  false

*/


// ================ MY SOLUTION================================//
// The length of an empty string with spaces still count. Example: "      " => str.length is 6
// .slice(1) take the word begining at the index 1. Example: "Hello.slice(1)" => "ello"

function generateHashtag (str) {
    if(!str.trim()) return false; // Trim will delete the starting and ending spaces
    str = str.trim().replace(/\s+/g, " ");  // This will delete the spaces in the middle
    let result = '#'+str.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join("");
    if(result.length > 140) return false;
    else return result;
}

// ======================= CLEVER SOLUTION =======================//
