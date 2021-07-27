const stringCalculator = require('./stringCalculator')

describe('String Calculator', () => {
    it('should return 0 for an empty string', () => {
        expect(stringCalculator("")).toEqual(0);
    })
    it('should add one number', () => {
        expect(stringCalculator("1")).toEqual(1);
    })
})