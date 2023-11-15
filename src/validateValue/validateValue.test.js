const validateValue = require('./validateValue');

//toBe() - expected result

//for solo test
test("Enter value", () => {
    expect(validateValue(50)).toBe(true);
})

//for many test value
describe('validateValue', ()=>{
    test("Enter value", () => {
        expect(validateValue(50)).toBe(true);
    })
    test("Enter value", () => {
        expect(validateValue(-1)).toBe(false);
    })
    test("Enter value", () => {
        expect(validateValue(101)).toBe(false);
    })
    test("Enter value area 0", () => {
        expect(validateValue(0)).toBe(true);
    })
    test("Enter value area 100", () => {
        expect(validateValue(100)).toBe(false);
    })
})