const stringCalculator = (input) => {
    if(input === "") {
        return 0;
    }
    if(!input.includes(',')) {
        return parseInt(input);
    }
    const input_array = input.split(',');
    return input_array.reduce((acc, cv) => parseInt(acc) + parseInt(cv))
}

module.exports = stringCalculator