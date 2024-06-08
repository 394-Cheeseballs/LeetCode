/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let arrayOfChars = Array.from(s);
    let integerNumber = 0;
    let intDigit;
    for (let digit in arrayOfChars){
        intDigit = parseInt(digit);
        if (arrayOfChars[intDigit] == 'I'){
            if (arrayOfChars[intDigit+1] == 'V' || arrayOfChars[intDigit+1] == 'X'){
                integerNumber -= 1;
            } else {
                integerNumber += 1;
            }
        } else if (arrayOfChars[intDigit] == 'V'){
            integerNumber += 5;
        } else if (arrayOfChars[intDigit] == 'X'){
            if (arrayOfChars[intDigit+1] == 'L' || arrayOfChars[intDigit+1] == 'C'){
                integerNumber -= 10;
            } else {
                integerNumber += 10;
            }
        } else if (arrayOfChars[intDigit] == 'L'){
            integerNumber += 50;
        } else if (arrayOfChars[intDigit] == 'C'){
            if (arrayOfChars[intDigit+1] == 'D' || arrayOfChars[intDigit+1] == 'M'){
                integerNumber -= 100;
            } else {
                integerNumber += 100;
            }
        } else if (arrayOfChars[intDigit] == 'D'){
            integerNumber += 500;
        } else {
            integerNumber += 1000;
        }
    }
    return(integerNumber)
};