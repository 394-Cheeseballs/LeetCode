/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let stringX = x.toString();
    let splitX = stringX.split("");
    let reversedSplitX = splitX.reverse();
    let reversedX = reversedSplitX.join("");
    return stringX == reversedX ?  true :  false;
};