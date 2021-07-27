const stringCalculator = (input) => {
    const comma_OR_newLine = /,|\n/;
    if(input === "") {
        return 0;
    }
    if(input.search(comma_OR_newLine) === -1) {
        return parseInt(input);
    }
    const input_array = input.split(comma_OR_newLine);
    return input_array.reduce((acc, cv) => parseInt(acc) + parseInt(cv))
}

module.exports = stringCalculator