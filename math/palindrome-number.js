/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringX = x.toString();
    let splitX = stringX.split("");
    let reversedSplitX = splitX.reverse();
    console.log(reversedSplitX)
    let reversedX = reversedSplitX.join("");
    console.log(reversedX)
    return stringX == reversedX ?  true :  false;
};