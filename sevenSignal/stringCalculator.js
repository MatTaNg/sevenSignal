const stringCalculator = (input) => {
    if(input === "") {
        return 0;
    }
    if(input.search(/,|\n/) === -1) {
        return parseInt(input);
    }
    const input_array = input.split(/,|\n/);
    return input_array.reduce((acc, cv) => parseInt(acc) + parseInt(cv))
}

module.exports = stringCalculator