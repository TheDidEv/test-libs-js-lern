import { render, screen } from '@testing-library/react';
import App from './App';

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
