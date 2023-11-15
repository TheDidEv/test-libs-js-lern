const validateArr = require('./mapArrToString');

//щоб перевірити який результут поверне функція
//використовуємо toEqual
//це томущо js перевіряє посилання(область в пам'яті зі значенням), а не значення яке попернулося

describe("mappArrToString", () => {
    test("Enter valind value", () => {
        expect(validateArr([1, 2, 3, 4])).toEqual(['1', '2', '3', '4']);
    })
    test("Check null, undef", () => {
        expect(validateArr([1, 2, 3, 4, null, undefined])).toEqual(['1', '2', '3', '4']);
    })
    test("check letter", () => {
        expect(validateArr([1, 2, 3, 4, "a", "b", 5, null, undefined])).toEqual(['1', '2', '3', '4', '5']);
    })
    test("check only letter", () => {
        expect(validateArr(['a', 'b', 'c', 'd', null])).toEqual(['1', '2', '3', '4', null]);
    })
})