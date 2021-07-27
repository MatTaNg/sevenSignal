const stringCalculator = (input) => {
    if(parseInt(input) < 0) {
        throw new Error(`negatives not allowed ${input}`);
    }
    const hasDelimiter = input[0] === "/" && input[1] === "/";
    const delimiter = !hasDelimiter ? '' : `|${input.substring(2, input.indexOf("\n"))}`;
    const inputWithoutDelimiter = !hasDelimiter ? input : input.substring(input.indexOf('\n'))
    const comma_newLine_delimiter = new RegExp(`,|\n${delimiter}`, "g");
    const doesContainOneletter = input.search(comma_newLine_delimiter) === -1;
    if(inputWithoutDelimiter === "") {
        return 0;
    }
    if(doesContainOneletter) {
        return parseInt(input);
    }
    const input_array = inputWithoutDelimiter.trim().split(comma_newLine_delimiter);
    return input_array.reduce((acc, cv) => {
        if(parseInt(cv) > 1000) {
            return parseInt(acc);
        }
        return parseInt(acc) + parseInt(cv)}
    )
}

module.exports = stringCalculator