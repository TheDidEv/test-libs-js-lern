const validaSquare = require('./square');

describe("Square", () => {
    //щоб перед кожним з тестів проводити якую операцію 
    //використовуємо beforeEach
    // let mockValue;
    // beforeEach(() => {
    //     mockValue = Math.random();
    //     //ADD TO DB
    // })
    // //спрацює один рах перед всіма тестами
    // beforeAll(() => {

    // })


    test("Correct value", () => {
        // expect(validaSquare(2)).toBe(4);
        // expect(validaSquare(2)).toBeLessThan(5);
        // expect(validaSquare(2)).toBeGreaterThan(3);
        // expect(validaSquare(2)).not.toBeUndefined();
        const spyMathPowMock = jest.spyOn(Math, 'pow');
        validaSquare(2);
        //к-сть разів яку буде викликана mock функція toBeCalledTimes
        expect(spyMathPowMock).toBeCalledTimes(2);
    })

    //працює так же як і beforeEach та beforeAll, але виконується після тесту
    afterEach(() => {
        //DELETE FROM DB

        //після використання mock-ів їх потріно очищяти
        jest.clearAllMocks()
    })
    // afterAll(() => {

    // })




    // test("Correct value", () => {
    //     expect(validaSquare(2)).toBe(4);
    // })
    // //щоб дізнатися що число менше чим ми очікуємо
    // test("to find out than number is less than we expect", () => {
    //     expect(validaSquare(2)).toBeLessThan(5);
    // })
    // //щоб дізнатися що число більше чим ми очікуємо
    // test("to find out than number is greate than we expect", () => {
    //     expect(validaSquare(2)).toBeGreaterThan(3);
    // })
    // //not - зрозуміло що це, toBeUndefined - очікуємо що опверне undefile
    // test("to find out than number is greate than we expect", () => {
    //     expect(validaSquare(2)).not.toBeUndefined();
    // })
})