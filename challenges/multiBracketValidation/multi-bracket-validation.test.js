const { expect } = require('@jest/globals');
const multiBracketValidation = require('./multi-bracket-validation');

describe('Multi Bracket Validation tests', () => {
    it('should check if the brackets are balanced and return true', () => {
        let input = '{}(){}';
        let input2 = '{}{Code}[Fellows](())';
        let input3 = '(){}[[]]';
        let input4 = '{hello}';
       expect(multiBracketValidation(input)).toBeTruthy;
       expect(multiBracketValidation(input4)).toBeTruthy;
       expect(multiBracketValidation(input2)).toBeTruthy;
       expect(multiBracketValidation(input3)).toBeTruthy;
   });
   it('should check if the brackets are not balanced and return false', () => {
    let input = '[({}]';
    let input2 = '(](';
    let input3 = '{(})';
    let input4 = '{';
   expect(multiBracketValidation(input)).toBeFalsy();
   expect(multiBracketValidation(input4)).toBeFalsy();
   expect(multiBracketValidation(input2)).toBeFalsy();
   expect(multiBracketValidation(input3)).toBeFalsy();
});
});