function CheckNumberType(number) {
    let result = "";

    if (number > 0) {
        result = "The number is positive";
    } else if (number < 0) {
        result = "The number is negative";
    } else {
        result = "The number is zero";
    }

    return result;
}

let numb = -5;
console.log(CheckNumberType(numb));