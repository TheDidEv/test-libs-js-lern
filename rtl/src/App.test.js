import { render, screen } from '@testing-library/react';
import App from './App';


describe('TESTAPP', () => {
  test('renders learn react link', () => {
    render(<App />);
    const hellowWorldElem = screen.getByText(/Hello world/i);// //...//i - регулярний вираз який означає що ми ігноруємо регістр(<h1>, <div>, ...)
    expect(hellowWorldElem).toBeInTheDocument();//toBeInTheDocument - перевіряє чи з'явилось в dom дереві

    const bttnElem = screen.getByRole('button');//getByRole - перевіряє чи є такий елемент
    expect(bttnElem).toMatchSnapshot();//toMatchSnapshot - робить snapshot

    // const inputElem = screen.getByPlaceholderText(/input value/i);
    // expect(inputElem) = screen.toBeInTheDocument();

    // screen.debug();//повертає розмітку
  });

  test('renders learn react link2', async () => {
    render(<App />);
    //findBy/all - знаходить елемент. Повертає обєкт завернутий в Promise. Використовується для роботи з асинхроним кодом.
    //getBy/all - обовязково повинен знайти який елемент, якщо елемен не знаходиться видється помилка і тест падає. Повертає обєкт
    //qyeryBy/all - ми можемо переконатися що якогось елементу немає.

    // const hellowWorldElem = screen.queryByText(/Helo/i);
    // expect(hellowWorldElem).toBeNull();//якщо значення тесту повертає null то тест пройдено.

    //screen.debug();
    const hellowWorldElem = await screen.findByText(/data/i);//працює з asinc await
    expect(hellowWorldElem).toBeInTheDocument();
    expect(hellowWorldElem).toHaveStyle({ color: 'red' });
    //screen.debug();
  });
});

