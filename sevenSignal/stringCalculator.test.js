const stringCalculator = require('./stringCalculator')

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(stringCalculator("")).toEqual(0);
    })
    it('should add one number', () => {
        expect(stringCalculator("1")).toEqual(1);
    })
    it('should add two numbers', () => {
        expect(stringCalculator("1, 2")).toEqual(3);
    })
    it('should add five numbers', () => {
        expect(stringCalculator("1, 2, 3, 4, 5")).toEqual(15);
    })
    it('should handle new lines', () => {
        expect(stringCalculator("1\n2\n3\n4\n5")).toEqual(15);
    })
    it('should handle new lines and commas', () => {
        expect(stringCalculator("1\n2, 3\n4, 5")).toEqual(15);
    })
    it('should handle a custom delimiter', () => {
        expect(stringCalculator("//;\n1;2")).toEqual(3);
    })
    it('should throw an exception for negative numbers', () => {
        expect(() => stringCalculator("-1")).toThrow('negatives not allowed -1');
    })
})