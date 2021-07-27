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
})